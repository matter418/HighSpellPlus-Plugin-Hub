// src/XPOrb.ts
import { Plugin, SettingsTypes } from "@highlite/core";
var XPOrb = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "XP Orb";
    this.author = "Highlite";
    this.xpOrbContainer = null;
    this.xpOrbElement = null;
    this.xpDropsContainer = null;
    this.xpOrbDisplay = null;
    this.totalXPDisplay = null;
    this.sessionXPDisplay = null;
    this.skillXPData = /* @__PURE__ */ new Map();
    this.activeXPDrops = [];
    this.isOrbOpen = true;
    this.totalXP = 0;
    this.sessionXP = 0;
    this.XP_DROP_DURATION = 3e3;
    // 3 seconds
    this.XP_DROP_FADE_START = 2e3;
    // Start fading after 2 seconds
    this.MAX_VISIBLE_DROPS = 5;
    this.settings.enable = {
      text: "Enable XP Orb",
      type: SettingsTypes.checkbox,
      value: false,
      // Default to false
      callback: () => this.toggleXPTracker()
    };
    this.settings.xpDrops = {
      text: "Show XP Drops",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showSessionXP = {
      text: "Show Session XP",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => this.updateSessionXPVisibility()
    };
    this.settings.showTotalXP = {
      text: "Show Total XP",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => this.updateTotalXPVisibility()
    };
    this.settings.resetSessionXP = {
      text: "Reset Session XP",
      type: SettingsTypes.button,
      value: "",
      callback: () => {
        this.resetSessionXP();
      }
    };
  }
  init() {
    this.log("Initializing XP Orb");
  }
  start() {
    this.log("Started XP Orb");
    this.loadTotalXP();
    this.loadSessionXPFromDatabase();
    this.setupXPTracking();
    this.createXPTrackerUI();
  }
  stop() {
    this.log("Stopped XP Orb");
    this.saveSessionXPToDatabase();
    this.cleanup();
  }
  GameLoop_update() {
    if (this.settings.enable.value) {
      this.updateXPDrops();
      this.checkForWastesIcon();
    }
  }
  checkForWastesIcon() {
    const wastesIcon = document.querySelector("#hs-wilderness-icon");
    if (wastesIcon && this.totalXPDisplay) {
      this.totalXPDisplay.style.right = "285px";
    } else if (this.totalXPDisplay) {
      this.totalXPDisplay.style.right = "250px";
    }
  }
  loadTotalXP() {
    const combatXP = this.gameHooks.EntityManager?.Instance?.MainPlayer?._combat?.TotalXP;
    const skillsXP = this.gameHooks.EntityManager?.Instance?.MainPlayer?._skills?.TotalXP;
    this.totalXP = combatXP + skillsXP;
    this.updateTotalXPDisplay();
  }
  createXPTrackerUI() {
    if (!this.settings.enable.value) return;
    this.cleanupUI();
    this.xpOrbContainer = document.createElement("div");
    this.xpOrbContainer.id = "highlite-xp-tracker";
    this.xpOrbContainer.style.position = "absolute";
    this.xpOrbContainer.style.top = "calc(var(--hs-compass-button-top) + var(--hs-action-menu-item-width) + 10px)";
    this.xpOrbContainer.style.right = "calc(var(--hs-compass-button-right) + 6px)";
    this.xpOrbContainer.style.zIndex = "9999";
    this.xpOrbContainer.style.fontFamily = "Inter, sans-serif";
    this.xpOrbContainer.style.fontSize = "12px";
    this.xpOrbContainer.style.fontWeight = "bold";
    this.xpOrbContainer.style.pointerEvents = "auto";
    this.xpOrbContainer.style.userSelect = "none";
    this.createXPOrb();
    this.createSessionXPDisplay();
    this.xpDropsContainer = document.createElement("div");
    this.xpDropsContainer.id = "highlite-xp-drops";
    this.xpDropsContainer.style.position = "absolute";
    this.xpDropsContainer.style.top = "0px";
    this.xpDropsContainer.style.left = "50%";
    this.xpDropsContainer.style.transform = "translateX(-100%)";
    this.xpDropsContainer.style.width = "120px";
    this.xpDropsContainer.style.pointerEvents = "none";
    this.xpDropsContainer.style.zIndex = "10000";
    this.xpOrbContainer.appendChild(this.xpDropsContainer);
    const gameScreen = document.getElementById("hs-screen-mask");
    if (gameScreen) {
      gameScreen.appendChild(this.xpOrbContainer);
      this.createTotalXPDisplay();
    }
  }
  createXPOrb() {
    if (!this.xpOrbContainer) return;
    this.xpOrbElement = document.createElement("div");
    this.xpOrbElement.style.width = `35px`;
    this.xpOrbElement.style.height = `35px`;
    this.xpOrbElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    this.xpOrbElement.style.border = "2px solid #ffd700";
    this.xpOrbElement.style.borderRadius = "50%";
    this.xpOrbElement.style.display = "flex";
    this.xpOrbElement.style.flexDirection = "column";
    this.xpOrbElement.style.justifyContent = "center";
    this.xpOrbElement.style.alignItems = "center";
    this.xpOrbElement.style.cursor = "pointer";
    this.xpOrbElement.style.transition = "all 0.3s ease";
    this.xpOrbElement.style.position = "relative";
    this.xpOrbElement.style.pointerEvents = "auto";
    this.xpOrbElement.style.userSelect = "none";
    this.xpOrbDisplay = document.createElement("div");
    this.xpOrbDisplay.style.color = "#ffd700";
    this.xpOrbDisplay.innerHTML = `<div>XP</div>`;
    this.xpOrbDisplay.style.display = "block";
    this.xpOrbDisplay.style.textAlign = "center";
    this.xpOrbDisplay.style.fontSize = "10px";
    this.xpOrbDisplay.style.lineHeight = "1.2";
    this.xpOrbDisplay.style.wordWrap = "break-word";
    this.xpOrbDisplay.style.maxWidth = "90%";
    document.highlite.managers.UIManager.bindOnClickBlockHsMask(
      this.xpOrbElement,
      () => {
        this.toggleOrb();
      }
    );
    this.xpOrbElement.addEventListener("mouseenter", () => {
      if (this.xpOrbElement) {
        this.xpOrbElement.style.transform = "scale(1.1)";
        this.xpOrbElement.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.5)";
      }
    });
    this.xpOrbElement.addEventListener("mouseleave", () => {
      if (this.xpOrbElement) {
        this.xpOrbElement.style.transform = "scale(1)";
        this.xpOrbElement.style.boxShadow = "none";
      }
    });
    this.xpOrbElement.appendChild(this.xpOrbDisplay);
    this.xpOrbContainer.appendChild(this.xpOrbElement);
  }
  createSessionXPDisplay() {
    if (!this.xpOrbContainer) return;
    this.sessionXPDisplay = document.createElement("div");
    this.sessionXPDisplay.id = "highlite-session-xp";
    this.sessionXPDisplay.style.position = "absolute";
    this.sessionXPDisplay.style.right = "100%";
    this.sessionXPDisplay.style.top = "50%";
    this.sessionXPDisplay.style.transform = "translateY(-50%)";
    this.sessionXPDisplay.style.marginRight = "10px";
    this.sessionXPDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    this.sessionXPDisplay.style.border = "2px solid #ffd700";
    this.sessionXPDisplay.style.borderRadius = "4px";
    this.sessionXPDisplay.style.padding = "4px 8px";
    this.sessionXPDisplay.style.fontFamily = "Inter, sans-serif";
    this.sessionXPDisplay.style.fontSize = "10px";
    this.sessionXPDisplay.style.fontWeight = "bold";
    this.sessionXPDisplay.style.color = "#ffd700";
    this.sessionXPDisplay.style.textAlign = "center";
    this.sessionXPDisplay.style.whiteSpace = "nowrap";
    this.sessionXPDisplay.style.pointerEvents = "none";
    this.sessionXPDisplay.style.zIndex = "10001";
    this.sessionXPDisplay.innerHTML = `
            <div style="font-size: 8px; opacity: 0.8;">Session</div>
            <div>${this.formatNumber(this.sessionXP)} XP</div>
        `;
    this.xpOrbContainer.appendChild(this.sessionXPDisplay);
    this.updateSessionXPVisibility();
  }
  createTotalXPDisplay() {
    if (!this.xpOrbContainer) return;
    const gameScreen = document.getElementById("hs-screen-mask");
    if (!gameScreen) return;
    this.totalXPDisplay = document.createElement("div");
    this.totalXPDisplay.id = "highlite-total-xp";
    this.totalXPDisplay.style.position = "absolute";
    this.totalXPDisplay.style.right = "250px";
    this.totalXPDisplay.style.top = "7px";
    this.totalXPDisplay.style.marginRight = "10px";
    this.totalXPDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    this.totalXPDisplay.style.border = "2px solid #ffd700";
    this.totalXPDisplay.style.borderRadius = "4px";
    this.totalXPDisplay.style.padding = "4px 8px";
    this.totalXPDisplay.style.fontFamily = "Inter, sans-serif";
    this.totalXPDisplay.style.fontSize = "10px";
    this.totalXPDisplay.style.fontWeight = "bold";
    this.totalXPDisplay.style.color = "#ffd700";
    this.totalXPDisplay.style.textAlign = "center";
    this.totalXPDisplay.style.whiteSpace = "nowrap";
    this.totalXPDisplay.style.pointerEvents = "none";
    this.totalXPDisplay.style.zIndex = "10001";
    this.totalXPDisplay.innerHTML = `
            <div style="font-size: 8px; opacity: 0.8;">Total</div>
            <div>${this.formatNumber(this.totalXP)} XP</div>
        `;
    gameScreen.appendChild(this.totalXPDisplay);
    this.updateTotalXPVisibility();
  }
  setupXPTracking() {
    try {
      const mainPlayer = this.gameHooks?.EntityManager?.Instance?.MainPlayer;
      if (!mainPlayer) {
        return;
      }
      this.skillXPData.clear();
      const skills = mainPlayer.Skills?._skills;
      if (skills) {
        for (let i = 0; i < skills.length; i++) {
          const skill = skills[i];
          if (skill && skill._skill !== void 0) {
            this.trackSkill(skill, this.getSkillName(skill._skill));
          }
        }
      }
      const combatSkills = mainPlayer.Combat?.Skills;
      if (combatSkills) {
        for (let i = 0; i < combatSkills.length; i++) {
          const skill = combatSkills[i];
          if (skill && skill._skill !== void 0) {
            this.trackSkill(skill, this.getSkillName(skill._skill));
          }
        }
      }
    } catch (error) {
    }
  }
  getSkillName(skillId) {
    return this.gameLookups.Skills[skillId];
  }
  trackSkill(skill, skillName) {
    const skillId = skill._skill;
    const currentXP = skill._xp || 0;
    this.skillXPData.set(skillId, {
      skillId,
      previousXP: currentXP,
      currentXP,
      skillName
    });
    try {
      if (skill.OnExpChangeListener && typeof skill.OnExpChangeListener.add === "function") {
        skill.OnExpChangeListener.add(
          (changedSkill, totalXp) => {
            this.onXPChange(skillId, totalXp, skillName);
          }
        );
      }
    } catch (error) {
    }
  }
  onXPChange(skillId, newTotalXP, skillName) {
    const skillData = this.skillXPData.get(skillId);
    if (!skillData) {
      this.skillXPData.set(skillId, {
        skillId,
        previousXP: 0,
        currentXP: newTotalXP,
        skillName
      });
      return;
    }
    const xpGained = newTotalXP - skillData.currentXP;
    if (xpGained <= 0) {
      return;
    }
    skillData.previousXP = skillData.currentXP;
    skillData.currentXP = newTotalXP;
    this.sessionXP += xpGained;
    this.totalXP += xpGained;
    this.updateSessionXPDisplay();
    this.updateTotalXPDisplay();
    this.saveSessionXPToDatabase();
    if (this.settings.xpDrops.value) {
      this.showXPDrop(skillId, xpGained, skillName);
    }
  }
  showXPDrop(skillId, xpGained, skillName) {
    if (!this.xpDropsContainer) {
      return;
    }
    if (!this.settings.enable.value) {
      return;
    }
    while (this.activeXPDrops.length >= this.MAX_VISIBLE_DROPS) {
      const oldestDrop = this.activeXPDrops.shift();
      if (oldestDrop) {
        oldestDrop.element.remove();
      }
    }
    const dropElement = document.createElement("div");
    dropElement.style.display = "flex";
    dropElement.style.alignItems = "center";
    dropElement.style.justifyContent = "center";
    dropElement.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    dropElement.style.border = "none";
    dropElement.style.borderRadius = "3px";
    dropElement.style.padding = "2px 6px";
    dropElement.style.marginBottom = "2px";
    dropElement.style.transition = "all 0.8s ease-out";
    dropElement.style.opacity = "0";
    dropElement.style.transform = "translateY(-20px) scale(0.8)";
    dropElement.style.width = "fit-content";
    dropElement.style.minWidth = "60px";
    const iconElement = document.createElement("div");
    iconElement.style.marginRight = "4px";
    iconElement.style.flexShrink = "0";
    iconElement.classList.add(
      "hs-icon-background",
      "hs-stat-menu-item__icon",
      `hs-stat-menu-item__icon--${skillName.toLowerCase()}`
    );
    const xpText = document.createElement("span");
    xpText.style.color = "#00ff00";
    xpText.style.fontSize = "10px";
    xpText.style.fontWeight = "bold";
    xpText.style.textShadow = "2px 2px 4px rgba(0,0,0,1), 0 0 6px rgba(0,0,0,0.8)";
    xpText.style.whiteSpace = "nowrap";
    xpText.textContent = `+${xpGained.toLocaleString()}`;
    dropElement.appendChild(iconElement);
    dropElement.appendChild(xpText);
    const dropIndex = this.activeXPDrops.length;
    dropElement.style.position = "absolute";
    dropElement.style.top = `${dropIndex * 25}px`;
    dropElement.style.left = "50%";
    dropElement.style.transform = "translateX(-50%) translateY(-20px) scale(0.8)";
    this.xpDropsContainer.appendChild(dropElement);
    setTimeout(() => {
      dropElement.style.opacity = "1";
      dropElement.style.transform = `translateX(-50%) translateY(${dropIndex * 25 + 40}px) scale(1)`;
    }, 50);
    const xpDrop = {
      skillId,
      xpGained,
      skillName,
      timestamp: Date.now(),
      element: dropElement
    };
    this.activeXPDrops.push(xpDrop);
  }
  updateXPDrops() {
    const now = Date.now();
    const dropsToRemove = [];
    this.activeXPDrops.forEach((drop, index) => {
      const age = now - drop.timestamp;
      if (age > this.XP_DROP_DURATION) {
        drop.element.remove();
        dropsToRemove.push(index);
      } else if (age > this.XP_DROP_FADE_START) {
        const fadeProgress = (age - this.XP_DROP_FADE_START) / (this.XP_DROP_DURATION - this.XP_DROP_FADE_START);
        const opacity = 1 - fadeProgress;
        const extraY = fadeProgress * 20;
        const scale = 1 - fadeProgress * 0.2;
        drop.element.style.opacity = Math.max(0, opacity).toString();
        drop.element.style.transform = `translateX(-50%) translateY(${index * 25 + 40 + extraY}px) scale(${scale})`;
      }
    });
    dropsToRemove.reverse().forEach((index) => {
      this.activeXPDrops.splice(index, 1);
    });
  }
  updateXPOrbDisplay() {
    if (!this.xpOrbDisplay) return;
    if (this.isOrbOpen) {
      this.xpOrbDisplay.innerHTML = `<div>XP</div>`;
      this.xpOrbDisplay.style.display = "block";
    } else {
      this.xpOrbDisplay.innerHTML = `<div>\u2022</div>`;
      this.xpOrbDisplay.style.display = "block";
    }
  }
  toggleOrb() {
    this.isOrbOpen = !this.isOrbOpen;
    if (this.xpOrbElement) {
      if (this.isOrbOpen) {
        this.xpOrbElement.style.width = `35px`;
        this.xpOrbElement.style.height = `35px`;
      } else {
        this.xpOrbElement.style.width = "20px";
        this.xpOrbElement.style.height = "20px";
      }
    }
    this.updateXPOrbDisplay();
    this.updateSessionXPVisibility();
  }
  toggleXPTracker() {
    if (this.settings.enable.value) {
      this.createXPTrackerUI();
      const mainPlayer = document.highlite?.gameHooks?.EntityManager?.Instance?.MainPlayer;
      if (mainPlayer) {
        this.setupXPTracking();
      }
    } else {
      this.cleanup();
    }
  }
  formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }
  updateSessionXPDisplay() {
    if (!this.sessionXPDisplay) return;
    this.sessionXPDisplay.innerHTML = `
            <div style="font-size: 8px; opacity: 0.8;">Session</div>
            <div>${this.formatNumber(this.sessionXP)} XP</div>
        `;
  }
  updateTotalXPDisplay() {
    if (!this.totalXPDisplay) return;
    this.totalXPDisplay.innerHTML = `
            <div style="font-size: 8px; opacity: 0.8;">Total</div>
            <div>${this.formatNumber(this.totalXP)} XP</div>
        `;
  }
  updateSessionXPVisibility() {
    if (!this.sessionXPDisplay) return;
    this.sessionXPDisplay.style.display = this.isOrbOpen && this.settings.showSessionXP.value ? "block" : "none";
  }
  updateTotalXPVisibility() {
    if (!this.totalXPDisplay) return;
    this.totalXPDisplay.style.display = this.isOrbOpen && this.settings.showTotalXP.value ? "block" : "none";
  }
  saveSessionXPToDatabase() {
    try {
      this.data.sessionXP = {
        xp: this.sessionXP,
        lastUpdated: Date.now()
      };
    } catch (error) {
      console.error("Error saving session XP to database:", error);
    }
  }
  loadSessionXPFromDatabase() {
    try {
      this.sessionXP = this.data.sessionXP.xp | 0;
      this.updateSessionXPDisplay();
    } catch (error) {
      console.error("Error loading session XP from database:", error);
    }
  }
  resetSessionXP() {
    try {
      this.sessionXP = 0;
      this.updateSessionXPDisplay();
      this.saveSessionXPToDatabase();
      this.log("Session XP reset to 0");
    } catch (error) {
      console.error("Error resetting session XP:", error);
    }
  }
  cleanupUI() {
    if (this.xpOrbContainer && this.xpOrbContainer.parentNode) {
      this.xpOrbContainer.parentNode.removeChild(this.xpOrbContainer);
    }
    if (this.totalXPDisplay) {
      this.totalXPDisplay.remove();
    }
    this.activeXPDrops.forEach((drop) => {
      if (drop.element && drop.element.parentNode) {
        drop.element.parentNode.removeChild(drop.element);
      }
    });
    this.xpOrbContainer = null;
    this.xpOrbElement = null;
    this.xpDropsContainer = null;
    this.totalXPDisplay = null;
    this.sessionXPDisplay = null;
    this.activeXPDrops = [];
    this.skillXPData.clear();
  }
  cleanup() {
    this.log("cleanup called - clearing all data");
    if (this.xpOrbContainer && this.xpOrbContainer.parentNode) {
      this.xpOrbContainer.parentNode.removeChild(this.xpOrbContainer);
    }
    if (this.totalXPDisplay) {
      this.totalXPDisplay.remove();
    }
    this.activeXPDrops.forEach((drop) => {
      if (drop.element && drop.element.parentNode) {
        drop.element.parentNode.removeChild(drop.element);
      }
    });
    this.xpOrbContainer = null;
    this.xpOrbElement = null;
    this.xpDropsContainer = null;
    this.xpOrbDisplay = null;
    this.totalXPDisplay = null;
    this.sessionXPDisplay = null;
    this.activeXPDrops = [];
    this.skillXPData.clear();
    this.totalXP = 0;
    this.sessionXP = 0;
  }
};
export {
  XPOrb as default
};
