// src/DropLog.ts
import { Plugin, SettingsTypes, PanelManager } from "@highlite/plugin-api";
var DropLog = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "Drop Log";
    this.author = "JayArrowz & Tomb & 0rangeYouGlad";
    this.panelManager = new PanelManager();
    this.panelContent = null;
    this.attackedNPCs = /* @__PURE__ */ new Set();
    this.npcDataCache = /* @__PURE__ */ new Map();
    // entityId -> npc data when first tracked
    this.npcHealthTrackers = /* @__PURE__ */ new Map();
    // entityId -> health tracker
    this.pendingDeaths = /* @__PURE__ */ new Map();
    this.lastGroundItems = /* @__PURE__ */ new Map();
    this.groundItemTimestamps = /* @__PURE__ */ new Map();
    this.searchQuery = "";
    this.filteredData = [];
    this.virtualScrollContainer = null;
    this.virtualScrollContent = null;
    this.itemHeight = 120;
    this.scrollTop = 0;
    this.processedDeaths = /* @__PURE__ */ new Set();
    this.settings.enabled = {
      text: "Enable Drop Log",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
        if (this.settings.enabled.value) {
          this.initializePlugin();
        } else {
          this.disablePlugin();
        }
      }
    };
    this.settings.maxDistance = {
      text: "Max Drop Distance",
      type: SettingsTypes.range,
      value: 5,
      callback: () => {
      }
    };
    this.settings.dropTimeout = {
      text: "Drop Timeout (ms)",
      type: SettingsTypes.range,
      value: 2e3,
      callback: () => {
      }
    };
  }
  start() {
    if (!this.data.dropData) {
      this.data.dropData = {};
    }
    this.createPanel();
    this.addCSSStyles();
    if (this.panelContent) {
      this.updatePanelContent();
    }
  }
  init() {
  }
  GameLoop_update() {
    this.trackCurrentTarget();
    this.checkForDeaths();
    this.checkForDrops();
    this.cleanupOldDeaths();
  }
  trackCurrentTarget() {
    try {
      const gameHooks = this.gameHooks;
      if (!gameHooks) return;
      const entityManager = gameHooks.EntityManager?.Instance;
      if (!entityManager) return;
      const mainPlayer = entityManager.MainPlayer;
      if (!mainPlayer) return;
      const currentTarget = mainPlayer.CurrentTarget;
      if (!currentTarget) return;
      if (!currentTarget._def || currentTarget._isDestroyed) return;
      const entityId = currentTarget._entityId;
      if (!entityId) return;
      if (this.attackedNPCs.has(entityId)) return;
      const npc = entityManager.NPCs?.get(entityId);
      if (!npc) return;
      this.npcDataCache.set(entityId, {
        entityId,
        def: currentTarget._def,
        position: npc._currentGamePosition || npc._lastGamePosition,
        name: currentTarget._def._nameCapitalized || currentTarget._def._name
      });
      this.setupHealthTracker(entityId, npc, currentTarget._def);
      this.attackedNPCs.add(entityId);
    } catch (error) {
    }
  }
  setupHealthTracker(entityId, npc, def) {
    try {
      if (this.npcHealthTrackers.has(entityId)) return;
      const currentHP = npc.Hitpoints?._currentLevel || 0;
      const maxHP = npc.Hitpoints?._level || currentHP;
      const name = def._nameCapitalized || def._name || `NPC ${entityId}`;
      const position = {
        x: npc._currentGamePosition?._x || npc._lastGamePosition?._x || 0,
        y: npc._currentGamePosition?._y || npc._lastGamePosition?._y || 0,
        z: npc._currentGamePosition?._z || npc._lastGamePosition?._z || 0
      };
      const damageListener = (hitpointsObj, damageAmount) => {
        this.handleNPCDamage(entityId, hitpointsObj, damageAmount);
      };
      const tracker = {
        entityId,
        currentHP,
        maxHP,
        name,
        position,
        damageListener
      };
      if (npc.Hitpoints && npc.Hitpoints.OnReceivedDamageListener) {
        npc.Hitpoints.OnReceivedDamageListener.add(damageListener);
        this.npcHealthTrackers.set(entityId, tracker);
      }
    } catch (error) {
    }
  }
  handleNPCDamage(entityId, hitpointsObj, damageAmount) {
    try {
      const tracker = this.npcHealthTrackers.get(entityId);
      if (!tracker) return;
      const currentHP = hitpointsObj._currentLevel || 0;
      const hpAfterDamage = currentHP - damageAmount;
      tracker.currentHP = Math.max(0, hpAfterDamage);
      if (hpAfterDamage <= 0) {
        const trackedNPC = {
          entityId,
          defId: this.npcDataCache.get(entityId)?.def?._id || 0,
          name: tracker.name,
          position: tracker.position,
          deathTime: Date.now()
        };
        this.pendingDeaths.set(entityId, trackedNPC);
        this.cleanupHealthTracker(entityId);
      }
    } catch (error) {
    }
  }
  cleanupHealthTracker(entityId) {
    try {
      const tracker = this.npcHealthTrackers.get(entityId);
      if (tracker) {
        const npc = this.gameHooks?.EntityManager?.Instance?.NPCs?.get(
          entityId
        );
        if (npc && npc.Hitpoints && npc.Hitpoints.OnReceivedDamageListener) {
          npc.Hitpoints.OnReceivedDamageListener.remove(
            tracker.damageListener
          );
        }
        this.npcHealthTrackers.delete(entityId);
        this.attackedNPCs.delete(entityId);
        this.npcDataCache.delete(entityId);
      }
    } catch (error) {
    }
  }
  checkForDeaths() {
    if (this.npcHealthTrackers.size === 0) return;
    const trackersToRemove = [];
    for (const [entityId, tracker] of this.npcHealthTrackers) {
      try {
        const npc = this.gameHooks?.EntityManager?.Instance?.NPCs?.get(
          entityId
        );
        if (!npc) {
          trackersToRemove.push(entityId);
        } else {
          if (npc._currentGamePosition) {
            tracker.position = {
              x: npc._currentGamePosition._x,
              y: npc._currentGamePosition._y,
              z: npc._currentGamePosition._z
            };
          }
        }
      } catch (error) {
        trackersToRemove.push(entityId);
      }
    }
    if (trackersToRemove.length > 0) {
      trackersToRemove.forEach((id) => {
        this.cleanupHealthTracker(id);
      });
    }
  }
  checkForDrops() {
    try {
      const groundItems = this.gameHooks?.GroundItemManager?.Instance?._groundItems;
      if (!groundItems) return;
      const itemsToMatch = [];
      groundItems.forEach((item, itemEntityId) => {
        if (this.lastGroundItems.has(itemEntityId)) return;
        itemsToMatch.push({ item, entityId: itemEntityId });
        this.lastGroundItems.set(itemEntityId, item);
        this.groundItemTimestamps.set(itemEntityId, Date.now());
      });
      const processedDeaths = /* @__PURE__ */ new Set();
      for (const { item, entityId } of itemsToMatch) {
        for (const [npcEntityId, trackedNPC] of this.pendingDeaths) {
          if (processedDeaths.has(npcEntityId)) continue;
          if (this.isItemNearPosition(item, trackedNPC.position)) {
            const itemAppearTime = this.groundItemTimestamps.get(entityId) || 0;
            if (itemAppearTime >= trackedNPC.deathTime) {
              this.recordDrop(trackedNPC, item);
            }
          }
        }
      }
      const currentItemIds = new Set(Array.from(groundItems.keys()));
      for (const [itemId] of this.lastGroundItems) {
        if (!currentItemIds.has(itemId)) {
          this.lastGroundItems.delete(itemId);
          this.groundItemTimestamps.delete(itemId);
        }
      }
    } catch (error) {
    }
  }
  getDistance(item, position) {
    if (!item._currentGamePosition) return Infinity;
    const itemPos = item._currentGamePosition;
    return Math.sqrt(
      Math.pow(itemPos._x - position.x, 2) + Math.pow(itemPos._z - position.z, 2)
    );
  }
  isItemNearPosition(item, position) {
    const distance = this.getDistance(item, position);
    const maxDistance = this.settings.maxDistance?.value || 5;
    return distance <= maxDistance;
  }
  recordDrop(npc, item) {
    try {
      const deathKey = `${npc.entityId}_${npc.deathTime}`;
      if (!this.processedDeaths.has(deathKey)) {
        const oldCount = this.data.dropData[npc.defId].killCount;
        this.data.dropData[npc.defId].killCount++;
        this.processedDeaths.add(deathKey);
      }
      const itemId = item._def?._id || item._entityTypeId;
      const itemName = item._def?._nameCapitalized || item._def?._name || `Item ${itemId}`;
      const quantity = item._amount || 1;
      if (!this.data.dropData[npc.defId].drops[itemId]) {
        this.data.dropData[npc.defId].drops[itemId] = {
          name: itemName,
          quantity: 0,
          totalDropped: 0
        };
      }
      this.data.dropData[npc.defId].drops[itemId].quantity += quantity;
      this.data.dropData[npc.defId].drops[itemId].totalDropped++;
      this.data.dropData[npc.defId].lastUpdated = Date.now();
      this.updatePanelContent();
    } catch (error) {
      console.error("Error recording drop", error);
    }
  }
  cleanupOldDeaths() {
    if (this.pendingDeaths.size === 0) return;
    const timeout = this.settings.dropTimeout?.value || 2e3;
    const now = Date.now();
    const toRemove = [];
    for (const [entityId, trackedNPC] of this.pendingDeaths) {
      const timeSinceDeath = now - trackedNPC.deathTime;
      if (timeSinceDeath > timeout) {
        const deathKey = `${entityId}_${trackedNPC.deathTime}`;
        const alreadyCounted = this.processedDeaths.has(deathKey);
        if (!alreadyCounted) {
          if (!this.data.dropData[trackedNPC.defId]) {
            this.data.dropData[trackedNPC.defId] = {
              name: trackedNPC.name,
              killCount: 0,
              drops: {},
              lastUpdated: Date.now()
            };
          }
          const oldCount = this.data.dropData[trackedNPC.defId].killCount;
          this.data.dropData[trackedNPC.defId].killCount++;
          this.data.dropData[trackedNPC.defId].lastUpdated = Date.now();
          this.processedDeaths.add(deathKey);
        }
        this.updatePanelContent();
        toRemove.push(entityId);
      }
    }
    if (toRemove.length > 0) {
      toRemove.forEach((id) => this.pendingDeaths.delete(id));
    }
  }
  createPanel() {
    try {
      const panelItems = this.panelManager.requestMenuItem(
        "\u{1F4CB}",
        "Drop Log"
      );
      if (!panelItems) return;
      this.panelContent = panelItems[1];
      this.panelContent.className = "drop-log-panel";
      this.panelContent.style.width = "100%";
      this.panelContent.style.height = "100%";
      this.panelContent.style.display = "flex";
      this.panelContent.style.flexDirection = "column";
      this.injectSpriteStyles();
      this.updatePanelContent();
    } catch (error) {
      console.error("Error creating panel", error);
    }
  }
  updatePanelContent() {
    if (!this.panelContent) return;
    this.injectSpriteStyles();
    this.panelContent.innerHTML = "";
    const header = document.createElement("div");
    header.className = "drop-log-header";
    const filteredCount = this.getFilteredData().length;
    const dropDataLength = this.data.dropData ? Object.keys(this.data.dropData).length : 0;
    header.innerHTML = `
            <h3>Drop Log</h3>
            <div class="drop-log-stats">
                <span>Total NPCs: ${dropDataLength}</span>
                <span>Showing: ${filteredCount}</span>
                <span>Total Kills: ${Array.from(Object.values(this.data.dropData)).reduce((sum, data) => sum + data?.killCount || 0, 0)}</span>
            </div>
        `;
    this.panelContent.appendChild(header);
    const controls = document.createElement("div");
    controls.className = "drop-log-controls";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "drop-log-search";
    searchInput.placeholder = "Search NPCs or items...";
    searchInput.value = this.searchQuery;
    searchInput.oninput = (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.updateVirtualList();
    };
    controls.appendChild(searchInput);
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Log";
    clearButton.className = "drop-log-clear-btn";
    clearButton.onclick = () => this.clearLog();
    controls.appendChild(clearButton);
    this.panelContent.appendChild(controls);
    const npcList = document.createElement("div");
    npcList.className = "drop-log-list";
    this.virtualScrollContainer = document.createElement("div");
    this.virtualScrollContainer.className = "drop-log-virtual-container";
    this.virtualScrollContent = document.createElement("div");
    this.virtualScrollContent.className = "drop-log-virtual-content";
    this.virtualScrollContainer.appendChild(this.virtualScrollContent);
    npcList.appendChild(this.virtualScrollContainer);
    this.virtualScrollContainer.onscroll = () => {
      this.scrollTop = this.virtualScrollContainer.scrollTop;
      this.updateVirtualList();
    };
    this.panelContent.appendChild(npcList);
    this.updateVirtualList();
  }
  clearLog() {
    this.data.dropData = {};
    this.attackedNPCs.clear();
    this.npcDataCache.clear();
    this.pendingDeaths.clear();
    this.lastGroundItems.clear();
    this.groundItemTimestamps.clear();
    this.processedDeaths.clear();
    this.searchQuery = "";
    this.scrollTop = 0;
    this.updatePanelContent();
    this.clearDatabase();
  }
  removeNPCFromLog(defId) {
    if (this.data.dropData[defId]) {
      delete this.data.dropData[defId];
      this.updatePanelContent();
    }
  }
  getFilteredData() {
    this.ensureObjectStore();
    const uncleanData = Array.from(Object.entries(this.data.dropData));
    const allData = uncleanData.filter((item) => item[1] !== null);
    if (!this.searchQuery) {
      return allData.sort(
        ([, a], [, b]) => {
          if (!a || !b) {
            return 0;
          }
          return b.lastUpdated - a.lastUpdated;
        }
      );
    }
    return allData.filter(([defId, killData]) => {
      if (killData.name.toLowerCase().includes(this.searchQuery)) {
        return true;
      }
      for (const [itemId, dropData] of Object.entries(
        killData.drops
      )) {
        if (dropData.name.toLowerCase().includes(this.searchQuery)) {
          return true;
        }
      }
      return false;
    }).sort(([, a], [, b]) => {
      if (!a || !b) {
        return 0;
      }
      return b.lastUpdated - a.lastUpdated;
    });
  }
  updateVirtualList() {
    if (!this.virtualScrollContent || !this.virtualScrollContainer) return;
    this.filteredData = this.getFilteredData();
    if (!this.filteredData || this.filteredData.length === 0) {
      this.virtualScrollContent.innerHTML = `
                <div class="drop-log-empty">
                    ${!this.data.dropData || Object.keys(this.data.dropData).length === 0 ? "No kills recorded yet. Start fighting some NPCs!" : "No results found for your search."}
                </div>
            `;
      return;
    }
    const containerHeight = this.virtualScrollContainer.clientHeight;
    const totalHeight = this.filteredData.length * this.itemHeight;
    const startIndex = Math.max(
      0,
      Math.floor(this.scrollTop / this.itemHeight) - 1
    );
    const visibleCount = Math.ceil(containerHeight / this.itemHeight);
    const actualStartIndex = Math.max(
      0,
      Math.min(startIndex, this.filteredData.length - visibleCount - 3)
    );
    const actualEndIndex = Math.min(
      actualStartIndex + visibleCount + 3,
      this.filteredData.length
    );
    const spacer = document.createElement("div");
    spacer.className = "drop-log-virtual-spacer";
    spacer.style.height = `${totalHeight}px`;
    const visibleContainer = document.createElement("div");
    visibleContainer.className = "drop-log-virtual-items";
    visibleContainer.style.transform = `translateY(${actualStartIndex * this.itemHeight}px)`;
    for (let i = actualStartIndex; i < actualEndIndex; i++) {
      const fd = this.filteredData[i];
      if (fd) {
        const defId = fd[0];
        const killData = fd[1];
        if (killData) {
          const npcEntry = this.createNPCEntry(defId, killData);
          visibleContainer.appendChild(npcEntry);
        }
      }
    }
    this.virtualScrollContent.innerHTML = "";
    this.virtualScrollContent.appendChild(spacer);
    this.virtualScrollContent.appendChild(visibleContainer);
  }
  createNPCEntry(defId, killData) {
    const npcEntry = document.createElement("div");
    npcEntry.className = "drop-log-npc-entry";
    const npcHeader = document.createElement("div");
    npcHeader.className = "drop-log-npc-header";
    npcHeader.innerHTML = `
            <span class="npc-name">${killData.name}</span>
            <span class="kill-count">${killData.killCount} kills</span>
        `;
    const removeButton = document.createElement("button");
    removeButton.className = "drop-log-npc-remove";
    removeButton.textContent = "\xD7";
    removeButton.title = `Remove ${killData.name} from drop log`;
    removeButton.onclick = (e) => {
      e.stopPropagation();
      this.removeNPCFromLog(defId);
    };
    npcHeader.appendChild(removeButton);
    npcEntry.appendChild(npcHeader);
    const dropsList = document.createElement("div");
    dropsList.className = "drop-log-drops";
    let sortedDrops = [];
    if (killData.drops) {
      sortedDrops = Object.entries(killData.drops).sort(
        (a, b) => (b[1]?.quantity || 0) - (a[1]?.quantity || 0)
      );
    }
    for (const [itemId, dropData] of sortedDrops) {
      const dropItem = document.createElement("div");
      dropItem.className = "drop-log-drop-item";
      const sprite = document.createElement("div");
      sprite.className = "drop-log-item-sprite";
      try {
        const pos = this.gameHooks?.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
          parseInt(itemId)
        );
        if (pos) {
          sprite.style.backgroundPosition = pos;
        }
      } catch (error) {
        console.error("Error getting item sprite", error);
      }
      const info = document.createElement("div");
      info.className = "drop-log-item-info";
      info.innerHTML = `
                <span class="item-name">${dropData.name}</span>
                <span class="item-quantity">${dropData.quantity.toLocaleString()} total (${dropData.totalDropped} drops)</span>
            `;
      dropItem.appendChild(sprite);
      dropItem.appendChild(info);
      dropsList.appendChild(dropItem);
    }
    if (!killData.drops || Object.keys(killData.drops).length === 0) {
      const noDrops = document.createElement("div");
      noDrops.className = "drop-log-no-drops";
      noDrops.textContent = "No drops recorded";
      dropsList.appendChild(noDrops);
    }
    npcEntry.appendChild(dropsList);
    return npcEntry;
  }
  ensureObjectStore() {
    try {
      if (!this.data.dropTable) {
        this.data.dropTable = {};
      }
      return true;
    } catch (error) {
      console.error("Error ensuring object store", error);
      return false;
    }
  }
  clearDatabase() {
    try {
      if (!this.ensureObjectStore()) return;
      this.data.dropTable = {};
    } catch (error) {
      console.error("Error clearing database", error);
    }
  }
  addCSSStyles() {
    const style = document.createElement("style");
    style.setAttribute("data-drop-log", "true");
    style.textContent = `
            /* Ensure panel takes full width and height */
            .drop-log-panel {
                width: 100% !important;
                height: 100% !important;
                display: flex;
                flex-direction: column;
            }

            .drop-log-header {
                padding: 10px;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                flex-shrink: 0;
            }

            .drop-log-header h3 {
                margin: 0 0 8px 0;
                color: #fff;
                font-size: 16px;
            }

            .drop-log-stats {
                display: flex;
                gap: 15px;
                font-size: 12px;
                color: #aaa;
            }

            .drop-log-login-message {
                text-align: center;
                padding: 20px;
                color: #aaa;
                font-style: italic;
            }

            .drop-log-login-message p {
                margin: 8px 0;
                font-size: 14px;
            }

            .drop-log-controls {
                padding: 0 10px 10px 10px;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                flex-shrink: 0;
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }

            .drop-log-search {
                flex: 1;
                min-width: 150px;
                padding: 6px 10px;
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid #555;
                border-radius: 4px;
                color: #fff;
                font-size: 12px;
            }

            .drop-log-search::placeholder {
                color: #888;
            }

            .drop-log-search:focus {
                outline: none;
                border-color: #4a9eff;
                box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
            }

            .drop-log-clear-btn {
                background: #dc3545;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 12px;
            }

            .drop-log-clear-btn:hover {
                background: #c82333;
            }

            .drop-log-list {
                flex: 1;
                min-height: 0;
                position: relative;
            }

            .drop-log-virtual-container {
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                position: relative;
                scroll-behavior: smooth;
            }

            .drop-log-virtual-content {
                position: relative;
                min-height: 100%;
            }

            .drop-log-virtual-spacer {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                pointer-events: none;
                z-index: 1;
            }

            .drop-log-virtual-items {
                position: relative;
                z-index: 2;
            }



            .drop-log-npc-entry {
                margin-bottom: 15px;
                border: 1px solid #333;
                border-radius: 5px;
                background: rgba(0, 0, 0, 0.3);
            }

            .drop-log-npc-header {
                padding: 8px 35px 8px 10px;
                background: rgba(74, 158, 255, 0.1);
                border-bottom: 1px solid #333;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }

            .drop-log-npc-remove {
                position: absolute;
                top: 50%;
                right: 8px;
                transform: translateY(-50%);
                transform-origin: center;
                background: #dc3545;
                color: white;
                border: none;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
                z-index: 10;
                transition: background-color 0.2s ease, transform 0.2s ease;
            }

            .drop-log-npc-remove:hover {
                background: #c82333;
                transform: translateY(-50%) scale(1.1);
            }

            .npc-name {
                font-weight: bold;
                color: #4a9eff;
                font-size: 14px;
            }

            .kill-count {
                color: #ffd700;
                font-size: 12px;
            }

            .drop-log-drops {
                padding: 8px;
            }

            .drop-log-drop-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 6px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .drop-log-drop-item:last-child {
                border-bottom: none;
            }

            .drop-log-item-sprite {
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: var(--hs-url-inventory-items-width) var(--hs-url-inventory-items-height);
                background-image: var(--hs-url-inventory-items);
                height: var(--hs-inventory-item-size);
                width: var(--hs-inventory-item-size);
                border: 1px solid #555;
                border-radius: 3px;
                flex-shrink: 0;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
            }

            .drop-log-item-info {
                flex: 1;
                display: flex;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
            }

            .item-name {
                color: #fff;
                font-size: 13px;
                font-weight: bold;
            }

            .item-quantity {
                color: #aaa;
                font-size: 11px;
            }

            .drop-log-no-drops, .drop-log-empty {
                text-align: center;
                color: #666;
                font-style: italic;
                padding: 20px;
            }
        `;
    document.head.appendChild(style);
  }
  injectSpriteStyles() {
    if (!this.panelContent) return;
    try {
      const screenMask = document.getElementById("hs-screen-mask");
      if (!screenMask) return;
      const computedStyle = getComputedStyle(screenMask);
      const cssVariables = [
        "--hs-url-inventory-items",
        "--hs-url-inventory-items-outline",
        "--hs-url-inventory-items-width",
        "--hs-url-inventory-items-height",
        "--hs-inventory-item-size",
        "--hs-url-icons"
      ];
      let styleString = "";
      cssVariables.forEach((variable) => {
        const value = computedStyle.getPropertyValue(variable);
        if (value) {
          styleString += `${variable}: ${value}; `;
        }
      });
      if (styleString) {
        this.panelContent.style.cssText += styleString;
      }
    } catch (error) {
      console.error("Error injecting sprite styles", error);
    }
  }
  initializePlugin() {
    this.createPanel();
    if (!document.querySelector("style[data-drop-log]")) {
      this.addCSSStyles();
    }
    this.injectSpriteStyles();
  }
  disablePlugin() {
    for (const entityId of this.npcHealthTrackers.keys()) {
      this.cleanupHealthTracker(entityId);
    }
    this.attackedNPCs.clear();
    this.npcDataCache.clear();
    this.npcHealthTrackers.clear();
    this.pendingDeaths.clear();
    this.lastGroundItems.clear();
    this.groundItemTimestamps.clear();
    this.processedDeaths.clear();
  }
  stop() {
    for (const entityId of this.npcHealthTrackers.keys()) {
      this.cleanupHealthTracker(entityId);
    }
    this.attackedNPCs.clear();
    this.npcDataCache.clear();
    this.npcHealthTrackers.clear();
    this.pendingDeaths.clear();
    this.lastGroundItems.clear();
    this.groundItemTimestamps.clear();
    this.processedDeaths.clear();
    if (this.panelContent) {
      this.updatePanelContent();
    }
    try {
      this.panelManager.removeMenuItem("\u{1F4CB}");
    } catch (error) {
    }
    const style = document.querySelector("style[data-drop-log]");
    if (style) {
      style.remove();
    }
  }
};
export {
  DropLog as default
};
