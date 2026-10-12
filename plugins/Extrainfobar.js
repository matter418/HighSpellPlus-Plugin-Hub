// src/ExtraInfoBar.ts
import { Plugin, UIManager, UIManagerScope } from "@highlite/core";
var ExtraInfoBar = class extends Plugin {
  /**
   * Plugin setting to enable/disable inventory tooltips.
   */
  constructor() {
    super();
    this.pluginName = "Extra Info Bar";
    this.author = "Valsekamerplant";
    this.uiManager = new UIManager();
    this.infoBarUI = null;
    this.infoBarWrapper = null;
    this.infoBarStyle = null;
    this.isLoggedIn = false;
    this.restoreCycleStart = null;
    // ms timestamp of last restore packet
    this.restoreCycleLength = 6e4;
    this.combatSkillIds = [0, 1, 2, 3, 4, 15];
    this.currentAmmo = null;
    this.pendingBoosts = [];
    this.activeSkillBoosts = {};
    this.lastUsedPotion = null;
  }
  /**
   * Initializes the plugin (called once on load).
   */
  init() {
    this.log("Extra Info Bar initialised");
  }
  /**
   * Starts the plugin, adds styles and event listeners.
   */
  start() {
    this.removeBar();
    if (this.settings.enable.value && this.isLoggedIn && !this.infoBarUI) {
      this.createBar();
    }
  }
  /**
   * Stops the plugin, removes event listeners and tooltip.
   */
  stop() {
    this.removeBar();
  }
  // Logged In
  SocketManager_loggedIn(...args) {
    this.isLoggedIn = true;
    if (!this.settings.enable.value) {
      return;
    }
    this.removeBar();
    this.createBar();
  }
  // Logged Out
  SocketManager_handleLoggedOut() {
    this.isLoggedIn = false;
    this.removeBar();
  }
  SocketManager_handleForcedSkillCurrentLevelChangedPacket(...args) {
    const [skillId, newValue, wasSuccessful] = args[0];
    if (!wasSuccessful) return;
    this.pendingBoosts.push(args[0]);
    setTimeout(() => this.flushPendingBoosts(), 100);
  }
  applySkillBoost(skillId) {
    if (!this.lastUsedPotion || !this.lastUsedPotion.impactedSkills.includes(skillId))
      return;
    const player = this.gameHooks.EntityManager.Instance._mainPlayer;
    const skillObj = this.combatSkillIds.includes(skillId) ? player._combat._skills[skillId] : player._skills._skills[skillId];
    const boostAmount = Math.abs(skillObj._currentLevel - skillObj._level);
    if (boostAmount > 0 || skillId > 0) {
      let expiresAt;
      const existingBoost = this.activeSkillBoosts[skillId];
      const isNewItem = !existingBoost || existingBoost.itemId !== this.lastUsedPotion.itemId;
      if (this.restoreCycleStart !== null) {
        const now = Date.now();
        const msIntoCycle = (now - this.restoreCycleStart + this.restoreCycleLength) % this.restoreCycleLength;
        const msLeftThisCycle = this.restoreCycleLength - msIntoCycle;
        expiresAt = now + msLeftThisCycle + this.restoreCycleLength * (boostAmount - 1);
      } else {
        expiresAt = null;
      }
      this.activeSkillBoosts[skillId] = {
        expiresAt,
        itemId: this.lastUsedPotion.itemId,
        boostAmount: skillObj._currentLevel - skillObj._level,
        isNewItem
      };
    }
  }
  flushPendingBoosts() {
    while (this.pendingBoosts.length > 0) {
      const [skillId] = this.pendingBoosts.shift();
      this.applySkillBoost(skillId);
    }
  }
  async SocketManager_handleInvokedInventoryItemActionPacket(...args) {
    if (!args[0][6] || args[0][0] == 19) return;
    const itemId = args[0][3];
    const item = this.gameHooks.ItemDefinitionManager.getDefById(itemId);
    if (item._edibleEffects) {
      const impactedSkills = item._edibleEffects.map(
        (skill) => skill._skill
      );
      this.lastUsedPotion = { itemId, impactedSkills };
    } else {
      this.lastUsedPotion = null;
    }
  }
  async SocketManager_handleRestoredStatsPacket(...args) {
    this.restoreCycleStart = Date.now();
    for (const skillId in this.activeSkillBoosts) {
      const boost = this.activeSkillBoosts[skillId];
      if (boost.boostAmount > 0) {
        boost.boostAmount -= 1;
      } else if (boost.boostAmount < 0) {
        boost.boostAmount += 1;
      }
      if (boost.expiresAt === null) {
        const boostAmount = Math.abs(boost.boostAmount);
        const now = Date.now();
        const msIntoCycle = (now - this.restoreCycleStart + this.restoreCycleLength) % this.restoreCycleLength;
        const msLeftThisCycle = this.restoreCycleLength - msIntoCycle;
        boost.expiresAt = now + msLeftThisCycle + this.restoreCycleLength * (boostAmount - 1);
      }
    }
  }
  GameLoop_update(...args) {
    if (this.infoBarUI && this.settings.enable.value) {
      const player = this.gameHooks.EntityManager.Instance._mainPlayer;
      const ammoSlot = player._loadout._items[9];
      if (player && ammoSlot) {
        const changeIcon = this.currentAmmo == ammoSlot._id;
        this.currentAmmo = ammoSlot._id;
        this.drawIcon(
          this.currentAmmo,
          ammoSlot._amount,
          `ammoslot-9`,
          null,
          changeIcon
        );
      } else {
        const iconElement = document.getElementById(`eib-item-ammoslot-9`);
        if (iconElement) {
          this.removeIcon(iconElement);
        }
      }
      const now = Date.now();
      for (const skillId in this.activeSkillBoosts) {
        const boost = this.activeSkillBoosts[skillId];
        let secondsLeft;
        if (this.restoreCycleStart === null) {
          secondsLeft = "?";
          this.drawIcon(
            boost.itemId,
            boost.boostAmount,
            `boost-timer-${skillId}`,
            secondsLeft
          );
          continue;
        }
        const msRemaining = boost.expiresAt - now;
        if (msRemaining > 0) {
          secondsLeft = Math.max(0, Math.ceil(msRemaining / 1e3));
          this.drawIcon(
            boost.itemId,
            boost.boostAmount,
            `boost-timer-${skillId}`,
            `${secondsLeft}`,
            boost.isNewItem
          );
        } else {
          const iconElement = document.getElementById(
            `eib-item-boost-timer-${skillId}`
          );
          if (iconElement) {
            this.removeIcon(iconElement);
          }
          delete this.activeSkillBoosts[skillId];
        }
      }
    }
  }
  createBar() {
    if (this.infoBarUI) {
      this.removeBar();
    }
    this.infoBarUI = this.uiManager.createElement(
      UIManagerScope.ClientInternal
    );
    if (!this.infoBarUI) {
      this.settings.enable.value = false;
      return;
    }
    this.infoBarWrapper = document.createElement("div");
    this.infoBarWrapper.className = "eib-wrapper";
    this.infoBarUI?.appendChild(this.infoBarWrapper);
    this.addPluginStyle();
  }
  /**
   * Removes the tooltip and mousemove event listener.
   */
  removeBar() {
    if (this.infoBarUI) {
      this.infoBarUI.remove();
      this.infoBarUI = null;
    }
  }
  drawIcon(itemId, value, iconId, timerValue = null, changeIcon = false) {
    const existingIcon = document.getElementById(`eib-item-${iconId}`);
    if (!existingIcon) {
      const iconWrapper = document.createElement("div");
      iconWrapper.className = "eib-item";
      iconWrapper.id = `eib-item-${iconId}`;
      const spriteDiv = document.createElement("div");
      spriteDiv.className = "eib-item-sprite";
      try {
        const pos = this.gameHooks.InventoryItemSpriteManager.getCSSBackgroundPositionForItem(
          itemId
        );
        if (pos) {
          spriteDiv.style.backgroundPosition = pos;
        }
      } catch (error) {
        console.warn(
          `Error getting item sprite for ID ${itemId}:`,
          error
        );
      }
      iconWrapper.appendChild(spriteDiv);
      const timerDiv = document.createElement("div");
      timerDiv.className = "eib-timer-value";
      iconWrapper.appendChild(timerDiv);
      if (!this.infoBarWrapper) {
        return;
      }
      this.infoBarWrapper.appendChild(iconWrapper);
      iconWrapper.querySelector(".eib-item-sprite").innerHTML = value;
      iconWrapper.querySelector(".eib-timer-value").innerHTML = timerValue ?? "";
    } else {
      if (changeIcon) {
        try {
          const pos = this.gameHooks.InventoryItemSpriteManager.getCSSBackgroundPositionForItem(
            itemId
          );
          if (pos) {
            existingIcon.querySelector(
              ".eib-item-sprite"
            ).style.backgroundPosition = pos;
          }
        } catch (error) {
          console.warn(
            `Error getting item sprite for ID ${itemId}:`,
            error
          );
        }
      }
      existingIcon.querySelector(".eib-item-sprite").innerHTML = value;
      existingIcon.querySelector(".eib-timer-value").innerHTML = timerValue ?? "";
    }
  }
  removeIcon(iconElement) {
    if (iconElement) {
      iconElement.remove();
    }
  }
  /**
   * Injects the plugin's tooltip CSS styles into the document head.
   */
  addPluginStyle() {
    this.infoBarStyle = document.createElement("style");
    this.infoBarStyle.setAttribute("data-item-panel", "true");
    this.infoBarStyle.textContent = `
            .eib-wrapper {
                position: absolute;
                pointerEvents = 'none';
                top: 6px;
                display: flex;
                right: 480px;
            }
            .eib-item {
                position: relative;
                height: var(--hs-inventory-item-size);
                width: var(--hs-inventory-item-size);
                border-radius: 4px;
                margin-right: 5px;
                line-height: 5rem;
                text-align: right;
                background-color: rgba(0, 0, 0, 0.5);
            }

            .eib-item-sprite {
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: var(--hs-url-inventory-items-width) var(--hs-url-inventory-items-height);
                background-image: var(--hs-url-inventory-items);
                height: var(--hs-inventory-item-size);
                width: var(--hs-inventory-item-size);
                border: 1px solid #555;
                border-radius: 4px;
                flex-shrink: 0;
            }
            .eib-timer-value {
                position:absolute;
                line-height: 1rem;
                left:0;
                width:100%;
                text-align:center;
                font-size:0.8em !important;
                color:#FFD700;
                top: 100%;
            }
        `;
    this.infoBarUI?.appendChild(this.infoBarStyle);
  }
  formatSeconds(secs) {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  }
};
var ExtraInfoBar_default = ExtraInfoBar;
export {
  ExtraInfoBar,
  ExtraInfoBar_default as default
};
