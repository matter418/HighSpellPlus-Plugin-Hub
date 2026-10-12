// src/CoinCounter.ts
import { Plugin } from "@ryelite/core";
import {
  UIManager,
  UIManagerScope,
  abbreviateValue
} from "@ryelite/core";
var CoinCounter = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Coin Counter";
    this.author = "Highlite";
    this.uiManager = new UIManager();
    this.coinCounterUI = null;
    this.coinCounterValueUI = null;
    this.coinCount = 0;
    this.bankedCoins = 0;
    this.inventoryCoins = 0;
  }
  init() {
    this.log("Coin Counter Initialized");
  }
  start() {
    if (!this.settings.enable.value) {
      return;
    }
    if (this.coinCounterUI) {
      this.coinCounterUI.remove();
      this.coinCounterUI = null;
    }
    this.createCoinCounterUI();
  }
  stop() {
    if (this.coinCounterUI) {
      this.coinCounterUI.remove();
      this.coinCounterUI = null;
    }
  }
  // Create UI Element
  createCoinCounterUI() {
    this.log("Creating Coin Counter UI");
    if (this.coinCounterUI) {
      this.coinCounterUI.remove();
    }
    this.coinCounterUI = this.uiManager.createElement(
      UIManagerScope.ClientInternal
    );
    if (!this.coinCounterUI) {
      this.settings.enable.value = false;
      return;
    }
    this.coinCounterUI.style.position = "absolute";
    this.coinCounterUI.style.height = "auto";
    this.coinCounterUI.style.zIndex = "1000";
    this.coinCounterUI.style.right = "235px";
    this.coinCounterUI.style.bottom = "66px";
    this.coinCounterUI.style.display = "flex";
    this.coinCounterUI.style.flexDirection = "column";
    this.coinCounterUI.style.justifyContent = "space-evenly";
    this.coinCounterUI.style.width = "auto";
    this.coinCounterUI.style.padding = "10px";
    this.coinCounterUI.classList.add("hs-menu", "hs-game-menu");
    const coinCounterSpan = document.createElement("span");
    coinCounterSpan.style.display = "flex";
    coinCounterSpan.style.justifyContent = "center";
    const coinCounterSpanI = document.createElement("i");
    coinCounterSpanI.className = "iconify";
    coinCounterSpanI.setAttribute(
      "data-icon",
      "material-symbols:monetization-on"
    );
    coinCounterSpanI.ariaHidden = "true";
    coinCounterSpanI.style.marginRight = "10px";
    coinCounterSpan.appendChild(coinCounterSpanI);
    this.coinCounterValueUI = document.createElement("span");
    this.coinCounterValueUI.innerText = `${this.coinCount}`;
    coinCounterSpan.appendChild(this.coinCounterValueUI);
    this.coinCounterUI.appendChild(coinCounterSpan);
  }
  // Update Coin Count
  GameLoop_update() {
    if (!this.settings.enable.value) {
      return;
    }
    if (!this.coinCounterUI) {
      return;
    }
    if (document.getElementsByClassName("hs-game-menu--opened").length === 0) {
      this.coinCounterUI.style.right = "6px";
      this.coinCounterUI.style.transition = "all 0.1s ease-in-out";
    } else {
      this.coinCounterUI.style.right = "235px";
      this.coinCounterUI.style.transition = "none";
    }
    const bankItems = this.gameHooks.EntityManager.Instance.MainPlayer._bankItems.Items;
    const coins = bankItems.find(
      (item) => item != null && item._id === 6
    );
    if (coins) {
      this.bankedCoins = coins._amount;
    } else {
      this.bankedCoins = 0;
    }
    const inventoryItems = this.gameHooks.EntityManager.Instance.MainPlayer._inventory.Items;
    const inventoryCoins = inventoryItems.find(
      (item) => item != null && item._id === 6
    );
    if (inventoryCoins) {
      this.inventoryCoins = inventoryCoins._amount;
    } else {
      this.inventoryCoins = 0;
    }
    this.coinCount = this.bankedCoins + this.inventoryCoins;
    if (this.coinCounterValueUI) {
      this.coinCounterValueUI.innerText = `${abbreviateValue(
        this.coinCount
      )}`;
    } else {
      this.log("Coin Counter UI Element not found.");
    }
  }
};
export {
  CoinCounter as default
};
