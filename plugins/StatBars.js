// src/StatBarsPlugin.ts
import { Plugin, SettingsTypes } from "@highlite/plugin-api";

// src/styles.css
var styles_default = "#hs-stats-menu:has( .hl-stat-bars-progress-bar) .hs-stats-menu__information-panel {\n    padding: 0.25rem 0.5rem;\n}\n\n#hs-stats-menu .hl-stat-bars-progress-bar {\n    position: relative;\n    height: 3px;\n    margin-top: 2px;\n    border-radius: calc(1px * Infinity);\n    overflow: hidden;\n}\n\n#hs-stats-menu .hl-stat-bars-progress-bar > * {\n    position: absolute;\n    height: 100%;\n    border-radius: calc(1px * Infinity);\n}";

// src/StatBarsPlugin.ts
var containerId = "hs-stats-menu";
var styleId = "hl-stat-bars-style";
var barClassName = "hl-stat-bars-progress-bar";
var defaultBgColor = "#e7000b";
var defaultFgColor = "#5ea500";
var StatBarsPlugin = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Stat Bars";
    this.author = "SoggyPiggy";
    this.settings.enable = {
      text: "Enable Stat Bars",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => this.settings.enable.value ? this.start() : this.stop()
    };
    this.settings.bgColor = {
      text: "Background Color",
      type: SettingsTypes.color,
      value: defaultBgColor,
      callback: () => this.setStyles()
    };
    this.settings.fgColor = {
      text: "Foreground Color",
      type: SettingsTypes.color,
      value: defaultFgColor,
      callback: () => this.setStyles()
    };
    this.settings.restore = {
      text: "Restore Defaults",
      type: SettingsTypes.button,
      value: 0,
      callback: () => {
        this.settings.bgColor.value = defaultBgColor;
        this.settings.fgColor.value = defaultFgColor;
        this.setStyles();
        this.updateSettingsUI();
      }
    };
  }
  get isEnabled() {
    return this.settings.enable.value ?? false;
  }
  get bgColor() {
    const { value } = this.settings.bgColor;
    if (typeof value === "string") return value;
    return defaultBgColor;
  }
  get fgColor() {
    const { value } = this.settings.fgColor;
    if (typeof value === "string") return value;
    return defaultFgColor;
  }
  get statsMenuControl() {
    return this.gameHooks?.UIManager?.Manager?.getScreenMask()?.getGameMenuBarQuadrant()?.getMenuByType(this.gameLookups?.GameInterfaces?.Stats);
  }
  init() {
    this.log("Initialized");
  }
  start() {
    this.cleanup();
    if (this.isEnabled) {
      this.setup();
      this.log("Started");
    }
  }
  stop() {
    this.cleanup();
    this.log("Stopped");
  }
  ScreenMask_initializeControls() {
    this.start();
  }
  StatsMenuManager_handleSkillExpChanged(e) {
    if (!this.isEnabled) return;
    const statItem = this.statsMenuControl?.getStatItemForSkill(e?.Skill);
    this.setStatPercentage(e, statItem);
  }
  GameMenuBarManager_handleStatsButtonPointerDownAction() {
    if (!this.isEnabled) return;
    this.setAllPercentages();
  }
  setAllPercentages() {
    const player = this.gameHooks?.EntityManager?.Instance?.MainPlayer;
    const combatSkills = player?.Combat?.Skills;
    const skillSkills = player?.Skills?.Skills;
    new Array(Math.max(combatSkills?.length, skillSkills?.length)).fill(null).forEach((_, index) => {
      const skill = combatSkills[index] ?? skillSkills[index];
      const statItem = this.statsMenuControl?.getStatItemForSkill(
        skill?.Skill
      );
      this.setStatPercentage(skill, statItem);
    });
  }
  setStatPercentage(skill, statItem) {
    if (!skill || !statItem) {
      return;
    }
    const statElement = statItem.getElement();
    if (!statElement) return;
    let barElement = statElement.getElementsByClassName(barClassName)[0];
    if (!barElement) {
      barElement = document.createElement("div");
      barElement.className = barClassName;
      statElement.appendChild(barElement);
    }
    const xpManager = this.gameHooks?.ExperienceManager;
    const baseXP = xpManager?.getExperienceAtLevel(skill.Level);
    const targetXP = xpManager?.getExperienceAtLevel(skill.Level + 1);
    const percentage = (skill.XP - baseXP) / (targetXP - baseXP) * 100;
    barElement.innerHTML = `<div style="width:${percentage}%;"><div/>`;
  }
  setStyles() {
    const styleContainer = document.getElementById(containerId);
    if (!styleContainer) return;
    let styleElement = styleContainer.querySelector(`#${styleId}`);
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleContainer.appendChild(styleElement);
    }
    styleElement.textContent = [
      `#${containerId} .${barClassName} { background: ${this.bgColor}; }`,
      `#${containerId} .${barClassName} > * { background: ${this.fgColor}; }`,
      styles_default
    ].join("\n\n");
  }
  setup() {
    if (!document.getElementById(styleId)) {
      this.setStyles();
    }
    this.setAllPercentages();
  }
  cleanup() {
    const styleElement = document.getElementById(styleId);
    if (styleElement) styleElement.remove();
    const barElements = Array.from(
      document.getElementsByClassName(barClassName)
    );
    barElements.forEach((element) => element.remove());
  }
  updateSettingsUI() {
    document.highlite?.managers?.SettingsManager?.updatePluginSettingsUI(
      this
    );
  }
};
var StatBarsPlugin_default = StatBarsPlugin;
export {
  StatBarsPlugin,
  StatBarsPlugin_default as default
};
