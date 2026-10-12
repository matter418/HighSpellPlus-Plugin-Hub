// src/CurrentStatus.ts
import { Plugin, UIManager, UIManagerScope, ActionState } from "@highlite/plugin-api";
var CurrentStatus = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Current Status";
    this.author = "Doodleman360";
    //Taken over by Tomb
    this.uiManager = new UIManager();
    this.statusUI = null;
    this.statusValueUI = null;
  }
  init() {
    this.log("Initialized");
  }
  start() {
    this.log("Started");
    if (this.settings.enable.value && !this.statusUI) {
      this.createStatusUI();
    }
  }
  stop() {
    this.log("Stopped");
    if (this.statusUI) {
      this.statusUI.remove();
      this.statusUI = null;
    }
  }
  // Create UI Element
  createStatusUI() {
    if (this.statusUI) {
      this.statusUI.remove();
    }
    this.statusUI = this.uiManager.createElement(
      UIManagerScope.ClientInternal
    );
    if (!this.statusUI) {
      this.log("Failed to create status UI element.");
      this.settings.enable.value = false;
      return;
    }
    this.statusUI.style.position = "absolute";
    this.statusUI.style.height = "auto";
    this.statusUI.style.zIndex = "1000";
    this.statusUI.style.display = "flex";
    this.statusUI.style.flexDirection = "column";
    this.statusUI.style.justifyContent = "space-evenly";
    this.statusUI.style.width = "auto";
    this.statusUI.style.padding = "10px";
    this.statusUI.style.right = "235px";
    this.statusUI.style.bottom = "110px";
    this.statusUI.classList.add("hs-menu", "hs-game-menu");
    const statusSpan = document.createElement("span");
    statusSpan.style.display = "flex";
    statusSpan.style.justifyContent = "center";
    this.statusValueUI = document.createElement("span");
    this.statusValueUI.innerText = "Idle";
    statusSpan.appendChild(this.statusValueUI);
    this.statusUI.appendChild(statusSpan);
  }
  GameLoop_update(...args) {
    if (!this.settings.enable.value) {
      return;
    }
    if (!this.statusUI) {
      return;
    }
    if (document.getElementsByClassName("hs-game-menu--opened").length === 0) {
      this.statusUI.style.right = "6px";
      this.statusUI.style.transition = "all 0.1s ease-in-out";
    } else {
      this.statusUI.style.right = "235px";
      this.statusUI.style.transition = "none";
    }
    const player = this.gameHooks.EntityManager.Instance._mainPlayer;
    if (!player) return;
    const currentState = ActionState[player._currentState.getCurrentState()].replace(/State$/, "");
    if (this.statusValueUI) {
      this.statusValueUI.innerText = currentState;
    }
  }
};
var CurrentStatus_default = CurrentStatus;
export {
  CurrentStatus,
  CurrentStatus_default as default
};
