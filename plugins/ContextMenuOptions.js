// src/ContextMenuOptions.ts
import { Plugin } from "@ryelite/core";
import { ContextMenuManager } from "@ryelite/core";
var ContextMenuOptions = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Context Menu Options";
    this.author = "Highlite";
    this.contextMenuManager = new ContextMenuManager();
    this.settings.enable = {
      text: "Enable",
      type: 0,
      value: false,
      // Default to false
      callback: () => {
      }
      //NOOP
    };
    this.settings.prioritizePickpocket = {
      text: "Prioritize Pickpocket",
      type: 0,
      value: false,
      callback: this.enablePrioritizePickpocketChanged
    };
    this.settings.prioritizeAttack = {
      text: "Prioritize Attack",
      type: 0,
      value: false,
      callback: this.enablePrioritizeAttackChanged
    };
    this.settings.deprioritizeTalkTo = {
      text: "Deprioritize Talk To",
      type: 0,
      value: false,
      callback: this.enableDeprioritizeTalkToChanged
    };
  }
  init() {
    this.log("Initialized");
  }
  start() {
    this.log("Started");
    this.enablePrioritizeAttackChanged();
    this.enablePrioritizePickpocketChanged();
    this.enableDeprioritizeTalkToChanged();
  }
  stop() {
    this.log("Stopped");
    this.enablePrioritizeAttackChanged();
    this.enablePrioritizePickpocketChanged();
    this.enableDeprioritizeTalkToChanged();
  }
  enableDeprioritizeTalkToChanged() {
    if (this.settings.deprioritizeTalkTo?.value && this.settings.enable?.value) {
      this.contextMenuManager.SetGameWorldActionMenuPosition(
        "Talk To",
        1e5
      );
    } else {
      this.contextMenuManager.RemoveGameWorldActionMenuPosition(
        "Talk To"
      );
    }
  }
  enablePrioritizePickpocketChanged() {
    if (this.settings.prioritizePickpocket?.value && this.settings.enable?.value) {
      this.contextMenuManager.SetGameWorldActionMenuPosition(
        "Pickpocket",
        -1
      );
    } else {
      this.contextMenuManager.RemoveGameWorldActionMenuPosition(
        "Pickpocket"
      );
    }
  }
  enablePrioritizeAttackChanged() {
    if (this.settings.prioritizeAttack?.value && this.settings.enable?.value) {
      this.contextMenuManager.SetGameWorldActionMenuPosition(
        "Attack",
        -1
      );
    } else {
      this.contextMenuManager.RemoveGameWorldActionMenuPosition("Attack");
    }
  }
};
export {
  ContextMenuOptions as default
};
