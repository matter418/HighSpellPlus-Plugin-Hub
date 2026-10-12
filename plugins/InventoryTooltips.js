// src/InventoryTooltips.ts
import { Plugin, SettingsTypes, UIManager, UIManagerScope } from "@highlite/core";
var InventoryTooltips = class extends Plugin {
  /**
   * Plugin setting to enable/disable inventory tooltips.
   */
  constructor() {
    super();
    this.pluginName = "Inventory Tooltips";
    this.author = "Valsekamerplant";
    this.uiManager = new UIManager();
    this.tooltipUI = null;
    this.tooltip = null;
    this.tooltipStyle = null;
    /**
     * Handler for mousemove events to update tooltip position to follow the mouse.
     */
    this.mouseMoveHandler = null;
    /**
     * Mouse enter handler for inventory slots. Shows tooltip for hovered item.
     * @param event MouseEvent
     */
    this.onMouseOver = (event) => {
      const target = event.target;
      if (!target || typeof target.closest !== "function") return;
      const selectors = [];
      if (this.settings.enable.value)
        selectors.push(".hs-item-table--inventory .hs-item-table__cell");
      if (this.settings.enable.value && this.settings.bankTooltips.value)
        selectors.push(".hs-item-table--bank .hs-item-table__cell");
      if (this.settings.enable.value && this.settings.shopTooltips.value)
        selectors.push(".hs-item-table--shop .hs-item-table__cell");
      if (selectors.length === 0) return;
      const selector = selectors.join(", ");
      const itemEl = target.closest(selector);
      if (!itemEl) return;
      const slotIdStr = itemEl.getAttribute("data-slot");
      if (!slotIdStr) return;
      const slotId = parseInt(slotIdStr, 10);
      let item;
      if (itemEl.closest(".hs-item-table--inventory")) {
        const inventoryItems = this.gameHooks.EntityManager.Instance.MainPlayer.Inventory.Items;
        item = inventoryItems[slotId];
      } else if (itemEl.closest(".hs-item-table--bank")) {
        const bankItems = this.gameHooks.EntityManager.Instance.MainPlayer._bankItems._items;
        item = bankItems[slotId];
      } else if (itemEl.closest(".hs-item-table--shop")) {
        const shopItems = this.gameHooks.EntityManager.Instance.MainPlayer._currentState._shopItems._items;
        item = shopItems[slotId];
      }
      if (!item) return;
      this.showTooltip(event, item._def);
    };
    /**
     * Mouse leave handler for inventory slots. Removes tooltip.
     * @param event MouseEvent
     */
    this.onMouseOut = (event) => {
      this.removeTooltip();
    };
    this.settings.bankTooltips = {
      text: "Enable Bank Tooltips",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
        if (this.settings.enable.value) {
          this.start();
        }
      }
    };
    this.settings.shopTooltips = {
      text: "Enable Shop Tooltips",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
        if (this.settings.enable.value) {
          this.start();
        }
      }
    };
    this.settings.colorPositive = {
      text: "Positive Bonus Color",
      type: SettingsTypes.color,
      value: "#7fff7f",
      callback: () => {
        if (this.settings.enable.value) {
          this.addPluginStyle();
        }
      }
    };
    this.settings.colorNegative = {
      text: "Negative Bonus Color",
      type: SettingsTypes.color,
      value: "#ff7f7f",
      callback: () => {
        if (this.settings.enable.value) {
          this.addPluginStyle();
        }
      }
    };
    this.settings.colorOverheal = {
      text: "Overheal Color",
      type: SettingsTypes.color,
      value: "#ffe97f",
      callback: () => {
        if (this.settings.enable.value) {
          this.addPluginStyle();
        }
      }
    };
    this.settings.tooltipBgOpacity = {
      text: "Tooltip Background Opacity",
      type: SettingsTypes.range,
      value: 98,
      callback: () => {
        if (this.settings.enable.value) {
          this.addPluginStyle();
        }
      },
      validation: (value) => {
        return value >= 0 && value <= 100;
      }
    };
  }
  /**
   * Initializes the plugin (called once on load).
   */
  init() {
    this.log("InventoryTooltip initialised");
  }
  /**
   * Starts the plugin, adds styles and event listeners.
   */
  start() {
    this.addPluginStyle();
    this.bonusArray = this.gameLookups["Skills"];
    document.addEventListener("mouseenter", this.onMouseOver, true);
    document.addEventListener("mouseout", this.onMouseOut, true);
  }
  /**
   * Stops the plugin, removes event listeners and tooltip.
   */
  stop() {
    document.removeEventListener("mouseenter", this.onMouseOver, true);
    document.removeEventListener("mouseout", this.onMouseOut, true);
    this.removeTooltip();
  }
  /**
   * Creates and displays the tooltip for the hovered inventory item.
   * Tooltip follows the mouse and adapts position to stay on screen.
   * @param event MouseEvent
   * @param itemDef Item definition object
   */
  showTooltip(event, itemDef) {
    this.removeTooltip();
    this.tooltipUI = this.uiManager.createElement(
      UIManagerScope.ClientInternal
    );
    this.addPluginStyle();
    const mainPlayer = this.gameHooks.EntityManager.Instance.MainPlayer;
    const bonuses = itemDef._equippableEffects || [];
    let bonusText = "";
    const mainPlayerEquip = mainPlayer._loadout._items || [];
    const equippedItem = mainPlayerEquip[itemDef._equipmentType];
    const equippedEffects = equippedItem?._def._equippableEffects || [];
    const hoveredSkills = new Set(
      bonuses.map((b) => b._skill)
    );
    if (bonuses.length > 0) {
      bonusText += `<div class="hs-ui-item-tooltip-section">`;
      for (const bonus of bonuses) {
        bonusText += `<div class="hs-ui-item-tooltip-effect"> \u2022 `;
        const equippedBonus = equippedEffects.find(
          (e) => e._skill === bonus._skill
        );
        let diff;
        if (equippedBonus) {
          diff = bonus._amount - equippedBonus._amount;
        } else {
          diff = bonus._amount;
        }
        bonusText += `<span class="hlt-tooltip-bonus ${diff > 0 ? "hlt-tooltip-positive" : diff < 0 ? "hlt-tooltip-negative" : ""}">${diff > 0 ? "+" : ""}${diff}</span> ${this.getSkillName(bonus._skill)}`;
        bonusText += `</div>`;
      }
      for (const equippedBonus of equippedEffects) {
        if (!hoveredSkills.has(equippedBonus._skill)) {
          bonusText += `<div class="hs-ui-item-tooltip-effect"> \u2022 `;
          const diff = -equippedBonus._amount;
          bonusText += `<span class="hlt-tooltip-bonus ${diff < 0 ? "hlt-tooltip-negative" : diff > 0 ? "hlt-tooltip-positive" : ""}">${diff > 0 ? "+" : ""}${diff}</span> ${this.getSkillName(equippedBonus._skill)}<br>`;
          bonusText += `</div>`;
        }
      }
      bonusText += `</div>`;
    }
    const consumableBonuses = itemDef._edibleEffects || [];
    let edibleText = "";
    if (consumableBonuses.length > 0) {
      const currentHp = mainPlayer._hitpoints?._currentLevel ?? 0;
      const maxHp = mainPlayer._hitpoints?._level ?? 0;
      bonusText += `<div class="hs-ui-item-tooltip-section">`;
      const allSkills = [];
      if (mainPlayer._combat?._skills) {
        for (let i = 0; i < mainPlayer._combat._skills.length; i++) {
          allSkills[i] = mainPlayer._combat._skills[i];
        }
      }
      if (mainPlayer._skills?._skills) {
        for (let i = 0; i < mainPlayer._skills._skills.length; i++) {
          if (mainPlayer._skills._skills[i]) {
            allSkills[i] = mainPlayer._skills._skills[i];
          }
        }
      }
      for (const bonus of consumableBonuses) {
        let value = bonus._effect._amount;
        let valueDisplay = value;
        let colorClass = "";
        let isPercent = false;
        if (typeof value === "number" && !Number.isInteger(value)) {
          isPercent = true;
          let skillValue = 0;
          if (bonus._effect._skill === 0) {
            skillValue = currentHp;
          } else {
            const skillObj = allSkills[bonus._effect._skill];
            skillValue = skillObj?._level ?? 1;
          }
          valueDisplay = Math.round(skillValue * value);
        }
        if (value < 0) {
          colorClass = "hlt-tooltip-negative";
        } else if (bonus._skill === 0 && currentHp + value > maxHp) {
          colorClass = "hlt-tooltip-edible-heal-over";
        } else {
          colorClass = "hlt-tooltip-edible-heal-normal";
        }
        bonusText += `<div class="hs-ui-item-tooltip-effect"> \u2022 
                <span class="hlt-tooltip-bonus ${colorClass}">${value < 0 ? "-" : "+"}${isPercent ? Math.max(valueDisplay, 1) : value}${isPercent ? " (" + Math.round(value * 100) + "%)" : ""}</span> ${this.getSkillName(bonus._effect._skill)}</div>`;
      }
      bonusText += `</div>`;
    }
    this.tooltip = document.createElement("div");
    this.tooltip.className = "hs-ui-item-tooltip hlt-tooltip";
    this.tooltip.style.left = `${event.clientX + 10}px`;
    this.tooltip.style.top = `${event.clientY + 10}px`;
    this.tooltip.innerHTML = `
        <div class="hs-ui-item-tooltip-title"> <div class="hs-ui-item-tooltip-name">${itemDef._nameCapitalized}</div></div>
        ${bonusText}
        ${edibleText}
    `;
    this.tooltipUI?.appendChild(this.tooltip);
    this.updateTooltipPosition(event);
    this.mouseMoveHandler = (moveEvent) => {
      this.updateTooltipPosition(moveEvent);
    };
    document.addEventListener("mousemove", this.mouseMoveHandler);
  }
  /**
   * Removes the tooltip and mousemove event listener.
   */
  removeTooltip() {
    if (this.mouseMoveHandler) {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      this.mouseMoveHandler = null;
    }
    if (this.tooltipUI) {
      this.tooltipUI.remove();
      this.tooltipUI = null;
    }
  }
  /**
   * Returns the skill name for a given skill ID.
   * @param skillId Skill ID
   * @returns Skill name or fallback string
   */
  getSkillName(skillId) {
    return this.bonusArray[skillId] ?? `Skill ${skillId}`;
  }
  /**
   * Injects the plugin's tooltip CSS styles into the document head.
   */
  addPluginStyle() {
    if (this.tooltipStyle) {
      this.tooltipStyle.remove();
      this.tooltipStyle = null;
    }
    this.tooltipStyle = document.createElement("style");
    this.tooltipStyle.setAttribute("data-item-panel", "true");
    const colorPositive = this.settings.colorPositive?.value || "#7fff7f";
    const colorNegative = this.settings.colorNegative?.value || "#ff7f7f";
    const colorOverheal = this.settings.colorOverheal?.value || "#ffe97f";
    const bgOpacity = (Number(this.settings.tooltipBgOpacity?.value) ?? 97) / 100;
    this.tooltipStyle.textContent = `
          .hlt-tooltip {
            position: fixed;
            display: block;
            min-width: 100px;
            background: linear-gradient(145deg, rgba(42, 42, 42, ${bgOpacity}), rgba(26, 26, 26, ${bgOpacity}));
          }
          .hlt-tooltip-positive {
            color: ${colorPositive};
          }
          .hlt-tooltip-negative {
            color: ${colorNegative};
          }
          .hlt-tooltip-edible {
            color: ${colorOverheal};
            font-size: 13px;
            font-style: italic;
          }
          .hlt-tooltip-edible-heal-normal {
            color: ${colorPositive};
          }
          .hlt-tooltip-edible-heal-over {
            color: ${colorOverheal};
          }
        `;
    this.tooltipUI?.appendChild(this.tooltipStyle);
  }
  /**
   * Updates the tooltip position to follow the mouse and stay within the viewport.
   * @param event MouseEvent
   */
  updateTooltipPosition(event) {
    if (this.tooltip) {
      const tooltipRect = this.tooltip.getBoundingClientRect();
      const padding = 5;
      let left = event.clientX - tooltipRect.width + padding;
      let top = event.clientY + padding;
      let gameClient = document.getElementById("game-container").getBoundingClientRect();
      const viewportHeight = gameClient.height - 20;
      if (left < padding) {
        left = event.clientX + padding;
      }
      if (top + tooltipRect.height > viewportHeight) {
        top = event.clientY - tooltipRect.height - padding;
      }
      left = Math.max(left, padding);
      top = Math.max(top, padding);
      this.tooltip.style.left = `${left}px`;
      this.tooltip.style.top = `${top}px`;
    }
  }
};
var InventoryTooltips_default = InventoryTooltips;
export {
  InventoryTooltips,
  InventoryTooltips_default as default
};
