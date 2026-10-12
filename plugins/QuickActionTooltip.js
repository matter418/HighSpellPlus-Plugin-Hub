// src/QuickActionMouseTooltip.ts
import { Plugin, SettingsTypes, UIManager, UIManagerScope } from "@ryelite/core";

// resources/css/base.css
var base_default = "@scope{.hlt-tooltip{position:fixed;background:#1e1e28f7;color:#fff;padding:8px 12px;border-radius:8px;box-shadow:0 2px 12px #00000080;z-index:9999;font-family:inherit;pointer-events:none;max-width:320px;font-size:14px}.hlt-tooltip-title{font-weight:700;font-size:15px;display:block}}\n";

// src/QuickActionMouseTooltip.ts
var QuickActionMouseTooltip = class extends Plugin {
  /**
   * Plugin setting to enable/disable inventory tooltips.
   */
  constructor() {
    super();
    this.pluginName = "Quick Action Mouse Tooltip";
    this.author = "0rangeYouGlad";
    this.uiManager = new UIManager();
    this.tooltipUI = null;
    this.tooltip = null;
    this.tooltipStyle = null;
    /**
     * Handler for mousemove events to update tooltip position to follow the mouse.
     */
    this.mouseMoveHandler = null;
    this.lastMousePos = [0, 0];
    this.quickActionText = null;
    this.lastQuickActionText = "";
    this.updateTooltipText = () => {
      if (!this.quickActionText?.textContent) {
        this.removeTooltip();
        return;
      }
      let qaText = this.quickActionText.textContent;
      if (qaText === this.lastQuickActionText) {
        return;
      }
      this.lastQuickActionText = qaText || "";
      if (this.settings.hideWalkHere.value && qaText.includes("Walk Here")) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideSpells.value && (qaText?.startsWith("Cast") || qaText?.startsWith("Auto Cast") || qaText?.startsWith("Stop Auto Casting"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideTrades.value && (qaText?.startsWith("Offer") || qaText?.startsWith("Revoke"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideInventory.value && (qaText?.startsWith("Use") && !qaText?.includes(" with") || qaText?.startsWith("Equip") || qaText?.startsWith("Unequip") || qaText?.startsWith("Eat") || qaText?.startsWith("Drink") || qaText?.startsWith("Discard") || qaText?.startsWith("Rub") || qaText?.startsWith("Drop") || qaText?.startsWith("Look At") || qaText?.startsWith("Dig"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideInventoryUseWith.value && (qaText?.startsWith("Use") && qaText?.includes(" with"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideBank.value && (qaText?.startsWith("Withdraw") || qaText?.startsWith("Deposit"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideCreate.value && qaText?.startsWith("Create")) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideShops.value && (qaText?.startsWith("Buy") || qaText?.startsWith("Check Price") || qaText?.startsWith("Sell"))) {
        this.removeTooltip();
        return;
      }
      if (this.settings.hideUi.value && (qaText?.startsWith("Open") && qaText?.includes("Guide") || qaText?.startsWith("Toggle") || qaText?.startsWith("Message") || qaText?.startsWith("Remove") || qaText?.startsWith("Show Blocked Users") || qaText?.startsWith("Show Friends List") || qaText?.startsWith("Current weight") || qaText?.startsWith("Unblock") || qaText?.includes("is blocked") || qaText?.includes("Logout") || qaText?.includes("Add a Friend") || qaText?.includes("Block a User") || qaText?.includes("Current Time") || qaText?.includes("Current Hitpoints") || qaText?.includes("Current Magic Level") || qaText?.includes("Current Range Level") || qaText?.startsWith("Current") && qaText?.includes("Bonus") || qaText?.includes("Reset Camera") || qaText?.includes("players currently on") || qaText?.startsWith("Chat Settings"))) {
        this.removeTooltip();
        return;
      }
      this.showTooltip(this.quickActionText);
    };
    this.settings.hideWalkHere = {
      text: "Hide on Walk Here",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideInventory = {
      text: "Hide on Inventory",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideInventoryUseWith = {
      text: "Hide on Use With",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.hideBank = {
      text: "Hide on Bank",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideShops = {
      text: "Hide on Shops",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideCreate = {
      text: "Hide on Creation UI",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideTrades = {
      text: "Hide on Trades",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideSpells = {
      text: "Hide on Spellbook",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hideUi = {
      text: "Hide on Misc UI",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
  }
  /**
   * Initializes the plugin (called once on load).
   */
  init() {
    this.log("QuickActionMouseTooltip initialised");
  }
  /**
   * Starts the plugin, adds styles and event listeners.
   */
  start() {
    this.log("QuickActionMouseTooltip started");
    this.mouseMoveHandler = (moveEvent) => {
      this.updateTooltipPosition(moveEvent);
      this.updateTooltipText();
    };
    document.addEventListener("mousemove", this.mouseMoveHandler);
  }
  addPluginStyle() {
    let styleTag = document.createElement("style");
    styleTag.innerText = `${base_default}`;
    this.tooltipUI?.appendChild(styleTag);
  }
  /**
   * Stops the plugin, removes event listeners and tooltip.
   */
  stop() {
    if (this.mouseMoveHandler) {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      this.mouseMoveHandler = null;
    }
    this.removeTooltip();
    this.quickActionText = null;
  }
  // Need to update on game loop as well in case entities wander into our mouse without the mouse moving
  GameLoop_update() {
    if (!this.quickActionText) {
      this.quickActionText = document.querySelector("#hs-quick-action-text");
    }
    this.updateTooltipText();
  }
  /**
   * Creates and displays the tooltip for the quickActionText.
   * Tooltip follows the mouse and adapts position to stay on screen.
   * @param event MouseEvent
   * @param itemDef Item definition object
   */
  showTooltip(itemDef) {
    this.removeTooltip();
    this.tooltipUI = this.uiManager.createElement(
      UIManagerScope.ClientInternal
    );
    this.addPluginStyle();
    this.tooltip = document.createElement("div");
    this.tooltip.className = "hlt-tooltip";
    this.tooltip.style.left = `${this.lastMousePos[0] + 10}px`;
    this.tooltip.style.top = `${this.lastMousePos[1] + 10}px`;
    this.tooltip.innerHTML = `
        <strong class="hlt-tooltip-title">${itemDef.children[0].innerHTML} ${itemDef.children[1].innerHTML}</strong>`;
    this.tooltipUI?.appendChild(this.tooltip);
  }
  /**
   * Removes the tooltip and mousemove event listener.
   */
  removeTooltip() {
    if (this.tooltipUI) {
      this.tooltipUI.remove();
      this.tooltipUI = null;
    }
  }
  /**
   * Updates the tooltip position to follow the mouse and stay within the viewport.
   * @param event MouseEvent
   */
  updateTooltipPosition(event) {
    this.lastMousePos = [event.clientX, event.clientY];
    if (this.tooltip) {
      const tooltipRect = this.tooltip.getBoundingClientRect();
      const padding = 5;
      let left = event.clientX + padding;
      let top = event.clientY + padding;
      const viewportWidth = window.innerWidth - 24;
      const viewportHeight = window.innerHeight - 20;
      if (left + tooltipRect.width > viewportWidth) {
        left = event.clientX - tooltipRect.width - padding;
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
export {
  QuickActionMouseTooltip as default
};
