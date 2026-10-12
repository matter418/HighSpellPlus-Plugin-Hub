// src/SpellTooltipsPlugin.ts
import { Plugin, SettingsTypes } from "@highlite/plugin-api";

// src/styles.css
var styles_default = '#hs-magic-menu\n    .hs-magic-menu__information-panel[hl-spell-tooltip-hidden="true"] {\n    display: none;\n}\n\n#hl-spell-tooltip-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    container-type: inline-size;\n    pointer-events: none;\n}\n\n#hl-spell-tooltip {\n    position: fixed;\n    flex-direction: column;\n    width: 220px;\n    background: linear-gradient(145deg, #18181b, #09090b);\n    border: 2px solid #27272a;\n    border-radius: 8px;\n    padding: 8px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);\n    font-family: "Arial", sans-serif;\n    font-size: 12px;\n    pointer-events: none;\n    z-index: 9999;\n    color: #d4d4d8;\n}\n\n#hl-spell-tooltip.visible {\n    display: flex;\n}\n\n#hl-spell-tooltip hr {\n    width: 100%;\n    padding: 0;\n    margin: 5px 0px;\n    border: 0;\n    border-bottom: #3f3f46 1px solid;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    gap: 5px;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-header-name {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n    padding: 5px;\n    justify-content: space-evenly;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-tags > div {\n    font-size: 10px;\n    text-transform: uppercase;\n    border: currentColor 1px solid;\n    border-radius: 4px;\n    padding: 1px 2px;\n}\n\n#hl-spell-tooltip .hs-spell-tooltip-requirements {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-equipped-item-requirement,\n#hl-spell-tooltip .hl-spell-tooltip-quest-requirement {\n    font-weight: normal;\n    display: flex;\n    align-items: center;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-item-requirement-image {\n    display: inline-block;\n    height: var(--hs-inventory-item-size);\n    width: var(--hs-inventory-item-size);\n    background-image: var(--hs-url-inventory-items);\n    background-repeat: no-repeat;\n    background-size: var(--hs-url-inventory-items-width)\n        var(--hs-url-inventory-items-height);\n    background-position: 0rem 0rem;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-item-requirement-name,\n#hl-spell-tooltip .hl-spell-tooltip-quest-requirement-name {\n    text-decoration: underline;\n    padding-right: 0.25em;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-description {\n    font-weight: normal;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-recipe-ctrl-container {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 5px;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-recipe {\n    display: flex;\n    gap: 5px;\n    flex-wrap: wrap;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-recipe-image {\n    display: inline-block;\n    margin: -0.625rem -0.625rem -0.875rem -0.625rem;\n    background-image: var(--hs-url-inventory-items);\n    background-position: 0rem 0rem;\n    background-repeat: no-repeat;\n    height: var(--hs-inventory-item-size);\n    min-height: var(--hs-inventory-item-size);\n    min-width: var(--hs-inventory-item-size);\n    transform: scale(var(--hs-magic-menu-recipe-icon-size-factor));\n    width: var(--hs-inventory-item-size);\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-recipe-name {\n    margin-left: -5px;\n    padding-right: 5px;\n}\n\n#hl-spell-tooltip .hl-spell-tooltip-ctrl {\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    padding: 2px 4px;\n    border: currentColor 1px solid;\n    border-radius: 4px;\n    align-self: end;\n}\n';

// src/SpellTooltipsPlugin.ts
var hsRootContainerId = "hs-screen-mask";
var tooltipId = "hl-spell-tooltip";
var containerId = "hl-spell-tooltip-container";
var styleId = "hl-spell-tooltip-style";
var tooltipPixelWidth = 220;
var SpellTooltipsPlugin = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Spell Tooltips";
    this.author = "SoggyPiggy";
    this.containerDiv = null;
    this.tooltipDiv = null;
    this.spellDef = null;
    this.keyDownCallback = null;
    this.keyUpCallback = null;
    this.isDevMode = false;
    this.isExpanded = this.isDevMode;
    this.settings.enable = {
      text: "Enable Spell Tooltips",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => this.settings.enable.value ? this.start() : this.stop()
    };
    this.settings.disablePanel = {
      text: "Disable default information panel",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => this.setPanelVisibility()
    };
    this.settings.ctrlToggle = {
      text: "CTRL is toggle",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
  }
  init() {
    this.log("Initialized");
  }
  start() {
    this.setup();
    this.setPanelVisibility();
    this.log("Started");
  }
  stop() {
    this.cleanup();
    this.setPanelVisibility();
    this.log("Stopped");
  }
  ScreenMask_initializeControls() {
    this.start();
  }
  SocketManager_loggedIn() {
    this.start();
  }
  SocketManager_handleLoggedOut() {
    this.stop();
  }
  SpellMenuManager_handleSpellItemPointerOver(e, t) {
    this.spellDef = e._spellDef;
    this.setTooltipPosition({
      // NOTE: adding 20 for half of the spell button width
      x: t.X - t.OffsetX + 20,
      y: t.Y - t.OffsetY
    });
    this.setTooltipContent();
    this.setTooltipVisibility();
  }
  SpellMenuManager_handleSpellItemPointerOut() {
    this.spellDef = null;
    this.setTooltipVisibility();
  }
  setTooltipVisibility() {
    if (!this.tooltipDiv) return;
    if (this.settings.enable.value && this.spellDef) {
      this.tooltipDiv.className = "visible";
    } else {
      this.tooltipDiv.className = "";
    }
  }
  setTooltipPosition(coords) {
    if (!this.tooltipDiv) return;
    const x = isNaN(coords.x) ? 0 : coords.x;
    const y = isNaN(coords.y) ? 0 : coords.y;
    this.tooltipDiv.style.right = `clamp(100vw - 100cqw, 100vw - ${x + tooltipPixelWidth / 2}px, 100vw - ${tooltipPixelWidth}px)`;
    this.tooltipDiv.style.bottom = `calc(100vh - ${y - 5}px)`;
  }
  setTooltipContent() {
    if (!this.tooltipDiv) return;
    this.tooltipDiv.innerHTML = this.makeTooltipHTML();
  }
  makeTooltipHTML() {
    if (!this.spellDef) return "";
    return [
      `<div class="hl-spell-tooltip-header">
                <div class="hl-spell-tooltip-header-name" style="${this.isExpanded ? "" : "white-space:nowrap;"}">
                    ${this.spellDef.Name}
                </div>
                <div style="flex:0;">lvl.${this.spellDef.Level}</div>
            </div>`,
      this.isExpanded && `<div class="hl-spell-tooltip-description">${this.spellDef.Description}</div>`,
      this.isExpanded && this.makeTagsHTML(),
      this.isExpanded && `<hr />`,
      this.isExpanded && this.makeRequirementsHTML(),
      `<div class="hl-spell-tooltip-recipe-ctrl-container">
                ${this.makeRecipeHTML()}
                <div class="hl-spell-tooltip-ctrl" style="color:${this.isExpanded ? "#9f9fa9" : "#3f3f46"};">
                    CTRL
                </div>
            </div>`
    ].filter((html) => html).join("");
  }
  makeTagsHTML() {
    if (!this.spellDef) return "";
    const type = this.gameLookups?.SpellTypes?.[this.spellDef.Type];
    const showType = typeof type === "string";
    const exp = this.spellDef?.Exp;
    const showExp = typeof exp === "number" && exp !== 0;
    const maxDamage = this.spellDef?.MaxDamage;
    const showMaxDamage = typeof maxDamage === "number" && maxDamage !== 0;
    const showSplashDamage = (this.spellDef?.SplashDamage ?? null) !== null;
    if (![showType, showExp, showMaxDamage, showSplashDamage].includes(true))
      return "";
    return [
      `<div class="hl-spell-tooltip-tags">`,
      showType && `<div style="color:#71717b;">${type}</div>`,
      showExp && `<div style="color:#00a63e;">Exp: ${exp}</div>`,
      showMaxDamage && `<div style="color:#ff2056;">Max DMG: ${maxDamage}</div>`,
      showSplashDamage && `<div style="color:#e60076;">Splash</div>`,
      `</div>`
    ].filter((html) => html).join("");
  }
  makeRequirementsHTML() {
    if (!this.spellDef) return "";
    const requirements = this.spellDef.Requirements;
    if (!Array.isArray(requirements) || requirements.length < 1) return "";
    const RequirementTypes = this.gameLookups?.RequirementTypes ?? {};
    return [
      `<div class="hs-spell-tooltip-requirements">`,
      `<div>Requires</div>`,
      ...requirements.map((requirement) => {
        switch (requirement.Type) {
          case RequirementTypes.quest:
            return this.makeQuestRequirementHTML(requirement);
          case RequirementTypes.equippeditem:
            return this.makeEquippedItemRequirementHTML(
              requirement
            );
          default:
            return "unhandled requirement";
        }
      }),
      `</div>`,
      `<hr />`
    ].filter((html) => html).join("");
  }
  makeQuestRequirementHTML(requirement) {
    const quest = this.gameHooks?.QuestDefinitionManager?.getDefById(
      requirement?._questId
    );
    if (!quest) return "unhandled quest";
    const isCompletionRequired = (quest.Checkpoints?.length ?? 0) - 1 === requirement?._checkpoints?.[0];
    return [
      `<div class="hl-spell-tooltip-quest-requirement">
                <div class="hs-game-menu-bar__button__container__image hs-icon-background hs-game-menu-bar__button__container__image--quests"></div>
                <div>
                    <span class="hl-spell-tooltip-quest-requirement-name">${quest.Name}</span>
                    ${isCompletionRequired && '<span style="font-weight:normal;">completed</span>'}
                </div>
            </div>`
    ].filter((html) => html).join("");
  }
  makeEquippedItemRequirementHTML(requirement) {
    const items = requirement.ItemIDs?.filter(
      (id) => typeof id === "number"
    );
    if (!Array.isArray(items) || items.length < 1) return "";
    return items.map((itemID) => {
      const item = this.gameHooks?.ItemDefinitionManager?.getDefById(itemID);
      const backgroundPosition = this.gameHooks?.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
        itemID
      ) ?? "0rem 0rem";
      if (!item) return "unhandled item";
      return `<div class="hl-spell-tooltip-equipped-item-requirement">
                <div class="hl-spell-tooltip-item-requirement-image" style="background-position:${backgroundPosition}"></div>
                <span class="hl-spell-tooltip-item-requirement-name">${item.NameCapitalized ?? item.Name} </span>
                equipped
            </div>`;
    }).filter((html) => html).join("");
  }
  makeRecipeHTML() {
    if (!this.spellDef) return "";
    const isBloodTeleport = this.spellDef.ID === (this.gameHooks?.MagicSkillManager?.BLOOD_TELEPORT_ID ?? 24);
    if (isBloodTeleport) {
      return `
                <div class="hl-spell-tooltip-recipe">
                    <div class="hs-icon-background hs-action-bar-item__image hs-action-bar-item__image--combat-skill--hitpoints hs-action-bar-item__image--combat-skill"></div>
                    &#189; Max Hitpoints
                </div>
            `;
    }
    const ingredients = this.spellDef?.Recipe?.Ingredients;
    if (!Array.isArray(ingredients) || ingredients.length < 1) {
      return '<div style="flex:1;"></div>';
    }
    return [
      `<div class="hl-spell-tooltip-recipe" style="flex-direction:${this.isExpanded ? "column" : "row"}">`,
      ...ingredients.map(
        (ingredient) => this.makeIngredientHTML(ingredient)
      ),
      `</div>`
    ].filter((html) => html).join("");
  }
  makeIngredientHTML(ingredient) {
    if (!ingredient) return "";
    const backgroundPosition = this.gameHooks?.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
      ingredient.ItemID
    ) ?? "0rem 0rem";
    const item = this.gameHooks?.ItemDefinitionManager?.getDefById(
      ingredient.ItemID
    );
    const name = item?.NameCapitalized ?? item?.Name ?? "";
    const amount = ingredient.Amount;
    return [
      `<div>`,
      `<div class="hl-spell-tooltip-recipe-image" style="background-position:${backgroundPosition};"></div>`,
      amount && `<span class="hl-spell-tooltip-recipe-name">${amount}</span>`,
      this.isExpanded && name,
      `</div>`
    ].filter((html) => html).join("");
  }
  setPanelVisibility() {
    const panelDiv = document.querySelector(
      "#hs-magic-menu .hs-magic-menu__information-panel"
    );
    if (!panelDiv) return;
    if (this.settings.enable.value && this.settings.disablePanel.value) {
      panelDiv?.setAttribute("hl-spell-tooltip-hidden", "true");
    } else {
      panelDiv?.removeAttribute("hl-spell-tooltip-hidden");
    }
  }
  setup() {
    if (!this.containerDiv) {
      document.getElementById(containerId)?.remove();
      const rootContainer = document.getElementById(hsRootContainerId);
      if (!rootContainer) return;
      this.containerDiv = document.createElement("div");
      this.containerDiv.id = containerId;
      rootContainer.appendChild(this.containerDiv);
    }
    if (!this.tooltipDiv && this.containerDiv) {
      document.getElementById(tooltipId)?.remove();
      this.tooltipDiv = document.createElement("div");
      this.tooltipDiv.id = tooltipId;
      this.containerDiv.appendChild(this.tooltipDiv);
    }
    if (!document.getElementById(styleId) && this.containerDiv) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = `#hl-spell-tooltip {display: ${this.isDevMode ? "flex" : "none"};} ${styles_default}`;
      this.containerDiv.appendChild(styleElement);
    }
    if (!this.keyDownCallback) {
      const keyDownCallback = (event) => {
        if (!event.ctrlKey) return;
        const isExpanded = this.settings.ctrlToggle.value ? !this.isExpanded : true;
        if (this.isExpanded === isExpanded) return;
        this.isExpanded = isExpanded;
        this.setTooltipContent();
      };
      document.addEventListener("keydown", keyDownCallback);
      this.keyDownCallback = keyDownCallback;
    }
    if (!this.keyUpCallback) {
      const keyUpCallback = (event) => {
        if (event.ctrlKey) return;
        if (this.settings.ctrlToggle.value) return;
        if (this.isExpanded === false) return;
        this.isExpanded = false;
        this.setTooltipContent();
      };
      document.addEventListener("keyup", keyUpCallback);
      this.keyUpCallback = keyUpCallback;
    }
  }
  cleanup() {
    if (this.tooltipDiv) {
      this.tooltipDiv.remove();
      this.tooltipDiv = null;
    } else {
      document.getElementById(tooltipId)?.remove();
    }
    document.getElementById(styleId)?.remove();
    if (this.containerDiv) {
      this.containerDiv.remove();
      this.containerDiv = null;
    }
    const keyDownCallback = this.keyDownCallback;
    if (keyDownCallback) {
      document.removeEventListener("keydown", keyDownCallback);
      this.keyDownCallback = null;
    }
    const keyUpCallback = this.keyUpCallback;
    if (keyUpCallback) {
      document.removeEventListener("keyup", keyUpCallback);
      this.keyUpCallback = null;
    }
  }
};
var SpellTooltipsPlugin_default = SpellTooltipsPlugin;
export {
  SpellTooltipsPlugin,
  SpellTooltipsPlugin_default as default
};
