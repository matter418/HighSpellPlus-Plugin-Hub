// src/DefinitionsPanel.ts
import { Plugin, PanelManager } from "@highlite/plugin-api";
var DefinitionsPanel = class extends Plugin {
  constructor() {
    super(...arguments);
    this.pluginName = "Definitions Panel";
    this.author = "Highlite";
    this.panelManager = new PanelManager();
    this.panelContent = null;
    this.itemListContainer = null;
    this.searchInput = null;
    this.allItems = [];
    this.filteredItems = [];
    this.allNpcs = [];
    this.filteredNpcs = [];
    this.currentPage = 0;
    this.itemsPerPage = 50;
    this.selectedItemId = null;
    this.itemsLoaded = false;
    this.npcsLoaded = false;
    this.modalOverlay = null;
    this.isLoggedIn = false;
    this.currentView = "items";
    this.itemToggle = null;
    this.npcToggle = null;
    this.lootData = null;
    this.spriteReferences = /* @__PURE__ */ new Map();
    // Track sprite URL usage count
    this.spriteContexts = /* @__PURE__ */ new Map();
    // Track which contexts use each URL
    this.activeSpriteUrls = /* @__PURE__ */ new Set();
  }
  // Track URLs we've created
  init() {
    this.log("Definitions Panel initialized");
    window.highliteItemPanel = this;
  }
  start() {
    this.log("Definitions Panel started");
    if (!this.settings.enable.value) {
      return;
    }
    this.createPanel();
    this.addStyles();
    this.isLoggedIn = true;
    this.injectSpriteStyles(this.panelContent);
    this.loadAllItems();
    this.loadAllNpcs();
    this.loadLootData();
  }
  createPanel() {
    try {
      const panelItems = this.panelManager.requestMenuItem(
        "\u{1F4E6}",
        "Definitions"
      );
      if (!panelItems) {
        this.error("Failed to create Definition panel menu item");
        return;
      }
      this.panelContent = panelItems[1];
      this.panelContent.className = "item-definition-panel";
      this.panelContent.style.width = "100%";
      this.panelContent.style.height = "100%";
      this.panelContent.style.display = "flex";
      this.panelContent.style.flexDirection = "column";
      this.buildPanelContent();
    } catch (error) {
      this.error(`Failed to create panel: ${error}`);
    }
  }
  buildPanelContent() {
    if (!this.panelContent) return;
    this.panelContent.innerHTML = "";
    const header = document.createElement("div");
    header.className = "item-panel-header";
    const titleSection = document.createElement("div");
    titleSection.className = "header-title-section";
    titleSection.innerHTML = "<h3>Definitions</h3>";
    header.appendChild(titleSection);
    const toggleContainer = document.createElement("div");
    toggleContainer.className = "view-toggle-container";
    this.itemToggle = document.createElement("button");
    this.itemToggle.className = "view-toggle-button active";
    this.itemToggle.textContent = "Items";
    this.itemToggle.onclick = () => this.switchView("items");
    this.npcToggle = document.createElement("button");
    this.npcToggle.className = "view-toggle-button";
    this.npcToggle.textContent = "NPCs";
    this.npcToggle.onclick = () => this.switchView("npcs");
    toggleContainer.appendChild(this.itemToggle);
    toggleContainer.appendChild(this.npcToggle);
    header.appendChild(toggleContainer);
    const statsSection = document.createElement("div");
    statsSection.className = "item-panel-stats";
    statsSection.innerHTML = `
            <span>Total <span class="stat-type">Items</span>: <span id="total-items">0</span></span>
            <span>Showing: <span id="showing-items">0</span></span>
        `;
    header.appendChild(statsSection);
    this.panelContent.appendChild(header);
    const searchContainer = document.createElement("div");
    searchContainer.className = "item-panel-search-container";
    this.panelContent.appendChild(searchContainer);
    this.searchInput = document.createElement("input");
    this.searchInput.type = "text";
    this.searchInput.className = "item-panel-search";
    this.searchInput.placeholder = "Search items by name or ID...";
    this.searchInput.oninput = () => this.filterCurrent();
    searchContainer.appendChild(this.searchInput);
    const listWrapper = document.createElement("div");
    listWrapper.className = "item-panel-list-wrapper";
    this.panelContent.appendChild(listWrapper);
    this.itemListContainer = document.createElement("div");
    this.itemListContainer.className = "item-list-container";
    listWrapper.appendChild(this.itemListContainer);
    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";
    listWrapper.appendChild(paginationContainer);
    this.showLoadingState();
  }
  switchView(view) {
    this.cleanupSidebarSprites();
    this.currentView = view;
    this.currentPage = 0;
    if (this.itemToggle && this.npcToggle) {
      if (view === "items") {
        this.itemToggle.classList.add("active");
        this.npcToggle.classList.remove("active");
      } else {
        this.itemToggle.classList.remove("active");
        this.npcToggle.classList.add("active");
      }
    }
    if (this.searchInput) {
      this.searchInput.placeholder = view === "items" ? "Search items by name or ID..." : "Search NPCs by name or ID...";
      this.searchInput.value = "";
    }
    const statType = document.querySelector(".stat-type");
    if (statType) {
      statType.textContent = view === "items" ? "Items" : "NPCs";
    }
    this.filterCurrent();
  }
  filterCurrent() {
    if (this.currentView === "items") {
      this.filterItems();
    } else {
      this.filterNpcs();
    }
  }
  injectSpriteStyles(element) {
    if (!element) return;
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
        "--hs-url-icons",
        "--hs-url-small-creature1",
        "--hs-url-medium-creature1",
        "--hs-url-large-creature1",
        "--hs-url-largest-creature1"
      ];
      let styleString = "";
      cssVariables.forEach((variable) => {
        const value = computedStyle.getPropertyValue(variable);
        if (value) {
          styleString += `${variable}: ${value}; `;
        }
      });
      if (styleString) {
        element.style.cssText += styleString;
      }
    } catch (error) {
      this.error(`Error injecting sprite styles: ${error}`);
    }
  }
  loadAllItems() {
    if (this.itemsLoaded) return;
    try {
      const itemDefMap = this.gameHooks.ItemDefinitionManager?._itemDefMap;
      if (!itemDefMap) {
        this.error("ItemDefMap not found");
        return;
      }
      this.allItems = [];
      itemDefMap.forEach((itemDef) => {
        if (itemDef) {
          this.allItems.push(itemDef);
        }
      });
      this.allItems.sort((a, b) => a._id - b._id);
      this.filteredItems = [...this.allItems];
      this.itemsLoaded = true;
      if (this.currentView === "items") {
        this.updateStats();
        this.renderItemList();
      }
      this.log(`Loaded ${this.allItems.length} items`);
    } catch (error) {
      this.error(`Failed to load items: ${error}`);
    }
  }
  loadAllNpcs() {
    if (this.npcsLoaded) return;
    try {
      const npcDefMap = this.gameHooks?.NpcDefinitionManager?._npcDefMap;
      if (!npcDefMap) {
        this.error("NpcDefMap not found");
        return;
      }
      this.allNpcs = [];
      npcDefMap.forEach((npcDef) => {
        if (npcDef) {
          this.allNpcs.push(npcDef);
        }
      });
      this.allNpcs.sort((a, b) => a._id - b._id);
      this.filteredNpcs = [...this.allNpcs];
      this.npcsLoaded = true;
      if (this.currentView === "npcs") {
        this.updateStats();
        this.renderNpcList();
      }
      this.log(`Loaded ${this.allNpcs.length} NPCs`);
    } catch (error) {
      this.error(`Failed to load NPCs: ${error}`);
    }
  }
  async loadLootData() {
    try {
      this.log("Loading loot data...");
      const response = await fetch(
        "https://highspell.com:8887/static/npcloot.17.carbon"
      );
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText}`
        );
      }
      this.lootData = await response.json();
      this.log("Loot data loaded successfully");
    } catch (error) {
      this.error(`Error loading loot data: ${error}`);
    }
  }
  generateDropsSection(lootTableId, npcName) {
    if (!this.lootData) {
      return `
                <div class="detail-section">
                    <h3>Drops</h3>
                    <p class="detail-note">Loot Table ID: ${lootTableId} (Loot data not loaded)</p>
                </div>
            `;
    }
    const npcLootTable = this.lootData.npcLootTables?.find(
      (table) => table._id === lootTableId
    );
    if (!npcLootTable) {
      return `
                <div class="detail-section">
                    <h3>Drops</h3>
                    <p class="detail-note">Loot Table ID: ${lootTableId} (No loot data found)</p>
                </div>
            `;
    }
    let html = `
            <div class="detail-section">
                <h3>Drops</h3>
                <p class="detail-note">Loot Table ID: ${lootTableId}</p>
                <div class="drops-section-container">
        `;
    if (npcLootTable.baseLoot && npcLootTable.baseLoot.length > 0) {
      html += `
                <div class="loot-subsection">
                    <h4>Guaranteed Drops</h4>
                    <div class="loot-grid">
            `;
      npcLootTable.baseLoot.forEach((item) => {
        html += this.generateLootItemHtml(item, "100%");
      });
      html += `
                    </div>
                </div>
            `;
    }
    if (npcLootTable.loot && npcLootTable.loot.length > 0) {
      html += `
                <div class="loot-subsection">
                    <h4>Possible Drops</h4>
                    <div class="loot-grid">
            `;
      const sortedLoot = [...npcLootTable.loot].sort(
        (a, b) => (b.odds || 0) - (a.odds || 0)
      );
      sortedLoot.forEach((item) => {
        const percentage = item.odds ? `${(item.odds * 100).toFixed(2)}%` : "Unknown";
        html += this.generateLootItemHtml(item, percentage);
      });
      html += `
                    </div>
                </div>
            `;
    }
    if (npcLootTable.rareLootProbability && npcLootTable.rareLootProbability > 0 && this.lootData.rareLootTable) {
      html += `
                <div class="loot-subsection">
                    <h4>Rare Drops (${(npcLootTable.rareLootProbability * 100).toFixed(2)}% chance to roll)</h4>
                    <div class="loot-grid">
            `;
      if (this.lootData.rareLootTable.loot) {
        const sortedRareLoot = [
          ...this.lootData.rareLootTable.loot
        ].sort((a, b) => (b.odds || 0) - (a.odds || 0));
        sortedRareLoot.forEach((item) => {
          const basePercentage = item.odds ? item.odds * 100 : 0;
          const actualPercentage = basePercentage * npcLootTable.rareLootProbability;
          const percentage = `${actualPercentage.toFixed(4)}%`;
          html += this.generateLootItemHtml(item, percentage, true);
        });
      }
      html += `
                    </div>
                </div>
            `;
    }
    if (npcLootTable.rootLoot && this.lootData.rootLootTables) {
      const rootTable = this.lootData.rootLootTables.find(
        (table) => table._id === npcLootTable.rootLoot.tableId
      );
      if (rootTable) {
        html += `
                    <div class="loot-subsection">
                        <h4>Root Drops (${(npcLootTable.rootLoot.probability * 100).toFixed(2)}% chance to roll)</h4>
                        <p class="detail-note">${rootTable.desc || "Root loot table"}</p>
                        <div class="loot-grid">
                `;
        if (rootTable.loot) {
          const sortedRootLoot = [...rootTable.loot].sort(
            (a, b) => (b.odds || 0) - (a.odds || 0)
          );
          sortedRootLoot.forEach((item) => {
            const basePercentage = item.odds ? item.odds * 100 : 0;
            const actualPercentage = basePercentage * npcLootTable.rootLoot.probability;
            const percentage = `${actualPercentage.toFixed(4)}%`;
            html += this.generateLootItemHtml(
              item,
              percentage,
              false,
              true
            );
          });
        }
        html += `
                        </div>
                    </div>
                `;
      }
    }
    if (npcLootTable.treasureMap) {
      html += `
                <div class="loot-subsection">
                    <h4>Treasure Map</h4>
                    <div class="loot-special">
                        <span class="treasure-map-info">
                            Level ${npcLootTable.treasureMap.level} Treasure Map - ${(npcLootTable.treasureMap.odds * 100).toFixed(4)}% chance
                        </span>
                    </div>
                </div>
            `;
    }
    html += `
                </div>
            </div>
        `;
    return html;
  }
  generateLootItemHtml(item, percentage, isRare = false, isRoot = false) {
    try {
      const itemDef = this.gameHooks.ItemDefinitionManager._itemDefMap?.get(
        item.itemId
      );
      const itemName = itemDef?._nameCapitalized || itemDef?._name || item.name || `Item ${item.itemId}`;
      const itemPos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
        item.itemId
      );
      const spriteStyle = itemPos ? `style="background-position: ${itemPos};"` : "";
      let cssClass = "loot-item";
      if (isRare) cssClass += " rare-loot";
      if (isRoot) cssClass += " root-loot";
      if (item.isIOU) cssClass += " iou-item";
      const amountText = item.amount > 1 ? `${item.amount}x` : "";
      const iouText = item.isIOU ? " (IOU)" : "";
      return `
                <div class="${cssClass}" data-item-id="${item.itemId}">
                    <div class="loot-item-sprite" ${spriteStyle}></div>
                    <div class="loot-item-info">
                        <div class="loot-item-name">${itemName}</div>
                        <div class="loot-item-amount">${amountText}${iouText}</div>
                        <div class="loot-item-odds">${percentage}</div>
                    </div>
                </div>
            `;
    } catch (error) {
      return `
                <div class="loot-item" data-item-id="${item.itemId}">
                    <div class="loot-item-sprite"></div>
                    <div class="loot-item-info">
                        <div class="loot-item-name">${item.name || `Item ${item.itemId}`}</div>
                        <div class="loot-item-amount">${item.amount > 1 ? `${item.amount}x` : ""}${item.isIOU ? " (IOU)" : ""}</div>
                        <div class="loot-item-odds">${percentage}</div>
                    </div>
                </div>
            `;
    }
  }
  generateNpcDropsSection(itemId) {
    if (!this.lootData || !this.allNpcs || this.allNpcs.length === 0) {
      return "";
    }
    const droppingNpcs = [];
    this.allNpcs.forEach((npc) => {
      if (!npc._combat || !npc._combat._lootTableId || npc._combat._lootTableId === -1) {
        return;
      }
      const npcLootTable = this.lootData.npcLootTables?.find(
        (table) => table._id === npc._combat._lootTableId
      );
      if (!npcLootTable) {
        return;
      }
      const dropInfo = [];
      if (npcLootTable.baseLoot) {
        npcLootTable.baseLoot.forEach((item) => {
          if (item.itemId === itemId) {
            dropInfo.push({
              type: "base",
              percentage: "100%",
              amount: item.amount || 1,
              isIOU: item.isIOU || false
            });
          }
        });
      }
      if (npcLootTable.loot) {
        npcLootTable.loot.forEach((item) => {
          if (item.itemId === itemId) {
            const percentage = item.odds ? `${(item.odds * 100).toFixed(2)}%` : "Unknown";
            dropInfo.push({
              type: "regular",
              percentage,
              amount: item.amount || 1,
              isIOU: item.isIOU || false
            });
          }
        });
      }
      if (npcLootTable.rareLootProbability && npcLootTable.rareLootProbability > 0 && this.lootData.rareLootTable?.loot) {
        this.lootData.rareLootTable.loot.forEach((item) => {
          if (item.itemId === itemId) {
            const basePercentage = item.odds ? item.odds * 100 : 0;
            const actualPercentage = basePercentage * npcLootTable.rareLootProbability;
            dropInfo.push({
              type: "rare",
              percentage: `${actualPercentage.toFixed(4)}%`,
              amount: item.amount || 1,
              isIOU: item.isIOU || false
            });
          }
        });
      }
      if (npcLootTable.rootLoot && this.lootData.rootLootTables) {
        const rootTable = this.lootData.rootLootTables.find(
          (table) => table._id === npcLootTable.rootLoot.tableId
        );
        if (rootTable?.loot) {
          rootTable.loot.forEach((item) => {
            if (item.itemId === itemId) {
              const basePercentage = item.odds ? item.odds * 100 : 0;
              const actualPercentage = basePercentage * npcLootTable.rootLoot.probability;
              dropInfo.push({
                type: "root",
                percentage: `${actualPercentage.toFixed(4)}%`,
                amount: item.amount || 1,
                isIOU: item.isIOU || false
              });
            }
          });
        }
      }
      if (dropInfo.length > 0) {
        droppingNpcs.push({ npc, dropInfo });
      }
    });
    if (droppingNpcs.length === 0) {
      return "";
    }
    droppingNpcs.sort((a, b) => {
      const getBestRate = (drops) => {
        return Math.max(
          ...drops.map((drop) => {
            if (drop.percentage === "100%") return 100;
            return parseFloat(drop.percentage.replace("%", "")) || 0;
          })
        );
      };
      return getBestRate(b.dropInfo) - getBestRate(a.dropInfo);
    });
    let html = `
            <div class="detail-section" id="npc-drops-section">
                <h3>Dropped By</h3>
                <p class="detail-note">NPCs that drop this item (${droppingNpcs.length} found)</p>
                <div class="npc-drops-container" id="npc-drops-container">
        `;
    droppingNpcs.forEach(({ npc, dropInfo }) => {
      const combatLevel = npc._combat?._combat?._combatLevel || "?";
      html += `
                <div class="npc-drop-item" data-npc-id="${npc._id}">
                    <div class="npc-drop-sprite-wrapper">
                        <div class="npc-drop-sprite" data-npc-sprite="${npc._id}"></div>
                        <div class="npc-drop-level-badge">${combatLevel}</div>
                    </div>
                    <div class="npc-drop-info">
                        <div class="npc-drop-name">${npc._nameCapitalized || npc._name || `NPC ${npc._id}`}</div>
                        <div class="npc-drop-details">
            `;
      dropInfo.forEach((drop, index) => {
        let typeLabel = "";
        let typeClass = "";
        switch (drop.type) {
          case "base":
            typeLabel = "Guaranteed";
            typeClass = "guaranteed";
            break;
          case "regular":
            typeLabel = "Regular";
            typeClass = "regular";
            break;
          case "rare":
            typeLabel = "Rare";
            typeClass = "rare";
            break;
          case "root":
            typeLabel = "Root";
            typeClass = "root";
            break;
        }
        const amountText = drop.amount > 1 ? `${drop.amount}x ` : "";
        const iouText = drop.isIOU ? " (IOU)" : "";
        html += `
                    <div class="npc-drop-type ${typeClass}">
                        ${typeLabel}: ${amountText}${drop.percentage}${iouText}
                    </div>
                `;
      });
      html += `
                        </div>
                    </div>
                </div>
            `;
    });
    html += `
                </div>
            </div>
        `;
    return html;
  }
  createNpcDropSprites(container) {
    if (!this.lootData || !this.allNpcs) return;
    const npcSpriteElements = container.querySelectorAll("[data-npc-sprite]");
    npcSpriteElements.forEach((spriteElement) => {
      const npcId = parseInt(
        spriteElement.getAttribute("data-npc-sprite") || "0"
      );
      const npc = this.allNpcs.find((n) => n._id === npcId);
      if (!npc) return;
      const typeInfo = this.getNpcTypeInfo(npc);
      if (typeInfo.isCreature && typeInfo.creatureType !== void 0) {
        const creatureType = typeInfo.creatureType;
        const creatureSpriteId = typeInfo.creatureSpriteId || 0;
        const sizeClass = this.getCreatureSizeClass(creatureType);
        spriteElement.className = `npc-drop-sprite npc-sprite-${sizeClass}`;
        spriteElement.dataset.creatureType = creatureType.toString();
        const spriteContent = document.createElement("div");
        spriteContent.className = "sprite-content";
        const spritesheetManager = this.gameHooks?.SpriteSheetManager?.Instance;
        const creatureSpritesheetInfo = spritesheetManager?.CreatureSpritesheetInfo;
        if (creatureSpritesheetInfo && creatureSpritesheetInfo[creatureType]) {
          const sheetIndex = 0;
          const spriteInfo = creatureSpritesheetInfo[creatureType][sheetIndex];
          if (spriteInfo) {
            spriteContent.style.backgroundImage = `url('${spriteInfo.SpritesheetURL}')`;
            spriteContent.style.backgroundSize = "auto";
            spriteContent.style.backgroundRepeat = "no-repeat";
            spriteContent.style.imageRendering = "pixelated";
            const spriteFrameIndex = 15 * creatureSpriteId;
            const spritePos = this.calculateSpritePositionFromId(
              spriteFrameIndex,
              creatureType
            );
            spriteContent.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
            spriteElement.setAttribute(
              "data-sprite-modal",
              "true"
            );
            this.trackSpriteUsage(
              spriteElement,
              spriteInfo.SpritesheetURL,
              "modal"
            );
          } else {
            const spriteFrameIndex = 15 * creatureSpriteId;
            const spritePos = this.calculateSpritePositionFromId(
              spriteFrameIndex,
              creatureType
            );
            spriteContent.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
            spriteContent.style.backgroundRepeat = "no-repeat";
            spriteContent.style.imageRendering = "pixelated";
          }
        } else {
          const spriteFrameIndex = 15 * creatureSpriteId;
          const spritePos = this.calculateSpritePositionFromId(
            spriteFrameIndex,
            creatureType
          );
          spriteContent.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
          spriteContent.style.backgroundRepeat = "no-repeat";
          spriteContent.style.imageRendering = "pixelated";
        }
        spriteElement.innerHTML = "";
        spriteElement.appendChild(spriteContent);
      } else if (typeInfo.isHuman) {
        spriteElement.className = "npc-drop-sprite npc-sprite-human";
        spriteElement.dataset.npcId = npc._id.toString();
        const spritesheetManager = document.highlite.gameHooks.SpriteSheetManager.Instance;
        const humanSpriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(npc._id);
        if (humanSpriteInfo && humanSpriteInfo.SpritesheetURL) {
          spriteElement.style.backgroundImage = `url('${humanSpriteInfo.SpritesheetURL}')`;
          spriteElement.style.backgroundPosition = "-71px 0px";
          spriteElement.style.backgroundSize = "auto";
          spriteElement.setAttribute(
            "data-sprite-modal",
            "true"
          );
          this.trackSpriteUsage(
            spriteElement,
            humanSpriteInfo.SpritesheetURL,
            "modal"
          );
        } else {
          spriteElement.innerHTML = "\u{1F464}";
          spriteElement.style.backgroundColor = "#f0f0f0";
          spriteElement.style.display = "flex";
          spriteElement.style.alignItems = "center";
          spriteElement.style.justifyContent = "center";
          spriteElement.style.fontSize = "20px";
          spriteElement.style.color = "#666";
          this.requestHumanSprite(npc);
          const pollInterval = setInterval(() => {
            const spriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(
              npc._id
            );
            if (spriteInfo && spriteInfo.SpritesheetURL) {
              clearInterval(pollInterval);
              const targetElement = container.querySelector(
                `[data-npc-sprite="${npc._id}"]`
              );
              if (targetElement) {
                targetElement.innerHTML = "";
                targetElement.style.backgroundImage = `url('${spriteInfo.SpritesheetURL}')`;
                targetElement.style.backgroundPosition = "-70px 0px";
                targetElement.style.backgroundSize = "auto";
                targetElement.style.backgroundColor = "transparent";
                targetElement.setAttribute(
                  "data-sprite-modal",
                  "true"
                );
                this.trackSpriteUsage(
                  targetElement,
                  spriteInfo.SpritesheetURL,
                  "modal"
                );
              }
            }
          }, 100);
          setTimeout(() => clearInterval(pollInterval), 5e3);
        }
      } else {
        spriteElement.className = "npc-drop-sprite npc-sprite-unknown";
        spriteElement.innerHTML = "?";
      }
    });
  }
  getNpcTypeInfo(npc) {
    if (npc._creatureAppearance) {
      return {
        isCreature: true,
        isHuman: false,
        creatureType: npc._creatureAppearance._creatureType || 0,
        creatureSpriteId: npc._creatureAppearance._creatureSpriteId || 0
      };
    }
    if (npc._creatureType !== void 0 && npc._creatureType !== null && npc._creatureType !== -1) {
      return {
        isCreature: true,
        isHuman: false,
        creatureType: npc._creatureType,
        creatureSpriteId: 0
        // Default sprite ID if not specified
      };
    }
    if (npc._creatureType === -1 || npc._appearance && (npc._appearance._hairId !== void 0 || npc._appearance._bodyId !== void 0 || npc._appearance._equippedItems)) {
      return { isCreature: false, isHuman: true };
    }
    return { isCreature: false, isHuman: false };
  }
  updateStats() {
    const totalEl = document.getElementById("total-items");
    const showingEl = document.getElementById("showing-items");
    if (this.currentView === "items") {
      if (totalEl) totalEl.textContent = this.allItems.length.toString();
      if (showingEl)
        showingEl.textContent = this.filteredItems.length.toString();
    } else {
      if (totalEl) totalEl.textContent = this.allNpcs.length.toString();
      if (showingEl)
        showingEl.textContent = this.filteredNpcs.length.toString();
    }
  }
  filterItems() {
    if (!this.searchInput) return;
    const searchTerm = this.searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
      this.filteredItems = [...this.allItems];
    } else {
      this.filteredItems = this.allItems.filter((item) => {
        const idMatch = item._id.toString().includes(searchTerm);
        const nameMatch = item._name?.toLowerCase().includes(searchTerm) || item._nameCapitalized?.toLowerCase().includes(searchTerm);
        return idMatch || nameMatch;
      });
    }
    this.currentPage = 0;
    this.updateStats();
    this.renderItemList();
  }
  filterNpcs() {
    if (!this.searchInput) return;
    const searchTerm = this.searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
      this.filteredNpcs = [...this.allNpcs];
    } else {
      this.filteredNpcs = this.allNpcs.filter((npc) => {
        const idMatch = npc._id.toString().includes(searchTerm);
        const nameMatch = npc._name?.toLowerCase().includes(searchTerm) || npc._nameCapitalized?.toLowerCase().includes(searchTerm);
        return idMatch || nameMatch;
      });
    }
    this.currentPage = 0;
    this.updateStats();
    this.renderNpcList();
  }
  renderItemList() {
    if (!this.itemListContainer) return;
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.filteredItems.length
    );
    const pageItems = this.filteredItems.slice(startIndex, endIndex);
    this.cleanupSidebarSprites();
    this.itemListContainer.innerHTML = "";
    pageItems.forEach((item) => {
      const itemElement = this.createItemElement(item);
      if (this.itemListContainer) {
        this.itemListContainer.appendChild(itemElement);
      }
    });
    this.updatePagination();
    if (this.filteredItems.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "item-no-results";
      noResults.textContent = this.searchInput?.value ? "No items found" : "No items loaded";
      this.itemListContainer.appendChild(noResults);
    }
  }
  renderNpcList() {
    if (!this.itemListContainer) return;
    if (this.itemListContainer.children.length > 0) {
      const startIndex2 = this.currentPage * this.itemsPerPage;
      const endIndex2 = Math.min(
        startIndex2 + this.itemsPerPage,
        this.filteredNpcs.length
      );
      const pageNpcs2 = this.filteredNpcs.slice(startIndex2, endIndex2);
      const newNpcIds = new Set(pageNpcs2.map((npc) => npc._id));
      this.cleanupSidebarSprites(newNpcIds);
    }
    this.itemListContainer.innerHTML = "";
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.filteredNpcs.length
    );
    const pageNpcs = this.filteredNpcs.slice(startIndex, endIndex);
    pageNpcs.forEach((npc) => {
      const npcElement = this.createNpcElement(npc);
      if (this.itemListContainer) {
        this.itemListContainer.appendChild(npcElement);
      }
    });
    this.updatePagination();
    if (this.filteredNpcs.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "item-no-results";
      noResults.textContent = this.searchInput?.value ? "No NPCs found" : "No NPCs loaded";
      this.itemListContainer.appendChild(noResults);
    }
  }
  createItemElement(item) {
    const itemEl = document.createElement("div");
    itemEl.className = "item-list-item";
    itemEl.dataset.itemId = item._id.toString();
    const sprite = document.createElement("div");
    sprite.className = "item-sprite";
    try {
      const pos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
        parseInt(item._id.toString())
      );
      if (pos) {
        sprite.style.backgroundPosition = pos;
      }
    } catch (error) {
    }
    const info = document.createElement("div");
    info.className = "item-info";
    const name = document.createElement("div");
    name.className = "item-name";
    name.textContent = item._nameCapitalized || item._name || `Item ${item._id}`;
    info.appendChild(name);
    const id = document.createElement("div");
    id.className = "item-id";
    id.textContent = `ID: ${item._id}`;
    info.appendChild(id);
    itemEl.appendChild(info);
    itemEl.onclick = () => {
      this.showItemModal(item._id);
    };
    return itemEl;
  }
  createNpcElement(npc) {
    const npcEl = document.createElement("div");
    npcEl.className = "item-list-item npc-list-item";
    npcEl.dataset.npcId = npc._id.toString();
    const spriteWrapper = document.createElement("div");
    spriteWrapper.className = "npc-sprite-wrapper";
    const spriteContainer = document.createElement("div");
    spriteContainer.className = "npc-sprite-container";
    const typeInfo = this.getNpcTypeInfo(npc);
    const sprite = document.createElement("div");
    if (typeInfo.isCreature && typeInfo.creatureType !== void 0) {
      const creatureType = typeInfo.creatureType;
      const creatureSpriteId = typeInfo.creatureSpriteId || 0;
      const sizeClass = this.getCreatureSizeClass(creatureType);
      const spritesheetManager = this.gameHooks?.SpriteSheetManager?.Instance;
      const creatureSpritesheetInfo = spritesheetManager?.CreatureSpritesheetInfo;
      if (creatureSpritesheetInfo && creatureSpritesheetInfo[creatureType]) {
        const sheetIndex = 0;
        const spriteInfo = creatureSpritesheetInfo[creatureType][sheetIndex];
        if (spriteInfo) {
          sprite.className = `npc-sprite npc-sprite-${sizeClass}`;
          sprite.dataset.creatureType = creatureType.toString();
          sprite.style.width = `${spriteInfo.SpriteWidth}px`;
          sprite.style.height = `${spriteInfo.SpriteHeight}px`;
          sprite.style.position = "absolute";
          sprite.style.left = "50%";
          sprite.style.top = "50%";
          let scale = 1;
          if (sizeClass === "medium") scale = 0.7;
          else if (sizeClass === "large") scale = 0.5;
          else if (sizeClass === "largest") scale = 0.35;
          sprite.style.transform = `translate(-50%, -50%) scale(${scale})`;
          sprite.style.backgroundImage = `url('${spriteInfo.SpritesheetURL}')`;
          sprite.style.backgroundSize = "auto";
          const spriteFrameIndex = 15 * creatureSpriteId;
          const spritePos = this.calculateSpritePositionFromId(
            spriteFrameIndex,
            creatureType
          );
          sprite.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
          sprite.setAttribute("data-sprite-sidebar", "true");
          setTimeout(
            () => this.trackSpriteUsage(
              sprite,
              spriteInfo.SpritesheetURL,
              "sidebar"
            ),
            0
          );
        } else {
          sprite.className = `npc-sprite npc-sprite-${sizeClass}`;
          sprite.dataset.creatureType = creatureType.toString();
          const spriteInfo2 = this.getCreatureSpriteInfo(creatureType);
          sprite.style.width = `${spriteInfo2.spriteWidth}px`;
          sprite.style.height = `${spriteInfo2.spriteHeight}px`;
          sprite.style.position = "absolute";
          sprite.style.left = "50%";
          sprite.style.top = "50%";
          let scale = 1;
          if (sizeClass === "medium") scale = 0.7;
          else if (sizeClass === "large") scale = 0.5;
          else if (sizeClass === "largest") scale = 0.35;
          sprite.style.transform = `translate(-50%, -50%) scale(${scale})`;
          const spriteFrameIndex = 15 * creatureSpriteId;
          const spritePos = this.calculateSpritePositionFromId(
            spriteFrameIndex,
            creatureType
          );
          sprite.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
        }
      } else {
        sprite.className = `npc-sprite npc-sprite-${sizeClass}`;
        sprite.dataset.creatureType = creatureType.toString();
        const spriteInfo = this.getCreatureSpriteInfo(creatureType);
        sprite.style.width = `${spriteInfo.spriteWidth}px`;
        sprite.style.height = `${spriteInfo.spriteHeight}px`;
        sprite.style.position = "absolute";
        sprite.style.left = "50%";
        sprite.style.top = "50%";
        let scale = 1;
        if (sizeClass === "medium") scale = 0.7;
        else if (sizeClass === "large") scale = 0.5;
        else if (sizeClass === "largest") scale = 0.35;
        sprite.style.transform = `translate(-50%, -50%) scale(${scale})`;
        const spriteFrameIndex = 15 * creatureSpriteId;
        const spritePos = this.calculateSpritePositionFromId(
          spriteFrameIndex,
          creatureType
        );
        sprite.style.backgroundPosition = `-${spritePos.x}px -${spritePos.y}px`;
      }
    } else if (typeInfo.isHuman) {
      sprite.className = "npc-sprite npc-sprite-human";
      sprite.dataset.npcId = npc._id.toString();
      sprite.style.width = "64px";
      sprite.style.height = "128px";
      sprite.style.position = "absolute";
      sprite.style.left = "50%";
      sprite.style.top = "50%";
      sprite.style.transform = "translate(-50%, -50%) scale(0.7)";
      const spritesheetManager = document.highlite.gameHooks.SpriteSheetManager.Instance;
      const humanSpriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(npc._id);
      if (humanSpriteInfo && humanSpriteInfo.SpritesheetURL) {
        sprite.style.backgroundImage = `url('${humanSpriteInfo.SpritesheetURL}')`;
        sprite.style.backgroundPosition = "-65px 25px";
        sprite.style.backgroundSize = "auto";
        sprite.setAttribute("data-sprite-sidebar", "true");
        setTimeout(
          () => this.trackSpriteUsage(
            sprite,
            humanSpriteInfo.SpritesheetURL,
            "sidebar"
          ),
          0
        );
      } else {
        sprite.innerHTML = "\u{1F464}";
        sprite.style.backgroundColor = "#f0f0f0";
        sprite.style.display = "flex";
        sprite.style.alignItems = "center";
        sprite.style.justifyContent = "center";
        sprite.style.fontSize = "24px";
        this.requestHumanSprite(npc);
        const pollInterval = setInterval(() => {
          const spriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(
            npc._id
          );
          if (spriteInfo && spriteInfo.SpritesheetURL) {
            clearInterval(pollInterval);
            const spriteElement = document.querySelector(
              `.npc-sprite-human[data-npc-id="${npc._id}"]`
            );
            if (spriteElement) {
              spriteElement.innerHTML = "";
              spriteElement.style.backgroundImage = `url('${spriteInfo.SpritesheetURL}')`;
              spriteElement.style.backgroundPosition = "-64px 25px";
              spriteElement.style.backgroundSize = "auto";
              spriteElement.style.backgroundColor = "transparent";
              spriteElement.setAttribute(
                "data-sprite-sidebar",
                "true"
              );
              this.trackSpriteUsage(
                spriteElement,
                spriteInfo.SpritesheetURL,
                "sidebar"
              );
            }
          }
        }, 100);
        setTimeout(() => clearInterval(pollInterval), 5e3);
      }
    } else {
      sprite.className = "npc-sprite npc-sprite-unknown";
      sprite.innerHTML = "?";
    }
    if (npc._combat && npc._combat._combat) {
      const levelBadge = document.createElement("div");
      levelBadge.className = "npc-level-badge";
      levelBadge.textContent = npc._combat._combat._combatLevel || "?";
      spriteWrapper.appendChild(levelBadge);
    }
    const info = document.createElement("div");
    info.className = "item-info";
    const name = document.createElement("div");
    name.className = "item-name";
    name.textContent = npc._nameCapitalized || npc._name || `NPC ${npc._id}`;
    info.appendChild(name);
    const details = document.createElement("div");
    details.className = "item-id";
    details.textContent = `ID: ${npc._id}`;
    if (npc._combat && npc._combat._combat) {
      details.textContent += ` \u2022 Level ${npc._combat._combat._combatLevel}`;
    }
    info.appendChild(details);
    npcEl.appendChild(info);
    npcEl.onclick = () => {
      this.showNpcModal(npc._id);
    };
    return npcEl;
  }
  getCreatureSizeClass(creatureType) {
    switch (creatureType) {
      case 0:
        return "small";
      case 1:
        return "medium";
      case 2:
        return "large";
      case 3:
        return "largest";
      default:
        return "small";
    }
  }
  getCreatureSpriteInfo(creatureType) {
    const sizeClass = this.getCreatureSizeClass(creatureType);
    const spriteDimensions = {
      small: {
        width: 64,
        height: 64,
        sheetWidth: 1920,
        sheetHeight: 192
      },
      medium: {
        width: 64,
        height: 128,
        sheetWidth: 1920,
        sheetHeight: 512
      },
      large: {
        width: 128,
        height: 128,
        sheetWidth: 1920,
        sheetHeight: 512
      },
      largest: {
        width: 256,
        height: 184,
        sheetWidth: 2048,
        sheetHeight: 736
      }
    };
    const dims = spriteDimensions[sizeClass];
    return {
      sizeClass,
      spriteWidth: dims.width,
      spriteHeight: dims.height,
      sheetWidth: dims.sheetWidth,
      sheetHeight: dims.sheetHeight
    };
  }
  calculateSpritePosition(creatureType) {
    const info = this.getCreatureSpriteInfo(creatureType);
    const spritesPerRow = info.sheetWidth / info.spriteWidth;
    const index = creatureType % 64;
    const col = index % spritesPerRow;
    const row = Math.floor(index / spritesPerRow);
    return {
      x: col * info.spriteWidth,
      y: row * info.spriteHeight
    };
  }
  calculateSpritePositionFromId(spriteId, creatureType, direction = 1) {
    let spriteWidth = 0;
    let spriteHeight = 0;
    let sheetWidth = 0;
    const sizeClass = this.getCreatureSizeClass(creatureType);
    switch (sizeClass) {
      case "small":
        spriteWidth = 64;
        spriteHeight = 64;
        sheetWidth = 1920;
        break;
      case "medium":
        spriteWidth = 64;
        spriteHeight = 128;
        sheetWidth = 1920;
        break;
      case "large":
        spriteWidth = 128;
        spriteHeight = 128;
        sheetWidth = 1920;
        break;
      case "largest":
        spriteWidth = 256;
        spriteHeight = 184;
        sheetWidth = 2048;
        break;
    }
    spriteId += direction;
    const spritesPerRow = sheetWidth / spriteWidth;
    const row = Math.floor(spriteId / spritesPerRow);
    const col = spriteId % spritesPerRow;
    return {
      x: col * spriteWidth,
      y: row * spriteHeight
    };
  }
  requestHumanSprite(npc) {
    try {
      if (!npc._appearance) return;
      const spritesheetManager = document.highlite.gameHooks.SpriteSheetManager.Instance;
      if (!spritesheetManager) return;
      const appearanceUtils = document.highlite.gameHooks.AppearanceUtils;
      const appearanceIds = new Array(5);
      const appearanceTypes = document.highlite.gameLookups["AppearanceTypes"];
      appearanceIds[appearanceTypes.Hair] = appearanceUtils.appearanceIdToAppearanceArray(
        appearanceTypes.Hair,
        npc._appearance._hairId ?? 0
      );
      appearanceIds[appearanceTypes.Beard] = appearanceUtils.appearanceIdToAppearanceArray(
        appearanceTypes.Beard,
        npc._appearance._beardId ?? 0
      );
      appearanceIds[appearanceTypes.Shirt] = appearanceUtils.appearanceIdToAppearanceArray(
        appearanceTypes.Shirt,
        npc._appearance._shirtId ?? 0
      );
      appearanceIds[appearanceTypes.Body] = appearanceUtils.appearanceIdToAppearanceArray(
        appearanceTypes.Body,
        npc._appearance._bodyId ?? 0
      );
      appearanceIds[appearanceTypes.Pants] = appearanceUtils.appearanceIdToAppearanceArray(
        appearanceTypes.Pants,
        npc._appearance._legsId ?? 0
      );
      let equippedItemIds = [];
      if (npc._appearance._equippedItems) {
        equippedItemIds = npc._appearance._equippedItems.map(
          (item) => appearanceUtils.inventoryItemToEquippedItemsArray(item)
        );
      } else {
        equippedItemIds = new Array(10);
        for (let i = 0; i < 10; i++) {
          equippedItemIds[i] = [-1, -1, -1];
        }
      }
      const entityTypes = document.highlite.gameLookups["EntityTypes"];
      const entityId = 2e4 + npc._id;
      spritesheetManager.loadHumanSpritesheet(
        entityTypes.NPC,
        // EntityType
        null,
        // Name (null for NPCs)
        entityId,
        // EntityID (unique)
        npc._id,
        // EntityTypeID (the NPC definition ID)
        appearanceIds,
        // AppearanceIDs
        equippedItemIds
        // EquippedItemIDs
      );
    } catch (error) {
      this.error(`Failed to request human sprite: ${error}`);
    }
  }
  // Sprite Reference Management
  addSpriteReference(spriteUrl, context) {
    if (!spriteUrl) return;
    this.activeSpriteUrls.add(spriteUrl);
    const currentCount = this.spriteReferences.get(spriteUrl) || 0;
    this.spriteReferences.set(spriteUrl, currentCount + 1);
    const existingContexts = this.spriteContexts.get(spriteUrl) || /* @__PURE__ */ new Set();
    existingContexts.add(context);
    this.spriteContexts.set(spriteUrl, existingContexts);
    const contextAttr = `data-sprite-${context}`;
    const elements = document.querySelectorAll(`[style*="${spriteUrl}"]`);
    elements.forEach((el) => {
      el.setAttribute(contextAttr, "true");
    });
  }
  removeSpriteReference(spriteUrl, context) {
    if (!spriteUrl || !this.spriteReferences.has(spriteUrl)) return;
    const contexts = this.spriteContexts.get(spriteUrl);
    if (contexts) {
      contexts.delete(context);
      if (contexts.size === 0) {
        this.spriteContexts.delete(spriteUrl);
      }
    }
    const currentCount = this.spriteReferences.get(spriteUrl) || 0;
    const newCount = Math.max(0, currentCount - 1);
    if (newCount === 0) {
      const stillInUse = this.isSpriteStillInUse(spriteUrl);
      if (stillInUse) {
        this.spriteReferences.set(spriteUrl, 1);
        return;
      }
      this.spriteReferences.delete(spriteUrl);
      this.spriteContexts.delete(spriteUrl);
      this.activeSpriteUrls.delete(spriteUrl);
      try {
        const blobLoader = this.gameHooks?.BlobLoader?.Instance;
        if (blobLoader && blobLoader.revokeObjectURL) {
          this.log(`Revoking sprite URL: ${spriteUrl}`);
          blobLoader.revokeObjectURL(spriteUrl);
        }
        this.removeFromSpriteSheetManagerCache(spriteUrl, true);
      } catch (error) {
        this.error(`Failed to revoke sprite URL: ${error}`);
      }
    } else {
      this.spriteReferences.set(spriteUrl, newCount);
    }
  }
  cleanupSidebarSprites(preserveNpcIds) {
    if (!this.itemListContainer) return;
    const spriteElements = this.itemListContainer.querySelectorAll(
      "[data-sprite-sidebar]"
    );
    spriteElements.forEach((el) => {
      const style = el.style.backgroundImage;
      if (style && style.includes("blob:")) {
        const urlMatch = style.match(/url\("?(blob:[^"]+)"?\)/);
        if (urlMatch) {
          const spriteUrl = urlMatch[1];
          let shouldPreserve = false;
          if (preserveNpcIds) {
            let npcId = el.getAttribute(
              "data-npc-id"
            );
            if (!npcId) {
              const npcElement = el.closest(
                "[data-npc-id]"
              );
              if (npcElement) {
                npcId = npcElement.getAttribute("data-npc-id");
              }
            }
            if (npcId && preserveNpcIds.has(parseInt(npcId))) {
              shouldPreserve = true;
            }
          }
          const stillUsedInModal = this.isSpriteUsedInModal(spriteUrl);
          if (stillUsedInModal || shouldPreserve) {
            this.log(
              `Preserving sprite URL ${stillUsedInModal ? "(used in modal)" : "(preserved NPC)"}: ${spriteUrl}`
            );
            const contexts = this.spriteContexts.get(spriteUrl);
            if (contexts) {
              contexts.delete("sidebar");
              if (contexts.size === 0) {
                this.spriteContexts.delete(spriteUrl);
              }
            }
            el.removeAttribute(
              "data-sprite-sidebar"
            );
          } else {
            this.removeSpriteReference(spriteUrl, "sidebar");
          }
        }
      }
    });
  }
  cleanupModalSprites() {
    if (!this.modalOverlay) return;
    const spriteElements = this.modalOverlay.querySelectorAll(
      "[data-sprite-modal]"
    );
    spriteElements.forEach((el) => {
      const style = el.style.backgroundImage;
      if (style && style.includes("blob:")) {
        const urlMatch = style.match(/url\("?(blob:[^"]+)"?\)/);
        if (urlMatch) {
          this.removeSpriteReference(urlMatch[1], "modal");
        }
      }
    });
  }
  cleanupAllSprites() {
    for (const spriteUrl of this.activeSpriteUrls) {
      try {
        const blobLoader = this.gameHooks?.BlobLoader?.Instance;
        if (blobLoader && blobLoader.revokeObjectURL) {
          this.log(`Revoking sprite URL: ${spriteUrl}`);
          blobLoader.revokeObjectURL(spriteUrl);
        }
        this.removeFromSpriteSheetManagerCache(spriteUrl, true);
      } catch (error) {
        this.error(`Failed to revoke sprite URL: ${error}`);
      }
    }
    this.spriteReferences.clear();
    this.spriteContexts.clear();
    this.activeSpriteUrls.clear();
  }
  trackSpriteUsage(element, spriteUrl, context) {
    if (!spriteUrl) return;
    this.addSpriteReference(spriteUrl, context);
    element.setAttribute(`data-sprite-${context}`, "true");
  }
  isSpriteUsedInModal(spriteUrl) {
    if (!this.modalOverlay) return false;
    const allModalElements = this.modalOverlay.querySelectorAll("*");
    for (const el of allModalElements) {
      const style = el.style.backgroundImage;
      if (style && style.includes(spriteUrl)) {
        return true;
      }
    }
    return false;
  }
  isSpriteStillInUse(spriteUrl) {
    const allElements = document.querySelectorAll("*");
    for (const el of allElements) {
      const style = el.style.backgroundImage;
      if (style && style.includes(spriteUrl)) {
        return true;
      }
    }
    return false;
  }
  removeFromSpriteSheetManagerCache(spriteUrl, forceRemove = false) {
    try {
      const spritesheetManager = this.gameHooks?.SpriteSheetManager?.Instance;
      if (!spritesheetManager) return;
      if (!forceRemove) {
        const stillInUse = this.activeSpriteUrls.has(spriteUrl) || this.spriteReferences.has(spriteUrl);
        if (stillInUse) {
          return;
        }
      }
      if (spritesheetManager._humanNPCSpritesheetInfo) {
        const humanCache = spritesheetManager._humanNPCSpritesheetInfo;
        const keysToRemove = [];
        for (const [key, spriteInfo] of humanCache.entries()) {
          if (spriteInfo && spriteInfo.SpritesheetURL === spriteUrl) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((key) => {
          this.log(
            `Removing NPC ${key} from human sprite cache (URL being revoked)`
          );
          humanCache.delete(key);
        });
      }
      if (spritesheetManager._playerSpritesheetInfo) {
        const playerCache = spritesheetManager._playerSpritesheetInfo;
        const keysToRemove = [];
        for (const [key, spriteInfo] of playerCache.entries()) {
          if (spriteInfo && spriteInfo.SpritesheetURL === spriteUrl) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((key) => {
          this.log(
            `Removing player ${key} from player sprite cache (URL being revoked)`
          );
          playerCache.delete(key);
        });
      }
    } catch (error) {
      this.error(
        `Failed to remove sprite from SpriteSheetManager cache: ${error}`
      );
    }
  }
  showLoadingState() {
    if (!this.itemListContainer) return;
    this.itemListContainer.innerHTML = `
            <div class="item-loading">
                <p>Loading definitions...</p>
                <p class="item-loading-hint">Please log in to view items</p>
            </div>
        `;
  }
  updatePagination() {
    const paginationContainer = this.panelContent?.querySelector(
      ".pagination-container"
    );
    if (!paginationContainer) return;
    paginationContainer.innerHTML = "";
    const currentList = this.currentView === "items" ? this.filteredItems : this.filteredNpcs;
    const totalPages = Math.ceil(currentList.length / this.itemsPerPage);
    if (totalPages <= 1) return;
    const prevButton = document.createElement("button");
    prevButton.className = "pagination-button";
    prevButton.textContent = "\u25C0";
    prevButton.disabled = this.currentPage === 0;
    prevButton.onclick = () => {
      if (this.currentPage > 0) {
        this.currentPage--;
        if (this.currentView === "items") {
          this.renderItemList();
        } else {
          this.renderNpcList();
        }
      }
    };
    paginationContainer.appendChild(prevButton);
    const pageInfo = document.createElement("span");
    pageInfo.className = "pagination-info";
    pageInfo.textContent = `${this.currentPage + 1} / ${totalPages}`;
    paginationContainer.appendChild(pageInfo);
    const nextButton = document.createElement("button");
    nextButton.className = "pagination-button";
    nextButton.textContent = "\u25B6";
    nextButton.disabled = this.currentPage >= totalPages - 1;
    nextButton.onclick = () => {
      if (this.currentPage < totalPages - 1) {
        this.currentPage++;
        if (this.currentView === "items") {
          this.renderItemList();
        } else {
          this.renderNpcList();
        }
      }
    };
    paginationContainer.appendChild(nextButton);
  }
  showItemModal(itemId) {
    this.closeModal();
    this.modalOverlay = document.createElement("div");
    this.modalOverlay.className = "item-modal-overlay";
    const modalContainer = document.createElement("div");
    modalContainer.className = "item-modal-container";
    const uiManager = this.UIManager;
    if (uiManager) {
      uiManager.bindOnClickBlockHsMask(this.modalOverlay, (e) => {
        if (e.target === this.modalOverlay) {
          this.closeModal();
        }
      });
    } else {
      this.modalOverlay.onclick = (e) => {
        if (e.target === this.modalOverlay) {
          this.closeModal();
        }
      };
    }
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    this.modalOverlay.addEventListener("wheel", preventScroll, {
      passive: false
    });
    this.modalOverlay.addEventListener("touchmove", preventScroll, {
      passive: false
    });
    const closeButton = document.createElement("button");
    closeButton.className = "item-modal-close";
    closeButton.innerHTML = "\xD7";
    if (uiManager) {
      uiManager.bindOnClickBlockHsMask(closeButton, () => {
        this.closeModal();
      });
    } else {
      closeButton.onclick = () => this.closeModal();
    }
    modalContainer.appendChild(closeButton);
    const modalContent = document.createElement("div");
    modalContent.className = "item-modal-content";
    modalContent.addEventListener(
      "wheel",
      (e) => {
        e.stopPropagation();
        const target = e.target;
        const scrollableContainer = target.closest(
          ".npc-drops-container, .drops-section-container"
        );
        if (scrollableContainer) {
          const { scrollTop: scrollTop2, scrollHeight: scrollHeight2, clientHeight: clientHeight2 } = scrollableContainer;
          const delta2 = e.deltaY;
          if (delta2 < 0 && scrollTop2 === 0) {
            e.preventDefault();
          } else if (delta2 > 0 && scrollTop2 + clientHeight2 >= scrollHeight2 - 1) {
            e.preventDefault();
          }
          return;
        }
        const { scrollTop, scrollHeight, clientHeight } = modalContent;
        const delta = e.deltaY;
        if (delta < 0 && scrollTop === 0) {
          e.preventDefault();
        } else if (delta > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
    modalContent.addEventListener(
      "touchmove",
      (e) => {
        e.stopPropagation();
      },
      { passive: false }
    );
    this.loadItemDetailsIntoModal(modalContent, itemId);
    modalContainer.appendChild(modalContent);
    this.modalOverlay.appendChild(modalContainer);
    const container = document.getElementById("hs-screen-mask");
    if (container) {
      container.appendChild(this.modalOverlay);
    } else {
      document.body.appendChild(this.modalOverlay);
    }
    const escapeHandler = (e) => {
      if (e.key === "Escape") {
        this.closeModal();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }
  closeModal() {
    if (this.modalOverlay) {
      this.cleanupModalSprites();
      this.modalOverlay.remove();
      this.modalOverlay = null;
    }
  }
  loadItemDetailsIntoModal(container, itemId) {
    try {
      const itemDef = this.gameHooks.ItemDefinitionManager._itemDefMap.get(
        itemId
      );
      if (!itemDef) {
        container.innerHTML = "<p class='detail-error'>Item not found</p>";
        return;
      }
      let spritePosition = "";
      const pos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
        itemId
      );
      if (pos) {
        spritePosition = `style="background-position: ${pos};"`;
      }
      let html = `
                <div class="detail-header">
                    <div class="detail-sprite-large" ${spritePosition}></div>
                    <div class="detail-title">
                        <h2>${itemDef._nameCapitalized || itemDef._name || `Item ${itemId}`}</h2>
                        <p class="detail-id">ID: ${itemId}</p>
                    </div>
                </div>
            `;
      if (itemDef._description) {
        html += `
                    <div class="detail-section">
                        <h3>Description</h3>
                        <p>${itemDef._description}</p>
                    </div>
                `;
      }
      if (itemDef._cost && itemDef._cost > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Cost</h3>
                        <p class="detail-cost">${itemDef._cost.toLocaleString()} coins</p>
                    </div>
                `;
      }
      if (itemDef._equippableRequirements && itemDef._equippableRequirements.length > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Requirements</h3>
                        <div class="detail-list">
                `;
        itemDef._equippableRequirements.forEach((req) => {
          html += `<div class="detail-list-item">\u2022 Level ${req._amount} ${this.getSkillName(req._skill)}</div>`;
        });
        html += `
                        </div>
                    </div>
                `;
      }
      if (itemDef._equippableEffects && itemDef._equippableEffects.length > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Equipment Effects</h3>
                        <div class="detail-list">
                `;
        itemDef._equippableEffects.forEach((effect) => {
          const sign = effect._amount > 0 ? "+" : "";
          html += `<div class="detail-list-item effect-positive">\u2022 ${sign}${effect._amount} ${this.getSkillName(effect._skill)}</div>`;
        });
        html += `
                        </div>
                    </div>
                `;
      }
      if (itemDef._edibleEffects && itemDef._edibleEffects.length > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Edible Effects</h3>
                        <div class="detail-list">
                `;
        itemDef._edibleEffects.forEach((effect) => {
          const sign = effect._amount > 0 ? "+" : "";
          html += `<div class="detail-list-item effect-positive">\u2022 ${sign}${effect._amount} ${this.getSkillName(effect._skill)}</div>`;
        });
        html += `
                        </div>
                    </div>
                `;
      }
      if (itemDef._expFromObtaining && itemDef._expFromObtaining._skill !== void 0 && itemDef._expFromObtaining._amount > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Experience Gained</h3>
                        <div class="detail-list">
                            <div class="detail-list-item">\u2022 ${itemDef._expFromObtaining._amount} ${this.getSkillName(itemDef._expFromObtaining._skill)} XP</div>
                        </div>
                    </div>
                `;
      }
      if (itemDef._recipe && itemDef._recipe._ingredients && itemDef._recipe._ingredients.length > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Recipe</h3>
                        <div class="recipe-grid">
                `;
        itemDef._recipe._ingredients.forEach((ingredient) => {
          try {
            const ingredientDef = this.gameHooks.ItemDefinitionManager._itemDefMap?.get(
              ingredient._itemId
            );
            const ingredientName = ingredientDef?._nameCapitalized || ingredientDef?._name || `Item ${ingredient._itemId}`;
            const ingredientPos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
              ingredient._itemId
            );
            const spriteStyle = ingredientPos ? `style="background-position: ${ingredientPos};"` : "";
            html += `
                            <div class="recipe-item" data-item-id="${ingredient._itemId}">
                                <div class="recipe-item-sprite" ${spriteStyle}></div>
                                <div class="recipe-item-info">
                                    <div class="recipe-item-name">${ingredientName}</div>
                                    <div class="recipe-item-amount">${ingredient._amount}x</div>
                                </div>
                            </div>
                        `;
          } catch {
            html += `
                            <div class="recipe-item" data-item-id="${ingredient._itemId}">
                                <div class="recipe-item-sprite"></div>
                                <div class="recipe-item-info">
                                    <div class="recipe-item-name">Item ${ingredient._itemId}</div>
                                    <div class="recipe-item-amount">${ingredient._amount}x</div>
                                </div>
                            </div>
                        `;
          }
        });
        html += `
                        </div>
                    </div>
                `;
      }
      if (itemDef._edibleResult) {
        html += `
                    <div class="detail-section">
                        <h3>After Eating</h3>
                        <div class="recipe-grid">
                `;
        try {
          const resultDef = this.gameHooks.ItemDefinitionManager._itemDefMap?.get(
            itemDef._edibleResult._itemId
          );
          const resultName = resultDef?._nameCapitalized || resultDef?._name || `Item ${itemDef._edibleResult._itemId}`;
          const resultPos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
            itemDef._edibleResult._itemId
          );
          const spriteStyle = resultPos ? `style="background-position: ${resultPos};"` : "";
          html += `
                        <div class="recipe-item" data-item-id="${itemDef._edibleResult._itemId}">
                            <div class="recipe-item-sprite" ${spriteStyle}></div>
                            <div class="recipe-item-info">
                                <div class="recipe-item-name">${resultName}</div>
                                <div class="recipe-item-amount">${itemDef._edibleResult._amount}x</div>
                            </div>
                        </div>
                    `;
        } catch {
          html += `
                        <div class="recipe-item" data-item-id="${itemDef._edibleResult._itemId}">
                            <div class="recipe-item-sprite"></div>
                            <div class="recipe-item-info">
                                <div class="recipe-item-name">Item ${itemDef._edibleResult._itemId}</div>
                                <div class="recipe-item-amount">${itemDef._edibleResult._amount}x</div>
                            </div>
                        </div>
                    `;
        }
        html += `
                        </div>
                    </div>
                `;
      }
      html += `
                <div class="detail-section">
                    <h3>Properties</h3>
                    <div class="detail-properties">
            `;
      if (itemDef._generalPrice !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Value:</span>
                        <span class="property-value gold">${itemDef._generalPrice.toLocaleString()} gp</span>
                    </div>
                `;
      }
      if (itemDef._equipmentType !== null && itemDef._equipmentType !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Type:</span>
                        <span class="property-value">${this.getEquipmentTypeName(itemDef._equipmentType)}</span>
                    </div>
                `;
      }
      if (itemDef._weaponSpeed && itemDef._weaponSpeed > 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Attack Speed:</span>
                        <span class="property-value">${itemDef._weaponSpeed}</span>
                    </div>
                `;
      }
      if (itemDef._weight !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Weight:</span>
                        <span class="property-value">${itemDef._weight} kg</span>
                    </div>
                `;
      }
      if (itemDef._metalType !== null && itemDef._metalType !== void 0) {
        const metalTypes = [
          "Bronze",
          "Iron",
          "Steel",
          "Silver",
          "Palladium",
          "Gold",
          "Coronium",
          "Celadium"
        ];
        const metalName = metalTypes[itemDef._metalType] || `Metal ${itemDef._metalType}`;
        html += `
                    <div class="property">
                        <span class="property-label">Metal Type:</span>
                        <span class="property-value">${metalName}</span>
                    </div>
                `;
      }
      html += `
                    </div>
                </div>
            `;
      let tags = [];
      if (itemDef._isMembers !== void 0 && itemDef._isMembers)
        tags.push('<span class="detail-tag members">Members</span>');
      if (itemDef._membersObjectBool !== void 0 && itemDef._membersObjectBool)
        tags.push('<span class="detail-tag members">Members</span>');
      if (itemDef._isStackable !== void 0 && itemDef._isStackable)
        tags.push(
          '<span class="detail-tag stackable">Stackable</span>'
        );
      if (itemDef._stackable !== void 0 && itemDef._stackable)
        tags.push(
          '<span class="detail-tag stackable">Stackable</span>'
        );
      if (itemDef._isTradeable !== void 0 && itemDef._isTradeable)
        tags.push(
          '<span class="detail-tag tradeable">Tradeable</span>'
        );
      if (itemDef._canBeNoted !== void 0 && itemDef._canBeNoted)
        tags.push('<span class="detail-tag noteable">Noteable</span>');
      if (itemDef._canIOU !== void 0 && itemDef._canIOU)
        tags.push('<span class="detail-tag iou">IOU</span>');
      if (tags.length > 0) {
        html += `
                    <div class="detail-tags">
                        ${[...new Set(tags)].join("")}
                    </div>
                `;
      }
      html += this.generateNpcDropsSection(itemId);
      html += `
                <div class="detail-section">
                    <h3>Actions</h3>
                    <div class="detail-actions">
                        <button class="action-button" onclick="window.highliteItemPanel.copyItemId(${itemId})">Copy ID</button>
                        <button class="action-button" onclick="window.highliteItemPanel.copyItemLink(${itemId})">Copy Chat Link</button>
                    </div>
                </div>
            `;
      container.innerHTML = html;
      this.createNpcDropSprites(container);
      const recipeItems = container.querySelectorAll(".recipe-item");
      const npcDropItems = container.querySelectorAll(".npc-drop-item");
      const uiManager = this.UIManager;
      recipeItems.forEach((item) => {
        const itemId2 = item.getAttribute("data-item-id");
        if (itemId2 && uiManager) {
          uiManager.bindOnClickBlockHsMask(
            item,
            () => {
              this.showItemModal(parseInt(itemId2));
            }
          );
        } else if (itemId2) {
          item.onclick = () => {
            this.showItemModal(parseInt(itemId2));
          };
        }
      });
      npcDropItems.forEach((npcItem) => {
        const npcId = npcItem.getAttribute("data-npc-id");
        if (npcId && uiManager) {
          uiManager.bindOnClickBlockHsMask(
            npcItem,
            () => {
              this.showNpcModal(parseInt(npcId));
            }
          );
        } else if (npcId) {
          npcItem.onclick = () => {
            this.showNpcModal(parseInt(npcId));
          };
        }
      });
    } catch (error) {
      this.error(`Failed to show item details: ${error}`);
      container.innerHTML = "<p class='detail-error'>Error loading item details</p>";
    }
  }
  getSkillName(skillId) {
    try {
      return this.gameLookups.Skills[skillId] || `Skill ${skillId}`;
    } catch {
      return `Skill ${skillId}`;
    }
  }
  getEquipmentTypeName(typeId) {
    try {
      return this.gameLookups.EquipmentTypes[typeId] || `Type ${typeId}`;
    } catch {
      return `Type ${typeId}`;
    }
  }
  showNpcModal(npcId) {
    this.closeModal();
    this.modalOverlay = document.createElement("div");
    this.modalOverlay.className = "item-modal-overlay";
    const modalContainer = document.createElement("div");
    modalContainer.className = "item-modal-container";
    const uiManager = this.UIManager;
    if (uiManager) {
      uiManager.bindOnClickBlockHsMask(this.modalOverlay, (e) => {
        if (e.target === this.modalOverlay) {
          this.closeModal();
        }
      });
    } else {
      this.modalOverlay.onclick = (e) => {
        if (e.target === this.modalOverlay) {
          this.closeModal();
        }
      };
    }
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    this.modalOverlay.addEventListener("wheel", preventScroll, {
      passive: false
    });
    this.modalOverlay.addEventListener("touchmove", preventScroll, {
      passive: false
    });
    const closeButton = document.createElement("button");
    closeButton.className = "item-modal-close";
    closeButton.innerHTML = "\xD7";
    if (uiManager) {
      uiManager.bindOnClickBlockHsMask(closeButton, () => {
        this.closeModal();
      });
    } else {
      closeButton.onclick = () => this.closeModal();
    }
    modalContainer.appendChild(closeButton);
    const modalContent = document.createElement("div");
    modalContent.className = "item-modal-content";
    modalContent.addEventListener(
      "wheel",
      (e) => {
        e.stopPropagation();
        const target = e.target;
        const scrollableContainer = target.closest(
          ".npc-drops-container, .drops-section-container"
        );
        if (scrollableContainer) {
          const { scrollTop: scrollTop2, scrollHeight: scrollHeight2, clientHeight: clientHeight2 } = scrollableContainer;
          const delta2 = e.deltaY;
          if (delta2 < 0 && scrollTop2 === 0) {
            e.preventDefault();
          } else if (delta2 > 0 && scrollTop2 + clientHeight2 >= scrollHeight2 - 1) {
            e.preventDefault();
          }
          return;
        }
        const { scrollTop, scrollHeight, clientHeight } = modalContent;
        const delta = e.deltaY;
        if (delta < 0 && scrollTop === 0) {
          e.preventDefault();
        } else if (delta > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
    modalContent.addEventListener(
      "touchmove",
      (e) => {
        e.stopPropagation();
      },
      { passive: false }
    );
    this.loadNpcDetailsIntoModal(modalContent, npcId);
    modalContainer.appendChild(modalContent);
    this.modalOverlay.appendChild(modalContainer);
    const container = this.isLoggedIn ? document.getElementById("hs-screen-mask") : document.body;
    if (container) {
      container.appendChild(this.modalOverlay);
    } else {
      document.body.appendChild(this.modalOverlay);
    }
    const escapeHandler = (e) => {
      if (e.key === "Escape") {
        this.closeModal();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }
  loadNpcDetailsIntoModal(container, npcId) {
    try {
      const npcDef = this.gameHooks?.NpcDefinitionManager?.getDefById(
        npcId
      );
      if (!npcDef) {
        container.innerHTML = "<p class='detail-error'>NPC not found</p>";
        return;
      }
      const typeInfo = this.getNpcTypeInfo(npcDef);
      let spriteHtml = "";
      if (typeInfo.isCreature && typeInfo.creatureType !== void 0 && typeInfo.creatureSpriteId !== void 0) {
        const creatureType = typeInfo.creatureType;
        const creatureSpriteId = typeInfo.creatureSpriteId;
        const sizeClass = this.getCreatureSizeClass(creatureType);
        const spritesheetManager = this.gameHooks?.SpriteSheetManager?.Instance;
        const creatureSpritesheetInfo = spritesheetManager?.CreatureSpritesheetInfo;
        if (creatureSpritesheetInfo && creatureSpritesheetInfo[creatureType]) {
          const sheetIndex = 0;
          const spriteInfo = creatureSpritesheetInfo[creatureType][sheetIndex];
          if (spriteInfo) {
            const spriteFrameIndex = 15 * creatureSpriteId;
            const spritePos = this.calculateSpritePositionFromId(
              spriteFrameIndex,
              creatureType
            );
            spriteHtml = `<div class="npc-sprite-modal npc-sprite-${sizeClass}" data-creature-type="${creatureType}" style="background-image: url('${spriteInfo.SpritesheetURL}'); background-position: -${spritePos.x}px -${spritePos.y}px; width: ${spriteInfo.SpriteWidth}px; height: ${spriteInfo.SpriteHeight}px;" data-sprite-modal="true"></div>`;
            setTimeout(
              () => this.trackSpriteUsage(
                document.querySelector(
                  `[data-creature-type="${creatureType}"]`
                ),
                spriteInfo.SpritesheetURL,
                "modal"
              ),
              0
            );
          } else {
            const spriteFrameIndex = 15 * creatureSpriteId;
            const spritePos = this.calculateSpritePositionFromId(
              spriteFrameIndex,
              creatureType
            );
            spriteHtml = `<div class="npc-sprite-modal npc-sprite-${sizeClass}" data-creature-type="${creatureType}" style="background-position: -${spritePos.x}px -${spritePos.y}px;"></div>`;
          }
        } else {
          const spriteFrameIndex = 15 * creatureSpriteId;
          const spritePos = this.calculateSpritePositionFromId(
            spriteFrameIndex,
            creatureType
          );
          spriteHtml = `<div class="npc-sprite-modal npc-sprite-${sizeClass}" data-creature-type="${creatureType}" style="background-position: -${spritePos.x}px -${spritePos.y}px;"></div>`;
        }
      } else if (typeInfo.isHuman) {
        const spritesheetManager = document.highlite.gameHooks.SpriteSheetManager.Instance;
        const humanSpriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(
          npcDef._id
        );
        if (humanSpriteInfo && humanSpriteInfo.SpritesheetURL) {
          spriteHtml = `<div class="npc-sprite-modal npc-sprite-human" style="background-image: url('${humanSpriteInfo.SpritesheetURL}'); background-position: -64px 0px; background-size: auto;" data-sprite-modal="true"></div>`;
          setTimeout(
            () => this.trackSpriteUsage(
              document.querySelector(
                ".npc-sprite-modal.npc-sprite-human"
              ),
              humanSpriteInfo.SpritesheetURL,
              "modal"
            ),
            0
          );
        } else {
          spriteHtml = `<div class="npc-sprite-modal npc-sprite-human" data-npc-id="${npcDef._id}" style="background-color: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 36px;">\u{1F464}</div>`;
          this.requestHumanSprite(npcDef);
          const pollInterval = setInterval(() => {
            const spriteInfo = spritesheetManager?.HumanNPCSpritesheetInfo?.get(
              npcDef._id
            );
            if (spriteInfo && spriteInfo.SpritesheetURL) {
              clearInterval(pollInterval);
              const spriteElement = document.querySelector(
                `.npc-sprite-modal[data-npc-id="${npcDef._id}"]`
              );
              if (spriteElement) {
                spriteElement.innerHTML = "";
                spriteElement.style.backgroundImage = `url('${spriteInfo.SpritesheetURL}')`;
                spriteElement.style.backgroundPosition = "-64px 0px";
                spriteElement.style.backgroundSize = "auto";
                spriteElement.style.backgroundColor = "transparent";
                spriteElement.setAttribute(
                  "data-sprite-modal",
                  "true"
                );
                this.trackSpriteUsage(
                  spriteElement,
                  spriteInfo.SpritesheetURL,
                  "modal"
                );
              }
            }
          }, 100);
          setTimeout(() => clearInterval(pollInterval), 5e3);
        }
      } else {
        spriteHtml = '<div class="npc-sprite-modal npc-sprite-unknown">?</div>';
      }
      let html = `
                <div class="detail-header">
                    ${spriteHtml}
                    <div class="detail-title">
                        <h2>${npcDef._nameCapitalized || npcDef._name || `NPC ${npcId}`}</h2>
                        <p class="detail-id">ID: ${npcId}</p>
                        ${npcDef._combat && npcDef._combat._combat && npcDef._combat._combat._combatLevel ? `<p class="detail-level">Level: ${npcDef._combat._combat._combatLevel}</p>` : ""}
                    </div>
                </div>
            `;
      if (npcDef._description) {
        html += `
                    <div class="detail-section">
                        <h3>Description</h3>
                        <p>${npcDef._description}</p>
                    </div>
                `;
      }
      if (npcDef._combat && npcDef._combat._combat) {
        const combat = npcDef._combat._combat;
        html += `
                    <div class="detail-section">
                        <h3>Combat Stats</h3>
                        <div class="detail-properties">
                            <div class="property">
                                <span class="property-label">Combat Level:</span>
                                <span class="property-value">${combat._combatLevel || "Unknown"}</span>
                            </div>
                `;
        if (combat._skills && combat._skills.length > 0) {
          const skillNames = [
            "Melee",
            "Ranged",
            "Defence",
            "Magic",
            "Prayer"
          ];
          const skills = combat._skills.filter(
            (s) => s && s._skill !== void 0
          );
          skills.forEach((skill) => {
            if (skill._skill < skillNames.length) {
              html += `
                                <div class="property">
                                    <span class="property-label">${skillNames[skill._skill]}:</span>
                                    <span class="property-value">${skill._currentLevel || skill._level || 1}</span>
                                </div>
                            `;
            }
          });
        }
        html += `
                        </div>
                    </div>
                `;
      }
      html += `
                <div class="detail-section">
                    <h3>Behavior</h3>
                    <div class="detail-properties">
            `;
      if (npcDef._isAggressive !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Aggressive:</span>
                        <span class="property-value ${npcDef._isAggressive ? "yes" : "no"}">${npcDef._isAggressive ? "Yes" : "No"}</span>
                    </div>
                `;
      }
      if (npcDef._isAlwaysAggro !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Always Aggressive:</span>
                        <span class="property-value ${npcDef._isAlwaysAggro ? "yes" : "no"}">${npcDef._isAlwaysAggro ? "Yes" : "No"}</span>
                    </div>
                `;
      }
      if (npcDef._aggroRadius !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Aggro Radius:</span>
                        <span class="property-value">${npcDef._aggroRadius} tiles</span>
                    </div>
                `;
      }
      if (npcDef._moveEagerness !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Move Eagerness:</span>
                        <span class="property-value">${npcDef._moveEagerness}</span>
                    </div>
                `;
      }
      if (npcDef._weaponSpeed !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Attack Speed:</span>
                        <span class="property-value">${npcDef._weaponSpeed}</span>
                    </div>
                `;
      }
      if (npcDef._movementSpeed !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Movement Speed:</span>
                        <span class="property-value">${npcDef._movementSpeed}</span>
                    </div>
                `;
      }
      if (npcDef._respawnLength !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Respawn Time:</span>
                        <span class="property-value">${npcDef._respawnLength} ticks</span>
                    </div>
                `;
      }
      if (npcDef._combat && npcDef._combat._combat && npcDef._combat._combat._autoRetaliate !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Auto Retaliate:</span>
                        <span class="property-value ${npcDef._combat._combat._autoRetaliate ? "yes" : "no"}">${npcDef._combat._combat._autoRetaliate ? "Yes" : "No"}</span>
                    </div>
                `;
      }
      if (npcDef._combat && npcDef._combat._combat && npcDef._combat._combat._combatStyle !== void 0) {
        const combatStyles = ["Melee", "Ranged", "Magic"];
        const styleName = combatStyles[npcDef._combat._combat._combatStyle] || `Style ${npcDef._combat._combat._combatStyle}`;
        html += `
                    <div class="property">
                        <span class="property-label">Combat Style:</span>
                        <span class="property-value">${styleName}</span>
                    </div>
                `;
      }
      html += `
                    </div>
                </div>
            `;
      if (npcDef._combat && npcDef._combat._combat) {
        const combat = npcDef._combat._combat;
        const hasEquipmentBonuses = combat._equipmentAccuracyBonus !== void 0 || combat._equipmentStrengthBonus !== void 0 || combat._equipmentDefenseBonus !== void 0 || combat._equipmentMagicBonus !== void 0 || combat._equipmentRangeBonus !== void 0;
        if (hasEquipmentBonuses) {
          html += `
                        <div class="detail-section">
                            <h3>Equipment Bonuses</h3>
                            <div class="detail-properties">
                    `;
          if (combat._equipmentAccuracyBonus !== void 0) {
            html += `
                            <div class="property">
                                <span class="property-label">Accuracy Bonus:</span>
                                <span class="property-value">+${combat._equipmentAccuracyBonus}</span>
                            </div>
                        `;
          }
          if (combat._equipmentStrengthBonus !== void 0) {
            html += `
                            <div class="property">
                                <span class="property-label">Strength Bonus:</span>
                                <span class="property-value">+${combat._equipmentStrengthBonus}</span>
                            </div>
                        `;
          }
          if (combat._equipmentDefenseBonus !== void 0) {
            html += `
                            <div class="property">
                                <span class="property-label">Defense Bonus:</span>
                                <span class="property-value">+${combat._equipmentDefenseBonus}</span>
                            </div>
                        `;
          }
          if (combat._equipmentMagicBonus !== void 0) {
            html += `
                            <div class="property">
                                <span class="property-label">Magic Bonus:</span>
                                <span class="property-value">+${combat._equipmentMagicBonus}</span>
                            </div>
                        `;
          }
          if (combat._equipmentRangeBonus !== void 0) {
            html += `
                            <div class="property">
                                <span class="property-label">Range Bonus:</span>
                                <span class="property-value">+${combat._equipmentRangeBonus}</span>
                            </div>
                        `;
          }
          html += `
                            </div>
                        </div>
                    `;
        }
      }
      if (npcDef._combat && npcDef._combat._spellIds && npcDef._combat._spellIds.length > 0) {
        html += `
                    <div class="detail-section">
                        <h3>Magic Abilities</h3>
                        <div class="detail-list">
                `;
        npcDef._combat._spellIds.forEach((spellId) => {
          try {
            const spellDef = this.gameHooks?.SpellDefinitionManager?.getDefById(
              spellId
            );
            const spellName = spellDef?.Name || `Unknown Spell`;
            html += `<div class="detail-list-item">\u2022 ${spellName} (ID: ${spellId})</div>`;
          } catch {
            html += `<div class="detail-list-item">\u2022 Spell ID: ${spellId}</div>`;
          }
        });
        html += `
                        </div>
                    </div>
                `;
      }
      html += `
                <div class="detail-section">
                    <h3>General Properties</h3>
                    <div class="detail-properties">
            `;
      if (npcDef._canShop !== void 0) {
        html += `
                    <div class="property">
                        <span class="property-label">Can Shop:</span>
                        <span class="property-value ${npcDef._canShop ? "yes" : "no"}">${npcDef._canShop ? "Yes" : "No"}</span>
                    </div>
                `;
      }
      if (npcDef._pickpocketId !== void 0 && npcDef._pickpocketId !== -1) {
        html += `
                    <div class="property">
                        <span class="property-label">Pickpocket ID:</span>
                        <span class="property-value">${npcDef._pickpocketId}</span>
                    </div>
                `;
      }
      if (npcDef._creatureType !== void 0) {
        const creatureTypeNames = {
          "-1": "Human",
          "0": "Small Creature",
          "1": "Medium Creature",
          "2": "Large Creature",
          "3": "Largest Creature"
        };
        const typeName = creatureTypeNames[npcDef._creatureType] || `Type ${npcDef._creatureType}`;
        html += `
                    <div class="property">
                        <span class="property-label">Entity Type:</span>
                        <span class="property-value">${typeName}</span>
                    </div>
                `;
      }
      html += `
                    </div>
                </div>
            `;
      if (npcDef._appearance && npcDef._appearance._equippedItems) {
        const equippedItems = npcDef._appearance._equippedItems.filter(
          (item) => item && item._id
        );
        if (equippedItems.length > 0) {
          html += `
                        <div class="detail-section">
                            <h3>Equipment</h3>
                            <div class="recipe-grid">
                    `;
          equippedItems.forEach((item) => {
            try {
              const itemDef = this.gameHooks.ItemDefinitionManager._itemDefMap?.get(
                item._id
              );
              const itemName = itemDef?._nameCapitalized || itemDef?._name || `Item ${item._id}`;
              const itemPos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem(
                item._id
              );
              const spriteStyle = itemPos ? `style="background-position: ${itemPos};"` : "";
              html += `
                                <div class="recipe-item" data-item-id="${item._id}">
                                    <div class="recipe-item-sprite" ${spriteStyle}></div>
                                    <div class="recipe-item-info">
                                        <div class="recipe-item-name">${itemName}</div>
                                        <div class="recipe-item-amount">${item._amount}x</div>
                                    </div>
                                </div>
                            `;
            } catch {
              html += `
                                <div class="recipe-item" data-item-id="${item._id}">
                                    <div class="recipe-item-sprite"></div>
                                    <div class="recipe-item-info">
                                        <div class="recipe-item-name">Item ${item._id}</div>
                                        <div class="recipe-item-amount">${item._amount}x</div>
                                    </div>
                                </div>
                            `;
            }
          });
          html += `
                            </div>
                        </div>
                    `;
        }
      }
      if (npcDef._combat && npcDef._combat._lootTableId !== void 0 && npcDef._combat._lootTableId !== -1) {
        html += this.generateDropsSection(
          npcDef._combat._lootTableId,
          npcDef._name || `NPC ${npcId}`
        );
      }
      let tags = [];
      if (npcDef._canShop)
        tags.push('<span class="detail-tag shopkeeper">Shop</span>');
      if (npcDef._pickpocketId !== -1)
        tags.push(
          '<span class="detail-tag pickpocket">Pickpocket</span>'
        );
      if (npcDef._isAlwaysAggro)
        tags.push(
          '<span class="detail-tag aggressive">Always Aggressive</span>'
        );
      if (npcDef._isAggressive)
        tags.push(
          '<span class="detail-tag aggressive">Aggressive</span>'
        );
      if (npcDef._combat && npcDef._combat._spellIds && npcDef._combat._spellIds.length > 0)
        tags.push('<span class="detail-tag magic">Magic User</span>');
      if (npcDef._creatureAppearance)
        tags.push('<span class="detail-tag creature">Creature</span>');
      if (npcDef._appearance)
        tags.push('<span class="detail-tag human">Human</span>');
      if (npcDef._combat && npcDef._combat._combat)
        tags.push('<span class="detail-tag combat">Combat</span>');
      if (!npcDef._combat)
        tags.push('<span class="detail-tag peaceful">Peaceful</span>');
      if (tags.length > 0) {
        html += `
                    <div class="detail-tags">
                        ${tags.join("")}
                    </div>
                `;
      }
      html += `
                <div class="detail-section">
                    <h3>Actions</h3>
                    <div class="detail-actions">
                        <button class="action-button" onclick="window.highliteItemPanel.copyNpcId(${npcId})">Copy ID</button>
                    </div>
                </div>
            `;
      container.innerHTML = html;
      const itemElements = container.querySelectorAll(
        ".recipe-item, .loot-item"
      );
      const uiManager = this.UIManager;
      itemElements.forEach((item) => {
        const itemId = item.getAttribute("data-item-id");
        if (itemId && uiManager) {
          uiManager.bindOnClickBlockHsMask(
            item,
            () => {
              this.showItemModal(parseInt(itemId));
            }
          );
        } else if (itemId) {
          item.onclick = () => {
            this.showItemModal(parseInt(itemId));
          };
        }
      });
    } catch (error) {
      this.error(`Failed to show NPC details: ${error}`);
      container.innerHTML = "<p class='detail-error'>Error loading NPC details</p>";
    }
  }
  // Public methods for button actions
  copyItemId(itemId) {
    navigator.clipboard.writeText(itemId.toString());
    this.log(`Copied item ID: ${itemId}`);
  }
  copyItemLink(itemId) {
    navigator.clipboard.writeText(`[${itemId}]`);
    this.log(`Copied item link: [${itemId}]`);
  }
  copyNpcId(npcId) {
    navigator.clipboard.writeText(npcId.toString());
    this.log(`Copied NPC ID: ${npcId}`);
  }
  addStyles() {
    const style = document.createElement("style");
    style.setAttribute("data-item-panel", "true");
    style.textContent = `
            /* Panel Container */
            .item-definition-panel {
                width: 100% !important;
                height: 100% !important;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            
            /* Header */
            .item-panel-header {
                padding: 12px 15px;
                border-bottom: 1px solid #333;
                flex-shrink: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .header-title-section {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .item-panel-header h3 {
                margin: 0;
                color: #fff;
                font-size: 18px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            /* View Toggle */
            .view-toggle-container {
                display: flex;
                gap: 8px;
                background: rgba(0, 0, 0, 0.3);
                padding: 4px;
                border-radius: 6px;
            }
            
            .view-toggle-button {
                padding: 6px 16px;
                background: transparent;
                border: 1px solid transparent;
                border-radius: 4px;
                color: #aaa;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
                white-space: nowrap;
            }
            
            .view-toggle-button:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.1);
            }
            
            .view-toggle-button.active {
                background: rgba(74, 158, 255, 0.3);
                border-color: #4a9eff;
                color: #fff;
            }
            
            .item-panel-stats {
                display: flex;
                gap: 20px;
                font-size: 13px;
                color: #aaa;
                flex-wrap: wrap;
            }
            
            .stat-type {
                color: #4a9eff;
                font-weight: 600;
            }
            
            /* Search */
            .item-panel-search-container {
                padding: 12px 15px;
                border-bottom: 1px solid #333;
                flex-shrink: 0;
            }
            
            .item-panel-search {
                width: 100%;
                padding: 10px 15px;
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid #555;
                border-radius: 4px;
                color: white;
                font-size: 14px;
                box-sizing: border-box;
            }
            
            .item-panel-search::placeholder {
                color: #888;
            }
            
            .item-panel-search:focus {
                outline: none;
                border-color: #4a9eff;
                box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
            }
            
            /* List Wrapper */
            .item-panel-list-wrapper {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-height: 0;
                overflow: hidden;
            }
            
            /* Scrollbars */
            .item-list-container::-webkit-scrollbar {
                width: 10px;
            }
            
            .item-list-container::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
            }
            
            .item-list-container::-webkit-scrollbar-thumb {
                background: #4a9eff;
                border-radius: 4px;
            }
            
            .item-list-container::-webkit-scrollbar-thumb:hover {
                background: #66b3ff;
            }
            
            /* Item List */
            .item-list-container {
                flex: 1;
                overflow-y: auto;
                overflow-x: hidden;
                padding: 15px;
                box-sizing: border-box;
            }

            .item-list-item {
                display: flex;
                align-items: center;
                padding: 12px 15px;
                margin-bottom: 10px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid transparent;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
            }
            
            .item-list-item:hover {
                background: rgba(74, 158, 255, 0.2);
                border-color: #4a9eff;
                transform: translateX(3px);
            }
            
            .item-sprite {
                width: var(--hs-inventory-item-size);
                height: var(--hs-inventory-item-size);
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: calc(var(--hs-url-inventory-items-width)) calc(var(--hs-url-inventory-items-height));
                background-image: var(--hs-url-inventory-items);
                border: 2px solid #555;
                border-radius: 8px;
                margin-right: 15px;
                flex-shrink: 0;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }
            
            .item-list-item:hover .item-sprite {
                border-color: #4a9eff;
            }
            
            /* NPC Sprites for Modal */
            .npc-sprite-modal {
                background-repeat: no-repeat;
                background-size: auto;
                border: 3px solid #4a9eff;
                border-radius: 12px;
                margin-right: 25px;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                flex-shrink: 0;
                box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* Fallback styles when SpritesheetManager not available */
            .npc-sprite-modal.npc-sprite-small {
                background-image: var(--hs-url-small-creature1);
                width: 64px;
                height: 64px;
            }
            
            .npc-sprite-modal.npc-sprite-medium {
                background-image: var(--hs-url-medium-creature1);
                width: 64px;
                height: 128px;
            }
            
            .npc-sprite-modal.npc-sprite-large {
                background-image: var(--hs-url-large-creature1);
                width: 128px;
                height: 128px;
            }
            
            .npc-sprite-modal.npc-sprite-largest {
                background-image: var(--hs-url-largest-creature1);
                width: 256px;
                height: 184px;
            }
            
            .npc-sprite-modal.npc-sprite-human {
                width: 64px;
                height: 128px;
            }
            
            .npc-sprite-modal.npc-sprite-unknown {
                width: 80px;
                height: 80px;
                background: rgba(255, 255, 255, 0.1);
                font-size: 48px;
                color: #666;
            }
            
            /* NPC Sprites for List */
            .npc-sprite-container {
                position: relative;
                width: var(--hs-inventory-item-size);
                height: var(--hs-inventory-item-size);
                flex-shrink: 0;
                border: 2px solid #555;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                overflow: hidden;
            }
            
            /* Wrapper to allow badge overflow */
            .npc-sprite-wrapper {
                position: relative;
                display: inline-block;
                margin-right: 15px;
            }
            
            .item-list-item:hover .npc-sprite-container {
                border-color: #4a9eff;
            }
            
            .npc-sprite {
                background-repeat: no-repeat;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                font-size: 24px;
            }
            
            /* NPC sprite sizes based on creature type - fallback when SpritesheetManager not available */
            .npc-sprite-small {
                background-image: var(--hs-url-small-creature1);
                background-size: auto;
            }
            
            .npc-sprite-medium {
                background-image: var(--hs-url-medium-creature1);
                background-size: auto;
            }
            
            .npc-sprite-large {
                background-image: var(--hs-url-large-creature1);
                background-size: auto;
            }
            
            .npc-sprite-largest {
                background-image: var(--hs-url-largest-creature1);
                background-size: auto;
            }
            
            /* Human NPCs and unknown types */
            .npc-sprite-human,
            .npc-sprite-unknown {
                background: #f0f0f0;
                background-image: none;
                color: #333;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                position: relative;
            }
            
            .npc-level-badge {
                position: absolute;
                top: -8px;
                right: -8px;
                background: #ff4444;
                color: white;
                font-size: 11px;
                font-weight: bold;
                padding: 2px 6px;
                border-radius: 10px;
                border: 2px solid rgba(0, 0, 0, 0.5);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                z-index: 10;
            }
            

            
            /* Info section */
            .item-info {
                flex: 1;
                min-width: 0;
                overflow: hidden;
            }
            
            .item-name {
                color: white;
                font-size: 12px;
                font-weight: 600;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 4px;
            }
            
            .item-id {
                color: #999;
                font-size: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .item-no-results, .item-loading {
                text-align: center;
                color: #666;
                padding: 30px;
                font-style: italic;
            }
            
            .item-loading p {
                margin: 10px 0;
                font-size: 16px;
            }
            
            .item-loading-hint {
                font-size: 14px !important;
                color: #555 !important;
            }
            
            /* Pagination */
            .pagination-container {
                padding: 12px;
                border-top: 1px solid #333;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
                flex-shrink: 0;
                background: rgba(0, 0, 0, 0.3);
            }
            
            .pagination-button {
                padding: 6px 12px;
                background: rgba(74, 158, 255, 0.2);
                border: 1px solid #4a9eff;
                border-radius: 4px;
                color: white;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
                flex-shrink: 0;
            }
            
            .pagination-button:hover:not(:disabled) {
                background: rgba(74, 158, 255, 0.4);
            }
            
            .pagination-button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .pagination-info {
                color: white;
                font-size: 14px;
                white-space: nowrap;
            }
            
            /* Modal Styles */
            .item-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(4px);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.2s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .item-modal-container {
                background: rgba(16, 16, 16, 0.95);
                border: 2px solid #4a9eff;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(74, 158, 255, 0.5);
                width: 90%;
                max-width: 700px;
                max-height: 90vh;
                overflow: hidden;
                position: relative;
                animation: slideIn 0.3s ease-out;
            }
            
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .item-modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 36px;
                height: 36px;
                background: #ff4444;
                border: none;
                border-radius: 50%;
                color: white;
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                z-index: 10;
                line-height: 1;
            }
            
            .item-modal-close:hover {
                background: #ff6666;
                transform: scale(1.1);
            }
            
            .item-modal-content {
                padding: 30px;
                overflow-y: auto;
                max-height: 90vh;
                color: white;
            }
            
            /* Modal scrollbar */
            .item-modal-content::-webkit-scrollbar {
                width: 10px;
            }
            
            .item-modal-content::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
            }
            
            .item-modal-content::-webkit-scrollbar-thumb {
                background: #4a9eff;
                border-radius: 4px;
            }
            
            .item-modal-content::-webkit-scrollbar-thumb:hover {
                background: #66b3ff;
            }
            
            /* Detail styles */
            .detail-error {
                color: #888;
                text-align: center;
                padding: 30px;
                font-size: 16px;
            }
            
            .detail-header {
                display: flex;
                align-items: flex-start;
                margin-bottom: 25px;
                padding-bottom: 25px;
                border-bottom: 1px solid #333;
            }
            
            .detail-sprite-large {
                width: var(--hs-inventory-item-size);
                height: var(--hs-inventory-item-size);
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: calc(var(--hs-url-inventory-items-width)) calc(var(--hs-url-inventory-items-height));
                background-image: var(--hs-url-inventory-items);
                border: 3px solid #4a9eff;
                border-radius: 12px;
                margin-right: 25px;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                flex-shrink: 0;
                box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
            }
            
            .detail-title {
                flex: 1;
                min-width: 0;
                overflow: hidden;
            }
            
            .detail-title h2 {
                margin: 0;
                color: white;
                font-size: 28px;
                margin-bottom: 8px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .detail-id {
                color: #aaa;
                font-size: 18px;
                margin: 0;
            }
            
            .detail-level {
                color: #4a9eff;
                font-size: 16px;
                margin: 4px 0 0 0;
                font-weight: 600;
            }
            
            .detail-section {
                margin-bottom: 25px;
                background: rgba(255, 255, 255, 0.02);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.05);
                overflow: hidden;
            }
            
            .detail-section h3 {
                color: #4a9eff;
                font-size: 20px;
                margin: 0 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
            }
            
            .detail-section p {
                margin: 0;
                line-height: 1.7;
                color: #ddd;
                word-wrap: break-word;
                font-size: 15px;
            }
            
            .detail-note {
                color: #aaa;
                font-style: italic;
            }
            
            .detail-cost {
                color: #ffd700 !important;
                font-size: 18px !important;
                font-weight: 600;
            }
            
            .detail-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .detail-list-item {
                color: #ddd;
                font-size: 15px;
                line-height: 1.5;
            }
            
            .detail-list-item.effect-positive {
                color: #4ecdc4;
            }
            
            /* Recipe Grid */
            .recipe-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                gap: 12px;
                margin-top: 10px;
            }
            
            .recipe-item {
                display: flex;
                align-items: center;
                padding: 10px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
                overflow: hidden;
            }
            
            .recipe-item:hover {
                background: rgba(74, 158, 255, 0.2);
                border-color: #4a9eff;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
            }
            
            .recipe-item-sprite {
                width: calc(var(--hs-inventory-item-size));
                height: calc(var(--hs-inventory-item-size));
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: calc(var(--hs-url-inventory-items-width)) calc(var(--hs-url-inventory-items-height));
                background-image: var(--hs-url-inventory-items);
                border: 2px solid #555;
                border-radius: 6px;
                margin-right: 12px;
                flex-shrink: 0;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
            }
            
            .recipe-item:hover .recipe-item-sprite {
                border-color: #4a9eff;
            }
            
            .recipe-item-info {
                flex: 1;
                min-width: 0;
                overflow: hidden;
            }
            
            .recipe-item-name {
                color: white;
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 2px;
            }
            
            .recipe-item-amount {
                color: #aaa;
                font-size: 13px;
                font-weight: 600;
            }
            
            /* Properties Grid */
            .detail-properties {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 12px;
            }
            
            .property {
                display: flex;
                justify-content: space-between;
                padding: 10px 15px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.08);
                overflow: hidden;
            }
            
            .property:hover {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(74, 158, 255, 0.3);
            }
            
            .property-label {
                color: #999;
                font-size: 15px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 10px;
            }
            
            .property-value {
                color: white;
                font-size: 15px;
                font-weight: 600;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .property-value.gold {
                color: #ffd700;
            }
            
            .property-value.yes {
                color: #4ecdc4;
            }
            
            .property-value.no {
                color: #ff6b6b;
            }
            
            /* Tags */
            .detail-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 25px;
                padding: 15px;
                background: rgba(255, 255, 255, 0.02);
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .detail-tag {
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border: 1px solid;
            }
            
            .detail-tag.members {
                background: rgba(255, 165, 0, 0.2);
                color: #ffa500;
                border-color: rgba(255, 165, 0, 0.4);
            }
            
            .detail-tag.stackable {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
                border-color: rgba(76, 175, 80, 0.4);
            }
            
            .detail-tag.tradeable {
                background: rgba(33, 150, 243, 0.2);
                color: #2196f3;
                border-color: rgba(33, 150, 243, 0.4);
            }
            
            .detail-tag.noteable {
                background: rgba(156, 39, 176, 0.2);
                color: #9c27b0;
                border-color: rgba(156, 39, 176, 0.4);
            }
            
            .detail-tag.iou {
                background: rgba(244, 67, 54, 0.2);
                color: #f44336;
                border-color: rgba(244, 67, 54, 0.4);
            }
            
            .detail-tag.shopkeeper {
                background: rgba(255, 235, 59, 0.2);
                color: #ffeb3b;
                border-color: rgba(255, 235, 59, 0.4);
            }
            
            .detail-tag.pickpocket {
                background: rgba(121, 85, 72, 0.2);
                color: #8d6e63;
                border-color: rgba(121, 85, 72, 0.4);
            }
            
            .detail-tag.aggressive {
                background: rgba(229, 57, 53, 0.2);
                color: #e53935;
                border-color: rgba(229, 57, 53, 0.4);
            }
            
            .detail-tag.magic {
                background: rgba(156, 39, 176, 0.2);
                color: #9c27b0;
                border-color: rgba(156, 39, 176, 0.4);
            }
            
            .detail-tag.creature {
                background: rgba(121, 85, 72, 0.2);
                color: #8d6e63;
                border-color: rgba(121, 85, 72, 0.4);
            }
            
            .detail-tag.human {
                background: rgba(33, 150, 243, 0.2);
                color: #2196f3;
                border-color: rgba(33, 150, 243, 0.4);
            }
            
            .detail-tag.combat {
                background: rgba(255, 87, 34, 0.2);
                color: #ff5722;
                border-color: rgba(255, 87, 34, 0.4);
            }
            
            .detail-tag.peaceful {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
                border-color: rgba(76, 175, 80, 0.4);
            }
            
            /* Actions */
            .detail-actions {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            
            .action-button {
                padding: 12px 24px;
                background: rgba(74, 158, 255, 0.2);
                border: 2px solid #4a9eff;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                transition: all 0.2s;
                white-space: nowrap;
            }
            
            .action-button:hover {
                background: rgba(74, 158, 255, 0.4);
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
            }
            
            .action-button:active {
                transform: translateY(0);
                box-shadow: 0 2px 4px rgba(74, 158, 255, 0.3);
            }

            /* Loot Display Styles */
            .loot-subsection {
                margin-top: 20px;
            }

            .loot-subsection h4 {
                margin: 0 0 10px 0;
                color: #4a9eff;
                font-size: 16px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .loot-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                gap: 12px;
                margin-top: 12px;
            }

            .loot-item {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
                overflow: hidden;
            }

            .loot-item:hover {
                background: rgba(74, 158, 255, 0.2);
                border-color: #4a9eff;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
            }

            .loot-item.rare-loot {
                border-color: #ff6b35;
                background: rgba(255, 107, 53, 0.1);
            }

            .loot-item.rare-loot:hover {
                background: rgba(255, 107, 53, 0.2);
                border-color: #ff8c42;
                box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
            }

            .loot-item.root-loot {
                border-color: #8bc34a;
                background: rgba(139, 195, 74, 0.1);
            }

            .loot-item.root-loot:hover {
                background: rgba(139, 195, 74, 0.2);
                border-color: #9ccc65;
                box-shadow: 0 4px 8px rgba(139, 195, 74, 0.3);
            }

            .loot-item.iou-item {
                border-left: 4px solid #ffc107;
            }

            .loot-item-sprite {
                width: calc(var(--hs-inventory-item-size));
                height: calc(var(--hs-inventory-item-size));
                background-position: 0rem 0rem;
                background-repeat: no-repeat;
                background-size: calc(var(--hs-url-inventory-items-width)) calc(var(--hs-url-inventory-items-height));
                background-image: var(--hs-url-inventory-items);
                border: 2px solid #555;
                border-radius: 6px;
                margin-right: 12px;
                flex-shrink: 0;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
            }

            .loot-item:hover .loot-item-sprite {
                border-color: #4a9eff;
            }

            .loot-item.rare-loot:hover .loot-item-sprite {
                border-color: #ff8c42;
            }

            .loot-item.root-loot:hover .loot-item-sprite {
                border-color: #9ccc65;
            }

            .loot-item-info {
                flex: 1;
                min-width: 0;
                overflow: hidden;
            }

            .loot-item-name {
                color: white;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 3px;
            }

            .loot-item-amount {
                color: #4a9eff;
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 3px;
            }

            .loot-item-odds {
                color: #ffc107;
                font-size: 12px;
                font-weight: 600;
            }

            .loot-special {
                padding: 15px;
                background: rgba(255, 193, 7, 0.1);
                border: 1px solid #ffc107;
                border-radius: 8px;
                margin-top: 12px;
            }

            .treasure-map-info {
                color: #ffc107;
                font-weight: 600;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .treasure-map-info::before {
                content: "\u{1F5FA}\uFE0F";
                font-size: 16px;
            }

            /* NPC Drops Section (for item modals) */
            .npc-drops-container {
                max-height: 300px;
                overflow-y: auto;
                overflow-x: hidden;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                background: rgba(0, 0, 0, 0.2);
                margin-top: 12px;
                padding: 12px;
            }

            .npc-drops-container::-webkit-scrollbar {
                width: 12px;
            }

            .npc-drops-container::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 6px;
                margin: 2px;
            }

            .npc-drops-container::-webkit-scrollbar-thumb {
                background: #4a9eff;
                border-radius: 6px;
                border: 2px solid rgba(16, 16, 16, 0.95);
            }

            .npc-drops-container::-webkit-scrollbar-thumb:hover {
                background: #66b3ff;
            }

            /* Loot Drops Section (for NPC modals) - Main container for all drops */
            .drops-section-container {
                max-height: 400px;
                overflow-y: auto;
                overflow-x: hidden;
                padding-right: 8px;
                margin-top: 12px;
            }

            .drops-section-container::-webkit-scrollbar {
                width: 12px;
            }

            .drops-section-container::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 6px;
                margin: 2px;
            }

            .drops-section-container::-webkit-scrollbar-thumb {
                background: #4a9eff;
                border-radius: 6px;
                border: 2px solid rgba(16, 16, 16, 0.95);
            }

            .drops-section-container::-webkit-scrollbar-thumb:hover {
                background: #66b3ff;
            }

            /* Remove individual loot grid scrolling */
            .loot-grid {
                max-height: none !important;
                overflow: visible !important;
            }

            .npc-drop-item {
                display: flex;
                align-items: center;
                padding: 12px;
                margin-bottom: 10px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
                overflow: hidden;
            }

            .npc-drop-item:last-child {
                margin-bottom: 0;
            }

            .npc-drop-item:hover {
                background: rgba(74, 158, 255, 0.2);
                border-color: #4a9eff;
                transform: translateX(3px);
                box-shadow: 0 2px 8px rgba(74, 158, 255, 0.3);
            }

            .npc-drop-sprite-wrapper {
                position: relative;
                margin-right: 15px;
                flex-shrink: 0;
            }

            .npc-drop-sprite {
                width: 48px;
                height: 48px;
                border: 2px solid #555;
                border-radius: 6px;
                background-repeat: no-repeat;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                overflow: hidden;
                position: relative;
            }

            /* Scaled sprite containers for different creature sizes in drops */
            .npc-drop-sprite.npc-sprite-small .sprite-content {
                width: 64px;
                height: 64px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.75);
                transform-origin: center center;
            }

            .npc-drop-sprite.npc-sprite-medium .sprite-content {
                width: 64px;
                height: 128px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.375);
                transform-origin: center center;
            }

            .npc-drop-sprite.npc-sprite-large .sprite-content {
                width: 128px;
                height: 128px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.375);
                transform-origin: center center;
            }

            .npc-drop-sprite.npc-sprite-largest .sprite-content {
                width: 256px;
                height: 184px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.1875);
                transform-origin: center center;
            }

            .npc-drop-sprite.npc-sprite-small {
                background-image: var(--hs-url-small-creature1);
            }

            .npc-drop-sprite.npc-sprite-medium {
                background-image: var(--hs-url-medium-creature1);
            }

            .npc-drop-sprite.npc-sprite-large {
                background-image: var(--hs-url-large-creature1);
            }

            .npc-drop-sprite.npc-sprite-largest {
                background-image: var(--hs-url-largest-creature1);
            }

            .npc-drop-sprite.npc-sprite-human {
                background-color: #f0f0f0;
                color: #666;
            }

            .npc-drop-sprite.npc-sprite-unknown {
                background-color: rgba(255, 255, 255, 0.1);
                color: #999;
                font-size: 24px;
            }

            .npc-drop-item:hover .npc-drop-sprite {
                border-color: #4a9eff;
            }

            .npc-drop-level-badge {
                position: absolute;
                top: -6px;
                right: -6px;
                background: #4a9eff;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
                border: 2px solid rgba(16, 16, 16, 0.95);
                z-index: 10;
            }

            .npc-drop-info {
                flex: 1;
                min-width: 0;
                overflow: hidden;
            }

            .npc-drop-name {
                color: white;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 6px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .npc-drop-details {
                display: flex;
                flex-direction: column;
                gap: 3px;
            }

            .npc-drop-type {
                font-size: 13px;
                font-weight: 500;
                padding: 2px 6px;
                border-radius: 4px;
                display: inline-block;
                max-width: fit-content;
            }

            .npc-drop-type.guaranteed {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
                border: 1px solid rgba(76, 175, 80, 0.4);
            }

            .npc-drop-type.regular {
                background: rgba(33, 150, 243, 0.2);
                color: #2196f3;
                border: 1px solid rgba(33, 150, 243, 0.4);
            }

            .npc-drop-type.rare {
                background: rgba(255, 107, 53, 0.2);
                color: #ff6b35;
                border: 1px solid rgba(255, 107, 53, 0.4);
            }

            .npc-drop-type.root {
                background: rgba(139, 195, 74, 0.2);
                color: #8bc34a;
                border: 1px solid rgba(139, 195, 74, 0.4);
            }
        `;
    document.head.appendChild(style);
  }
  stop() {
    this.log("Definitions Panel stopped");
    this.isLoggedIn = false;
    this.closeModal();
    this.cleanupAllSprites();
    this.panelManager.removeMenuItem("\u{1F4E6}");
    const style = document.querySelector("style[data-item-panel]");
    if (style) {
      style.remove();
    }
    if (window.highliteItemPanel === this) {
      delete window.highliteItemPanel;
    }
    this.allItems = [];
    this.filteredItems = [];
    this.allNpcs = [];
    this.filteredNpcs = [];
    this.lootData = null;
    this.itemsLoaded = false;
    this.npcsLoaded = false;
    this.isLoggedIn = false;
    this.currentPage = 0;
    this.selectedItemId = null;
    this.currentView = "items";
    this.panelContent = null;
    this.itemListContainer = null;
    this.searchInput = null;
    this.modalOverlay = null;
    this.itemToggle = null;
    this.npcToggle = null;
    this.spriteReferences.clear();
    this.spriteContexts.clear();
    this.activeSpriteUrls.clear();
    this.currentPage = 0;
    this.updateStats();
  }
};
var DefinitionsPanel_default = DefinitionsPanel;
export {
  DefinitionsPanel,
  DefinitionsPanel_default as default
};
