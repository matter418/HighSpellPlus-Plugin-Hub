// src/TreasureSolver.ts
import { Plugin } from "@highlite/core";

// resources/css/treasureStyle.css
var treasureStyle_default = ".treasure-info-container{position:absolute;top:35px;left:10px;width:194px;height:216px;background-color:#0003;border:2px solid #ffd700;border-radius:4px;color:#32cd32;display:flex;align-items:center;justify-content:center}.map-button{position:absolute;border:2px solid #ffd700;border-radius:4px;top:1px!important;width:190px!important;background-color:#0009;color:gold}.map-button:hover{cursor:pointer}.treasure-map-info{position:absolute;width:180px;height:90px;top:24px;display:flex;background-color:#0009;border:2px solid #ffd700;border-radius:4px;flex-direction:column;justify-content:flex-start;align-items:flex-start!important;padding-left:5px;gap:4px!important}.treasure-map-info-label{color:gold;font-size:1rem!important;font-weight:700!important;margin-top:5px;align-self:center}.treasure-map-data-label{color:gold;font-size:.75rem!important;font-weight:400!important}.treasure-map-info:before{content:none!important}.player-info{position:absolute;width:180px;height:90px;top:120px;display:flex;background-color:#0009;border:2px solid #ffd700;border-radius:4px;flex-direction:column;justify-content:flex-start;align-items:flex-start!important;padding-left:5px;gap:4px!important}.player-info-label{color:gold;font-size:1rem!important;font-weight:700!important;margin-top:5px;align-self:center}.player-data-label{color:gold;font-size:.75rem!important;font-weight:400!important}.player-info:before{content:none!important}\n";

// src/TreasureSolver.ts
var TreasureSolver = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Treasure Solver";
    this.author = "Highlite";
    this.treasureMapIds = [442, 443, 456];
    this.cssInjected = false;
    this.hasTreasureMap = false;
    this.hsMask = null;
    this.treasureInfoContainer = null;
    this.treasureMapInfo = null;
    this.playerLocationInfo = null;
  }
  init() {
    this.log("Initializing " + this.pluginName);
  }
  start() {
    this.log("Started " + this.pluginName);
    this.injectStyles();
    this.hsMask = document.querySelector("#hs-screen-mask");
  }
  stop() {
    this.log("Stopped " + this.pluginName);
    this.cleanup();
  }
  GameLoop_update() {
    if (this.settings.enable.value) {
      this.updatePlayerPosition();
    }
  }
  SocketManager_handleInvokedInventoryItemActionPacket([action, _2, _3, itemType, _4, _5, success, data]) {
    if (!this.treasureMapIds.includes(itemType) || !success || action !== 19)
      return;
    this.hasTreasureMap = true;
    this.createTreasureMapInfo(data);
  }
  SocketManager_handleShowLootMenuPacket([items, type, _1]) {
    this.destroyTreasureMapInfo();
  }
  injectStyles() {
    if (this.cssInjected) return;
    const style = document.createElement("style");
    style.textContent = treasureStyle_default;
    document.head.appendChild(style);
    this.cssInjected = true;
  }
  updatePlayerPosition() {
    if (!this.hasTreasureMap || !this.treasureInfoContainer)
      return;
    const playerInfo_X = document?.querySelector("#player-info-label_x");
    const playerInfo_Y = document?.querySelector("#player-info-label_y");
    const playerInfo_Level = document?.querySelector("#player-info-label_level");
    const playerPosition = document?.highlite?.gameHooks.EntityManager._entityManager._mainPlayer._currentGamePosition;
    const playerLevel = document?.highlite?.gameHooks.EntityManager._entityManager._mainPlayer._currentMapLevel;
    if (playerInfo_X)
      playerInfo_X.textContent = "X: " + playerPosition._x;
    if (playerInfo_Y)
      playerInfo_Y.textContent = "Y: " + playerPosition._z;
    if (playerInfo_Level)
      playerInfo_Level.textContent = "Level: " + this.getPlayerLevelName(playerLevel);
  }
  getPlayerLevelName(level) {
    switch (level) {
      case 0:
        return "Underground";
      case 1:
        return "Overworld";
      case 2:
        return "Sky";
      default:
        return level.toString();
    }
  }
  createTreasureMapInfo(data) {
    this.destroyTreasureMapInfo();
    this.treasureInfoContainer = document?.createElement("div");
    this.treasureInfoContainer.className = "treasure-info-container";
    this.treasureMapInfo = document?.createElement("div");
    this.treasureMapInfo.className = "treasure-map-info";
    const link = `https://highlite.dev/map?hide_decor=true&highliteMapPlugin=true&pos_x=${data[1] + 512}&pos_y=${data[2] + 512}&lvl=${data[3]}`;
    const mapButton = document?.createElement("button");
    mapButton.className = "map-button";
    mapButton.textContent = "Map Link";
    document.highlite.managers.UIManager.bindOnClickBlockHsMask(
      mapButton,
      () => {
        window.open(link);
      }
    );
    const treasureMapInfoLabel = document?.createElement("label");
    treasureMapInfoLabel.className = "treasure-map-info-label";
    treasureMapInfoLabel.textContent = "Treasure Map Location";
    const treasureMapData_X = document?.createElement("label");
    treasureMapData_X.className = "treasure-map-data-label";
    treasureMapData_X.id = "treasure-map-data_x";
    treasureMapData_X.textContent = "X: " + data[1];
    const treasureMapData_Y = document?.createElement("label");
    treasureMapData_Y.className = "treasure-map-data-label";
    treasureMapData_Y.id = "treasure-map-data_y";
    treasureMapData_Y.textContent = "Y: " + data[2];
    const treasureMapData_Level = document?.createElement("label");
    treasureMapData_Level.className = "treasure-map-data-label";
    treasureMapData_Level.id = "treasure-map-data_level";
    treasureMapData_Level.textContent = "Level: " + this.getPlayerLevelName(data[3]);
    this.playerLocationInfo = document?.createElement("div");
    this.playerLocationInfo.className = "player-info";
    const playerInfoLabel = document?.createElement("label");
    playerInfoLabel.className = "player-info-label";
    playerInfoLabel.textContent = "Player Location";
    const playerInfo_X = document?.createElement("label");
    playerInfo_X.id = "player-info-label_x";
    playerInfo_X.className = "player-data-label";
    playerInfo_X.textContent = "X: ";
    const playerInfo_Y = document?.createElement("label");
    playerInfo_Y.id = "player-info-label_y";
    playerInfo_Y.className = "player-data-label";
    playerInfo_Y.textContent = "Y: ";
    const playerInfo_Level = document?.createElement("label");
    playerInfo_Level.id = "player-info-label_level";
    playerInfo_Level.className = "player-data-label";
    playerInfo_Level.textContent = "Level: ";
    this.treasureMapInfo.appendChild(treasureMapInfoLabel);
    this.treasureMapInfo.appendChild(treasureMapData_X);
    this.treasureMapInfo.appendChild(treasureMapData_Y);
    this.treasureMapInfo.appendChild(treasureMapData_Level);
    this.playerLocationInfo.appendChild(playerInfoLabel);
    this.playerLocationInfo.appendChild(playerInfo_X);
    this.playerLocationInfo.appendChild(playerInfo_Y);
    this.playerLocationInfo.appendChild(playerInfo_Level);
    this.treasureMapInfo.appendChild(treasureMapInfoLabel);
    this.treasureMapInfo.appendChild(treasureMapData_X);
    this.treasureMapInfo.appendChild(treasureMapData_Y);
    this.treasureMapInfo.appendChild(treasureMapData_Level);
    this.treasureInfoContainer.appendChild(mapButton);
    this.treasureInfoContainer.appendChild(this.treasureMapInfo);
    this.treasureInfoContainer.appendChild(this.playerLocationInfo);
    this.hsMask?.appendChild(this.treasureInfoContainer);
  }
  destroyTreasureMapInfo() {
    if (this.treasureInfoContainer) {
      this.treasureInfoContainer.remove();
      this.treasureInfoContainer = null;
      this.hasTreasureMap = false;
    }
  }
  cleanup() {
    this.destroyTreasureMapInfo();
  }
};
export {
  TreasureSolver as default
};
