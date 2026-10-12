// src/EntityHighlight.ts
import { Plugin, SettingsTypes, UIManagerScope, UIManager } from "@highlite/plugin-api";
import { Vector3 } from "@babylonjs/core/Maths/math.js";
var EntityHighlight = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "EntityHighlight";
    this.author = "Tomb";
    this.DOMElement = null;
    this.EntityDOMElements = {};
    this.positionTracker = /* @__PURE__ */ new Map();
    this.entitiesToHighlight = [];
    this.showAllEntities = false;
    this.uiManager = new UIManager();
    this.settings.highlightOffset = {
      text: "Highlight Offset",
      type: SettingsTypes.range,
      value: -30,
      min: -100,
      max: 100,
      callback: () => {
      }
    };
    this.settings.highlightBackground = {
      text: "Highlight Background",
      type: SettingsTypes.color,
      value: "#0008FA",
      callback: () => this.updateEntityThemes()
    };
    this.settings.highlightBackgroundAlpha = {
      text: "Highlight Alpha",
      type: SettingsTypes.range,
      value: 4,
      min: 1,
      max: 10,
      callback: () => {
      }
    };
  }
  init() {
    this.log("Initializing");
    this.setupKeyboardListeners();
  }
  start() {
    this.log("Started EntityHighlight Plugin");
    this.updateEntityPriorities();
    this.setupAllElements();
  }
  stop() {
    this.log("Stopped EntityHighlight Plugin");
    this.cleanupAllElements();
  }
  GameLoop_draw() {
    const WorldEntities = this.gameHooks.WorldEntityManager.Instance.WorldEntities;
    this.resetPositionTracker();
    this.cleanStaleWorldEntities(WorldEntities);
    this.processWorldEntities(WorldEntities);
  }
  setupKeyboardListeners() {
    this.log("Setting up keyboard listeners");
    document.addEventListener("keydown", (e) => {
      if (e.key === "Alt") {
        this.showAllEntities = true;
        this.updatePriorityButtonsVisibility();
        const screenMask = document.getElementById("hs-screen-mask");
        if (screenMask) {
          screenMask.style.pointerEvents = "none";
        }
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Alt") {
        this.showAllEntities = false;
        this.updateEntityPriorities();
        const screenMask = document.getElementById("hs-screen-mask");
        if (screenMask) {
          screenMask.style.pointerEvents = "auto";
        }
      }
    });
    window.addEventListener("blur", () => {
      if (this.showAllEntities) {
        this.showAllEntities = false;
        this.updateEntityPriorities();
      }
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.showAllEntities) {
        this.resetAltState();
      }
    });
  }
  updatePriorityButtonsVisibility() {
    const buttons = document.querySelectorAll(".priority-button");
    buttons.forEach((button) => {
      if (this.showAllEntities) {
        button.style.display = "inline-block";
      } else {
        button.style.display = "none";
      }
    });
  }
  cleanStaleWorldEntities(WorldEntities) {
    for (const key in this.EntityDOMElements) {
      if (!WorldEntities.has(parseInt(key))) {
        this.disposeElementFromCollection(this.EntityDOMElements, key);
      }
    }
  }
  updateEntityPriorities() {
    if (!this.data.entitiesToHighlight) {
      this.data.entitiesToHighlight = [];
    }
    this.entitiesToHighlight = this.data.entitiesToHighlight;
    this.setupAllElements();
  }
  disposeElementFromCollection(collection, key) {
    if (collection[key]?.element) {
      collection[key].element.remove();
      delete collection[key];
    }
  }
  resetPositionTracker() {
    this.positionTracker.clear();
  }
  processWorldEntities(WorldEntities) {
    for (const entity of WorldEntities) {
      try {
        let entityName = entity[1]._name;
        if (entityName.length <= 1) continue;
        if (this.entitiesToHighlight.includes(entity[1]._name) || this.showAllEntities) {
          if (!this.EntityDOMElements[entity[1]._entityTypeId]) {
            this.createEntityElement(
              entity[1]._entityTypeId,
              entity[1]
            );
          }
          const entityTypeId = entity[1]._entityTypeId;
          const element = this.EntityDOMElements[entityTypeId].element;
          element.style.color = "white";
          this.applyEntityColors(element);
          const worldPos = this.getEntityWorldPosition(entity[1]);
          if (worldPos) {
            this.EntityDOMElements[entity[1]._entityTypeId].position = worldPos;
            const positionKey = this.getPositionKey(worldPos);
            const currentCount = this.positionTracker.get(positionKey) || 0;
            this.positionTracker.set(positionKey, currentCount + 1);
          }
          const entityMesh = entity[1]._appearance._bjsMeshes[0];
          try {
            this.updateElementPosition(
              entityMesh,
              this.EntityDOMElements[entity[1]._entityTypeId]
            );
          } catch (e) {
            this.log("Error updating entity element position: ", e);
          }
        }
      } catch (e) {
        this.log("Error with entity: ", entity[0], entity[1]);
      }
    }
  }
  updateElementPosition(entityMesh, domElement) {
    const translationCoordinates = Vector3.Project(
      Vector3.ZeroReadOnly,
      entityMesh.getWorldMatrix(),
      this.gameHooks.GameEngine.Instance.Scene.getTransformMatrix(),
      this.gameHooks.GameCameraManager.Camera.viewport.toGlobal(
        this.gameHooks.GameEngine.Instance.Engine.getRenderWidth(1),
        this.gameHooks.GameEngine.Instance.Engine.getRenderHeight(1)
      )
    );
    const camera = this.gameHooks.GameCameraManager.Camera;
    const isInFrustrum = camera.isInFrustum(entityMesh);
    if (!isInFrustrum) {
      domElement.element.style.visibility = "hidden";
      return;
    } else {
      domElement.element.style.visibility = "visible";
    }
    const offset = this.settings.highlightOffset?.value;
    domElement.element.style.transform = `translate3d(calc(${this.pxToRem(translationCoordinates.x)}rem - 50%), calc(${this.pxToRem(translationCoordinates.y - 30 - offset)}rem - 50%), 0px)`;
  }
  pxToRem(px) {
    return px / 16;
  }
  getPositionKey(worldPosition) {
    const roundedX = Math.round(worldPosition.x);
    const roundedZ = Math.round(worldPosition.z);
    return `${roundedX}_${roundedZ}`;
  }
  getEntityWorldPosition(entity) {
    if (!entity || !entity._appearance) {
      return null;
    }
    return entity._appearance._bjsMeshes[0].absolutePosition;
  }
  hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  getHighlightBackground() {
    const alpha = this.settings.highlightBackgroundAlpha.value * 0.1;
    return this.hexToRGB(this.settings.highlightBackground.value, alpha);
  }
  updateEntityThemes() {
    for (const key in this.EntityDOMElements) {
      let element = this.EntityDOMElements[key].element;
      element.style.background = this.getHighlightBackground();
      element.style.borderRadius = "4px";
      element.style.padding = "2px 6px";
      element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
      element.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
      element.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
    }
  }
  applyEntityColors(element) {
    element.style.background = this.getHighlightBackground();
    element.style.borderRadius = "4px";
    element.style.padding = "2px 6px";
    element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
    element.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
    element.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
    return;
  }
  createEntityElement(entityId, entity) {
    if (entity._name.length <= 1) return;
    const element = document.createElement("div");
    element.id = `entity-highlight-${entityId}`;
    element.style.position = "absolute";
    element.style.pointerEvents = "none";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.zIndex = "1000";
    element.style.color = "white";
    element.style.fontSize = "12px";
    element.innerHTML = entity._name;
    element.style.background = this.settings.highlightBackground.value;
    element.style.borderRadius = "4px";
    element.style.gap = "4px";
    element.style.padding = "2px 20px";
    element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
    element.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
    element.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
    const priorityBtn = document.createElement("button");
    priorityBtn.className = "priority-button";
    priorityBtn.style.display = this.showAllEntities ? "inline-block" : "none";
    let highlightedEntity = this.entitiesToHighlight.includes(entity._name);
    if (highlightedEntity) {
      priorityBtn.innerText = "-";
      priorityBtn.style.background = "red";
    } else {
      priorityBtn.innerText = "+";
      priorityBtn.style.background = "green";
    }
    priorityBtn.style.color = "white";
    priorityBtn.style.border = "1px solid rgba(255, 255, 255, 0.3)";
    priorityBtn.style.borderRadius = "2px";
    priorityBtn.style.padding = "1px 4px";
    priorityBtn.style.fontSize = "10px";
    priorityBtn.style.cursor = "pointer";
    priorityBtn.style.fontWeight = "bold";
    priorityBtn.style.pointerEvents = "auto";
    priorityBtn.style.zIndex = "1002";
    priorityBtn.style.userSelect = "none";
    this.uiManager.bindOnClickBlockHsMask(priorityBtn, () => {
      this.toggleEntityHighlight(entity._name);
    });
    element.appendChild(priorityBtn);
    this.EntityDOMElements[entityId] = {
      element,
      position: Vector3.ZeroReadOnly,
      name: entity._name
    };
    document.getElementById("entity-highlight-entity")?.appendChild(element);
  }
  toggleEntityHighlight(entityName) {
    if (this.entitiesToHighlight.indexOf(entityName) === -1) {
      this.entitiesToHighlight.push(entityName);
      this.data.entitiesToHighlight = this.entitiesToHighlight;
    } else {
      this.entitiesToHighlight = this.entitiesToHighlight.filter((entity) => entity !== entityName);
      this.data.entitiesToHighlight = this.entitiesToHighlight;
    }
    this.updateEntityPriorities();
  }
  cleanupElementCollection(collection) {
    for (const key in collection) {
      if (collection[key]) {
        collection[key].element.remove();
        delete collection[key];
      }
    }
  }
  cleanupAllElements() {
    this.cleanupElementCollection(this.EntityDOMElements);
    this.EntityDOMElements = {};
    if (this.DOMElement) {
      this.DOMElement.remove();
      this.DOMElement = null;
    }
  }
  setupAllElements() {
    this.cleanupAllElements();
    this.DOMElement = this.uiManager.createElement(
      UIManagerScope.ClientRelative
    );
    if (this.DOMElement) {
      this.DOMElement.id = "entity-highlight-entity";
      this.DOMElement.style.position = "absolute";
      this.DOMElement.style.pointerEvents = "none";
      this.DOMElement.style.zIndex = "1";
      this.DOMElement.style.overflow = "hidden";
      this.DOMElement.style.width = "100%";
      this.DOMElement.style.height = "calc(100% - var(--titlebar-height))";
      this.DOMElement.style.top = "var(--titlebar-height)";
      this.DOMElement.style.fontFamily = "Inter";
      this.DOMElement.style.fontSize = "12px";
      this.DOMElement.style.fontWeight = "bold";
    }
  }
};
var EntityHighlight_default = EntityHighlight;
export {
  EntityHighlight,
  EntityHighlight_default as default
};
