// node_modules/@ryelite/core/dist/index.js
var En = Object.create;
var ht = Object.defineProperty;
var In = Object.getOwnPropertyDescriptor;
var _n = Object.getOwnPropertyNames;
var Pn = Object.getPrototypeOf;
var An = Object.prototype.hasOwnProperty;
var c = (e13, t) => ht(e13, "name", { value: t, configurable: true });
var Mn = (e13, t) => () => (t || e13((t = { exports: {} }).exports, t), t.exports);
var Ln = (e13, t) => {
  for (var i in t) ht(e13, i, { get: t[i], enumerable: true });
};
var Rt = (e13, t, i, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of _n(t)) !An.call(e13, s) && s !== i && ht(e13, s, { get: () => t[s], enumerable: !(n = In(t, s)) || n.enumerable });
  return e13;
};
var O = (e13, t, i) => (Rt(e13, t, "default"), i && Rt(i, t, "default"));
var Nn = (e13, t, i) => (i = e13 != null ? En(Pn(e13)) : {}, Rt(t || !e13 || !e13.__esModule ? ht(i, "default", { value: e13, enumerable: true }) : i, e13));
var Si = Mn(() => {
  "use strict";
});
var B = {};
Ln(B, { ActionState: () => Dt, ClassSignatures: () => gi, ContextMenuManager: () => Ke, ContextMenuTypes: () => Tt, DatabaseManager: () => fe, EntityType: () => wi, EnumSignatures: () => yi, Highlite: () => xi, HighliteResources: () => Me, HookManager: () => Ye, ItemTooltip: () => Je, NotificationManager: () => Qe, PanelManager: () => Ee, Plugin: () => bi, PluginManager: () => Xe, Reflector: () => $e, SettingsManager: () => _e, SettingsTypes: () => dt, SoundManager: () => at, UIManager: () => Ce, UIManagerScope: () => Vt, abbreviateValue: () => Ts, defaultTooltipConfig: () => pt, getEquipmentTypeName: () => Bt, getSkillName: () => De });
O(B, Nn(Si()));
var Dt = ((m) => (m[m.Any = -1] = "Any", m[m.IdleState = 0] = "IdleState", m[m.MovingState = 1] = "MovingState", m[m.MovingTowardTargetState = 2] = "MovingTowardTargetState", m[m.BankingState = 3] = "BankingState", m[m.MeleeCombatState = 4] = "MeleeCombatState", m[m.TradingState = 5] = "TradingState", m[m.ShoppingState = 6] = "ShoppingState", m[m.FishingState = 7] = "FishingState", m[m.CookingState = 8] = "CookingState", m[m.RespawningState = 9] = "RespawningState", m[m.PlayerDeadState = 10] = "PlayerDeadState", m[m.ConversationState = 11] = "ConversationState", m[m.ChangingAppearanceState = 12] = "ChangingAppearanceState", m[m.WoodcuttingState = 13] = "WoodcuttingState", m[m.MiningState = 14] = "MiningState", m[m.HarvestingState = 15] = "HarvestingState", m[m.TreeShakingState = 16] = "TreeShakingState", m[m.SmeltingState = 17] = "SmeltingState", m[m.SmithingState = 18] = "SmithingState", m[m.CraftingState = 19] = "CraftingState", m[m.GoThroughDoorState = 20] = "GoThroughDoorState", m[m.MagicCombatState = 21] = "MagicCombatState", m[m.RangeCombatState = 22] = "RangeCombatState", m[m.EnchantingState = 23] = "EnchantingState", m[m.TeleportingState = 24] = "TeleportingState", m[m.NPCDeadState = 25] = "NPCDeadState", m[m.CreatingNonSkillItemsState = 26] = "CreatingNonSkillItemsState", m[m.SearchingWorldEntityState = 27] = "SearchingWorldEntityState", m[m.PotionMakingState = 28] = "PotionMakingState", m[m.MineThroughRocksState = 29] = "MineThroughRocksState", m[m.UsingSpinningWheelState = 30] = "UsingSpinningWheelState", m[m.ClimbSameMapLevelState = 31] = "ClimbSameMapLevelState", m[m.SmeltingKilnState = 32] = "SmeltingKilnState", m[m.PlayerLoggingOutState = 33] = "PlayerLoggingOutState", m[m.PickpocketingState = 34] = "PickpocketingState", m[m.StunnedState = 35] = "StunnedState", m[m.PicklockingState = 36] = "PicklockingState", m[m.NPCConversationState = 37] = "NPCConversationState", m[m.RubbingItemState = 38] = "RubbingItemState", m[m.OpeningItemState = 39] = "OpeningItemState", m[m.UsingItemOnEntityState = 40] = "UsingItemOnEntityState", m[m.DiggingState = 41] = "DiggingState", m))(Dt || {});
var Tt = ((S) => (S[S.Any = -1] = "Any", S[S.Inventory = 0] = "Inventory", S[S.Bank = 1] = "Bank", S[S.Shop = 2] = "Shop", S[S.TradeInventory = 3] = "TradeInventory", S[S.TradeMyOfferedItems = 4] = "TradeMyOfferedItems", S[S.TradeOtherPlayerOfferedItems = 5] = "TradeOtherPlayerOfferedItems", S[S.Loadout = 6] = "Loadout", S[S.ChangeAppearance = 7] = "ChangeAppearance", S[S.Smelting = 8] = "Smelting", S[S.Smithing = 9] = "Smithing", S[S.Magic = 10] = "Magic", S[S.QuestDetail = 11] = "QuestDetail", S[S.PotionMaking = 12] = "PotionMaking", S[S.Welcome = 13] = "Welcome", S[S.SmeltingKiln = 14] = "SmeltingKiln", S[S.CameraSettings = 15] = "CameraSettings", S[S.SkillGuide = 16] = "SkillGuide", S[S.Loot = 17] = "Loot", S[S.FriendList = 18] = "FriendList", S[S.Stats = 19] = "Stats", S[S.Quests = 20] = "Quests", S[S.Settings = 21] = "Settings", S[S.TextInput = 22] = "TextInput", S[S.Confirmation = 23] = "Confirmation", S[S.Chat = 24] = "Chat", S[S.PrivateChat = 25] = "PrivateChat", S[S.TradeMenu = 26] = "TradeMenu", S[S.TreasureMap = 27] = "TreasureMap", S[S.GraphicsSettings = 28] = "GraphicsSettings", S))(Tt || {});
var wi = ((a) => (a[a.Any = -1] = "Any", a[a.WorldObject = 0] = "WorldObject", a[a.GroundItem = 1] = "GroundItem", a[a.NPC = 2] = "NPC", a[a.Player = 3] = "Player", a))(wi || {});
var Ke = class e {
  static {
    c(this, "ContextMenuManager");
  }
  static instance;
  defaultActions = {};
  inventoryActions = {};
  gameWorldActions = {};
  gameWorldActionsSorting = {};
  inventoryActionsSorting = {};
  spellActions = {};
  constructor() {
    if (e.instance) return e.instance;
    if (document.highlite.managers.ContextMenuManager) return e.instance = document.highlite.managers.ContextMenuManager, document.highlite.managers.ContextMenuManager;
    e.instance = this, document.highlite.managers.ContextMenuManager = this;
  }
  AddDefaultMenuAction(t) {
    return -1;
  }
  AddInventoryItemMenuAction(t, i, n = -1, s) {
    let a = document.highlite.gameLookups.InventoryActions, r = -1;
    return a[t] === void 0 ? (a[a[t] = Object.keys(a).length / 2] = t, r = Object.keys(a).length / 2 - 1) : r = a[t], this.inventoryActions[s] || (this.inventoryActions[s] = {}), this.inventoryActions[s][n] || (this.inventoryActions[s][n] = {}), this.inventoryActions[s][n][t] ? this.inventoryActions[s][n][t].handleFunctions.push(i) : this.inventoryActions[s][n][t] = { actionNumber: r, handleFunctions: [i] }, r;
  }
  AddGameWorldMenuAction(t, i, n = -1) {
    let s = document.highlite.gameLookups.GameWorldActions, a = -1;
    return s[t] === void 0 ? (s[s[t] = Object.keys(s).length / 2] = t, a = Object.keys(s).length / 2 - 1) : a = s[t], this.gameWorldActions[n] || (this.gameWorldActions[n] = {}), this.gameWorldActions[n][t] ? this.gameWorldActions[n][t].handleFunctions.push(i) : this.gameWorldActions[n][t] = { actionNumber: a, handleFunctions: [i] }, a;
  }
  RemoveGameWorldMenuAction(t, i, n = -1) {
    if (this.gameWorldActions[n] && this.gameWorldActions[n][t]) {
      let s = this.gameWorldActions[n][t], a = s.handleFunctions.indexOf(i);
      a > -1 && s.handleFunctions.splice(a, 1);
    }
    return this.gameWorldActions[n] && this.gameWorldActions[n][t] && this.gameWorldActions[n][t].handleFunctions.length === 0 && delete this.gameWorldActions[n][t], Object.keys(this.gameWorldActions[n]).length === 0 && delete this.gameWorldActions[n], true;
  }
  RemoveInventoryItemMenuAction(t, i, n = -1, s) {
    if (this.inventoryActions[s] && this.inventoryActions[s][n] && this.inventoryActions[s][n][t]) {
      let a = this.inventoryActions[s][n][t], r = a.handleFunctions.indexOf(i);
      r > -1 && a.handleFunctions.splice(r, 1);
    }
    return this.inventoryActions[s] && this.inventoryActions[s][n] && this.inventoryActions[s][n][t] && this.inventoryActions[s][n][t].handleFunctions.length === 0 && delete this.inventoryActions[s][n][t], Object.keys(this.inventoryActions[s][n]).length === 0 && delete this.inventoryActions[s][n], true;
  }
  AddSpellMenuAction(t) {
    return -1;
  }
  inventoryContextHook(t, i, n) {
    let s = t[0], a = t[1], r = t[2], l = t[3], u = t[4], h = t[5], p = i;
    if (this.inventoryActions[u] !== void 0) {
      let v = this.inventoryActions[u][-1];
      if (v) for (let [E, f] of Object.entries(v)) {
        let d = f;
        p.push(n._contextMenuItemFactory.createInventoryItemContextMenuItem(this.inventoryActionHandler.bind(this, u, -1), u, d.actionNumber, r, l, null, 0));
      }
      let k = this.inventoryActions[u][document.highlite.gameHooks.EntityManager.Instance._mainPlayer._currentState.getCurrentState()];
      if (k) for (let [E, f] of Object.entries(k)) {
        let d = f;
        p.push(n._contextMenuItemFactory.createInventoryItemContextMenuItem(this.inventoryActionHandler.bind(this, u, document.highlite.gameHooks.EntityManager.Instance._mainPlayer._currentState.getCurrentState()), u, d.actionNumber, r, l, null, 0));
      }
    }
    if (this.inventoryActions[-1] !== void 0) {
      let v = this.inventoryActions[-1][-1];
      if (v) for (let [E, f] of Object.entries(v)) {
        let d = f;
        p.push(n._contextMenuItemFactory.createInventoryItemContextMenuItem(this.inventoryActionHandler.bind(this, -1, -1), u, d.actionNumber, r, l, null, 0));
      }
      let k = this.inventoryActions[-1][document.highlite.gameHooks.EntityManager.Instance._mainPlayer._currentState.getCurrentState()];
      if (k) for (let [E, f] of Object.entries(k)) {
        let d = f;
        p.push(n._contextMenuItemFactory.createInventoryItemContextMenuItem(this.inventoryActionHandler.bind(this, -1, document.highlite.gameHooks.EntityManager.Instance._mainPlayer._currentState.getCurrentState()), u, d.actionNumber, r, l, null, 0));
      }
    }
    return p.sort((v, k) => {
      let E = v.Action, f = k.Action, d = this.inventoryActionsSorting[E] !== void 0 ? this.inventoryActionsSorting[E] : p.length, A = this.inventoryActionsSorting[f] !== void 0 ? this.inventoryActionsSorting[f] : p.length;
      return d - A;
    }), p;
  }
  gameWorldContextHook(t, i, n) {
    let a = t[0]._actionsAndEntities, r = [];
    for (let u of Object.entries(a)) {
      let h = u[1];
      h._entity != null && !r.includes(h._entity) && r.push(h._entity);
    }
    let l = i;
    for (let u of r) {
      let h = this.gameWorldActions[u._entityType];
      if (h) for (let [v, k] of Object.entries(h)) {
        let E = k;
        l.push(n._contextMenuItemFactory.createGameWorldContextMenuItem(E.actionNumber, this.worldObjectActionHandler.bind(this, u._entityType), u, null, null, null));
      }
      let p = this.gameWorldActions[-1];
      if (p) for (let [v, k] of Object.entries(p)) {
        let E = k;
        l.push(n._contextMenuItemFactory.createGameWorldContextMenuItem(E.actionNumber, this.worldObjectActionHandler.bind(this, -1), u, null, null, null));
      }
    }
    return l;
  }
  inventoryActionHandler(t, i, n, s) {
    let a = n.getItemAction(), r = this.inventoryActions[t][i];
    if (r) for (let [l, u] of Object.entries(r)) {
      let h = u;
      if (h.actionNumber == a) for (let p of h.handleFunctions) p(n, s);
    }
  }
  worldObjectActionHandler(t, i, n) {
    let s = this.gameWorldActions[t];
    if (s) for (let [a, r] of Object.entries(s)) {
      let l = r;
      if (l.actionNumber == i.Action) for (let u of l.handleFunctions) u(i, n);
    }
  }
  SetGameWorldActionMenuPosition(t, i) {
    let n = t.toLowerCase().replace(/ /g, "_"), s = document.highlite.gameLookups.GameWorldActions;
    s[n] !== void 0 && (this.gameWorldActionsSorting[s[n]] = i);
  }
  RemoveGameWorldActionMenuPosition(t) {
    let i = t.toLowerCase().replace(/ /g, "_"), n = document.highlite.gameLookups.GameWorldActions;
    n[i] !== void 0 && delete this.gameWorldActionsSorting[n[i]];
  }
  SetInventoryActionMenuPosition(t, i) {
    let n = document.highlite.gameLookups.InventoryActions;
    n[t] !== void 0 && (this.inventoryActionsSorting[n[t]] = i);
  }
  RemoveInventoryActionMenuPosition(t) {
    let i = document.highlite.gameLookups.InventoryActions;
    i[t] !== void 0 && delete this.inventoryActionsSorting[i[t]];
  }
  registerContextHook(t, i, n) {
    let s = this, a = document.highlite.gameHooks[t].prototype;
    return (function(r) {
      a[i] = function(...l) {
        let u = r.apply(this, arguments);
        return n.apply(s, [l, u, this]);
      };
    })(a[i]), true;
  }
  registerStaticContextHook(t, i, n = Function) {
    let s = this, a = document.highlite.gameHooks[t];
    if (!a) return console.warn(`[Ryelite] Attempted to register unknown static client class hook (${t}).`), false;
    let r = i;
    r.startsWith("_") && (r = r.substring(1));
    let l = `${t}_${r}`;
    return (function(u) {
      a[i] = function(...h) {
        let p = u.apply(this, arguments);
        return n.apply(s, [l, ...h, this]), p;
      };
    })(a[i]), true;
  }
  ActionSorting(t, i, n, s, a) {
    let r = new e();
    !a || !a._mousePointActionsAndEntitiesResult || !a._mousePointActionsAndEntitiesResult._actionsAndEntities || (a._mousePointActionsAndEntitiesResult._actionsAndEntities.sort((l, u) => {
      let h = l.Action, p = u.Action, v = a._mousePointActionsAndEntitiesResult._actionsAndEntities.indexOf(l), k = a._mousePointActionsAndEntitiesResult._actionsAndEntities.indexOf(u), E = r.gameWorldActionsSorting[h] !== void 0 ? r.gameWorldActionsSorting[h] : v, f = r.gameWorldActionsSorting[p] !== void 0 ? r.gameWorldActionsSorting[p] : k;
      return E - f;
    }), a._mousePointActionsAndEntitiesResult._mainActionAndEntity = a._mousePointActionsAndEntitiesResult._actionsAndEntities[0]);
  }
};
var Ye = class e2 {
  static {
    c(this, "HookManager");
  }
  static instance;
  constructor() {
    if (e2.instance) return e2.instance;
    if (document.highlite.managers.HookManager) return e2.instance = document.highlite.managers.HookManager, document.highlite.managers.HookManager;
    e2.instance = this, document.highlite.managers.HookManager = this;
  }
  registerClass(t, i) {
    let n = document.client.get(t);
    if (!n) return console.warn(`[Ryelite] ${t} (${i}) is not defined in client.`), false;
    document.highlite.gameHooks[i] = n;
    let s = n.prototype, a = Object.entries(Object.getOwnPropertyDescriptors(s)).filter(([l, u]) => typeof u.value == "function" && l !== "constructor").map(([l]) => l), r = Object.entries(Object.getOwnPropertyDescriptors(n)).filter(([l, u]) => typeof u.value == "function" && !["length", "name", "prototype"].includes(l)).map(([l]) => l);
    for (let l in a) this.registerClassHook(i, a[l]);
    for (let l in r) this.registerStaticClassHook(i, r[l]);
    return true;
  }
  registerEnum(t, i) {
    let n = document.client.get(t);
    return n ? (document.highlite.gameLookups[i] = n, true) : (console.warn(`[Ryelite] ${t} (${i}) is not defined in client.`), false);
  }
  registerClassHook(t, i, n = this.hook) {
    let s = this, a = document.highlite.gameHooks[t].prototype;
    if (!a) return console.warn(`[Ryelite] Attempted to register unknown client class hook (${t}).`), false;
    let r = i;
    r.startsWith("_") && (r = r.substring(1));
    let l = `${t}_${r}`;
    return (function(u) {
      a[i] = function(...h) {
        let p = u.apply(this, arguments);
        return n.apply(s, [l, ...h, this]), p;
      };
    })(a[i]), true;
  }
  registerClassOverrideHook(t, i, n = this.hook) {
    let s = this, a = document.highlite.gameHooks[t].prototype;
    if (!a) return console.warn(`[Ryelite] Attempted to register unknown client class override hook (${t}).`), false;
    let r = i;
    r.startsWith("_") && (r = r.substring(1));
    let l = `${t}_${r}`;
    return (function(u) {
      a[i] = function(...h) {
        return n.apply(s, [l, ...h, this]);
      };
    })(a[i]), true;
  }
  registerStaticClassHook(t, i, n = this.hook) {
    let s = this, a = document.highlite.gameHooks[t];
    if (!a) return console.warn(`[Ryelite] Attempted to register unknown static client class hook (${t}).`), false;
    let r = i;
    r.startsWith("_") && (r = r.substring(1));
    let l = `${t}_${r}`;
    return (function(u) {
      a[i] = function(...h) {
        let p = u.apply(this, arguments);
        return n.apply(s, [l, ...h, this]), p;
      };
    })(a[i]), true;
  }
  hook(t, ...i) {
    if (!document.highlite.managers.PluginManager) {
      console.warn("[Ryelite] Plugin Manager not initialized.");
      return;
    }
    for (let n of document.highlite.managers.PluginManager.plugins) if (n.instance && typeof n.instance[t] == "function") try {
      n.instance.settings.enable.value && n.instance[t].apply(n.instance, i);
    } catch (s) {
      console.error(`[Ryelite] Error in plugin ${n.instance?.pluginName} (${t}):`, s);
    }
  }
};
var Qe = class e3 {
  static {
    c(this, "NotificationManager");
  }
  static instance;
  canNotify = false;
  constructor() {
    if (e3.instance) return e3.instance;
    if (document.highlite.managers.NotificationManager) return e3.instance = document.highlite.managers.NotificationManager, document.highlite.managers.NotificationManager;
    e3.instance = this, document.highlite.managers.NotificationManager = this;
  }
  createNotification(t, i = () => {
    window.focus();
  }) {
    if (!this.canNotify) return false;
    let n = new Notification("Ryelite", { icon: "./static/icons/icon.png", body: t });
    return n.onclick = () => {
      i();
    }, true;
  }
  async askNotificationPermission() {
    "Notification" in window || (console.info("[Ryelite] This browser does not support notifications."), this.canNotify = false), Notification.permission === "granted" ? (console.info("[Ryelite] Notification permission granted."), this.canNotify = true) : Notification.permission === "denied" ? (console.info("[Ryelite] Notification permission denied."), this.canNotify = false) : (console.info("[Ryelite] Notification permission dismissed."), this.canNotify = false);
  }
};
function De(e13) {
  try {
    return document.highlite.gameLookups.Skills[e13] || `Skill ${e13}`;
  } catch {
    return `Skill ${e13}`;
  }
}
c(De, "getSkillName");
function Bt(e13) {
  try {
    return ["helmet", "chest", "legs", "shield", "weapon", "back", "neck", "gloves", "boots", "projectile"][e13] || `Type ${e13}`;
  } catch {
    return `Type ${e13}`;
  }
}
c(Bt, "getEquipmentTypeName");
var pt = { showSprite: true, showName: true, showId: true, showDescription: true, showCost: true, showRequirements: true, showEffects: true, showEdibleEffects: true, showWeaponSpeed: true, showEquipmentType: true, showExpFromObtaining: true, showRecipe: true, showTags: true, showEdibleResult: true };
var Je = class {
  static {
    c(this, "ItemTooltip");
  }
  element;
  currentItemId = null;
  constructor(t) {
    this.element = document.createElement("div"), this.element.className = "hs-ui-item-tooltip", this.element.style.display = "none", t.appendChild(this.element);
  }
  show(t, i, n, s = pt) {
    this.currentItemId = t;
    let a = null;
    try {
      a = document.highlite.gameHooks.ItemDefinitionManager._itemDefMap.get(t);
    } catch (f) {
      console.warn(`Error getting item definition for ID ${t}:`, f);
    }
    if (!a) return console.warn(`No item definition found for ID ${t}`), { hide: c(() => {
    }, "hide") };
    this.element.innerHTML = "";
    let r = document.createElement("div");
    if (r.className = "hs-ui-item-tooltip-header", s.showSprite) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-sprite";
      try {
        let d = document.highlite.gameHooks.InventoryItemSpriteManager.getCSSBackgroundPositionForItem(t);
        d && (f.style.backgroundPosition = d);
      } catch (d) {
        console.warn(`Error getting item sprite for ID ${t}:`, d);
      }
      r.appendChild(f);
    }
    let l = document.createElement("div");
    if (l.className = "hs-ui-item-tooltip-title", s.showName) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-name", f.textContent = a._nameCapitalized || a._name || `Item ${t}`, l.appendChild(f);
    }
    if (s.showId) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-id", f.textContent = `ID: ${t}`, l.appendChild(f);
    }
    if (r.appendChild(l), this.element.appendChild(r), s.showDescription && a._description) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-description", f.textContent = a._description, this.element.appendChild(f);
    }
    if (s.showCost && a._cost && a._cost > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = `<span class="hs-ui-item-tooltip-label">Cost:</span> <span class="hs-ui-item-tooltip-cost">${a._cost.toLocaleString()} coins</span>`, this.element.appendChild(f);
    }
    if (s.showRequirements && a._equippableRequirements && a._equippableRequirements.length > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">Requirements:</span>', a._equippableRequirements.forEach((d) => {
        let A = document.createElement("div");
        A.className = "hs-ui-item-tooltip-requirement", A.textContent = `\u2022 Level ${d._amount} ${De(d._skill)}`, f.appendChild(A);
      }), this.element.appendChild(f);
    }
    if (s.showEffects && a._equippableEffects && a._equippableEffects.length > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">Equipment Effects:</span>', a._equippableEffects.forEach((d) => {
        let A = document.createElement("div");
        A.className = "hs-ui-item-tooltip-effect";
        let x = d._amount > 0 ? "+" : "";
        A.textContent = `\u2022 ${x}${d._amount} ${De(d._skill)}`, f.appendChild(A);
      }), this.element.appendChild(f);
    }
    if (s.showEdibleEffects && a._edibleEffects && a._edibleEffects.length > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">Edible Effects:</span>', a._edibleEffects.forEach((d) => {
        let A = document.createElement("div");
        A.className = "hs-ui-item-tooltip-effect";
        let x = d._amount > 0 ? "+" : "", U = d._amount;
        typeof d._amount == "number" && !Number.isInteger(d._amount) && (U = `${x}${Math.round(d._amount * 100)}%`, x = ""), A.textContent = `\u2022 ${x}${U} ${De(d._skill)}`, f.appendChild(A);
      }), this.element.appendChild(f);
    }
    if (s.showWeaponSpeed && a._weaponSpeed && a._weaponSpeed > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = `<span class="hs-ui-item-tooltip-label">Attack Speed:</span> <span class="hs-ui-item-tooltip-value">${a._weaponSpeed}</span>`, this.element.appendChild(f);
    }
    if (s.showEquipmentType && a._equipmentType !== null && a._equipmentType !== void 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = `<span class="hs-ui-item-tooltip-label">Type:</span> <span class="hs-ui-item-tooltip-value">${Bt(a._equipmentType)}</span>`, this.element.appendChild(f);
    }
    if (s.showExpFromObtaining && a._expFromObtaining && a._expFromObtaining._skill !== void 0 && a._expFromObtaining._amount > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">Experience Gained:</span>';
      let d = document.createElement("div");
      d.className = "hs-ui-item-tooltip-effect", d.textContent = `\u2022 ${a._expFromObtaining._amount} ${De(a._expFromObtaining._skill)} XP`, f.appendChild(d), this.element.appendChild(f);
    }
    if (s.showRecipe && a._recipe && a._recipe._ingredients && a._recipe._ingredients.length > 0) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">Recipe:</span>', a._recipe._ingredients.forEach((d) => {
        let A = document.createElement("div");
        A.className = "hs-ui-item-tooltip-effect";
        try {
          let x = document.highlite.gameHooks.ItemDefMap.ItemDefMap.get(d._itemId), U = x?._nameCapitalized || x?._name || `Item ${d._itemId}`;
          A.textContent = `\u2022 ${d._amount}x ${U}`;
        } catch {
          A.textContent = `\u2022 ${d._amount}x Item ${d._itemId}`;
        }
        f.appendChild(A);
      }), this.element.appendChild(f);
    }
    if (s.showTags) {
      let f = document.createElement("div");
      if (f.className = "hs-ui-item-tooltip-tags", a._isMembers) {
        let d = document.createElement("span");
        d.className = "hs-ui-item-tooltip-tag members", d.textContent = "Members", f.appendChild(d);
      }
      if (a._isStackable) {
        let d = document.createElement("span");
        d.className = "hs-ui-item-tooltip-tag stackable", d.textContent = "Stackable", f.appendChild(d);
      }
      if (a._isTradeable) {
        let d = document.createElement("span");
        d.className = "hs-ui-item-tooltip-tag tradeable", d.textContent = "Tradeable", f.appendChild(d);
      }
      if (a._canIOU) {
        let d = document.createElement("span");
        d.className = "hs-ui-item-tooltip-tag iou", d.textContent = "IOU", f.appendChild(d);
      }
      if (a._metalType !== null && a._metalType !== void 0) {
        let A = ["Bronze", "Iron", "Steel", "Silver", "Palladium", "Gold", "Coronium", "Celadium"][a._metalType] || `Metal ${a._metalType}`, x = document.createElement("span");
        x.className = "hs-ui-item-tooltip-tag", x.textContent = A, f.appendChild(x);
      }
      f.children.length > 0 && this.element.appendChild(f);
    }
    if (s.showEdibleResult && a._edibleResult) {
      let f = document.createElement("div");
      f.className = "hs-ui-item-tooltip-section", f.innerHTML = '<span class="hs-ui-item-tooltip-label">After Eating:</span>';
      let d = document.createElement("div");
      d.className = "hs-ui-item-tooltip-effect";
      try {
        let A = document.highlite.gameHooks.ItemDefMap.ItemDefMap.get(a._edibleResult._itemId), x = A?._nameCapitalized || A?._name || `Item ${a._edibleResult._itemId}`;
        d.textContent = `\u2022 ${a._edibleResult._amount}x ${x}`;
      } catch {
        d.textContent = `\u2022 ${a._edibleResult._amount}x Item ${a._edibleResult._itemId}`;
      }
      f.appendChild(d), this.element.appendChild(f);
    }
    this.element.style.display = "block";
    let u = this.element.getBoundingClientRect(), h = window.innerWidth, p = window.innerHeight, v = 10, k = i + v, E = n - u.height - v;
    return k + u.width > h && (k = i - u.width - v), E < 0 && (E = n + v), E + u.height > p && (E = p - u.height - v), this.element.style.left = k + "px", this.element.style.top = E + "px", { hide: c(() => {
      this.hide();
    }, "hide") };
  }
  hide() {
    this.element.style.display = "none", this.currentItemId = null;
  }
  getCurrentItemId() {
    return this.currentItemId;
  }
  isAttached() {
    return this.element.parentElement !== null;
  }
  reattach(t) {
    this.isAttached() || t.appendChild(this.element);
  }
};
var Vt = ((n) => (n[n.ClientRelative = 0] = "ClientRelative", n[n.ClientInternal = 1] = "ClientInternal", n[n.ClientOverlay = 2] = "ClientOverlay", n))(Vt || {});
var Ce = class e4 {
  static {
    c(this, "UIManager");
  }
  static instance;
  itemTooltip = null;
  constructor() {
    if (e4.instance) return e4.instance;
    if (document.highlite.managers.UIManager) return e4.instance = document.highlite.managers.UIManager, document.highlite.managers.UIManager;
    e4.instance = this, document.highlite.managers.UIManager = this;
  }
  preventDefault(t) {
    t.preventDefault(), t.stopPropagation();
  }
  bindOnClickBlockHsMask(t, i) {
    t.addEventListener("click", (n) => {
      i(n), this.preventDefault(n);
    }), t.addEventListener("pointerdown", this.preventDefault), t.addEventListener("pointerup", this.preventDefault);
  }
  createElement(t) {
    let i = document.createElement("div");
    switch (i.classList.add("highlite-ui"), t) {
      case 0:
        i.classList.add("highlite-ui-client-relative"), i.addEventListener("keydown", (n) => {
          n.stopPropagation();
        }), i.addEventListener("keyup", (n) => {
          n.stopPropagation();
        }), i.addEventListener("keyup", (n) => {
          n.stopPropagation();
        }), i.addEventListener("keypress", (n) => {
          n.stopPropagation();
        }), document.getElementById("main")?.appendChild(i);
        break;
      case 1:
        if (i.classList.add("highlite-ui-client-internal"), document.getElementById("hs-screen-mask")) document.getElementById("hs-screen-mask")?.appendChild(i);
        else throw new Error("Ryelite UI Manager: #hs-screen-mask not found");
        break;
      case 2:
        i.classList.add("highlite-ui-client-overlay"), document.body?.appendChild(i);
        break;
    }
    return i;
  }
  ensureItemTooltip() {
    if (this.itemTooltip && this.itemTooltip.isAttached()) return;
    let i = document.getElementById("hs-screen-mask") || document.body;
    this.itemTooltip = new Je(i);
  }
  drawItemTooltip(t, i, n, s = pt) {
    return this.ensureItemTooltip(), this.itemTooltip ? this.itemTooltip.show(t, i, n, s) : { hide: c(() => {
    }, "hide") };
  }
  hideItemTooltip() {
    this.itemTooltip && this.itemTooltip.hide();
  }
  getCurrentItemTooltipId() {
    return this.itemTooltip?.getCurrentItemId() || null;
  }
};
var Ee = class e5 {
  static {
    c(this, "PanelManager");
  }
  static instance;
  uiManager;
  highliteBar = null;
  highliteBarSelectedContent = null;
  currentMenuItem = null;
  barIcons = {};
  barContentPages = {};
  constructor() {
    if (e5.instance) return e5.instance;
    if (document.highlite.managers.PanelManager) return e5.instance = document.highlite.managers.PanelManager, document.highlite.managers.PanelManager;
    e5.instance = this, this.uiManager = new Ce(), document.highlite.managers.PanelManager = this, this.setup();
  }
  setup() {
    this.highliteBarSelectedContent = this.uiManager.createElement(0), this.highliteBar = this.uiManager.createElement(0), this.highliteBar.classList.add("highlite_bar"), this.highliteBarSelectedContent.classList.add("highlite_bar_selected_content");
    let t = document.createElement("div");
    t.classList.add("content_title");
    let i = document.createElement("span");
    i.id = "selectedContentTitle", t.appendChild(i), this.highliteBarSelectedContent.appendChild(t);
    let n = document.createElement("div");
    n.id = "selectedContentDiv", n.classList.add("content"), this.highliteBarSelectedContent.appendChild(n);
  }
  requestMenuItem(t, i) {
    if (this.barContentPages[t]) throw new Error(`[Ryelite] Bar Icon ${t} already exists`);
    let n = document.createElement("div");
    n.classList.add("highlite_bar_item"), n.innerHTML = t, n.onclick = () => {
      if (this.currentMenuItem === t) {
        this.highliteBarSelectedContent?.classList.remove("activated"), this.currentMenuItem = null, window.dispatchEvent(new Event("resize"));
        return;
      }
      this.currentMenuItem = t, this.highliteBarSelectedContent?.classList.add("activated"), window.dispatchEvent(new Event("resize"));
      let a = this.highliteBarSelectedContent?.querySelector("#selectedContentTitle");
      a && (a.innerHTML = i);
      let r = this.highliteBarSelectedContent?.querySelector("#selectedContentDiv");
      if (r) {
        r.innerHTML = "";
        let l = this.barContentPages[t];
        l && r.appendChild(l);
      }
    }, this.highliteBar?.appendChild(n);
    let s = document.createElement("div");
    return s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.overflowX = "hidden", s.style.overflowY = "scroll", s.style.height = "100%", this.barContentPages[t] = s, this.barIcons[t] = n, [this.barIcons[t], this.barContentPages[t]];
  }
  removeMenuItem(t) {
    if (!this.barIcons[t] || !this.barContentPages[t]) throw new Error(`[Ryelite] Bar Icon ${t} does not exist`);
    this.highliteBar?.removeChild(this.barIcons[t]), delete this.barIcons[t];
    let i = this.barContentPages[t];
    i && i.parentNode && i.parentNode.removeChild(i), delete this.barContentPages[t];
  }
  forceClose() {
    this.highliteBarSelectedContent && this.highliteBarSelectedContent.classList.remove("activated"), this.currentMenuItem = null, window.dispatchEvent(new Event("resize"));
  }
};
var Ht = c((e13, t) => t.some((i) => e13 instanceof i), "instanceOfAny");
var ki;
var Ci;
function Rn() {
  return ki || (ki = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
c(Rn, "getIdbProxyableTypes");
function Dn() {
  return Ci || (Ci = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}
c(Dn, "getCursorAdvanceMethods");
var Wt = /* @__PURE__ */ new WeakMap();
var Ot = /* @__PURE__ */ new WeakMap();
var ft = /* @__PURE__ */ new WeakMap();
function Tn(e13) {
  let t = new Promise((i, n) => {
    let s = c(() => {
      e13.removeEventListener("success", a), e13.removeEventListener("error", r);
    }, "unlisten"), a = c(() => {
      i(Ie(e13.result)), s();
    }, "success"), r = c(() => {
      n(e13.error), s();
    }, "error");
    e13.addEventListener("success", a), e13.addEventListener("error", r);
  });
  return ft.set(t, e13), t;
}
c(Tn, "promisifyRequest");
function Bn(e13) {
  if (Wt.has(e13)) return;
  let t = new Promise((i, n) => {
    let s = c(() => {
      e13.removeEventListener("complete", a), e13.removeEventListener("error", r), e13.removeEventListener("abort", r);
    }, "unlisten"), a = c(() => {
      i(), s();
    }, "complete"), r = c(() => {
      n(e13.error || new DOMException("AbortError", "AbortError")), s();
    }, "error");
    e13.addEventListener("complete", a), e13.addEventListener("error", r), e13.addEventListener("abort", r);
  });
  Wt.set(e13, t);
}
c(Bn, "cacheDonePromiseForTransaction");
var Ut = { get(e13, t, i) {
  if (e13 instanceof IDBTransaction) {
    if (t === "done") return Wt.get(e13);
    if (t === "store") return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
  }
  return Ie(e13[t]);
}, set(e13, t, i) {
  return e13[t] = i, true;
}, has(e13, t) {
  return e13 instanceof IDBTransaction && (t === "done" || t === "store") ? true : t in e13;
} };
function Pi(e13) {
  Ut = e13(Ut);
}
c(Pi, "replaceTraps");
function Vn(e13) {
  return Dn().includes(e13) ? function(...t) {
    return e13.apply(jt(this), t), Ie(this.request);
  } : function(...t) {
    return Ie(e13.apply(jt(this), t));
  };
}
c(Vn, "wrapFunction");
function On(e13) {
  return typeof e13 == "function" ? Vn(e13) : (e13 instanceof IDBTransaction && Bn(e13), Ht(e13, Rn()) ? new Proxy(e13, Ut) : e13);
}
c(On, "transformCachableValue");
function Ie(e13) {
  if (e13 instanceof IDBRequest) return Tn(e13);
  if (Ot.has(e13)) return Ot.get(e13);
  let t = On(e13);
  return t !== e13 && (Ot.set(e13, t), ft.set(t, e13)), t;
}
c(Ie, "wrap");
var jt = c((e13) => ft.get(e13), "unwrap");
function Ai(e13, t, { blocked: i, upgrade: n, blocking: s, terminated: a } = {}) {
  let r = indexedDB.open(e13, t), l = Ie(r);
  return n && r.addEventListener("upgradeneeded", (u) => {
    n(Ie(r.result), u.oldVersion, u.newVersion, Ie(r.transaction), u);
  }), i && r.addEventListener("blocked", (u) => i(u.oldVersion, u.newVersion, u)), l.then((u) => {
    a && u.addEventListener("close", () => a()), s && u.addEventListener("versionchange", (h) => s(h.oldVersion, h.newVersion, h));
  }).catch(() => {
  }), l;
}
c(Ai, "openDB");
var Fn = ["get", "getKey", "getAll", "getAllKeys", "count"];
var Hn = ["put", "add", "delete", "clear"];
var Ft = /* @__PURE__ */ new Map();
function Ei(e13, t) {
  if (!(e13 instanceof IDBDatabase && !(t in e13) && typeof t == "string")) return;
  if (Ft.get(t)) return Ft.get(t);
  let i = t.replace(/FromIndex$/, ""), n = t !== i, s = Hn.includes(i);
  if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !(s || Fn.includes(i))) return;
  let a = c(async function(r, ...l) {
    let u = this.transaction(r, s ? "readwrite" : "readonly"), h = u.store;
    return n && (h = h.index(l.shift())), (await Promise.all([h[i](...l), s && u.done]))[0];
  }, "method");
  return Ft.set(t, a), a;
}
c(Ei, "getMethod");
Pi((e13) => ({ ...e13, get: c((t, i, n) => Ei(t, i) || e13.get(t, i, n), "get"), has: c((t, i) => !!Ei(t, i) || e13.has(t, i), "has") }));
var Wn = ["continue", "continuePrimaryKey", "advance"];
var Ii = {};
var zt = /* @__PURE__ */ new WeakMap();
var Mi = /* @__PURE__ */ new WeakMap();
var Un = { get(e13, t) {
  if (!Wn.includes(t)) return e13[t];
  let i = Ii[t];
  return i || (i = Ii[t] = function(...n) {
    zt.set(this, Mi.get(this)[t](...n));
  }), i;
} };
async function* jn(...e13) {
  let t = this;
  if (t instanceof IDBCursor || (t = await t.openCursor(...e13)), !t) return;
  t = t;
  let i = new Proxy(t, Un);
  for (Mi.set(i, t), ft.set(i, jt(t)); t; ) yield i, t = await (zt.get(i) || t.continue()), zt.delete(i);
}
c(jn, "iterate");
function _i(e13, t) {
  return t === Symbol.asyncIterator && Ht(e13, [IDBIndex, IDBObjectStore, IDBCursor]) || t === "iterate" && Ht(e13, [IDBIndex, IDBObjectStore]);
}
c(_i, "isIteratorProp");
Pi((e13) => ({ ...e13, get(t, i, n) {
  return _i(t, i) ? jn : e13.get(t, i, n);
}, has(t, i) {
  return _i(t, i) || e13.has(t, i);
} }));
var fe = class e6 {
  static {
    c(this, "DatabaseManager");
  }
  static instance;
  database;
  constructor() {
    if (e6.instance) return e6.instance;
    if (document.highlite.managers.DatabaseManager) return e6.instance = document.highlite.managers.DatabaseManager, document.highlite.managers.DatabaseManager;
    e6.instance = this, document.highlite.managers.DatabaseManager = this;
  }
  async initDB() {
    this.database = await Ai("HighliteDatabase", 4, { upgrade(t, i) {
      t.objectStoreNames.contains("settings") || t.createObjectStore("settings"), i < 2 && !t.objectStoreNames.contains("drop_logs") && t.createObjectStore("drop_logs"), i < 3 && (t.createObjectStore("data"), t.objectStoreNames.contains("settings") && (t.deleteObjectStore("settings"), t.createObjectStore("settings"))), i < 4 && t.createObjectStore("plugins");
    } });
  }
};
var dt = ((p) => (p[p.checkbox = 0] = "checkbox", p[p.range = 1] = "range", p[p.color = 2] = "color", p[p.text = 3] = "text", p[p.button = 4] = "button", p[p.combobox = 5] = "combobox", p[p.textarea = 6] = "textarea", p[p.alert = 7] = "alert", p[p.warning = 8] = "warning", p[p.info = 9] = "info", p))(dt || {});
var _e = class e7 {
  static {
    c(this, "SettingsManager");
  }
  static instance;
  panelManager;
  database;
  pluginList;
  username;
  databaseSettings;
  pluginSettings;
  isInitialized = false;
  panelContainer = null;
  currentView = null;
  mainSettingsView = null;
  pluginSettingsView = null;
  constructor() {
    if (e7.instance) return e7.instance;
    if (document.highlite.managers.SettingsManager) return e7.instance = document.highlite.managers.SettingsManager, document.highlite.managers.SettingsManager;
    e7.instance = this, document.highlite.managers.SettingsManager = this;
  }
  async init() {
    return this.database = document.highlite.managers.DatabaseManager.database, this.pluginList = document.highlite.managers.PluginManager.plugins, this.pluginList = this.pluginList.map((t) => t.instance).filter((t) => t !== void 0), this.panelManager = document.highlite.managers.PanelManager, this.username = document.highlite.gameHooks.EntityManager.Instance._mainPlayer._nameLowerCase, this.createMenu(), this.isInitialized = true, Promise.resolve();
  }
  async deinit() {
    this.panelManager.removeMenuItem("\u{1F6E0}\uFE0F"), this.panelContainer && (this.panelContainer.remove(), this.panelContainer = null), this.currentView && (this.currentView.remove(), this.currentView = null), this.mainSettingsView && (this.mainSettingsView.remove(), this.mainSettingsView = null), this.pluginSettingsView && (this.pluginSettingsView.remove(), this.pluginSettingsView = null), this.pluginSettings = {}, this.isInitialized = false;
  }
  async refresh() {
    this.isInitialized && (await this.deinit(), await this.init(), await this.registerPlugins());
  }
  makeSettingsReactive(t) {
    for (let i in t.settings) {
      if (i === "enable") continue;
      let n = t.settings[i];
      t.settings[i] = new Proxy(n, { set: c((s, a, r) => {
        let l = s[a];
        return s[a] = r, a === "hidden" && l !== r && setTimeout(() => {
          this.refreshPluginSettingsVisibility(t);
        }, 0), a === "disabled" && l !== r && setTimeout(() => {
          this.refreshPluginSettingsDisabled(t);
        }, 0), a === "value" && l !== r && setTimeout(() => {
          this.storePluginSettings(this.username, t);
        }, 0), true;
      }, "set") });
    }
  }
  async registerPlugins() {
    if (this.databaseSettings = await this.database.get("settings", this.username), this.pluginList.sort((t, i) => t.pluginName.localeCompare(i.pluginName, void 0, { sensitivity: "base" })), this.databaseSettings) for (let t in this.databaseSettings) {
      let i = this.databaseSettings[t];
      for (let n in i) if (i[n] !== void 0) {
        let s = this.pluginList.find((a) => a.pluginName === t);
        s && s.settings[n] && (s.settings[n].value = i[n], s.settings[n].onLoaded && s.settings[n].onLoaded.call(s));
      }
    }
    for (let t of this.pluginList) await this.storePluginSettings(this.username, t), this.makeSettingsReactive(t), this.createPluginSettings(t);
    return Promise.resolve();
  }
  async storePluginSettings(t, i) {
    let n = i.settings, s = i.pluginName, a = {};
    a[s] = {};
    for (let r in n) {
      let l = n[r];
      a[s][r] = l.value;
    }
    this.databaseSettings || (this.databaseSettings = {}), this.databaseSettings[s] = a[s], await this.database.put("settings", this.databaseSettings, t);
  }
  createMenu() {
    this.panelContainer = this.panelManager.requestMenuItem("\u{1F6E0}\uFE0F", "Settings")[1], this.panelContainer.style.display = "flex", this.panelContainer.style.width = "100%", this.panelContainer.style.background = "var(--theme-background)", this.mainSettingsView = document.createElement("div"), this.mainSettingsView.id = "highlite-settings-content-row-holder", this.mainSettingsView.style.overflowY = "auto", this.mainSettingsView.style.overflowX = "hidden", this.mainSettingsView.style.display = "flex", this.mainSettingsView.style.flexDirection = "column", this.mainSettingsView.style.padding = "8px", this.mainSettingsView.style.gap = "2px";
    let t = document.createElement("div");
    t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "8px", t.style.marginBottom = "8px", t.style.flexShrink = "0";
    let i = document.createElement("input");
    i.type = "text", i.placeholder = "Search plugins...", i.style.padding = "10px 12px", i.style.borderRadius = "8px", i.style.border = "1px solid var(--theme-border)", i.style.background = "var(--theme-background-mute)", i.style.color = "var(--theme-text-primary)", i.style.fontSize = "14px", i.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", i.style.outline = "none", i.style.transition = "all 0.2s ease", i.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", i.style.setProperty("::placeholder", "var(--theme-text-muted)"), i.addEventListener("focus", (n) => {
      n.preventDefault(), n.stopPropagation(), i.style.border = "1px solid var(--theme-accent)", i.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
    }), i.addEventListener("blur", () => {
      i.style.border = "1px solid var(--theme-border)", i.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
    }), i.addEventListener("input", (n) => {
      let s = n.target.value.toLowerCase();
      this.filterPlugins(s);
    }), t.appendChild(i), this.mainSettingsView.appendChild(t), this.currentView = this.mainSettingsView, this.panelContainer.appendChild(this.currentView);
  }
  getAdvancedSettings(t) {
    let i = document.createElement("div");
    i.style.minHeight = "24px", i.style.display = "flex", i.style.alignItems = "left", i.style.flexDirection = "row", i.style.gap = "4px";
    let n = document.createElement("span");
    n.innerText = "\u{1F4F1}", n.title = "Export Settings To Clipboard", n.style.color = "var(--theme-text-muted)", n.style.fontSize = "16px", n.style.marginRight = "8px", n.style.padding = "8px", n.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", n.style.textAlign = "left", n.style.cursor = "pointer", n.style.borderRadius = "4px", n.style.transition = "all 0.2s ease", n.addEventListener("mouseenter", () => {
      n.style.color = "var(--theme-text-primary)", n.style.background = "var(--theme-border-light)", n.style.transform = "scale(1.1)";
    }), n.addEventListener("mouseleave", () => {
      n.style.color = "var(--theme-text-muted)", n.style.background = "transparent", n.style.transform = "scale(1)";
    }), n.addEventListener("click", async () => {
      let u = { "text/plain": JSON.stringify({ pluginName: t.pluginName, pluginSettings: t.settings }) }, h = new ClipboardItem(u);
      await navigator.clipboard.write([h]);
    }), Object.keys(t.settings).length === 1 && (n.style.display = "none"), i.appendChild(n);
    let s = document.createElement("span");
    s.innerText = "\u{1F4F2}", s.title = "Import Settings From Clipboard", s.style.color = "var(--theme-text-muted)", s.style.fontSize = "16px", s.style.marginRight = "8px", s.style.padding = "8px", s.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", s.style.textAlign = "left", s.style.cursor = "pointer", s.style.borderRadius = "4px", s.style.transition = "all 0.2s ease", s.addEventListener("mouseenter", () => {
      s.style.color = "var(--theme-text-primary)", s.style.background = "var(--theme-border-light)", s.style.transform = "scale(1.1)";
    }), s.addEventListener("mouseleave", () => {
      s.style.color = "var(--theme-text-muted)", s.style.background = "transparent", s.style.transform = "scale(1)";
    }), s.addEventListener("click", async () => {
      await navigator.clipboard.readText().then((l) => {
        let u = JSON.parse(l);
        if (u.pluginName !== t.pluginName) throw new Error("Mismatched plugin name");
        if (!u.pluginSettings) throw new Error("No settings found");
        Object.entries(u.pluginSettings).forEach((h) => {
          let p = h[0], v = h[1];
          t.settings[p].value = v.value;
        });
      }).catch((l) => {
        console.error("Attempted to import settings with invalid JSON", l);
      }), await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), this.refreshPluginSettingsDisabled(t);
    }), Object.keys(t.settings).length === 1 && (s.style.display = "none"), i.appendChild(s);
    let a = document.createElement("span");
    a.innerText = "\u{1F4E4}", a.title = "Export Data To Clipboard", a.style.color = "var(--theme-text-muted)", a.style.fontSize = "16px", a.style.marginRight = "8px", a.style.padding = "8px", a.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", a.style.textAlign = "left", a.style.cursor = "pointer", a.style.borderRadius = "4px", a.style.transition = "all 0.2s ease", a.addEventListener("mouseenter", () => {
      a.style.color = "var(--theme-text-primary)", a.style.background = "var(--theme-border-light)", a.style.transform = "scale(1.1)";
    }), a.addEventListener("mouseleave", () => {
      a.style.color = "var(--theme-text-muted)", a.style.background = "transparent", a.style.transform = "scale(1)";
    }), a.addEventListener("click", async () => {
      let u = { "text/plain": JSON.stringify({ pluginName: t.pluginName, pluginData: t.data }) }, h = new ClipboardItem(u);
      await navigator.clipboard.write([h]);
    }), Object.keys(t.data).length === 1 && (a.style.display = "none"), i.appendChild(a);
    let r = document.createElement("span");
    return r.innerText = "\u{1F4E5}", r.title = "Import Data From Clipboard", r.style.color = "var(--theme-text-muted)", r.style.fontSize = "16px", r.style.marginRight = "8px", r.style.padding = "8px", r.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", r.style.textAlign = "left", r.style.cursor = "pointer", r.style.borderRadius = "4px", r.style.transition = "all 0.2s ease", r.addEventListener("mouseenter", () => {
      r.style.color = "var(--theme-text-primary)", r.style.background = "var(--theme-border-light)", r.style.transform = "scale(1.1)";
    }), r.addEventListener("mouseleave", () => {
      r.style.color = "var(--theme-text-muted)", r.style.background = "transparent", r.style.transform = "scale(1)";
    }), r.addEventListener("click", async () => {
      await navigator.clipboard.readText().then(async (l) => {
        let u = JSON.parse(l);
        if (u.pluginName !== t.pluginName) throw new Error("Mismatched plugin name");
        if (!u.pluginData) throw new Error("No data found");
        var h = t.settings.enable.value;
        if (h) {
          t.settings.enable.value = false;
          try {
            t.settings.enable.callback.call(t);
          } catch (p) {
            console.error(`Error calling enable callback for plugin ${t.pluginName}:`, p), console.error("Continuing without calling the callback.");
          }
          await this.storePluginSettings(this.username, t);
        }
        if (Object.entries(t.data).forEach(([p, v]) => {
          delete t.data[p];
        }), Object.entries(u.pluginData).forEach(([p, v]) => {
          t.data[p] = v;
        }), h) {
          t.settings.enable.value = true;
          try {
            t.settings.enable.callback.call(t);
          } catch (p) {
            console.error(`Error calling enable callback for plugin ${t.pluginName}:`, p), console.error("Continuing without calling the callback.");
          }
          await this.storePluginSettings(this.username, t);
        }
      }).catch((l) => {
        console.error("Attempted to import data with invalid JSON", l);
      });
    }), i.appendChild(r), i;
  }
  createPluginSettings(t) {
    let i = document.createElement("div");
    i.id = `highlite-settings-content-row-${t.pluginName}`, i.style.minHeight = "48px", i.style.display = "flex", i.style.alignItems = "center", i.style.background = "var(--theme-background-mute)", i.style.borderRadius = "8px", i.style.border = "1px solid var(--theme-border)", i.style.margin = "2px 0", i.style.transition = "all 0.2s ease", i.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", i.addEventListener("mouseenter", () => {
      i.style.background = "var(--theme-background-light)", i.style.border = "1px solid var(--theme-divider)", i.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    }), i.addEventListener("mouseleave", () => {
      i.style.background = "var(--theme-background-mute)", i.style.border = "1px solid var(--theme-border)", i.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
    });
    let n = document.createElement("div");
    n.style.display = "flex", n.style.flexDirection = "column", n.style.flex = "1", n.style.minWidth = "0", n.style.padding = "12px 16px";
    let s = document.createElement("span");
    s.innerText = t.pluginName, s.style.color = "var(--theme-text-primary)", s.style.fontSize = "14px", s.style.margin = "0px", s.style.padding = "0px", s.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", s.style.fontWeight = "500", s.style.textAlign = "left", s.style.letterSpacing = "0.025em", s.style.whiteSpace = "nowrap", s.style.overflow = "hidden", s.style.textOverflow = "ellipsis", s.title = t.pluginName;
    let a = document.createElement("span");
    a.innerText = `by ${t.author}`, a.style.color = "var(--theme-text-muted)", a.style.fontSize = "12px", a.style.margin = "0px", a.style.padding = "0px", a.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", a.style.fontWeight = "400", a.style.textAlign = "left", a.style.letterSpacing = "0.025em", a.style.whiteSpace = "nowrap", a.style.overflow = "hidden", a.style.textOverflow = "ellipsis", a.title = `by ${t.author}`, n.appendChild(s), n.appendChild(a);
    let r = document.createElement("input");
    r.type = "checkbox", r.checked = t.settings.enable.value, r.style.width = "18px", r.style.height = "18px", r.style.marginRight = "12px", r.style.cursor = "pointer", r.style.accentColor = "var(--theme-accent)", r.addEventListener("change", async () => {
      t.settings.enable.value = r.checked;
      try {
        t.settings.enable.callback.call(t);
      } catch (u) {
        console.error(`Error calling enable callback for plugin ${t.pluginName}:`, u), console.error("Continuing without calling the callback.");
      }
      await this.storePluginSettings(this.username, t);
    });
    let l = document.createElement("span");
    l.innerText = "\u2699\uFE0F", l.style.color = "var(--theme-text-muted)", l.style.fontSize = "18px", l.style.marginRight = "8px", l.style.padding = "8px", l.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", l.style.textAlign = "right", l.style.cursor = "pointer", l.style.borderRadius = "4px", l.style.transition = "all 0.2s ease", l.addEventListener("mouseenter", () => {
      l.style.color = "var(--theme-text-primary)", l.style.background = "var(--theme-border-light)", l.style.transform = "scale(1.1)";
    }), l.addEventListener("mouseleave", () => {
      l.style.color = "var(--theme-text-muted)", l.style.background = "transparent", l.style.transform = "scale(1)";
    }), l.addEventListener("click", () => {
      this.openPluginSettings(t);
    }), Object.keys(t.settings).length === 1 && (l.style.display = "none"), i.appendChild(n), i.appendChild(l), i.appendChild(r), this.mainSettingsView.appendChild(i);
  }
  openPluginSettings(t) {
    this.currentView && this.panelContainer?.removeChild(this.currentView), this.pluginSettingsView = document.createElement("div"), this.pluginSettingsView.id = "highlite-settings-content-row-holder", this.pluginSettingsView.style.overflowY = "auto", this.pluginSettingsView.style.overflowX = "hidden", this.pluginSettingsView.style.display = "flex", this.pluginSettingsView.style.flexDirection = "column", this.pluginSettingsView.style.padding = "8px", this.pluginSettingsView.style.gap = "8px", this.pluginSettingsView.style.background = "var(--theme-background)";
    let i = document.createElement("div");
    i.id = "highlite-settings-title-row", i.style.minHeight = "60px", i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.flexDirection = "column", i.style.background = "var(--theme-background-mute)", i.style.borderRadius = "8px", i.style.border = "1px solid var(--theme-border)", i.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", i.style.marginBottom = "8px", i.style.padding = "16px";
    let n = document.createElement("h1");
    n.innerText = `${t.pluginName} Settings`, n.style.color = "var(--theme-text-primary)", n.style.fontSize = "22px", n.style.margin = "0px", n.style.padding = "0px", n.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", n.style.fontWeight = "600", n.style.textAlign = "center", n.style.width = "100%", n.style.letterSpacing = "0.025em";
    let s = document.createElement("span");
    s.innerText = `by ${t.author}`, s.style.color = "var(--theme-text-muted)", s.style.fontSize = "14px", s.style.margin = "4px 0 0 0", s.style.padding = "0px", s.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", s.style.fontWeight = "400", s.style.textAlign = "center", s.style.width = "100%", s.style.letterSpacing = "0.025em", i.appendChild(n), i.appendChild(s), this.pluginSettingsView.appendChild(i);
    let a = document.createElement("div");
    a.id = "highlite-settings-title-row", a.style.minHeight = "60px", a.style.display = "flex", a.style.alignItems = "center", a.style.justifyContent = "center", a.style.flexDirection = "column", a.style.background = "var(--theme-background-mute)", a.style.borderRadius = "8px", a.style.border = "1px solid var(--theme-border)", a.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", a.style.marginBottom = "8px", a.style.padding = "16px";
    let r = document.createElement("span");
    r.innerText = "Transfer Plugin Data", r.style.color = "var(--theme-text-primary)", r.style.fontSize = "16px", r.style.paddingBottom = "8px", r.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", r.style.fontWeight = "500", r.style.textAlign = "left", r.style.letterSpacing = "0.025em", r.style.whiteSpace = "nowrap", r.title = "\u26A0\uFE0F Only import data and settings from trusted sources.", a.appendChild(r), a.appendChild(this.getAdvancedSettings(t)), this.pluginSettingsView.appendChild(a);
    let l = document.createElement("div");
    l.id = "highlite-settings-back-button", l.style.width = "100%", l.style.minHeight = "36px", l.style.display = "flex", l.style.alignItems = "center", l.style.justifyContent = "center", l.style.cursor = "pointer", l.style.background = "var(--theme-accent)", l.style.borderRadius = "6px", l.style.border = "1px solid var(--theme-accent-dark)", l.style.color = "var(--theme-text-dark)", l.style.fontSize = "14px", l.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", l.style.fontWeight = "500", l.style.textAlign = "center", l.style.transition = "all 0.2s ease", l.style.boxShadow = "0 2px 4px var(--theme-accent-transparent-30)", l.style.letterSpacing = "0.025em", l.innerText = "\u2190 Back", l.addEventListener("mouseenter", () => {
      l.style.background = "var(--theme-accent-light)", l.style.boxShadow = "0 4px 8px var(--theme-accent-transparent-40)", l.style.transform = "translateY(-1px)";
    }), l.addEventListener("mouseleave", () => {
      l.style.background = "var(--theme-accent)", l.style.boxShadow = "0 2px 4px var(--theme-accent-transparent-30)", l.style.transform = "translateY(0)";
    }), l.addEventListener("click", () => {
      this.panelContainer?.removeChild(this.currentView), this.currentView = this.mainSettingsView, this.panelContainer?.appendChild(this.currentView);
    }), this.pluginSettingsView.appendChild(l);
    for (let u in t.settings) {
      if (u === "enable") continue;
      let h = t.settings[u], p = document.createElement("div");
      p.id = `highlite-settings-content-row-${u}`, p.style.display = "flex", p.style.flexDirection = "column", p.style.justifyContent = "center", p.style.padding = "16px", p.style.alignItems = "stretch", p.style.background = "var(--theme-background-mute)", p.style.borderRadius = "8px", p.style.border = "1px solid var(--theme-border)", p.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", p.style.transition = "all 0.2s ease", h.hidden ? (p.style.display = "none", p.style.opacity = "0", p.style.transform = "translateY(-10px)") : (p.style.opacity = "1", p.style.transform = "translateY(0)"), p.addEventListener("mouseenter", () => {
        p.style.background = "var(--theme-background-light)", p.style.border = "1px solid var(--theme-divider)", p.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
      }), p.addEventListener("mouseleave", () => {
        p.style.background = "var(--theme-background-mute)", p.style.border = "1px solid var(--theme-border)", p.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
      });
      let v = u.replace(/([A-Z])/g, " $1"), k = h.text ? h.text : v.charAt(0).toUpperCase() + v.slice(1);
      switch (h?.type) {
        case 0:
          let E = document.createElement("div");
          E.style.display = "flex", E.style.alignItems = "center", E.style.gap = "12px", E.style.minWidth = "0";
          let f = document.createElement("input");
          f.type = "checkbox", f.checked = h.value, f.style.width = "20px", f.style.height = "20px", f.style.cursor = "pointer", f.style.accentColor = "var(--theme-accent)", f.addEventListener("change", async () => {
            let L = f.checked;
            if (h.validation && !h.validation(L)) {
              f.checked = h.value, f.style.accentColor = "#ff4444";
              return;
            }
            h.value = L;
            try {
              h.callback.call(t);
            } catch (ie) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, ie), console.error("Continuing without calling the callback.");
            }
            await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), this.refreshPluginSettingsDisabled(t), f.style.accentColor = "var(--theme-accent)";
          });
          let d = document.createElement("label");
          d.innerText = k, d.style.color = "var(--theme-text-primary)", d.style.fontSize = "16px", d.style.margin = "0px", d.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", d.style.fontWeight = "500", d.style.cursor = "pointer", d.style.letterSpacing = "0.025em", d.style.flex = "1", d.style.minWidth = "0", d.style.whiteSpace = "nowrap", d.style.overflow = "hidden", d.style.textOverflow = "ellipsis", d.addEventListener("click", () => {
            f.click();
          }), E.appendChild(d), E.appendChild(f), p.appendChild(E);
          break;
        case 1:
          let A = document.createElement("div");
          A.style.display = "flex", A.style.flexDirection = "column", A.style.gap = "8px";
          let x = document.createElement("input");
          x.type = "number", x.value = h.value.toString(), x.step = "any", x.style.padding = "8px 12px", x.style.borderRadius = "6px", x.style.border = "1px solid var(--theme-border)", x.style.background = "var(--theme-background)", x.style.color = "var(--theme-text-primary)", x.style.fontSize = "14px", x.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", x.style.outline = "none", x.style.transition = "all 0.2s ease", x.addEventListener("focus", (L) => {
            L.preventDefault(), L.stopPropagation(), x.style.border = "1px solid var(--theme-accent)", x.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
          }), x.addEventListener("blur", () => {
            x.style.border = "1px solid var(--theme-border)", x.style.boxShadow = "none";
          }), h.min !== void 0 && (x.min = h.min.toString()), h.max !== void 0 && (x.max = h.max.toString()), x.addEventListener("change", async () => {
            let L = parseFloat(x.value), ie = parseFloat(x.min), Ge = parseFloat(x.max);
            if (L < ie || L > Ge) {
              x.style.border = "1px solid #ff4444", x.style.boxShadow = "0 0 0 2px rgba(255, 68, 68, 0.2)";
              return;
            }
            if (h.validation && !h.validation(L)) {
              x.value = h.value.toString(), x.style.border = "1px solid #ff4444", x.style.boxShadow = "0 0 0 2px rgba(255, 68, 68, 0.2)";
              return;
            }
            h.value = L;
            try {
              h.callback.call(t);
            } catch (Cn) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, Cn), console.error("Continuing without calling the callback.");
            }
            await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), x.style.border = "1px solid var(--theme-border)", x.style.boxShadow = "none";
          });
          let U = document.createElement("label");
          U.innerText = k, U.style.color = "var(--theme-text-primary)", U.style.fontSize = "16px", U.style.margin = "0px", U.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", U.style.fontWeight = "500", U.style.letterSpacing = "0.025em", U.style.whiteSpace = "nowrap", U.style.overflow = "hidden", U.style.textOverflow = "ellipsis", A.appendChild(U), A.appendChild(x), p.appendChild(A);
          break;
        case 2:
          let b = document.createElement("div");
          b.style.display = "flex", b.style.flexDirection = "column", b.style.gap = "8px";
          let g = document.createElement("input");
          g.type = "color", g.value = h.value || "#ff0000", g.style.padding = "8px 12px", g.style.borderRadius = "6px", g.style.border = "1px solid var(--theme-border)", g.style.background = "var(--theme-background)", g.style.color = "var(--theme-text-primary)", g.style.fontSize = "14px", g.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", g.style.outline = "none", g.style.transition = "all 0.2s ease", g.style.cursor = "pointer", g.style.width = "100%", g.style.height = "40px", g.addEventListener("focus", (L) => {
            L.preventDefault(), L.stopPropagation(), g.style.border = "1px solid var(--theme-accent)", g.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
          }), g.addEventListener("blur", () => {
            g.style.border = "1px solid var(--theme-border)", g.style.boxShadow = "none";
          }), g.addEventListener("change", async () => {
            let L = g.value;
            if (h.validation && !h.validation(L)) {
              g.value = h.value, g.style.border = "1px solid #ff4444", g.style.boxShadow = "0 0 0 2px rgba(255, 68, 68, 0.2)";
              return;
            }
            h.value = L;
            try {
              h.callback.call(t);
            } catch (ie) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, ie), console.error("Continuing without calling the callback.");
            }
            await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), g.style.border = "1px solid var(--theme-border)", g.style.boxShadow = "none";
          });
          let I = document.createElement("label");
          I.innerText = k, I.style.color = "var(--theme-text-primary)", I.style.fontSize = "16px", I.style.margin = "0px", I.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", I.style.fontWeight = "500", I.style.letterSpacing = "0.025em", I.style.whiteSpace = "nowrap", I.style.overflow = "hidden", I.style.textOverflow = "ellipsis", b.appendChild(I), b.appendChild(g), p.appendChild(b);
          break;
        case 3:
          let M = document.createElement("div");
          M.style.display = "flex", M.style.flexDirection = "column", M.style.gap = "8px";
          let _ = document.createElement("input");
          _.type = "text", _.value = h.value || "", _.style.padding = "8px 12px", _.style.borderRadius = "6px", _.style.border = "1px solid var(--theme-border)", _.style.background = "var(--theme-background)", _.style.color = "var(--theme-text-primary)", _.style.fontSize = "14px", _.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", _.style.outline = "none", _.style.transition = "all 0.2s ease", _.addEventListener("focus", (L) => {
            L.preventDefault(), L.stopPropagation(), _.style.border = "1px solid var(--theme-accent)", _.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
          }), _.addEventListener("blur", () => {
            _.style.border = "1px solid var(--theme-border)", _.style.boxShadow = "none";
          }), _.addEventListener("change", async () => {
            let L = _.value;
            if (h.validation && !h.validation(L)) {
              _.value = h.value, _.style.border = "1px solid #ff4444", _.style.boxShadow = "0 0 0 2px rgba(255, 68, 68, 0.2)";
              return;
            }
            h.value = L;
            try {
              h.callback.call(t);
            } catch (ie) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, ie), console.error("Continuing without calling the callback.");
            }
            await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), _.style.border = "1px solid var(--theme-border)", _.style.boxShadow = "none";
          });
          let H = document.createElement("label");
          H.innerText = k, H.style.color = "var(--theme-text-primary)", H.style.fontSize = "16px", H.style.margin = "0px", H.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", H.style.fontWeight = "500", H.style.letterSpacing = "0.025em", H.style.whiteSpace = "nowrap", H.style.overflow = "hidden", H.style.textOverflow = "ellipsis", M.appendChild(H), M.appendChild(_), p.appendChild(M);
          break;
        case 4:
          let K = document.createElement("div");
          K.style.display = "flex", K.style.flexDirection = "column", K.style.gap = "8px";
          let T = document.createElement("button");
          T.style.width = "100%", T.style.minHeight = "36px", T.style.display = "flex", T.style.alignItems = "center", T.style.justifyContent = "center", T.style.cursor = "pointer", T.style.background = "var(--theme-accent)", T.style.borderRadius = "6px", T.style.border = "1px solid var(--theme-accent-dark)", T.style.color = "var(--theme-text-dark)", T.style.fontSize = "14px", T.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", T.style.fontWeight = "500", T.style.textAlign = "center", T.style.transition = "all 0.2s ease", T.style.boxShadow = "0 2px 4px var(--theme-accent-transparent-30)", T.style.letterSpacing = "0.025em", T.innerText = k, T.addEventListener("click", async () => {
            try {
              h.callback.call(t);
            } catch (L) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, L), console.error("Continuing without calling the callback.");
            }
            this.refreshPluginSettingsVisibility(t), T.style.border = "1px solid var(--theme-border)", T.style.boxShadow = "none";
          }), T.addEventListener("mouseenter", () => {
            T.style.background = "var(--theme-accent-light)", T.style.boxShadow = "0 4px 8px var(--theme-accent-transparent-40)", T.style.transform = "translateY(-1px)";
          }), T.addEventListener("mouseleave", () => {
            T.style.background = "var(--theme-accent)", T.style.boxShadow = "0 2px 4px var(--theme-accent-transparent-30)", T.style.transform = "translateY(0)";
          }), K.appendChild(T), p.appendChild(K);
          break;
        case 5:
          let pe = document.createElement("div");
          pe.style.display = "flex", pe.style.flexDirection = "column", pe.style.gap = "8px";
          let q = document.createElement("label");
          if (q.innerText = k, q.style.color = "var(--theme-text-primary)", q.style.fontSize = "16px", q.style.margin = "0px", q.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", q.style.fontWeight = "500", q.style.letterSpacing = "0.025em", q.style.whiteSpace = "nowrap", q.style.overflow = "hidden", q.style.textOverflow = "ellipsis", !h.options || !Array.isArray(h.options) || h.options.length < 1) {
            q.innerText = "Add a dataset array", p.appendChild(q);
            break;
          }
          let V = document.createElement("select");
          V.addEventListener("change", async () => {
            let L = V.value;
            h.value = L;
            try {
              h.callback.call(t);
            } catch (ie) {
              console.error(`Error calling callback for setting ${u} in plugin ${t.pluginName}:`, ie), console.error("Continuing without calling the callback.");
            }
            await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t);
          });
          for (let L = 0; L < h.options.length; L++) {
            let ie = String(h.options[L]), Ge = document.createElement("option");
            Ge.value = ie, Ge.textContent = ie, V.appendChild(Ge);
          }
          (typeof h.value != "string" || !h.options.includes(h.value)) && (h.value = h.options[0], V.selectedIndex = 0, V.dispatchEvent(new Event("change", { bubbles: true }))), V.value = h.value, V.addEventListener("focus", (L) => {
            L.preventDefault(), L.stopPropagation(), V.style.border = "1px solid var(--theme-accent)", V.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
          }), V.addEventListener("blur", () => {
            V.style.border = "1px solid var(--theme-border)", V.style.boxShadow = "none";
          }), V.style.padding = "8px 12px", V.style.borderRadius = "6px", V.style.border = "1px solid var(--theme-border)", V.style.background = "var(--theme-background)", V.style.color = "var(--theme-text-primary)", V.style.fontSize = "14px", V.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", V.style.outline = "none", V.style.transition = "all 0.2s ease", V.style.cursor = "pointer", V.style.width = "100%", V.style.height = "36px", pe.appendChild(q), pe.appendChild(V), p.appendChild(pe);
          break;
        case 6:
          let S = document.createElement("div");
          S.style.display = "flex", S.style.flexDirection = "column", S.style.gap = "8px";
          let F = document.createElement("textarea");
          F.value = h.value || "", F.style.padding = "8px 12px", F.style.borderRadius = "6px", F.style.border = "1px solid var(--theme-border)", F.style.background = "var(--theme-background)", F.style.color = "var(--theme-text-primary)", F.style.fontSize = "14px", F.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", F.style.outline = "none", F.style.transition = "all 0.2s ease", F.style.resize = "vertical", F.style.minHeight = "80px", F.style.maxHeight = "200px", F.addEventListener("focus", (L) => {
            L.preventDefault(), L.stopPropagation(), F.style.border = "1px solid var(--theme-accent)", F.style.boxShadow = "0 0 0 2px var(--theme-accent-transparent-20)";
          }), F.addEventListener("blur", () => {
            F.style.border = "1px solid var(--theme-border)", F.style.boxShadow = "none";
          }), F.addEventListener("change", async () => {
            let L = F.value;
            if (h.validation && !h.validation(L)) {
              F.value = h.value, F.style.border = "1px solid #ff4444", F.style.boxShadow = "0 0 0 2px rgba(255, 68, 68, 0.2)";
              return;
            }
            h.value = L, h.callback.call(t), await this.storePluginSettings(this.username, t), this.refreshPluginSettingsVisibility(t), F.style.border = "1px solid var(--theme-border)", F.style.boxShadow = "none";
          });
          let oe = document.createElement("label");
          oe.innerText = k, oe.style.color = "var(--theme-text-primary)", oe.style.fontSize = "16px", oe.style.margin = "0px", oe.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", oe.style.fontWeight = "500", oe.style.letterSpacing = "0.025em", oe.style.whiteSpace = "nowrap", oe.style.overflow = "hidden", oe.style.textOverflow = "ellipsis", S.appendChild(oe), S.appendChild(F), p.appendChild(S);
          break;
        case 7:
          let Y = document.createElement("div");
          Y.style.padding = "16px", Y.style.borderRadius = "6px", Y.style.border = "1px solid #dc3545", Y.style.background = "#f8d7da", Y.style.color = "#721c24", Y.style.fontSize = "14px", Y.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", Y.style.fontWeight = "400", Y.style.lineHeight = "1.5", Y.style.textAlign = "center", Y.style.display = "flex", Y.style.flexDirection = "column", Y.style.gap = "8px";
          let Le = document.createElement("div");
          Le.innerText = k, Le.style.fontWeight = "bold", Le.style.fontSize = "16px", Le.style.color = "#721c24", Le.style.marginBottom = "4px";
          let Mt = document.createElement("div");
          Mt.style.whiteSpace = "pre-wrap", Mt.textContent = h.value || "", Y.appendChild(Le), Y.appendChild(Mt), p.appendChild(Y);
          break;
        case 8:
          let Q = document.createElement("div");
          Q.style.padding = "16px", Q.style.borderRadius = "6px", Q.style.border = "1px solid #ffc107", Q.style.background = "#fff3cd", Q.style.color = "#856404", Q.style.fontSize = "14px", Q.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", Q.style.fontWeight = "400", Q.style.lineHeight = "1.5", Q.style.textAlign = "center", Q.style.display = "flex", Q.style.flexDirection = "column", Q.style.gap = "8px";
          let Ne = document.createElement("div");
          Ne.innerText = k, Ne.style.fontWeight = "bold", Ne.style.fontSize = "16px", Ne.style.color = "#856404", Ne.style.marginBottom = "4px";
          let Lt = document.createElement("div");
          Lt.style.whiteSpace = "pre-wrap", Lt.textContent = h.value || "", Q.appendChild(Ne), Q.appendChild(Lt), p.appendChild(Q);
          break;
        case 9:
          let J = document.createElement("div");
          J.style.padding = "16px", J.style.borderRadius = "6px", J.style.border = "1px solid #0dcaf0", J.style.background = "#d1ecf1", J.style.color = "#055160", J.style.fontSize = "14px", J.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", J.style.fontWeight = "400", J.style.lineHeight = "1.5", J.style.textAlign = "center", J.style.display = "flex", J.style.flexDirection = "column", J.style.gap = "8px";
          let Re = document.createElement("div");
          Re.innerText = k, Re.style.fontWeight = "bold", Re.style.fontSize = "16px", Re.style.color = "#055160", Re.style.marginBottom = "4px";
          let Nt = document.createElement("div");
          Nt.style.whiteSpace = "pre-wrap", Nt.textContent = h.value || "", J.appendChild(Re), J.appendChild(Nt), p.appendChild(J);
          break;
        default:
          let vi = h?.type, kn = `[Ryelite] Unsupported setting type for ${u}. `.concat(vi ? `Could not read type '${vi}'` : "Setting type does not exist.");
          throw new Error(kn);
      }
      p.title = h.description ? h.description : k, h.disabled && p.querySelectorAll("input, button").forEach((f) => {
        let d = f;
        d.disabled = true, d.style.opacity = "0.5", d.style.cursor = "not-allowed", d.style.filter = "grayscale(50%)";
      }), this.pluginSettingsView.appendChild(p);
    }
    this.currentView = this.pluginSettingsView, this.panelContainer?.appendChild(this.currentView);
  }
  filterPlugins(t) {
    let i = this.mainSettingsView?.querySelectorAll('[id^="highlite-settings-content-row-"]');
    i && i.forEach((n) => {
      let s = n;
      if (s.id === "highlite-settings-content-row-holder") return;
      let a = s.querySelector("div");
      if (a && a.style.flexDirection === "column") {
        let r = a.children[0], l = a.children[1];
        if (r && l) {
          let u = r.innerText.toLowerCase(), h = l.innerText.toLowerCase();
          t === "" || u.includes(t) || h.includes(t) ? s.style.display = "flex" : s.style.display = "none";
        }
      }
    });
  }
  updatePluginSettingsUI(t) {
    if (!this.pluginSettingsView || this.currentView !== this.pluginSettingsView) return;
    let i = this.pluginSettingsView.querySelector("h1");
    if (!(!i || !i.innerText.includes(t.pluginName))) for (let n in t.settings) {
      if (n === "enable") continue;
      let s = t.settings[n], a = this.pluginSettingsView.querySelector(`#highlite-settings-content-row-${n}`);
      if (!(!a || !s)) switch (s.type) {
        case 0:
          let r = a.querySelector('input[type="checkbox"]');
          r && (r.checked = s.value);
          break;
        case 1:
          let l = a.querySelector('input[type="number"]');
          l && (l.value = s.value.toString());
          break;
        case 2:
          let u = a.querySelector('input[type="color"]');
          u && (u.value = s.value);
          break;
        case 3:
          let h = a.querySelector('input[type="text"]');
          h && (h.value = s.value);
          break;
        case 6:
          let p = a.querySelector("textarea");
          p && (p.value = s.value);
          break;
        case 7:
          let v = a.querySelector("div > div:last-child");
          v && a.querySelector('div[style*="background: #f8d7da"]') && (v.textContent = s.value);
          break;
        case 8:
          let k = a.querySelector("div > div:last-child");
          k && a.querySelector('div[style*="background: #fff3cd"]') && (k.textContent = s.value);
          break;
        case 9:
          let E = a.querySelector("div > div:last-child");
          E && a.querySelector('div[style*="background: #d1ecf1"]') && (E.textContent = s.value);
          break;
        case 5:
          let f = a.querySelector("input[list]");
          f && (f.value = s.value);
          break;
      }
    }
  }
  refreshPluginSettingsVisibility(t) {
    for (let i in t.settings) {
      if (i === "enable") continue;
      let n = t.settings[i], s = document.getElementById(`highlite-settings-content-row-${i}`);
      s && (n.hidden ? (s.style.opacity = "0", s.style.transform = "translateY(-10px)", setTimeout(() => {
        s.style.display = "none";
      }, 200)) : s.style.display === "none" && (s.style.display = "flex", s.offsetHeight, setTimeout(() => {
        s.style.opacity = "1", s.style.transform = "translateY(0)";
      }, 10)));
    }
  }
  refreshPluginSettingsDisabled(t) {
    for (let i in t.settings) {
      if (i === "enable") continue;
      let n = t.settings[i], s = document.getElementById(`highlite-settings-content-row-${i}`);
      if (!s) continue;
      s.querySelectorAll("input, button").forEach((r) => {
        let l = r;
        n.disabled ? (l.disabled = true, l.style.opacity = "0.5", l.style.cursor = "not-allowed", l.style.filter = "grayscale(50%)") : (l.disabled = false, l.style.opacity = "1", l.style.cursor = "pointer", l.style.filter = "none");
      });
    }
  }
  toggleSettingVisibility(t, i, n) {
    let s = document.getElementById(`highlite-settings-content-row-${i}`);
    if (!s) return;
    let a = this.pluginList.find((u) => u.pluginName === t);
    if (!a || !a.settings[i]) return;
    let r = a.settings[i], l = n !== void 0 ? n : !r.hidden;
    r.hidden = l, l ? (s.style.opacity = "0", s.style.transform = "translateY(-10px)", setTimeout(() => {
      s.style.display = "none";
    }, 200)) : (s.style.display = "flex", s.offsetHeight, setTimeout(() => {
      s.style.opacity = "1", s.style.transform = "translateY(0)";
    }, 10));
  }
  showSetting(t, i) {
    this.toggleSettingVisibility(t, i, false);
  }
  hideSetting(t, i) {
    this.toggleSettingVisibility(t, i, true);
  }
};
var zn = "https://www.ryelite.org/api/plugins/manifest.json";
var qn = "https://www.ryelite.org/api/plugins";
var Xe = class e8 {
  static {
    c(this, "PluginManager");
  }
  static instance;
  panelManager = new Ee();
  databaseManager = new fe();
  settingsManager = new _e();
  panelContent;
  listContainer;
  searchInput;
  currentFilter = "";
  didInitialSync = false;
  managedPlugins = [];
  isLoggedIn = false;
  get plugins() {
    return this.managedPlugins;
  }
  setLoginState(t) {
    this.isLoggedIn = t;
  }
  constructor() {
    if (e8.instance) return e8.instance;
    if (document.highlite.managers.PluginManager) return e8.instance = document.highlite.managers.PluginManager, document.highlite.managers.PluginManager;
    e8.instance = this, document.highlite.managers.PluginManager = this;
  }
  async initialize() {
    this.panelContent = this.panelManager.requestMenuItem("\u{1F5C3}\uFE0F", "Plugin Hub")[1], this.panelContent.style.display = "flex", this.panelContent.style.flexDirection = "column", this.panelContent.style.padding = "8px", this.panelContent.style.gap = "8px", this.panelContent.style.background = "var(--theme-background)", this.panelContent.style.overflowY = "auto", this.panelContent.style.overflowX = "hidden", this.panelContent.style.width = "-webkit-fill-available";
    let t = document.createElement("div");
    t.style.display = "flex", t.style.alignItems = "center", t.style.gap = "8px", t.style.position = "sticky", t.style.top = "0", t.style.background = "var(--theme-background)", t.style.zIndex = "1", t.style.padding = "4px 0";
    let i = document.createElement("div");
    i.style.flex = "1", i.style.width = "-webkit-fill-available", this.searchInput = document.createElement("input"), this.searchInput.type = "text", this.searchInput.placeholder = "Search plugins by name\u2026", this.searchInput.style.width = "100%", this.searchInput.style.padding = "8px 12px", this.searchInput.style.border = "1px solid var(--theme-border)", this.searchInput.style.borderRadius = "6px", this.searchInput.style.background = "var(--theme-background-mute)", this.searchInput.style.color = "var(--theme-text-primary)", this.searchInput.style.width = "-webkit-fill-available", this.searchInput.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", this.searchInput.style.fontSize = "14px", this.searchInput.addEventListener("input", () => {
      this.currentFilter = this.searchInput.value.trim().toLowerCase(), this.populatePluginHub();
    }), i.appendChild(this.searchInput), t.appendChild(i), this.listContainer = document.createElement("div"), this.listContainer.style.display = "flex", this.listContainer.style.flexDirection = "column", this.listContainer.style.gap = "8px", this.panelContent.appendChild(t), this.panelContent.appendChild(this.listContainer);
    let n = await this.obtainPluginConfigs();
    for (let s of n) {
      let a = { config: s, class: void 0, instance: void 0 };
      this.managedPlugins.push(a);
    }
    await this.populatePluginHub();
  }
  async obtainPluginConfigs() {
    let t = [];
    try {
      let i = await fetch(zn, { cache: "no-cache" });
      if (!i.ok) throw new Error(`Manifest request failed: ${i.status}`);
      let n = await i.json();
      for (let s of n) t.push(s);
    } catch (i) {
      console.error("[Highlite] Failed to fetch plugin configs from mirror", i);
    }
    return t;
  }
  async populatePluginHub() {
    this.listContainer.innerHTML = "";
    let t = this.managedPlugins.filter((a) => a.config);
    if (t.length === 0) {
      let a = document.createElement("div");
      a.textContent = "No plugins available.", a.style.textAlign = "center", a.style.color = "var(--theme-text-muted)", a.style.fontStyle = "italic", a.style.padding = "40px 20px", a.style.background = "var(--theme-background-soft)", a.style.border = "1px solid var(--theme-border)", a.style.borderRadius = "8px", a.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", this.listContainer.appendChild(a);
      return;
    }
    let i = this.currentFilter, s = t.filter((a) => {
      let r = (a.config.display_name ?? a.config.repository_name ?? "").toLowerCase();
      return !i || r.includes(i);
    }).sort((a, r) => {
      let l = (a.config.display_name ?? a.config.repository_name ?? "").toString(), u = (r.config.display_name ?? r.config.repository_name ?? "").toString();
      return l.localeCompare(u, void 0, { sensitivity: "base" });
    });
    if (s.length === 0) {
      let a = document.createElement("div");
      a.textContent = "No matching plugins.", a.style.textAlign = "center", a.style.color = "var(--theme-text-muted)", a.style.fontStyle = "italic", a.style.padding = "40px 20px", a.style.background = "var(--theme-background-soft)", a.style.border = "1px solid var(--theme-border)", a.style.borderRadius = "8px", a.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", this.listContainer.appendChild(a);
      return;
    }
    for (let a of s) {
      if (!a.config) continue;
      let r = document.createElement("div");
      r.style.border = "1px solid var(--theme-border)", r.style.borderRadius = "8px", r.style.padding = "16px", r.style.marginBottom = "8px", r.style.background = "var(--theme-background-mute)", r.style.color = "var(--theme-text-primary)", r.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)", r.style.transition = "all 0.2s ease";
      let l = document.createElement("h3");
      l.textContent = a.config.display_name ?? a.config.repository_name, l.style.margin = "0 0 4px 0", l.style.fontSize = "16px", l.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", l.style.fontWeight = "600", l.style.color = "var(--theme-text-primary)";
      let u = document.createElement("p");
      u.textContent = `By ${a.config.display_author ?? a.config.repository_owner}`, u.style.margin = "0 0 8px 0", u.style.fontStyle = "italic", u.style.fontSize = "12px", u.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", u.style.fontWeight = "400", u.style.color = "var(--theme-text-muted)";
      let h = document.createElement("p");
      h.textContent = a.config.display_description ?? "No description provided.", h.style.margin = "0 0 12px 0", h.style.fontSize = "14px", h.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", h.style.fontWeight = "400", h.style.color = "var(--theme-text-secondary)";
      let p = document.createElement("p");
      p.textContent = `Version: ${this.shortSha(a.config.asset_sha)}`, p.style.margin = "0 0 12px 0", p.style.fontSize = "12px", p.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", p.style.fontWeight = "500", p.style.color = "var(--theme-text-muted)";
      let v = document.createElement("button");
      v.textContent = "Install", this.stylePrimaryButton(v), this.databaseManager.database || (v.disabled = true, v.title = "Database not initialized yet");
      let k = document.createElement("button");
      k.textContent = "Uninstall", this.styleDangerButton(k);
      let E = document.createElement("button");
      E.textContent = "Update", this.styleSuccessButton(E), E.style.display = "none";
      let f = document.createElement("button");
      f.textContent = "View on GitHub", this.styleSecondaryButton(f), f.onclick = () => {
        let x = `https://github.com/${a.config.repository_owner}/${a.config.repository_name}`;
        window.open(x, "_blank");
      }, v.onclick = async () => {
        v.disabled = true;
        try {
          if (!a.config) return;
          let x = await this.downloadAndVerifyAsset(a.config);
          if (!x) throw new Error(`No asset matched SHA: ${a.config.asset_sha}`);
          let b = (await import(x)).default;
          if (typeof b != "function") throw new Error("Default export is not a valid plugin class");
          a.class = b, this.registerPlugin(b), await this.databaseManager.database?.put("plugins", { config: a.config, blob: a.blob }, a.config.display_name ?? a.config.repository_name), await this.settingsManager.refresh(), k.disabled = false, a.installedConfig = a.config, d.contains(v) && d.removeChild(v), E.style.display = "none", d.appendChild(k);
        } catch (x) {
          console.error("[Highlite] Failed to install plugin:", x), v.textContent = "Failed", v.classList.add("error");
        } finally {
          v.disabled = false;
        }
      }, k.onclick = async () => {
        try {
          if (!a.config) return;
          if (await this.databaseManager.database?.delete("plugins", a.config.display_name ?? a.config.repository_name), a.class) {
            let x = this.findPluginByClass(a.class);
            x && this.unregisterPlugin(x);
          }
          a.url && (URL.revokeObjectURL(a.url), a.url = void 0), a.blob = void 0, a.installedConfig = void 0, await this.settingsManager.refresh(), v.disabled = false, d.contains(k) && d.removeChild(k), E.style.display = "none", d.appendChild(v);
        } catch (x) {
          console.error("[Highlite] Failed to uninstall plugin:", x), k.textContent = "Failed";
        }
      }, E.onclick = async () => {
        E.disabled = true;
        try {
          if (!a.config) return;
          let x = await this.downloadAndVerifyAsset(a.config);
          if (!x) throw new Error(`No asset matched SHA: ${a.config.asset_sha}`);
          let b = (await import(x)).default;
          if (typeof b != "function") throw new Error("Default export is not a valid plugin class");
          a.instance && this.unregisterPlugin(a.instance), a.class = b, this.registerPlugin(b), await this.databaseManager.database?.put("plugins", { config: a.config, blob: a.blob }, a.config.display_name ?? a.config.repository_name), a.installedConfig = a.config, p.textContent = `Version: ${this.shortSha(a.config.asset_sha)}`, E.style.display = "none", await this.settingsManager.refresh();
        } catch (x) {
          console.error("[Highlite] Failed to update plugin:", x), E.textContent = "Failed";
        } finally {
          E.disabled = false;
        }
      }, r.appendChild(l), r.appendChild(u), r.appendChild(h), r.appendChild(p);
      let d = document.createElement("div");
      d.style.display = "flex", d.style.gap = "8px", d.style.flexWrap = "wrap", d.appendChild(f);
      let A = this.didInitialSync ? a.blob : await this.syncPluginState(a.config);
      if (A) {
        a.blob = A, d.appendChild(k);
        let x = a.installedConfig && a.installedConfig.asset_sha.toLowerCase() === a.config.asset_sha.toLowerCase();
        E.style.display = x ? "none" : "inline-flex", x || d.appendChild(E);
      } else d.appendChild(v);
      r.appendChild(d), this.listContainer.appendChild(r);
    }
    this.didInitialSync = true;
  }
  async syncPluginState(t) {
    if (!this.databaseManager.database) return;
    let i = await this.databaseManager.database.get("plugins", t.display_name ?? t.repository_name);
    if (i) {
      let n = i.blob, s = URL.createObjectURL(n);
      try {
        let r = (await import(s)).default, l = this.managedPlugins.find((u) => (u.config?.display_name ?? u.config?.repository_name) === (t.display_name ?? t.repository_name));
        l && (l.class = r, l.blob = n, l.url = s, l.installedConfig = i.config), this.registerPlugin(r);
      } catch (a) {
        console.error("[Highlite] Failed to load installed plugin", a), URL.revokeObjectURL(s);
        return;
      }
      return n;
    }
  }
  shortSha(t, i = 8) {
    let n = t ?? "";
    return (n.includes(":") ? n.split(":").pop() : n).slice(0, Math.max(1, i));
  }
  async downloadAndVerifyAsset(t) {
    if (!this.databaseManager.database) throw new Error("Database not initialized");
    let i = `${qn}/${t.repository_owner}/${t.display_name ?? t.repository_name}/`, n = await fetch(i, { headers: { Accept: "application/octet-stream" }, cache: "no-cache" });
    if (!n.ok) throw new Error(`Mirror download failed (${n.status})`);
    let s = await n.arrayBuffer();
    if (t.asset_sha) {
      let u = "sha256:" + await this.sha256Hex(s), h = (t.asset_sha ?? "").toLowerCase();
      if (u !== h) throw new Error(`[Highlite] Mirror asset sha mismatch for ${t.repository_name}. expected=${h} actual=${u}`);
    }
    let a = new Blob([s], { type: "application/javascript" }), r = URL.createObjectURL(a), l = this.managedPlugins.find((u) => (u.config?.display_name ?? u.config?.repository_name) === (t.display_name ?? t.repository_name));
    return l && (l.blob = a, l.url = r), r;
  }
  async sha256Hex(t) {
    let i = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(i), s = "";
    for (let a = 0; a < n.length; a++) s += n[a].toString(16).padStart(2, "0");
    return s;
  }
  stylePrimaryButton(t) {
    t.style.padding = "8px 16px", t.style.background = "var(--theme-accent)", t.style.color = "var(--theme-text-dark)", t.style.border = "1px solid var(--theme-accent-dark)", t.style.borderRadius = "6px", t.style.cursor = "pointer", t.style.fontSize = "14px", t.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", t.style.fontWeight = "500", t.style.transition = "all 0.2s ease";
  }
  styleDangerButton(t) {
    t.style.padding = "8px 16px", t.style.background = "var(--theme-danger)", t.style.color = "white", t.style.border = "1px solid var(--theme-danger-dark)", t.style.borderRadius = "6px", t.style.cursor = "pointer", t.style.fontSize = "14px", t.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", t.style.fontWeight = "500", t.style.transition = "all 0.2s ease";
  }
  styleSecondaryButton(t) {
    t.style.padding = "8px 16px", t.style.background = "var(--theme-background-mute)", t.style.color = "var(--theme-text-primary)", t.style.border = "1px solid var(--theme-border)", t.style.borderRadius = "6px", t.style.cursor = "pointer", t.style.fontSize = "14px", t.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", t.style.fontWeight = "500", t.style.transition = "all 0.2s ease";
  }
  styleSuccessButton(t) {
    t.style.padding = "8px 16px", t.style.background = "var(--theme-accent)", t.style.color = "var(--theme-text-dark)", t.style.border = "1px solid var(--theme-accent-dark)", t.style.borderRadius = "6px", t.style.cursor = "pointer", t.style.fontSize = "14px", t.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif", t.style.fontWeight = "500", t.style.transition = "all 0.2s ease";
  }
  registerPlugin(t) {
    let i = new t();
    console.info(`[Highlite] New plugin ${i.pluginName} registered`);
    let n = this.managedPlugins.find((s) => s.class === t);
    return n ? (n.class = t, n.instance = i) : (n = { config: void 0, class: t, instance: i }, this.managedPlugins.push(n)), this.isLoggedIn && (i.init && i.init(), i.postInit && i.postInit(), i.start && i.start()), true;
  }
  initAll() {
    for (let t of this.plugins) try {
      t.instance?.init();
    } catch (i) {
      console.error(`[Highlite] Error initializing plugin ${t.instance?.pluginName}:`, i);
    }
  }
  postInitAll() {
    for (let t of this.plugins) try {
      t.instance?.postInit && t.instance.postInit();
    } catch (i) {
      console.error(`[Highlite] Error post-initializing plugin ${t.instance?.pluginName}:`, i);
    }
  }
  startAll() {
    for (let t of this.plugins) if (t.instance?.settings.enable.value) try {
      t.instance?.start();
    } catch (i) {
      console.error(`[Highlite] Error starting plugin ${t.instance?.pluginName}:`, i);
    }
  }
  stopAll() {
    for (let t of this.plugins) if (t.instance?.settings.enable.value) try {
      t.instance?.stop();
    } catch (i) {
      console.error(`[Highlite] Error stopping plugin ${t.instance?.pluginName}:`, i);
    }
  }
  findPluginByName(t) {
    return this.plugins.find((i) => i.instance?.pluginName === t)?.instance;
  }
  findPluginByClass(t) {
    return this.plugins.find((i) => i.class && i.instance && i.instance.constructor === t)?.instance;
  }
  unregisterPlugin(t) {
    try {
      t.settings.enable.value && t.stop();
      let i = this.managedPlugins.findIndex((n) => n.instance === t);
      return i !== -1 && (this.managedPlugins[i].instance = void 0, this.managedPlugins[i].class = void 0), true;
    } catch (i) {
      return console.error(`[Highlite] Error unregistering plugin ${t.pluginName}:`, i), false;
    }
  }
};
var Ze = Symbol("target");
var qt = Symbol("unsubscribe");
function et(e13) {
  return e13 instanceof Date || e13 instanceof Set || e13 instanceof Map || e13 instanceof WeakSet || e13 instanceof WeakMap || ArrayBuffer.isView(e13);
}
c(et, "isBuiltinWithMutableMethods");
function Li(e13) {
  return (typeof e13 == "object" ? e13 === null : typeof e13 != "function") || e13 instanceof RegExp;
}
c(Li, "isBuiltinWithoutMutableMethods");
var j = Array.isArray;
function xe(e13) {
  return typeof e13 == "symbol";
}
c(xe, "isSymbol");
var $n = { after(e13, t) {
  return j(e13) ? e13.slice(t.length) : t === "" ? e13 : e13.slice(t.length + 1);
}, concat(e13, t) {
  return j(e13) ? (e13 = [...e13], t && e13.push(t), e13) : t && t.toString !== void 0 ? (e13 !== "" && (e13 += "."), xe(t) ? e13 + t.toString() : e13 + t) : e13;
}, initial(e13) {
  if (j(e13)) return e13.slice(0, -1);
  if (e13 === "") return e13;
  let t = e13.lastIndexOf(".");
  return t === -1 ? "" : e13.slice(0, t);
}, last(e13) {
  if (j(e13)) return e13.at(-1) ?? "";
  if (e13 === "") return e13;
  let t = e13.lastIndexOf(".");
  return t === -1 ? e13 : e13.slice(t + 1);
}, walk(e13, t) {
  if (j(e13)) for (let i of e13) t(i);
  else if (e13 !== "") {
    let i = 0, n = e13.indexOf(".");
    if (n === -1) t(e13);
    else for (; i < e13.length; ) n === -1 && (n = e13.length), t(e13.slice(i, n)), i = n + 1, n = e13.indexOf(".", i);
  }
}, get(e13, t) {
  return this.walk(t, (i) => {
    e13 && (e13 = e13[i]);
  }), e13;
}, isSubPath(e13, t) {
  if (j(e13)) {
    if (e13.length < t.length) return false;
    for (let i = 0; i < t.length; i++) if (e13[i] !== t[i]) return false;
    return true;
  }
  return e13.length < t.length ? false : e13 === t ? true : e13.startsWith(t) ? e13[t.length] === "." : false;
}, isRootPath(e13) {
  return j(e13) ? e13.length === 0 : e13 === "";
} };
var G = $n;
function $t(e13) {
  return typeof e13 == "object" && typeof e13.next == "function";
}
c($t, "isIterator");
function Gt(e13, t, i, n, s) {
  let a = e13.next;
  if (t.name === "entries") e13.next = function() {
    let r = a.call(this);
    return r.done === false && (r.value[0] = s(r.value[0], t, r.value[0], n), r.value[1] = s(r.value[1], t, r.value[0], n)), r;
  };
  else if (t.name === "values") {
    let r = i[Ze].keys();
    e13.next = function() {
      let l = a.call(this);
      return l.done === false && (l.value = s(l.value, t, r.next().value, n)), l;
    };
  } else e13.next = function() {
    let r = a.call(this);
    return r.done === false && (r.value = s(r.value, t, r.value, n)), r;
  };
  return e13;
}
c(Gt, "wrapIterator");
function mt(e13, t, i) {
  return e13.isUnsubscribed || t.ignoreSymbols && xe(i) || t.ignoreUnderscores && i.charAt(0) === "_" || "ignoreKeys" in t && t.ignoreKeys.includes(i);
}
c(mt, "ignoreProperty");
var tt = class {
  static {
    c(this, "Cache");
  }
  constructor(t) {
    this._equals = t, this._proxyCache = /* @__PURE__ */ new WeakMap(), this._pathCache = /* @__PURE__ */ new WeakMap(), this.isUnsubscribed = false;
  }
  _getDescriptorCache() {
    return this._descriptorCache === void 0 && (this._descriptorCache = /* @__PURE__ */ new WeakMap()), this._descriptorCache;
  }
  _getProperties(t) {
    let i = this._getDescriptorCache(), n = i.get(t);
    return n === void 0 && (n = {}, i.set(t, n)), n;
  }
  _getOwnPropertyDescriptor(t, i) {
    if (this.isUnsubscribed) return Reflect.getOwnPropertyDescriptor(t, i);
    let n = this._getProperties(t), s = n[i];
    return s === void 0 && (s = Reflect.getOwnPropertyDescriptor(t, i), n[i] = s), s;
  }
  getProxy(t, i, n, s) {
    if (this.isUnsubscribed) return t;
    let a = t[s], r = a ?? t;
    this._pathCache.set(r, i);
    let l = this._proxyCache.get(r);
    return l === void 0 && (l = a === void 0 ? new Proxy(t, n) : t, this._proxyCache.set(r, l)), l;
  }
  getPath(t) {
    return this.isUnsubscribed ? void 0 : this._pathCache.get(t);
  }
  isDetached(t, i) {
    return !Object.is(t, G.get(i, this.getPath(t)));
  }
  defineProperty(t, i, n) {
    return Reflect.defineProperty(t, i, n) ? (this.isUnsubscribed || (this._getProperties(t)[i] = n), true) : false;
  }
  setProperty(t, i, n, s, a) {
    if (!this._equals(a, n) || !(i in t)) {
      let r = this._getOwnPropertyDescriptor(t, i);
      return r !== void 0 && "set" in r ? Reflect.set(t, i, n, s) : Reflect.set(t, i, n);
    }
    return true;
  }
  deleteProperty(t, i, n) {
    if (Reflect.deleteProperty(t, i)) {
      if (!this.isUnsubscribed) {
        let s = this._getDescriptorCache().get(t);
        s && (delete s[i], this._pathCache.delete(n));
      }
      return true;
    }
    return false;
  }
  isSameDescriptor(t, i, n) {
    let s = this._getOwnPropertyDescriptor(i, n);
    return t !== void 0 && s !== void 0 && Object.is(t.value, s.value) && (t.writable || false) === (s.writable || false) && (t.enumerable || false) === (s.enumerable || false) && (t.configurable || false) === (s.configurable || false) && t.get === s.get && t.set === s.set;
  }
  isGetInvariant(t, i) {
    let n = this._getOwnPropertyDescriptor(t, i);
    return n !== void 0 && n.configurable !== true && n.writable !== true;
  }
  unsubscribe() {
    this._descriptorCache = null, this._pathCache = null, this._proxyCache = null, this.isUnsubscribed = true;
  }
};
function Te(e13) {
  return toString.call(e13) === "[object Object]";
}
c(Te, "isObject");
function Be() {
  return true;
}
c(Be, "isDiffCertain");
function ve(e13, t) {
  return e13.length !== t.length || e13.some((i, n) => t[n] !== i);
}
c(ve, "isDiffArrays");
var gt = /* @__PURE__ */ new Set(["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]);
var Gn = /* @__PURE__ */ new Set(["concat", "includes", "indexOf", "join", "keys", "lastIndexOf"]);
var Kt = { push: Be, pop: Be, shift: Be, unshift: Be, copyWithin: ve, reverse: ve, sort: ve, splice: ve, flat: ve, fill: ve };
var Ni = /* @__PURE__ */ new Set([...gt, ...Gn, ...Object.keys(Kt)]);
function Ve(e13, t) {
  if (e13.size !== t.size) return true;
  for (let i of e13) if (!t.has(i)) return true;
  return false;
}
c(Ve, "isDiffSets");
var Yt = ["keys", "values", "entries"];
var Qt = /* @__PURE__ */ new Set(["has", "toString"]);
var Jt = { add: Ve, clear: Ve, delete: Ve, forEach: Ve };
var Ri = /* @__PURE__ */ new Set([...Qt, ...Object.keys(Jt), ...Yt]);
function Oe(e13, t) {
  if (e13.size !== t.size) return true;
  let i;
  for (let [n, s] of e13) if (i = t.get(n), i !== s || i === void 0 && !t.has(n)) return true;
  return false;
}
c(Oe, "isDiffMaps");
var Kn = /* @__PURE__ */ new Set([...Qt, "get"]);
var Xt = { set: Oe, clear: Oe, delete: Oe, forEach: Oe };
var Di = /* @__PURE__ */ new Set([...Kn, ...Object.keys(Xt), ...Yt]);
var $ = class {
  static {
    c(this, "CloneObject");
  }
  constructor(t, i, n, s) {
    this._path = i, this._isChanged = false, this._clonedCache = /* @__PURE__ */ new Set(), this._hasOnValidate = s, this._changes = s ? [] : null, this.clone = i === void 0 ? t : this._shallowClone(t);
  }
  static isHandledMethod(t) {
    return gt.has(t);
  }
  _shallowClone(t) {
    let i = t;
    if (Te(t)) i = { ...t };
    else if (j(t) || ArrayBuffer.isView(t)) i = [...t];
    else if (t instanceof Date) i = new Date(t);
    else if (t instanceof Set) i = new Set([...t].map((n) => this._shallowClone(n)));
    else if (t instanceof Map) {
      i = /* @__PURE__ */ new Map();
      for (let [n, s] of t.entries()) i.set(n, this._shallowClone(s));
    }
    return this._clonedCache.add(i), i;
  }
  preferredThisArg(t, i, n, s) {
    return t ? (j(s) ? this._onIsChanged = Kt[i] : s instanceof Set ? this._onIsChanged = Jt[i] : s instanceof Map && (this._onIsChanged = Xt[i]), s) : n;
  }
  update(t, i, n) {
    let s = G.after(t, this._path);
    if (i !== "length") {
      let a = this.clone;
      G.walk(s, (r) => {
        a?.[r] && (this._clonedCache.has(a[r]) || (a[r] = this._shallowClone(a[r])), a = a[r]);
      }), this._hasOnValidate && this._changes.push({ path: s, property: i, previous: n }), a?.[i] && (a[i] = n);
    }
    this._isChanged = true;
  }
  undo(t) {
    let i;
    for (let n = this._changes.length - 1; n !== -1; n--) i = this._changes[n], G.get(t, i.path)[i.property] = i.previous;
  }
  isChanged(t) {
    return this._onIsChanged === void 0 ? this._isChanged : this._onIsChanged(this.clone, t);
  }
  isPathApplicable(t) {
    return G.isRootPath(this._path) || G.isSubPath(t, this._path);
  }
};
var Fe = class extends $ {
  static {
    c(this, "CloneArray");
  }
  static isHandledMethod(t) {
    return Ni.has(t);
  }
};
var it = class extends $ {
  static {
    c(this, "CloneDate");
  }
  undo(t) {
    t.setTime(this.clone.getTime());
  }
  isChanged(t, i) {
    return !i(this.clone.valueOf(), t.valueOf());
  }
};
var He = class extends $ {
  static {
    c(this, "CloneSet");
  }
  static isHandledMethod(t) {
    return Ri.has(t);
  }
  undo(t) {
    for (let i of this.clone) t.add(i);
    for (let i of t) this.clone.has(i) || t.delete(i);
  }
};
var We = class extends $ {
  static {
    c(this, "CloneMap");
  }
  static isHandledMethod(t) {
    return Di.has(t);
  }
  undo(t) {
    for (let [i, n] of this.clone.entries()) t.set(i, n);
    for (let i of t.keys()) this.clone.has(i) || t.delete(i);
  }
};
var nt = class extends $ {
  static {
    c(this, "CloneWeakSet");
  }
  constructor(t, i, n, s) {
    super(void 0, i, n, s), this._argument1 = n[0], this._weakValue = t.has(this._argument1);
  }
  isChanged(t) {
    return this._weakValue !== t.has(this._argument1);
  }
  undo(t) {
    this._weakValue && !t.has(this._argument1) ? t.add(this._argument1) : t.delete(this._argument1);
  }
};
var st = class extends $ {
  static {
    c(this, "CloneWeakMap");
  }
  constructor(t, i, n, s) {
    super(void 0, i, n, s), this._weakKey = n[0], this._weakHas = t.has(this._weakKey), this._weakValue = t.get(this._weakKey);
  }
  isChanged(t) {
    return this._weakValue !== t.get(this._weakKey);
  }
  undo(t) {
    let i = t.has(this._weakKey);
    this._weakHas && !i ? t.set(this._weakKey, this._weakValue) : !this._weakHas && i ? t.delete(this._weakKey) : this._weakValue !== t.get(this._weakKey) && t.set(this._weakKey, this._weakValue);
  }
};
var de = class e9 {
  static {
    c(this, "SmartClone");
  }
  constructor(t) {
    this._stack = [], this._hasOnValidate = t;
  }
  static isHandledType(t) {
    return Te(t) || j(t) || et(t);
  }
  static isHandledMethod(t, i) {
    return Te(t) ? $.isHandledMethod(i) : j(t) ? Fe.isHandledMethod(i) : t instanceof Set ? He.isHandledMethod(i) : t instanceof Map ? We.isHandledMethod(i) : et(t);
  }
  get isCloning() {
    return this._stack.length > 0;
  }
  start(t, i, n) {
    let s = $;
    j(t) ? s = Fe : t instanceof Date ? s = it : t instanceof Set ? s = He : t instanceof Map ? s = We : t instanceof WeakSet ? s = nt : t instanceof WeakMap && (s = st), this._stack.push(new s(t, i, n, this._hasOnValidate));
  }
  update(t, i, n) {
    this._stack.at(-1).update(t, i, n);
  }
  preferredThisArg(t, i, n) {
    let { name: s } = t, a = e9.isHandledMethod(n, s);
    return this._stack.at(-1).preferredThisArg(a, s, i, n);
  }
  isChanged(t, i, n) {
    return this._stack.at(-1).isChanged(t, i, n);
  }
  isPartOfClone(t) {
    return this._stack.at(-1).isPathApplicable(t);
  }
  undo(t) {
    this._previousClone !== void 0 && this._previousClone.undo(t);
  }
  stop() {
    return this._previousClone = this._stack.pop(), this._previousClone.clone;
  }
};
var Yn = { equals: Object.is, isShallow: false, pathAsArray: false, ignoreSymbols: false, ignoreUnderscores: false, ignoreDetached: false, details: false };
var Zt = c((e13, t, i = {}) => {
  i = { ...Yn, ...i };
  let n = Symbol("ProxyTarget"), { equals: s, isShallow: a, ignoreDetached: r, details: l } = i, u = new tt(s), h = typeof i.onValidate == "function", p = new de(h), v = c((b, g, I, M, _) => !h || p.isCloning || i.onValidate(G.concat(u.getPath(b), g), I, M, _) === true, "validate"), k = c((b, g, I, M) => {
    !mt(u, i, g) && !(r && u.isDetached(b, e13)) && E(u.getPath(b), g, I, M);
  }, "handleChangeOnTarget"), E = c((b, g, I, M, _) => {
    p.isCloning && p.isPartOfClone(b) ? p.update(b, g, M) : t(G.concat(b, g), I, M, _);
  }, "handleChange"), f = c((b) => b && (b[n] ?? b), "getProxyTarget"), d = c((b, g, I, M) => {
    if (Li(b) || I === "constructor" || a && !de.isHandledMethod(g, I) || mt(u, i, I) || u.isGetInvariant(g, I) || r && u.isDetached(g, e13)) return b;
    M === void 0 && (M = u.getPath(g));
    let _ = G.concat(M, I), H = u.getPath(b);
    return H && A(_, H) ? u.getProxy(b, H, x, n) : u.getProxy(b, _, x, n);
  }, "prepareValue"), A = c((b, g) => {
    if (xe(b) || b.length <= g.length || j(g) && g.length === 0) return false;
    let I = j(b) ? b : b.split("."), M = j(g) ? g : g.split(".");
    return I.length <= M.length ? false : !M.some((_, H) => _ !== I[H]);
  }, "isSameObjectTree"), x = { get(b, g, I) {
    if (xe(g)) {
      if (g === n || g === Ze) return b;
      if (g === qt && !u.isUnsubscribed && u.getPath(b).length === 0) return u.unsubscribe(), b;
    }
    let M = et(b) ? Reflect.get(b, g) : Reflect.get(b, g, I);
    return d(M, b, g);
  }, set(b, g, I, M) {
    I = f(I);
    let _ = b[n] ?? b, H = _[g];
    if (s(H, I) && g in b) return true;
    let K = v(b, g, I, H);
    return K && u.setProperty(_, g, I, M, H) ? (k(b, g, b[g], H), true) : !K;
  }, defineProperty(b, g, I) {
    if (!u.isSameDescriptor(I, b, g)) {
      let M = b[g];
      v(b, g, I.value, M) && u.defineProperty(b, g, I, M) && k(b, g, I.value, M);
    }
    return true;
  }, deleteProperty(b, g) {
    if (!Reflect.has(b, g)) return true;
    let I = Reflect.get(b, g), M = v(b, g, void 0, I);
    return M && u.deleteProperty(b, g, I) ? (k(b, g, void 0, I), true) : !M;
  }, apply(b, g, I) {
    let M = g[n] ?? g;
    if (u.isUnsubscribed) return Reflect.apply(b, M, I);
    if ((l === false || l !== true && !l.includes(b.name)) && de.isHandledType(M)) {
      let _ = G.initial(u.getPath(b)), H = de.isHandledMethod(M, b.name);
      p.start(M, _, I);
      let K = Reflect.apply(b, p.preferredThisArg(b, g, M), H ? I.map((q) => f(q)) : I), T = p.isChanged(M, s), pe = p.stop();
      if (de.isHandledType(K) && H && (g instanceof Map && b.name === "get" && (_ = G.concat(_, I[0])), K = u.getProxy(K, _, x)), T) {
        let q = { name: b.name, args: I, result: K }, V = p.isCloning ? G.initial(_) : _, S = p.isCloning ? G.last(_) : "";
        v(G.get(e13, V), S, M, pe, q) ? E(V, S, M, pe, q) : p.undo(M);
      }
      return (g instanceof Map || g instanceof Set) && $t(K) ? Gt(K, b, g, _, d) : K;
    }
    return Reflect.apply(b, g, I);
  } }, U = u.getProxy(e13, i.pathAsArray ? [] : "", x);
  return t = t.bind(U), h && (i.onValidate = i.onValidate.bind(U)), U;
}, "onChange");
Zt.target = (e13) => e13?.[Ze] ?? e13;
Zt.unsubscribe = (e13) => e13?.[qt] ?? e13;
var ei = Zt;
var yt = class e10 {
  static {
    c(this, "PluginDataManager");
  }
  static instance;
  databaseManager;
  username;
  inMemoryCache = {};
  writeTimeout = null;
  initialized = false;
  constructor() {
    if (e10.instance) return e10.instance;
    if (document.highlite.managers.PluginDataManager) return e10.instance = document.highlite.managers.PluginDataManager, document.highlite.managers.PluginDataManager;
    e10.instance = this, document.highlite.managers.PluginDataManager = this;
  }
  async initialize() {
    this.databaseManager = new fe(), this.username = document.highlite.gameHooks.EntityManager.Instance._mainPlayer._nameLowerCase;
    let t = await this.databaseManager.database.get("data", this.username);
    this.inMemoryCache = t || {}, this.initialized = true;
  }
  async addPlugin(t) {
    if (!this.initialized) throw new Error("PluginDataManager must be initialized before adding plugins");
    let i = this.inMemoryCache[t.pluginName] ?? {}, n = structuredClone(i), s = ei(n, () => {
      this.scheduleWrite(t.pluginName, s);
    });
    t.data = s;
  }
  scheduleWrite(t, i) {
    this.inMemoryCache[t] = structuredClone(ei.target(i)), this.writeTimeout && clearTimeout(this.writeTimeout), this.writeTimeout = setTimeout(async () => {
      try {
        await this.databaseManager.database.put("data", this.inMemoryCache, this.username);
      } catch (n) {
        console.error("Failed to save plugin data", n);
      } finally {
        this.writeTimeout = null;
      }
    }, 200);
  }
};
var at = class e11 {
  static {
    c(this, "SoundManager");
  }
  static instance;
  currentlyPlaying = {};
  constructor() {
    if (e11.instance) return e11.instance;
    if (document.highlite.managers.SoundManager) return e11.instance = document.highlite.managers.SoundManager, document.highlite.managers.SoundManager;
    e11.instance = this, document.highlite.managers.SoundManager = this;
  }
  playSound(t, i = 1) {
    this.currentlyPlaying[t] || this.createAudioElement(t, i).play();
  }
  createAudioElement(t, i = 1) {
    let n = new Audio(t);
    return n.volume = i, n.play(), n.onended = () => {
      this.currentlyPlaying[t]?.remove(), delete this.currentlyPlaying[t];
    }, this.currentlyPlaying[t] = n, n;
  }
};
var Qn = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var Hi = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
var Jn = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var Wi = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var ti = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" };
var ii = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var Xn = { 5: ii, "5module": ii + " export import", 6: ii + " const class extends export import super" };
var Zn = /^in(stanceof)?$/;
var es = new RegExp("[" + Wi + "]");
var ts = new RegExp("[" + Wi + Jn + "]");
function si(e13, t) {
  for (var i = 65536, n = 0; n < t.length; n += 2) {
    if (i += t[n], i > e13) return false;
    if (i += t[n + 1], i >= e13) return true;
  }
  return false;
}
c(si, "isInAstralSet");
function ue(e13, t) {
  return e13 < 65 ? e13 === 36 : e13 < 91 ? true : e13 < 97 ? e13 === 95 : e13 < 123 ? true : e13 <= 65535 ? e13 >= 170 && es.test(String.fromCharCode(e13)) : t === false ? false : si(e13, Hi);
}
c(ue, "isIdentifierStart");
function we(e13, t) {
  return e13 < 48 ? e13 === 36 : e13 < 58 ? true : e13 < 65 ? false : e13 < 91 ? true : e13 < 97 ? e13 === 95 : e13 < 123 ? true : e13 <= 65535 ? e13 >= 170 && ts.test(String.fromCharCode(e13)) : t === false ? false : si(e13, Hi) || si(e13, Qn);
}
c(we, "isIdentifierChar");
var D = c(function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
}, "TokenType");
function ne(e13, t) {
  return new D(e13, { beforeExpr: true, binop: t });
}
c(ne, "binop");
var se = { beforeExpr: true };
var ee = { startsExpr: true };
var li = {};
function R(e13, t) {
  return t === void 0 && (t = {}), t.keyword = e13, li[e13] = new D(e13, t);
}
c(R, "kw");
var o = { num: new D("num", ee), regexp: new D("regexp", ee), string: new D("string", ee), name: new D("name", ee), privateId: new D("privateId", ee), eof: new D("eof"), bracketL: new D("[", { beforeExpr: true, startsExpr: true }), bracketR: new D("]"), braceL: new D("{", { beforeExpr: true, startsExpr: true }), braceR: new D("}"), parenL: new D("(", { beforeExpr: true, startsExpr: true }), parenR: new D(")"), comma: new D(",", se), semi: new D(";", se), colon: new D(":", se), dot: new D("."), question: new D("?", se), questionDot: new D("?."), arrow: new D("=>", se), template: new D("template"), invalidTemplate: new D("invalidTemplate"), ellipsis: new D("...", se), backQuote: new D("`", ee), dollarBraceL: new D("${", { beforeExpr: true, startsExpr: true }), eq: new D("=", { beforeExpr: true, isAssign: true }), assign: new D("_=", { beforeExpr: true, isAssign: true }), incDec: new D("++/--", { prefix: true, postfix: true, startsExpr: true }), prefix: new D("!/~", { beforeExpr: true, prefix: true, startsExpr: true }), logicalOR: ne("||", 1), logicalAND: ne("&&", 2), bitwiseOR: ne("|", 3), bitwiseXOR: ne("^", 4), bitwiseAND: ne("&", 5), equality: ne("==/!=/===/!==", 6), relational: ne("</>/<=/>=", 7), bitShift: ne("<</>>/>>>", 8), plusMin: new D("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: ne("%", 10), star: ne("*", 10), slash: ne("/", 10), starstar: new D("**", { beforeExpr: true }), coalesce: ne("??", 1), _break: R("break"), _case: R("case", se), _catch: R("catch"), _continue: R("continue"), _debugger: R("debugger"), _default: R("default", se), _do: R("do", { isLoop: true, beforeExpr: true }), _else: R("else", se), _finally: R("finally"), _for: R("for", { isLoop: true }), _function: R("function", ee), _if: R("if"), _return: R("return", se), _switch: R("switch"), _throw: R("throw", se), _try: R("try"), _var: R("var"), _const: R("const"), _while: R("while", { isLoop: true }), _with: R("with"), _new: R("new", { beforeExpr: true, startsExpr: true }), _this: R("this", ee), _super: R("super", ee), _class: R("class", ee), _extends: R("extends", se), _export: R("export"), _import: R("import", ee), _null: R("null", ee), _true: R("true", ee), _false: R("false", ee), _in: R("in", { beforeExpr: true, binop: 7 }), _instanceof: R("instanceof", { beforeExpr: true, binop: 7 }), _typeof: R("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: R("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: R("delete", { beforeExpr: true, prefix: true, startsExpr: true }) };
var te = /\r\n?|\n|\u2028|\u2029/;
var is = new RegExp(te.source, "g");
function Ue(e13) {
  return e13 === 10 || e13 === 13 || e13 === 8232 || e13 === 8233;
}
c(Ue, "isNewLine");
function Ui(e13, t, i) {
  i === void 0 && (i = e13.length);
  for (var n = t; n < i; n++) {
    var s = e13.charCodeAt(n);
    if (Ue(s)) return n < i - 1 && s === 13 && e13.charCodeAt(n + 1) === 10 ? n + 2 : n + 1;
  }
  return -1;
}
c(Ui, "nextLineBreak");
var ji = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var X = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var zi = Object.prototype;
var ns = zi.hasOwnProperty;
var ss = zi.toString;
var je = Object.hasOwn || (function(e13, t) {
  return ns.call(e13, t);
});
var Ti = Array.isArray || (function(e13) {
  return ss.call(e13) === "[object Array]";
});
var Bi = /* @__PURE__ */ Object.create(null);
function Se(e13) {
  return Bi[e13] || (Bi[e13] = new RegExp("^(?:" + e13.replace(/ /g, "|") + ")$"));
}
c(Se, "wordsRegexp");
function me(e13) {
  return e13 <= 65535 ? String.fromCharCode(e13) : (e13 -= 65536, String.fromCharCode((e13 >> 10) + 55296, (e13 & 1023) + 56320));
}
c(me, "codePointToString");
var as = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var ot = c(function(t, i) {
  this.line = t, this.column = i;
}, "Position");
ot.prototype.offset = c(function(t) {
  return new ot(this.line, this.column + t);
}, "offset");
var kt = c(function(t, i, n) {
  this.start = i, this.end = n, t.sourceFile !== null && (this.source = t.sourceFile);
}, "SourceLocation");
function qi(e13, t) {
  for (var i = 1, n = 0; ; ) {
    var s = Ui(e13, n, t);
    if (s < 0) return new ot(i, t - n);
    ++i, n = s;
  }
}
c(qi, "getLineInfo");
var ai = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: false, checkPrivateFields: true, locations: false, onToken: null, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null, preserveParens: false };
var Vi = false;
function rs(e13) {
  var t = {};
  for (var i in ai) t[i] = e13 && je(e13, i) ? e13[i] : ai[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!Vi && typeof console == "object" && console.warn && (Vi = true, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e13 || e13.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), Ti(t.onToken)) {
    var n = t.onToken;
    t.onToken = function(s) {
      return n.push(s);
    };
  }
  return Ti(t.onComment) && (t.onComment = os(t, t.onComment)), t;
}
c(rs, "getOptions");
function os(e13, t) {
  return function(i, n, s, a, r, l) {
    var u = { type: i ? "Block" : "Line", value: n, start: s, end: a };
    e13.locations && (u.loc = new kt(this, r, l)), e13.ranges && (u.range = [s, a]), t.push(u);
  };
}
c(os, "pushComment");
var lt = 1;
var ze = 2;
var ui = 4;
var $i = 8;
var ci = 16;
var Gi = 32;
var Ct = 64;
var Ki = 128;
var Pe = 256;
var ut = 512;
var Et = lt | ze | Pe;
function hi(e13, t) {
  return ze | (e13 ? ui : 0) | (t ? $i : 0);
}
c(hi, "functionFlags");
var bt = 0;
var pi = 1;
var ye = 2;
var Yi = 3;
var Qi = 4;
var Ji = 5;
var z = c(function(t, i, n) {
  this.options = t = rs(t), this.sourceFile = t.sourceFile, this.keywords = Se(Xn[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var s = "";
  t.allowReserved !== true && (s = ti[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (s += " await")), this.reservedWords = Se(s);
  var a = (s ? s + " " : "") + ti.strict;
  this.reservedWordsStrict = Se(a), this.reservedWordsStrictBind = Se(a + " " + ti.strictBind), this.input = String(i), this.containsEsc = false, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(te).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = o.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = true, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = false, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(lt), this.regexpState = null, this.privateNameStack = [];
}, "Parser");
var ce = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
z.prototype.parse = c(function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
}, "parse");
ce.inFunction.get = function() {
  return (this.currentVarScope().flags & ze) > 0;
};
ce.inGenerator.get = function() {
  return (this.currentVarScope().flags & $i) > 0;
};
ce.inAsync.get = function() {
  return (this.currentVarScope().flags & ui) > 0;
};
ce.canAwait.get = function() {
  for (var e13 = this.scopeStack.length - 1; e13 >= 0; e13--) {
    var t = this.scopeStack[e13], i = t.flags;
    if (i & (Pe | ut)) return false;
    if (i & ze) return (i & ui) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
ce.allowSuper.get = function() {
  var e13 = this.currentThisScope(), t = e13.flags;
  return (t & Ct) > 0 || this.options.allowSuperOutsideMethod;
};
ce.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Ki) > 0;
};
ce.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
ce.allowNewDotTarget.get = function() {
  for (var e13 = this.scopeStack.length - 1; e13 >= 0; e13--) {
    var t = this.scopeStack[e13], i = t.flags;
    if (i & (Pe | ut) || i & ze && !(i & ci)) return true;
  }
  return false;
};
ce.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Pe) > 0;
};
z.extend = c(function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var n = this, s = 0; s < t.length; s++) n = t[s](n);
  return n;
}, "extend");
z.parse = c(function(t, i) {
  return new this(i, t).parse();
}, "parse");
z.parseExpressionAt = c(function(t, i, n) {
  var s = new this(n, t, i);
  return s.nextToken(), s.parseExpression();
}, "parseExpressionAt");
z.tokenizer = c(function(t, i) {
  return new this(i, t);
}, "tokenizer");
Object.defineProperties(z.prototype, ce);
var Z = z.prototype;
var ls = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Z.strictDirective = function(e13) {
  if (this.options.ecmaVersion < 5) return false;
  for (; ; ) {
    X.lastIndex = e13, e13 += X.exec(this.input)[0].length;
    var t = ls.exec(this.input.slice(e13));
    if (!t) return false;
    if ((t[1] || t[2]) === "use strict") {
      X.lastIndex = e13 + t[0].length;
      var i = X.exec(this.input), n = i.index + i[0].length, s = this.input.charAt(n);
      return s === ";" || s === "}" || te.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || s === "!" && this.input.charAt(n + 1) === "=");
    }
    e13 += t[0].length, X.lastIndex = e13, e13 += X.exec(this.input)[0].length, this.input[e13] === ";" && e13++;
  }
};
Z.eat = function(e13) {
  return this.type === e13 ? (this.next(), true) : false;
};
Z.isContextual = function(e13) {
  return this.type === o.name && this.value === e13 && !this.containsEsc;
};
Z.eatContextual = function(e13) {
  return this.isContextual(e13) ? (this.next(), true) : false;
};
Z.expectContextual = function(e13) {
  this.eatContextual(e13) || this.unexpected();
};
Z.canInsertSemicolon = function() {
  return this.type === o.eof || this.type === o.braceR || te.test(this.input.slice(this.lastTokEnd, this.start));
};
Z.insertSemicolon = function() {
  if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), true;
};
Z.semicolon = function() {
  !this.eat(o.semi) && !this.insertSemicolon() && this.unexpected();
};
Z.afterTrailingComma = function(e13, t) {
  if (this.type === e13) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), true;
};
Z.expect = function(e13) {
  this.eat(e13) || this.unexpected();
};
Z.unexpected = function(e13) {
  this.raise(e13 ?? this.start, "Unexpected token");
};
var It = c(function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}, "DestructuringErrors");
Z.checkPatternErrors = function(e13, t) {
  if (e13) {
    e13.trailingComma > -1 && this.raiseRecoverable(e13.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e13.parenthesizedAssign : e13.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
Z.checkExpressionErrors = function(e13, t) {
  if (!e13) return false;
  var i = e13.shorthandAssign, n = e13.doubleProto;
  if (!t) return i >= 0 || n >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
Z.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Z.isSimpleAssignTarget = function(e13) {
  return e13.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e13.expression) : e13.type === "Identifier" || e13.type === "MemberExpression";
};
var C = z.prototype;
C.parseTopLevel = function(e13) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e13.body || (e13.body = []); this.type !== o.eof; ) {
    var i = this.parseStatement(null, true, t);
    e13.body.push(i);
  }
  if (this.inModule) for (var n = 0, s = Object.keys(this.undefinedExports); n < s.length; n += 1) {
    var a = s[n];
    this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
  }
  return this.adaptDirectivePrologue(e13.body), this.next(), e13.sourceType = this.options.sourceType, this.finishNode(e13, "Program");
};
var fi = { kind: "loop" };
var us = { kind: "switch" };
C.isLet = function(e13) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return false;
  X.lastIndex = this.pos;
  var t = X.exec(this.input), i = this.pos + t[0].length, n = this.input.charCodeAt(i);
  if (n === 91 || n === 92) return true;
  if (e13) return false;
  if (n === 123 || n > 55295 && n < 56320) return true;
  if (ue(n, true)) {
    for (var s = i + 1; we(n = this.input.charCodeAt(s), true); ) ++s;
    if (n === 92 || n > 55295 && n < 56320) return true;
    var a = this.input.slice(i, s);
    if (!Zn.test(a)) return true;
  }
  return false;
};
C.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return false;
  X.lastIndex = this.pos;
  var e13 = X.exec(this.input), t = this.pos + e13[0].length, i;
  return !te.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(we(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
C.isUsingKeyword = function(e13, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e13 ? "await" : "using")) return false;
  X.lastIndex = this.pos;
  var i = X.exec(this.input), n = this.pos + i[0].length;
  if (te.test(this.input.slice(this.pos, n))) return false;
  if (e13) {
    var s = n + 5, a;
    if (this.input.slice(n, s) !== "using" || s === this.input.length || we(a = this.input.charCodeAt(s)) || a > 55295 && a < 56320) return false;
    X.lastIndex = s;
    var r = X.exec(this.input);
    if (r && te.test(this.input.slice(s, s + r[0].length))) return false;
  }
  if (t) {
    var l = n + 2, u;
    if (this.input.slice(n, l) === "of" && (l === this.input.length || !we(u = this.input.charCodeAt(l)) && !(u > 55295 && u < 56320))) return false;
  }
  var h = this.input.charCodeAt(n);
  return ue(h, true) || h === 92;
};
C.isAwaitUsing = function(e13) {
  return this.isUsingKeyword(true, e13);
};
C.isUsing = function(e13) {
  return this.isUsingKeyword(false, e13);
};
C.parseStatement = function(e13, t, i) {
  var n = this.type, s = this.startNode(), a;
  switch (this.isLet(e13) && (n = o._var, a = "let"), n) {
    case o._break:
    case o._continue:
      return this.parseBreakContinueStatement(s, n.keyword);
    case o._debugger:
      return this.parseDebuggerStatement(s);
    case o._do:
      return this.parseDoStatement(s);
    case o._for:
      return this.parseForStatement(s);
    case o._function:
      return e13 && (this.strict || e13 !== "if" && e13 !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, false, !e13);
    case o._class:
      return e13 && this.unexpected(), this.parseClass(s, true);
    case o._if:
      return this.parseIfStatement(s);
    case o._return:
      return this.parseReturnStatement(s);
    case o._switch:
      return this.parseSwitchStatement(s);
    case o._throw:
      return this.parseThrowStatement(s);
    case o._try:
      return this.parseTryStatement(s);
    case o._const:
    case o._var:
      return a = a || this.value, e13 && a !== "var" && this.unexpected(), this.parseVarStatement(s, a);
    case o._while:
      return this.parseWhileStatement(s);
    case o._with:
      return this.parseWithStatement(s);
    case o.braceL:
      return this.parseBlock(true, s);
    case o.semi:
      return this.parseEmptyStatement(s);
    case o._export:
    case o._import:
      if (this.options.ecmaVersion > 10 && n === o._import) {
        X.lastIndex = this.pos;
        var r = X.exec(this.input), l = this.pos + r[0].length, u = this.input.charCodeAt(l);
        if (u === 40 || u === 46) return this.parseExpressionStatement(s, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === o._import ? this.parseImport(s) : this.parseExport(s, i);
    default:
      if (this.isAsyncFunction()) return e13 && this.unexpected(), this.next(), this.parseFunctionStatement(s, true, !e13);
      var h = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
      if (h) return t && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), h === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(s, false, h), this.semicolon(), this.finishNode(s, "VariableDeclaration");
      var p = this.value, v = this.parseExpression();
      return n === o.name && v.type === "Identifier" && this.eat(o.colon) ? this.parseLabeledStatement(s, p, v, e13) : this.parseExpressionStatement(s, v);
  }
};
C.parseBreakContinueStatement = function(e13, t) {
  var i = t === "break";
  this.next(), this.eat(o.semi) || this.insertSemicolon() ? e13.label = null : this.type !== o.name ? this.unexpected() : (e13.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var s = this.labels[n];
    if ((e13.label == null || s.name === e13.label.name) && (s.kind != null && (i || s.kind === "loop") || e13.label && i)) break;
  }
  return n === this.labels.length && this.raise(e13.start, "Unsyntactic " + t), this.finishNode(e13, i ? "BreakStatement" : "ContinueStatement");
};
C.parseDebuggerStatement = function(e13) {
  return this.next(), this.semicolon(), this.finishNode(e13, "DebuggerStatement");
};
C.parseDoStatement = function(e13) {
  return this.next(), this.labels.push(fi), e13.body = this.parseStatement("do"), this.labels.pop(), this.expect(o._while), e13.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(o.semi) : this.semicolon(), this.finishNode(e13, "DoWhileStatement");
};
C.parseForStatement = function(e13) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(fi), this.enterScope(0), this.expect(o.parenL), this.type === o.semi) return t > -1 && this.unexpected(t), this.parseFor(e13, null);
  var i = this.isLet();
  if (this.type === o._var || this.type === o._const || i) {
    var n = this.startNode(), s = i ? "let" : this.value;
    return this.next(), this.parseVar(n, true, s), this.finishNode(n, "VariableDeclaration"), this.parseForAfterInit(e13, n, t);
  }
  var a = this.isContextual("let"), r = false, l = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
  if (l) {
    var u = this.startNode();
    return this.next(), l === "await using" && this.next(), this.parseVar(u, true, l), this.finishNode(u, "VariableDeclaration"), this.parseForAfterInit(e13, u, t);
  }
  var h = this.containsEsc, p = new It(), v = this.start, k = t > -1 ? this.parseExprSubscripts(p, "await") : this.parseExpression(true, p);
  return this.type === o._in || (r = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === o._in && this.unexpected(t), e13.await = true) : r && this.options.ecmaVersion >= 8 && (k.start === v && !h && k.type === "Identifier" && k.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e13.await = false)), a && r && this.raise(k.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(k, false, p), this.checkLValPattern(k), this.parseForIn(e13, k)) : (this.checkExpressionErrors(p, true), t > -1 && this.unexpected(t), this.parseFor(e13, k));
};
C.parseForAfterInit = function(e13, t, i) {
  return (this.type === o._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === o._in ? i > -1 && this.unexpected(i) : e13.await = i > -1), this.parseForIn(e13, t)) : (i > -1 && this.unexpected(i), this.parseFor(e13, t));
};
C.parseFunctionStatement = function(e13, t, i) {
  return this.next(), this.parseFunction(e13, rt | (i ? 0 : ri), false, t);
};
C.parseIfStatement = function(e13) {
  return this.next(), e13.test = this.parseParenExpression(), e13.consequent = this.parseStatement("if"), e13.alternate = this.eat(o._else) ? this.parseStatement("if") : null, this.finishNode(e13, "IfStatement");
};
C.parseReturnStatement = function(e13) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(o.semi) || this.insertSemicolon() ? e13.argument = null : (e13.argument = this.parseExpression(), this.semicolon()), this.finishNode(e13, "ReturnStatement");
};
C.parseSwitchStatement = function(e13) {
  this.next(), e13.discriminant = this.parseParenExpression(), e13.cases = [], this.expect(o.braceL), this.labels.push(us), this.enterScope(0);
  for (var t, i = false; this.type !== o.braceR; ) if (this.type === o._case || this.type === o._default) {
    var n = this.type === o._case;
    t && this.finishNode(t, "SwitchCase"), e13.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = true, t.test = null), this.expect(o.colon);
  } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e13, "SwitchStatement");
};
C.parseThrowStatement = function(e13) {
  return this.next(), te.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e13.argument = this.parseExpression(), this.semicolon(), this.finishNode(e13, "ThrowStatement");
};
var cs = [];
C.parseCatchClauseParam = function() {
  var e13 = this.parseBindingAtom(), t = e13.type === "Identifier";
  return this.enterScope(t ? Gi : 0), this.checkLValPattern(e13, t ? Qi : ye), this.expect(o.parenR), e13;
};
C.parseTryStatement = function(e13) {
  if (this.next(), e13.block = this.parseBlock(), e13.handler = null, this.type === o._catch) {
    var t = this.startNode();
    this.next(), this.eat(o.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(false), this.exitScope(), e13.handler = this.finishNode(t, "CatchClause");
  }
  return e13.finalizer = this.eat(o._finally) ? this.parseBlock() : null, !e13.handler && !e13.finalizer && this.raise(e13.start, "Missing catch or finally clause"), this.finishNode(e13, "TryStatement");
};
C.parseVarStatement = function(e13, t, i) {
  return this.next(), this.parseVar(e13, false, t, i), this.semicolon(), this.finishNode(e13, "VariableDeclaration");
};
C.parseWhileStatement = function(e13) {
  return this.next(), e13.test = this.parseParenExpression(), this.labels.push(fi), e13.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e13, "WhileStatement");
};
C.parseWithStatement = function(e13) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e13.object = this.parseParenExpression(), e13.body = this.parseStatement("with"), this.finishNode(e13, "WithStatement");
};
C.parseEmptyStatement = function(e13) {
  return this.next(), this.finishNode(e13, "EmptyStatement");
};
C.parseLabeledStatement = function(e13, t, i, n) {
  for (var s = 0, a = this.labels; s < a.length; s += 1) {
    var r = a[s];
    r.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var l = this.type.isLoop ? "loop" : this.type === o._switch ? "switch" : null, u = this.labels.length - 1; u >= 0; u--) {
    var h = this.labels[u];
    if (h.statementStart === e13.start) h.statementStart = this.start, h.kind = l;
    else break;
  }
  return this.labels.push({ name: t, kind: l, statementStart: this.start }), e13.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), e13.label = i, this.finishNode(e13, "LabeledStatement");
};
C.parseExpressionStatement = function(e13, t) {
  return e13.expression = t, this.semicolon(), this.finishNode(e13, "ExpressionStatement");
};
C.parseBlock = function(e13, t, i) {
  for (e13 === void 0 && (e13 = true), t === void 0 && (t = this.startNode()), t.body = [], this.expect(o.braceL), e13 && this.enterScope(0); this.type !== o.braceR; ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return i && (this.strict = false), this.next(), e13 && this.exitScope(), this.finishNode(t, "BlockStatement");
};
C.parseFor = function(e13, t) {
  return e13.init = t, this.expect(o.semi), e13.test = this.type === o.semi ? null : this.parseExpression(), this.expect(o.semi), e13.update = this.type === o.parenR ? null : this.parseExpression(), this.expect(o.parenR), e13.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e13, "ForStatement");
};
C.parseForIn = function(e13, t) {
  var i = this.type === o._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e13.left = t, e13.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(o.parenR), e13.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e13, i ? "ForInStatement" : "ForOfStatement");
};
C.parseVar = function(e13, t, i, n) {
  for (e13.declarations = [], e13.kind = i; ; ) {
    var s = this.startNode();
    if (this.parseVarId(s, i), this.eat(o.eq) ? s.init = this.parseMaybeAssign(t) : !n && i === "const" && !(this.type === o._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !n && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== o._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !n && s.id.type !== "Identifier" && !(t && (this.type === o._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : s.init = null, e13.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(o.comma)) break;
  }
  return e13;
};
C.parseVarId = function(e13, t) {
  e13.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e13.id, t === "var" ? pi : ye, false);
};
var rt = 1;
var ri = 2;
var Xi = 4;
C.parseFunction = function(e13, t, i, n, s) {
  this.initFunction(e13), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === o.star && t & ri && this.unexpected(), e13.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (e13.async = !!n), t & rt && (e13.id = t & Xi && this.type !== o.name ? null : this.parseIdent(), e13.id && !(t & ri) && this.checkLValSimple(e13.id, this.strict || e13.generator || e13.async ? this.treatFunctionsAsVar ? pi : ye : Yi));
  var a = this.yieldPos, r = this.awaitPos, l = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(hi(e13.async, e13.generator)), t & rt || (e13.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(e13), this.parseFunctionBody(e13, i, false, s), this.yieldPos = a, this.awaitPos = r, this.awaitIdentPos = l, this.finishNode(e13, t & rt ? "FunctionDeclaration" : "FunctionExpression");
};
C.parseFunctionParams = function(e13) {
  this.expect(o.parenL), e13.params = this.parseBindingList(o.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
C.parseClass = function(e13, t) {
  this.next();
  var i = this.strict;
  this.strict = true, this.parseClassId(e13, t), this.parseClassSuper(e13);
  var n = this.enterClassBody(), s = this.startNode(), a = false;
  for (s.body = [], this.expect(o.braceL); this.type !== o.braceR; ) {
    var r = this.parseClassElement(e13.superClass !== null);
    r && (s.body.push(r), r.type === "MethodDefinition" && r.kind === "constructor" ? (a && this.raiseRecoverable(r.start, "Duplicate constructor in the same class"), a = true) : r.key && r.key.type === "PrivateIdentifier" && hs(n, r) && this.raiseRecoverable(r.key.start, "Identifier '#" + r.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e13.body = this.finishNode(s, "ClassBody"), this.exitClassBody(), this.finishNode(e13, t ? "ClassDeclaration" : "ClassExpression");
};
C.parseClassElement = function(e13) {
  if (this.eat(o.semi)) return null;
  var t = this.options.ecmaVersion, i = this.startNode(), n = "", s = false, a = false, r = "method", l = false;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(o.braceL)) return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === o.star ? l = true : n = "static";
  }
  if (i.static = l, !n && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === o.star) && !this.canInsertSemicolon() ? a = true : n = "async"), !n && (t >= 9 || !a) && this.eat(o.star) && (s = true), !n && !a && !s) {
    var u = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? r = u : n = u);
  }
  if (n ? (i.computed = false, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = n, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === o.parenL || r !== "method" || s || a) {
    var h = !i.static && vt(i, "constructor"), p = h && e13;
    h && r !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = h ? "constructor" : r, this.parseClassMethod(i, s, a, p);
  } else this.parseClassField(i);
  return i;
};
C.isClassElementNameStart = function() {
  return this.type === o.name || this.type === o.privateId || this.type === o.num || this.type === o.string || this.type === o.bracketL || this.type.keyword;
};
C.parseClassElementName = function(e13) {
  this.type === o.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e13.computed = false, e13.key = this.parsePrivateIdent()) : this.parsePropertyName(e13);
};
C.parseClassMethod = function(e13, t, i, n) {
  var s = e13.key;
  e13.kind === "constructor" ? (t && this.raise(s.start, "Constructor can't be a generator"), i && this.raise(s.start, "Constructor can't be an async method")) : e13.static && vt(e13, "prototype") && this.raise(s.start, "Classes may not have a static property named prototype");
  var a = e13.value = this.parseMethod(t, i, n);
  return e13.kind === "get" && a.params.length !== 0 && this.raiseRecoverable(a.start, "getter should have no params"), e13.kind === "set" && a.params.length !== 1 && this.raiseRecoverable(a.start, "setter should have exactly one param"), e13.kind === "set" && a.params[0].type === "RestElement" && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(e13, "MethodDefinition");
};
C.parseClassField = function(e13) {
  return vt(e13, "constructor") ? this.raise(e13.key.start, "Classes can't have a field named 'constructor'") : e13.static && vt(e13, "prototype") && this.raise(e13.key.start, "Classes can't have a static field named 'prototype'"), this.eat(o.eq) ? (this.enterScope(ut | Ct), e13.value = this.parseMaybeAssign(), this.exitScope()) : e13.value = null, this.semicolon(), this.finishNode(e13, "PropertyDefinition");
};
C.parseClassStaticBlock = function(e13) {
  e13.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(Pe | Ct); this.type !== o.braceR; ) {
    var i = this.parseStatement(null);
    e13.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e13, "StaticBlock");
};
C.parseClassId = function(e13, t) {
  this.type === o.name ? (e13.id = this.parseIdent(), t && this.checkLValSimple(e13.id, ye, false)) : (t === true && this.unexpected(), e13.id = null);
};
C.parseClassSuper = function(e13) {
  e13.superClass = this.eat(o._extends) ? this.parseExprSubscripts(null, false) : null;
};
C.enterClassBody = function() {
  var e13 = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e13), e13.declared;
};
C.exitClassBody = function() {
  var e13 = this.privateNameStack.pop(), t = e13.declared, i = e13.used;
  if (this.options.checkPrivateFields) for (var n = this.privateNameStack.length, s = n === 0 ? null : this.privateNameStack[n - 1], a = 0; a < i.length; ++a) {
    var r = i[a];
    je(t, r.name) || (s ? s.used.push(r) : this.raiseRecoverable(r.start, "Private field '#" + r.name + "' must be declared in an enclosing class"));
  }
};
function hs(e13, t) {
  var i = t.key.name, n = e13[i], s = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (s = (t.static ? "s" : "i") + t.kind), n === "iget" && s === "iset" || n === "iset" && s === "iget" || n === "sget" && s === "sset" || n === "sset" && s === "sget" ? (e13[i] = "true", false) : n ? true : (e13[i] = s, false);
}
c(hs, "isPrivateNameConflicted");
function vt(e13, t) {
  var i = e13.computed, n = e13.key;
  return !i && (n.type === "Identifier" && n.name === t || n.type === "Literal" && n.value === t);
}
c(vt, "checkKeyName");
C.parseExportAllDeclaration = function(e13, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e13.exported = this.parseModuleExportName(), this.checkExport(t, e13.exported, this.lastTokStart)) : e13.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), e13.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e13.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e13, "ExportAllDeclaration");
};
C.parseExport = function(e13, t) {
  if (this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(e13, t);
  if (this.eat(o._default)) return this.checkExport(t, "default", this.lastTokStart), e13.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e13, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement()) e13.declaration = this.parseExportDeclaration(e13), e13.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e13.declaration.declarations) : this.checkExport(t, e13.declaration.id, e13.declaration.id.start), e13.specifiers = [], e13.source = null, this.options.ecmaVersion >= 16 && (e13.attributes = []);
  else {
    if (e13.declaration = null, e13.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== o.string && this.unexpected(), e13.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e13.attributes = this.parseWithClause());
    else {
      for (var i = 0, n = e13.specifiers; i < n.length; i += 1) {
        var s = n[i];
        this.checkUnreserved(s.local), this.checkLocalExport(s.local), s.local.type === "Literal" && this.raise(s.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e13.source = null, this.options.ecmaVersion >= 16 && (e13.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e13, "ExportNamedDeclaration");
};
C.parseExportDeclaration = function(e13) {
  return this.parseStatement(null);
};
C.parseExportDefaultDeclaration = function() {
  var e13;
  if (this.type === o._function || (e13 = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e13 && this.next(), this.parseFunction(t, rt | Xi, false, e13);
  } else if (this.type === o._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var n = this.parseMaybeAssign();
    return this.semicolon(), n;
  }
};
C.checkExport = function(e13, t, i) {
  e13 && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), je(e13, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e13[t] = true);
};
C.checkPatternExport = function(e13, t) {
  var i = t.type;
  if (i === "Identifier") this.checkExport(e13, t, t.start);
  else if (i === "ObjectPattern") for (var n = 0, s = t.properties; n < s.length; n += 1) {
    var a = s[n];
    this.checkPatternExport(e13, a);
  }
  else if (i === "ArrayPattern") for (var r = 0, l = t.elements; r < l.length; r += 1) {
    var u = l[r];
    u && this.checkPatternExport(e13, u);
  }
  else i === "Property" ? this.checkPatternExport(e13, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e13, t.left) : i === "RestElement" && this.checkPatternExport(e13, t.argument);
};
C.checkVariableExport = function(e13, t) {
  if (e13) for (var i = 0, n = t; i < n.length; i += 1) {
    var s = n[i];
    this.checkPatternExport(e13, s.id);
  }
};
C.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
C.parseExportSpecifier = function(e13) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e13, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
};
C.parseExportSpecifiers = function(e13) {
  var t = [], i = true;
  for (this.expect(o.braceL); !this.eat(o.braceR); ) {
    if (i) i = false;
    else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
    t.push(this.parseExportSpecifier(e13));
  }
  return t;
};
C.parseImport = function(e13) {
  return this.next(), this.type === o.string ? (e13.specifiers = cs, e13.source = this.parseExprAtom()) : (e13.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e13.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e13.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e13, "ImportDeclaration");
};
C.parseImportSpecifier = function() {
  var e13 = this.startNode();
  return e13.imported = this.parseModuleExportName(), this.eatContextual("as") ? e13.local = this.parseIdent() : (this.checkUnreserved(e13.imported), e13.local = e13.imported), this.checkLValSimple(e13.local, ye), this.finishNode(e13, "ImportSpecifier");
};
C.parseImportDefaultSpecifier = function() {
  var e13 = this.startNode();
  return e13.local = this.parseIdent(), this.checkLValSimple(e13.local, ye), this.finishNode(e13, "ImportDefaultSpecifier");
};
C.parseImportNamespaceSpecifier = function() {
  var e13 = this.startNode();
  return this.next(), this.expectContextual("as"), e13.local = this.parseIdent(), this.checkLValSimple(e13.local, ye), this.finishNode(e13, "ImportNamespaceSpecifier");
};
C.parseImportSpecifiers = function() {
  var e13 = [], t = true;
  if (this.type === o.name && (e13.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return e13;
  if (this.type === o.star) return e13.push(this.parseImportNamespaceSpecifier()), e13;
  for (this.expect(o.braceL); !this.eat(o.braceR); ) {
    if (t) t = false;
    else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
    e13.push(this.parseImportSpecifier());
  }
  return e13;
};
C.parseWithClause = function() {
  var e13 = [];
  if (!this.eat(o._with)) return e13;
  this.expect(o.braceL);
  for (var t = {}, i = true; !this.eat(o.braceR); ) {
    if (i) i = false;
    else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
    var n = this.parseImportAttribute(), s = n.key.type === "Identifier" ? n.key.name : n.key.value;
    je(t, s) && this.raiseRecoverable(n.key.start, "Duplicate attribute key '" + s + "'"), t[s] = true, e13.push(n);
  }
  return e13;
};
C.parseImportAttribute = function() {
  var e13 = this.startNode();
  return e13.key = this.type === o.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(o.colon), this.type !== o.string && this.unexpected(), e13.value = this.parseExprAtom(), this.finishNode(e13, "ImportAttribute");
};
C.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === o.string) {
    var e13 = this.parseLiteral(this.value);
    return as.test(e13.value) && this.raise(e13.start, "An export name cannot include a lone surrogate."), e13;
  }
  return this.parseIdent(true);
};
C.adaptDirectivePrologue = function(e13) {
  for (var t = 0; t < e13.length && this.isDirectiveCandidate(e13[t]); ++t) e13[t].directive = e13[t].expression.raw.slice(1, -1);
};
C.isDirectiveCandidate = function(e13) {
  return this.options.ecmaVersion >= 5 && e13.type === "ExpressionStatement" && e13.expression.type === "Literal" && typeof e13.expression.value == "string" && (this.input[e13.start] === '"' || this.input[e13.start] === "'");
};
var re = z.prototype;
re.toAssignable = function(e13, t, i) {
  if (this.options.ecmaVersion >= 6 && e13) switch (e13.type) {
    case "Identifier":
      this.inAsync && e13.name === "await" && this.raise(e13.start, "Cannot use 'await' as identifier inside an async function");
      break;
    case "ObjectPattern":
    case "ArrayPattern":
    case "AssignmentPattern":
    case "RestElement":
      break;
    case "ObjectExpression":
      e13.type = "ObjectPattern", i && this.checkPatternErrors(i, true);
      for (var n = 0, s = e13.properties; n < s.length; n += 1) {
        var a = s[n];
        this.toAssignable(a, t), a.type === "RestElement" && (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") && this.raise(a.argument.start, "Unexpected token");
      }
      break;
    case "Property":
      e13.kind !== "init" && this.raise(e13.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e13.value, t);
      break;
    case "ArrayExpression":
      e13.type = "ArrayPattern", i && this.checkPatternErrors(i, true), this.toAssignableList(e13.elements, t);
      break;
    case "SpreadElement":
      e13.type = "RestElement", this.toAssignable(e13.argument, t), e13.argument.type === "AssignmentPattern" && this.raise(e13.argument.start, "Rest elements cannot have a default value");
      break;
    case "AssignmentExpression":
      e13.operator !== "=" && this.raise(e13.left.end, "Only '=' operator can be used for specifying default value."), e13.type = "AssignmentPattern", delete e13.operator, this.toAssignable(e13.left, t);
      break;
    case "ParenthesizedExpression":
      this.toAssignable(e13.expression, t, i);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e13.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (!t) break;
    default:
      this.raise(e13.start, "Assigning to rvalue");
  }
  else i && this.checkPatternErrors(i, true);
  return e13;
};
re.toAssignableList = function(e13, t) {
  for (var i = e13.length, n = 0; n < i; n++) {
    var s = e13[n];
    s && this.toAssignable(s, t);
  }
  if (i) {
    var a = e13[i - 1];
    this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
  }
  return e13;
};
re.parseSpread = function(e13) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(false, e13), this.finishNode(t, "SpreadElement");
};
re.parseRestBinding = function() {
  var e13 = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== o.name && this.unexpected(), e13.argument = this.parseBindingAtom(), this.finishNode(e13, "RestElement");
};
re.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) switch (this.type) {
    case o.bracketL:
      var e13 = this.startNode();
      return this.next(), e13.elements = this.parseBindingList(o.bracketR, true, true), this.finishNode(e13, "ArrayPattern");
    case o.braceL:
      return this.parseObj(true);
  }
  return this.parseIdent();
};
re.parseBindingList = function(e13, t, i, n) {
  for (var s = [], a = true; !this.eat(e13); ) if (a ? a = false : this.expect(o.comma), t && this.type === o.comma) s.push(null);
  else {
    if (i && this.afterTrailingComma(e13)) break;
    if (this.type === o.ellipsis) {
      var r = this.parseRestBinding();
      this.parseBindingListItem(r), s.push(r), this.type === o.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e13);
      break;
    } else s.push(this.parseAssignableListItem(n));
  }
  return s;
};
re.parseAssignableListItem = function(e13) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
re.parseBindingListItem = function(e13) {
  return e13;
};
re.parseMaybeDefault = function(e13, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(o.eq)) return i;
  var n = this.startNodeAt(e13, t);
  return n.left = i, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
re.checkLValSimple = function(e13, t, i) {
  t === void 0 && (t = bt);
  var n = t !== bt;
  switch (e13.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e13.name) && this.raiseRecoverable(e13.start, (n ? "Binding " : "Assigning to ") + e13.name + " in strict mode"), n && (t === ye && e13.name === "let" && this.raiseRecoverable(e13.start, "let is disallowed as a lexically bound name"), i && (je(i, e13.name) && this.raiseRecoverable(e13.start, "Argument name clash"), i[e13.name] = true), t !== Ji && this.declareName(e13.name, t, e13.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e13.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      n && this.raiseRecoverable(e13.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return n && this.raiseRecoverable(e13.start, "Binding parenthesized expression"), this.checkLValSimple(e13.expression, t, i);
    default:
      this.raise(e13.start, (n ? "Binding" : "Assigning to") + " rvalue");
  }
};
re.checkLValPattern = function(e13, t, i) {
  switch (t === void 0 && (t = bt), e13.type) {
    case "ObjectPattern":
      for (var n = 0, s = e13.properties; n < s.length; n += 1) {
        var a = s[n];
        this.checkLValInnerPattern(a, t, i);
      }
      break;
    case "ArrayPattern":
      for (var r = 0, l = e13.elements; r < l.length; r += 1) {
        var u = l[r];
        u && this.checkLValInnerPattern(u, t, i);
      }
      break;
    default:
      this.checkLValSimple(e13, t, i);
  }
};
re.checkLValInnerPattern = function(e13, t, i) {
  switch (t === void 0 && (t = bt), e13.type) {
    case "Property":
      this.checkLValInnerPattern(e13.value, t, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e13.left, t, i);
      break;
    case "RestElement":
      this.checkLValPattern(e13.argument, t, i);
      break;
    default:
      this.checkLValPattern(e13, t, i);
  }
};
var le = c(function(t, i, n, s, a) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!n, this.override = s, this.generator = !!a;
}, "TokContext");
var W = { b_stat: new le("{", false), b_expr: new le("{", true), b_tmpl: new le("${", false), p_stat: new le("(", false), p_expr: new le("(", true), q_tmpl: new le("`", true, true, function(e13) {
  return e13.tryReadTemplateToken();
}), f_stat: new le("function", false), f_expr: new le("function", true), f_expr_gen: new le("function", true, false, null, true), f_gen: new le("function", false, false, null, true) };
var qe = z.prototype;
qe.initialContext = function() {
  return [W.b_stat];
};
qe.curContext = function() {
  return this.context[this.context.length - 1];
};
qe.braceIsBlock = function(e13) {
  var t = this.curContext();
  return t === W.f_expr || t === W.f_stat ? true : e13 === o.colon && (t === W.b_stat || t === W.b_expr) ? !t.isExpr : e13 === o._return || e13 === o.name && this.exprAllowed ? te.test(this.input.slice(this.lastTokEnd, this.start)) : e13 === o._else || e13 === o.semi || e13 === o.eof || e13 === o.parenR || e13 === o.arrow ? true : e13 === o.braceL ? t === W.b_stat : e13 === o._var || e13 === o._const || e13 === o.name ? false : !this.exprAllowed;
};
qe.inGeneratorContext = function() {
  for (var e13 = this.context.length - 1; e13 >= 1; e13--) {
    var t = this.context[e13];
    if (t.token === "function") return t.generator;
  }
  return false;
};
qe.updateContext = function(e13) {
  var t, i = this.type;
  i.keyword && e13 === o.dot ? this.exprAllowed = false : (t = i.updateContext) ? t.call(this, e13) : this.exprAllowed = i.beforeExpr;
};
qe.overrideContext = function(e13) {
  this.curContext() !== e13 && (this.context[this.context.length - 1] = e13);
};
o.parenR.updateContext = o.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var e13 = this.context.pop();
  e13 === W.b_stat && this.curContext().token === "function" && (e13 = this.context.pop()), this.exprAllowed = !e13.isExpr;
};
o.braceL.updateContext = function(e13) {
  this.context.push(this.braceIsBlock(e13) ? W.b_stat : W.b_expr), this.exprAllowed = true;
};
o.dollarBraceL.updateContext = function() {
  this.context.push(W.b_tmpl), this.exprAllowed = true;
};
o.parenL.updateContext = function(e13) {
  var t = e13 === o._if || e13 === o._for || e13 === o._with || e13 === o._while;
  this.context.push(t ? W.p_stat : W.p_expr), this.exprAllowed = true;
};
o.incDec.updateContext = function() {
};
o._function.updateContext = o._class.updateContext = function(e13) {
  e13.beforeExpr && e13 !== o._else && !(e13 === o.semi && this.curContext() !== W.p_stat) && !(e13 === o._return && te.test(this.input.slice(this.lastTokEnd, this.start))) && !((e13 === o.colon || e13 === o.braceL) && this.curContext() === W.b_stat) ? this.context.push(W.f_expr) : this.context.push(W.f_stat), this.exprAllowed = false;
};
o.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = true;
};
o.backQuote.updateContext = function() {
  this.curContext() === W.q_tmpl ? this.context.pop() : this.context.push(W.q_tmpl), this.exprAllowed = false;
};
o.star.updateContext = function(e13) {
  if (e13 === o._function) {
    var t = this.context.length - 1;
    this.context[t] === W.f_expr ? this.context[t] = W.f_expr_gen : this.context[t] = W.f_gen;
  }
  this.exprAllowed = true;
};
o.name.updateContext = function(e13) {
  var t = false;
  this.options.ecmaVersion >= 6 && e13 !== o.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = true), this.exprAllowed = t;
};
var P = z.prototype;
P.checkPropClash = function(e13, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e13.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e13.computed || e13.method || e13.shorthand))) {
    var n = e13.key, s;
    switch (n.type) {
      case "Identifier":
        s = n.name;
        break;
      case "Literal":
        s = String(n.value);
        break;
      default:
        return;
    }
    var a = e13.kind;
    if (this.options.ecmaVersion >= 6) {
      s === "__proto__" && a === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = true);
      return;
    }
    s = "$" + s;
    var r = t[s];
    if (r) {
      var l;
      a === "init" ? l = this.strict && r.init || r.get || r.set : l = r.init || r[a], l && this.raiseRecoverable(n.start, "Redefinition of property");
    } else r = t[s] = { init: false, get: false, set: false };
    r[a] = true;
  }
};
P.parseExpression = function(e13, t) {
  var i = this.start, n = this.startLoc, s = this.parseMaybeAssign(e13, t);
  if (this.type === o.comma) {
    var a = this.startNodeAt(i, n);
    for (a.expressions = [s]; this.eat(o.comma); ) a.expressions.push(this.parseMaybeAssign(e13, t));
    return this.finishNode(a, "SequenceExpression");
  }
  return s;
};
P.parseMaybeAssign = function(e13, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e13);
    this.exprAllowed = false;
  }
  var n = false, s = -1, a = -1, r = -1;
  t ? (s = t.parenthesizedAssign, a = t.trailingComma, r = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new It(), n = true);
  var l = this.start, u = this.startLoc;
  (this.type === o.parenL || this.type === o.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e13 === "await");
  var h = this.parseMaybeConditional(e13, t);
  if (i && (h = i.call(this, h, l, u)), this.type.isAssign) {
    var p = this.startNodeAt(l, u);
    return p.operator = this.value, this.type === o.eq && (h = this.toAssignable(h, false, t)), n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= h.start && (t.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), p.left = h, this.next(), p.right = this.parseMaybeAssign(e13), r > -1 && (t.doubleProto = r), this.finishNode(p, "AssignmentExpression");
  } else n && this.checkExpressionErrors(t, true);
  return s > -1 && (t.parenthesizedAssign = s), a > -1 && (t.trailingComma = a), h;
};
P.parseMaybeConditional = function(e13, t) {
  var i = this.start, n = this.startLoc, s = this.parseExprOps(e13, t);
  if (this.checkExpressionErrors(t)) return s;
  if (this.eat(o.question)) {
    var a = this.startNodeAt(i, n);
    return a.test = s, a.consequent = this.parseMaybeAssign(), this.expect(o.colon), a.alternate = this.parseMaybeAssign(e13), this.finishNode(a, "ConditionalExpression");
  }
  return s;
};
P.parseExprOps = function(e13, t) {
  var i = this.start, n = this.startLoc, s = this.parseMaybeUnary(t, false, false, e13);
  return this.checkExpressionErrors(t) || s.start === i && s.type === "ArrowFunctionExpression" ? s : this.parseExprOp(s, i, n, -1, e13);
};
P.parseExprOp = function(e13, t, i, n, s) {
  var a = this.type.binop;
  if (a != null && (!s || this.type !== o._in) && a > n) {
    var r = this.type === o.logicalOR || this.type === o.logicalAND, l = this.type === o.coalesce;
    l && (a = o.logicalAND.binop);
    var u = this.value;
    this.next();
    var h = this.start, p = this.startLoc, v = this.parseExprOp(this.parseMaybeUnary(null, false, false, s), h, p, a, s), k = this.buildBinary(t, i, e13, v, u, r || l);
    return (r && this.type === o.coalesce || l && (this.type === o.logicalOR || this.type === o.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(k, t, i, n, s);
  }
  return e13;
};
P.buildBinary = function(e13, t, i, n, s, a) {
  n.type === "PrivateIdentifier" && this.raise(n.start, "Private identifier can only be left side of binary expression");
  var r = this.startNodeAt(e13, t);
  return r.left = i, r.operator = s, r.right = n, this.finishNode(r, a ? "LogicalExpression" : "BinaryExpression");
};
P.parseMaybeUnary = function(e13, t, i, n) {
  var s = this.start, a = this.startLoc, r;
  if (this.isContextual("await") && this.canAwait) r = this.parseAwait(n), t = true;
  else if (this.type.prefix) {
    var l = this.startNode(), u = this.type === o.incDec;
    l.operator = this.value, l.prefix = true, this.next(), l.argument = this.parseMaybeUnary(null, true, u, n), this.checkExpressionErrors(e13, true), u ? this.checkLValSimple(l.argument) : this.strict && l.operator === "delete" && Zi(l.argument) ? this.raiseRecoverable(l.start, "Deleting local variable in strict mode") : l.operator === "delete" && oi(l.argument) ? this.raiseRecoverable(l.start, "Private fields can not be deleted") : t = true, r = this.finishNode(l, u ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === o.privateId) (n || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), r = this.parsePrivateIdent(), this.type !== o._in && this.unexpected();
  else {
    if (r = this.parseExprSubscripts(e13, n), this.checkExpressionErrors(e13)) return r;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var h = this.startNodeAt(s, a);
      h.operator = this.value, h.prefix = false, h.argument = r, this.checkLValSimple(r), this.next(), r = this.finishNode(h, "UpdateExpression");
    }
  }
  if (!i && this.eat(o.starstar)) if (t) this.unexpected(this.lastTokStart);
  else return this.buildBinary(s, a, r, this.parseMaybeUnary(null, false, false, n), "**", false);
  else return r;
};
function Zi(e13) {
  return e13.type === "Identifier" || e13.type === "ParenthesizedExpression" && Zi(e13.expression);
}
c(Zi, "isLocalVariableAccess");
function oi(e13) {
  return e13.type === "MemberExpression" && e13.property.type === "PrivateIdentifier" || e13.type === "ChainExpression" && oi(e13.expression) || e13.type === "ParenthesizedExpression" && oi(e13.expression);
}
c(oi, "isPrivateFieldAccess");
P.parseExprSubscripts = function(e13, t) {
  var i = this.start, n = this.startLoc, s = this.parseExprAtom(e13, t);
  if (s.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return s;
  var a = this.parseSubscripts(s, i, n, false, t);
  return e13 && a.type === "MemberExpression" && (e13.parenthesizedAssign >= a.start && (e13.parenthesizedAssign = -1), e13.parenthesizedBind >= a.start && (e13.parenthesizedBind = -1), e13.trailingComma >= a.start && (e13.trailingComma = -1)), a;
};
P.parseSubscripts = function(e13, t, i, n, s) {
  for (var a = this.options.ecmaVersion >= 8 && e13.type === "Identifier" && e13.name === "async" && this.lastTokEnd === e13.end && !this.canInsertSemicolon() && e13.end - e13.start === 5 && this.potentialArrowAt === e13.start, r = false; ; ) {
    var l = this.parseSubscript(e13, t, i, n, a, r, s);
    if (l.optional && (r = true), l === e13 || l.type === "ArrowFunctionExpression") {
      if (r) {
        var u = this.startNodeAt(t, i);
        u.expression = l, l = this.finishNode(u, "ChainExpression");
      }
      return l;
    }
    e13 = l;
  }
};
P.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(o.arrow);
};
P.parseSubscriptAsyncArrow = function(e13, t, i, n) {
  return this.parseArrowExpression(this.startNodeAt(e13, t), i, true, n);
};
P.parseSubscript = function(e13, t, i, n, s, a, r) {
  var l = this.options.ecmaVersion >= 11, u = l && this.eat(o.questionDot);
  n && u && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var h = this.eat(o.bracketL);
  if (h || u && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
    var p = this.startNodeAt(t, i);
    p.object = e13, h ? (p.property = this.parseExpression(), this.expect(o.bracketR)) : this.type === o.privateId && e13.type !== "Super" ? p.property = this.parsePrivateIdent() : p.property = this.parseIdent(this.options.allowReserved !== "never"), p.computed = !!h, l && (p.optional = u), e13 = this.finishNode(p, "MemberExpression");
  } else if (!n && this.eat(o.parenL)) {
    var v = new It(), k = this.yieldPos, E = this.awaitPos, f = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var d = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, false, v);
    if (s && !u && this.shouldParseAsyncArrow()) return this.checkPatternErrors(v, false), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = k, this.awaitPos = E, this.awaitIdentPos = f, this.parseSubscriptAsyncArrow(t, i, d, r);
    this.checkExpressionErrors(v, true), this.yieldPos = k || this.yieldPos, this.awaitPos = E || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
    var A = this.startNodeAt(t, i);
    A.callee = e13, A.arguments = d, l && (A.optional = u), e13 = this.finishNode(A, "CallExpression");
  } else if (this.type === o.backQuote) {
    (u || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var x = this.startNodeAt(t, i);
    x.tag = e13, x.quasi = this.parseTemplate({ isTagged: true }), e13 = this.finishNode(x, "TaggedTemplateExpression");
  }
  return e13;
};
P.parseExprAtom = function(e13, t, i) {
  this.type === o.slash && this.readRegexp();
  var n, s = this.potentialArrowAt === this.start;
  switch (this.type) {
    case o._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), n = this.startNode(), this.next(), this.type === o.parenL && !this.allowDirectSuper && this.raise(n.start, "super() call outside constructor of a subclass"), this.type !== o.dot && this.type !== o.bracketL && this.type !== o.parenL && this.unexpected(), this.finishNode(n, "Super");
    case o._this:
      return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
    case o.name:
      var a = this.start, r = this.startLoc, l = this.containsEsc, u = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !l && u.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(W.f_expr), this.parseFunction(this.startNodeAt(a, r), 0, false, true, t);
      if (s && !this.canInsertSemicolon()) {
        if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(a, r), [u], false, t);
        if (this.options.ecmaVersion >= 8 && u.name === "async" && this.type === o.name && !l && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return u = this.parseIdent(false), (this.canInsertSemicolon() || !this.eat(o.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, r), [u], true, t);
      }
      return u;
    case o.regexp:
      var h = this.value;
      return n = this.parseLiteral(h.value), n.regex = { pattern: h.pattern, flags: h.flags }, n;
    case o.num:
    case o.string:
      return this.parseLiteral(this.value);
    case o._null:
    case o._true:
    case o._false:
      return n = this.startNode(), n.value = this.type === o._null ? null : this.type === o._true, n.raw = this.type.keyword, this.next(), this.finishNode(n, "Literal");
    case o.parenL:
      var p = this.start, v = this.parseParenAndDistinguishExpression(s, t);
      return e13 && (e13.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(v) && (e13.parenthesizedAssign = p), e13.parenthesizedBind < 0 && (e13.parenthesizedBind = p)), v;
    case o.bracketL:
      return n = this.startNode(), this.next(), n.elements = this.parseExprList(o.bracketR, true, true, e13), this.finishNode(n, "ArrayExpression");
    case o.braceL:
      return this.overrideContext(W.b_expr), this.parseObj(false, e13);
    case o._function:
      return n = this.startNode(), this.next(), this.parseFunction(n, 0);
    case o._class:
      return this.parseClass(this.startNode(), false);
    case o._new:
      return this.parseNew();
    case o.backQuote:
      return this.parseTemplate();
    case o._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
P.parseExprAtomDefault = function() {
  this.unexpected();
};
P.parseExprImport = function(e13) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === o.parenL && !e13) return this.parseDynamicImport(t);
  if (this.type === o.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else this.unexpected();
};
P.parseDynamicImport = function(e13) {
  if (this.next(), e13.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(o.parenR) ? e13.options = null : (this.expect(o.comma), this.afterTrailingComma(o.parenR) ? e13.options = null : (e13.options = this.parseMaybeAssign(), this.eat(o.parenR) || (this.expect(o.comma), this.afterTrailingComma(o.parenR) || this.unexpected())));
  else if (!this.eat(o.parenR)) {
    var t = this.start;
    this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e13, "ImportExpression");
};
P.parseImportMeta = function(e13) {
  this.next();
  var t = this.containsEsc;
  return e13.property = this.parseIdent(true), e13.property.name !== "meta" && this.raiseRecoverable(e13.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e13.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e13.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e13, "MetaProperty");
};
P.parseLiteral = function(e13) {
  var t = this.startNode();
  return t.value = e13, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
P.parseParenExpression = function() {
  this.expect(o.parenL);
  var e13 = this.parseExpression();
  return this.expect(o.parenR), e13;
};
P.shouldParseArrow = function(e13) {
  return !this.canInsertSemicolon();
};
P.parseParenAndDistinguishExpression = function(e13, t) {
  var i = this.start, n = this.startLoc, s, a = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var r = this.start, l = this.startLoc, u = [], h = true, p = false, v = new It(), k = this.yieldPos, E = this.awaitPos, f;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) if (h ? h = false : this.expect(o.comma), a && this.afterTrailingComma(o.parenR, true)) {
      p = true;
      break;
    } else if (this.type === o.ellipsis) {
      f = this.start, u.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      break;
    } else u.push(this.parseMaybeAssign(false, v, this.parseParenItem));
    var d = this.lastTokEnd, A = this.lastTokEndLoc;
    if (this.expect(o.parenR), e13 && this.shouldParseArrow(u) && this.eat(o.arrow)) return this.checkPatternErrors(v, false), this.checkYieldAwaitInDefaultParams(), this.yieldPos = k, this.awaitPos = E, this.parseParenArrowList(i, n, u, t);
    (!u.length || p) && this.unexpected(this.lastTokStart), f && this.unexpected(f), this.checkExpressionErrors(v, true), this.yieldPos = k || this.yieldPos, this.awaitPos = E || this.awaitPos, u.length > 1 ? (s = this.startNodeAt(r, l), s.expressions = u, this.finishNodeAt(s, "SequenceExpression", d, A)) : s = u[0];
  } else s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var x = this.startNodeAt(i, n);
    return x.expression = s, this.finishNode(x, "ParenthesizedExpression");
  } else return s;
};
P.parseParenItem = function(e13) {
  return e13;
};
P.parseParenArrowList = function(e13, t, i, n) {
  return this.parseArrowExpression(this.startNodeAt(e13, t), i, false, n);
};
var ps = [];
P.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e13 = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === o.dot) {
    var t = this.startNodeAt(e13.start, e13.loc && e13.loc.start);
    t.name = "new", e13.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e13.property = this.parseIdent(true), e13.property.name !== "target" && this.raiseRecoverable(e13.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e13.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e13.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e13, "MetaProperty");
  }
  var n = this.start, s = this.startLoc;
  return e13.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), n, s, true, false), this.eat(o.parenL) ? e13.arguments = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, false) : e13.arguments = ps, this.finishNode(e13, "NewExpression");
};
P.parseTemplateElement = function(e13) {
  var t = e13.isTagged, i = this.startNode();
  return this.type === o.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value.replace(/\r\n?/g, `
`), cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`), cooked: this.value }, this.next(), i.tail = this.type === o.backQuote, this.finishNode(i, "TemplateElement");
};
P.parseTemplate = function(e13) {
  e13 === void 0 && (e13 = {});
  var t = e13.isTagged;
  t === void 0 && (t = false);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var n = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [n]; !n.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(o.braceR), i.quasis.push(n = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
P.isAsyncProp = function(e13) {
  return !e13.computed && e13.key.type === "Identifier" && e13.key.name === "async" && (this.type === o.name || this.type === o.num || this.type === o.string || this.type === o.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === o.star) && !te.test(this.input.slice(this.lastTokEnd, this.start));
};
P.parseObj = function(e13, t) {
  var i = this.startNode(), n = true, s = {};
  for (i.properties = [], this.next(); !this.eat(o.braceR); ) {
    if (n) n = false;
    else if (this.expect(o.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(o.braceR)) break;
    var a = this.parseProperty(e13, t);
    e13 || this.checkPropClash(a, s, t), i.properties.push(a);
  }
  return this.finishNode(i, e13 ? "ObjectPattern" : "ObjectExpression");
};
P.parseProperty = function(e13, t) {
  var i = this.startNode(), n, s, a, r;
  if (this.options.ecmaVersion >= 9 && this.eat(o.ellipsis)) return e13 ? (i.argument = this.parseIdent(false), this.type === o.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(false, t), this.type === o.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = false, i.shorthand = false, (e13 || t) && (a = this.start, r = this.startLoc), e13 || (n = this.eat(o.star)));
  var l = this.containsEsc;
  return this.parsePropertyName(i), !e13 && !l && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(i) ? (s = true, n = this.options.ecmaVersion >= 9 && this.eat(o.star), this.parsePropertyName(i)) : s = false, this.parsePropertyValue(i, e13, n, s, a, r, t, l), this.finishNode(i, "Property");
};
P.parseGetterSetter = function(e13) {
  var t = e13.key.name;
  this.parsePropertyName(e13), e13.value = this.parseMethod(false), e13.kind = t;
  var i = e13.kind === "get" ? 0 : 1;
  if (e13.value.params.length !== i) {
    var n = e13.value.start;
    e13.kind === "get" ? this.raiseRecoverable(n, "getter should have no params") : this.raiseRecoverable(n, "setter should have exactly one param");
  } else e13.kind === "set" && e13.value.params[0].type === "RestElement" && this.raiseRecoverable(e13.value.params[0].start, "Setter cannot use rest params");
};
P.parsePropertyValue = function(e13, t, i, n, s, a, r, l) {
  (i || n) && this.type === o.colon && this.unexpected(), this.eat(o.colon) ? (e13.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, r), e13.kind = "init") : this.options.ecmaVersion >= 6 && this.type === o.parenL ? (t && this.unexpected(), e13.method = true, e13.value = this.parseMethod(i, n), e13.kind = "init") : !t && !l && this.options.ecmaVersion >= 5 && !e13.computed && e13.key.type === "Identifier" && (e13.key.name === "get" || e13.key.name === "set") && this.type !== o.comma && this.type !== o.braceR && this.type !== o.eq ? ((i || n) && this.unexpected(), this.parseGetterSetter(e13)) : this.options.ecmaVersion >= 6 && !e13.computed && e13.key.type === "Identifier" ? ((i || n) && this.unexpected(), this.checkUnreserved(e13.key), e13.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s), t ? e13.value = this.parseMaybeDefault(s, a, this.copyNode(e13.key)) : this.type === o.eq && r ? (r.shorthandAssign < 0 && (r.shorthandAssign = this.start), e13.value = this.parseMaybeDefault(s, a, this.copyNode(e13.key))) : e13.value = this.copyNode(e13.key), e13.kind = "init", e13.shorthand = true) : this.unexpected();
};
P.parsePropertyName = function(e13) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(o.bracketL)) return e13.computed = true, e13.key = this.parseMaybeAssign(), this.expect(o.bracketR), e13.key;
    e13.computed = false;
  }
  return e13.key = this.type === o.num || this.type === o.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
P.initFunction = function(e13) {
  e13.id = null, this.options.ecmaVersion >= 6 && (e13.generator = e13.expression = false), this.options.ecmaVersion >= 8 && (e13.async = false);
};
P.parseMethod = function(e13, t, i) {
  var n = this.startNode(), s = this.yieldPos, a = this.awaitPos, r = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e13), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(hi(t, n.generator) | Ct | (i ? Ki : 0)), this.expect(o.parenL), n.params = this.parseBindingList(o.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, false, true, false), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = r, this.finishNode(n, "FunctionExpression");
};
P.parseArrowExpression = function(e13, t, i, n) {
  var s = this.yieldPos, a = this.awaitPos, r = this.awaitIdentPos;
  return this.enterScope(hi(i, false) | ci), this.initFunction(e13), this.options.ecmaVersion >= 8 && (e13.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e13.params = this.toAssignableList(t, true), this.parseFunctionBody(e13, true, false, n), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = r, this.finishNode(e13, "ArrowFunctionExpression");
};
P.parseFunctionBody = function(e13, t, i, n) {
  var s = t && this.type !== o.braceL, a = this.strict, r = false;
  if (s) e13.body = this.parseMaybeAssign(n), e13.expression = true, this.checkParams(e13, false);
  else {
    var l = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e13.params);
    (!a || l) && (r = this.strictDirective(this.end), r && l && this.raiseRecoverable(e13.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var u = this.labels;
    this.labels = [], r && (this.strict = true), this.checkParams(e13, !a && !r && !t && !i && this.isSimpleParamList(e13.params)), this.strict && e13.id && this.checkLValSimple(e13.id, Ji), e13.body = this.parseBlock(false, void 0, r && !a), e13.expression = false, this.adaptDirectivePrologue(e13.body.body), this.labels = u;
  }
  this.exitScope();
};
P.isSimpleParamList = function(e13) {
  for (var t = 0, i = e13; t < i.length; t += 1) {
    var n = i[t];
    if (n.type !== "Identifier") return false;
  }
  return true;
};
P.checkParams = function(e13, t) {
  for (var i = /* @__PURE__ */ Object.create(null), n = 0, s = e13.params; n < s.length; n += 1) {
    var a = s[n];
    this.checkLValInnerPattern(a, pi, t ? null : i);
  }
};
P.parseExprList = function(e13, t, i, n) {
  for (var s = [], a = true; !this.eat(e13); ) {
    if (a) a = false;
    else if (this.expect(o.comma), t && this.afterTrailingComma(e13)) break;
    var r = void 0;
    i && this.type === o.comma ? r = null : this.type === o.ellipsis ? (r = this.parseSpread(n), n && this.type === o.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : r = this.parseMaybeAssign(false, n), s.push(r);
  }
  return s;
};
P.checkUnreserved = function(e13) {
  var t = e13.start, i = e13.end, n = e13.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Et) && n === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (n === "arguments" || n === "await") && this.raise(t, "Cannot use " + n + " in class static initialization block"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
P.parseIdent = function(e13) {
  var t = this.parseIdentNode();
  return this.next(!!e13), this.finishNode(t, "Identifier"), e13 || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
P.parseIdentNode = function() {
  var e13 = this.startNode();
  return this.type === o.name ? e13.name = this.value : this.type.keyword ? (e13.name = this.type.keyword, (e13.name === "class" || e13.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = o.name) : this.unexpected(), e13;
};
P.parsePrivateIdent = function() {
  var e13 = this.startNode();
  return this.type === o.privateId ? e13.name = this.value : this.unexpected(), this.next(), this.finishNode(e13, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e13.start, "Private field '#" + e13.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e13)), e13;
};
P.parseYield = function(e13) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === o.semi || this.canInsertSemicolon() || this.type !== o.star && !this.type.startsExpr ? (t.delegate = false, t.argument = null) : (t.delegate = this.eat(o.star), t.argument = this.parseMaybeAssign(e13)), this.finishNode(t, "YieldExpression");
};
P.parseAwait = function(e13) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, true, false, e13), this.finishNode(t, "AwaitExpression");
};
var St = z.prototype;
St.raise = function(e13, t) {
  var i = qi(this.input, e13);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var n = new SyntaxError(t);
  throw n.pos = e13, n.loc = i, n.raisedAt = this.pos, n;
};
St.raiseRecoverable = St.raise;
St.curPosition = function() {
  if (this.options.locations) return new ot(this.curLine, this.pos - this.lineStart);
};
var ke = z.prototype;
var fs = c(function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
}, "Scope");
ke.enterScope = function(e13) {
  this.scopeStack.push(new fs(e13));
};
ke.exitScope = function() {
  this.scopeStack.pop();
};
ke.treatFunctionsAsVarInScope = function(e13) {
  return e13.flags & ze || !this.inModule && e13.flags & lt;
};
ke.declareName = function(e13, t, i) {
  var n = false;
  if (t === ye) {
    var s = this.currentScope();
    n = s.lexical.indexOf(e13) > -1 || s.functions.indexOf(e13) > -1 || s.var.indexOf(e13) > -1, s.lexical.push(e13), this.inModule && s.flags & lt && delete this.undefinedExports[e13];
  } else if (t === Qi) {
    var a = this.currentScope();
    a.lexical.push(e13);
  } else if (t === Yi) {
    var r = this.currentScope();
    this.treatFunctionsAsVar ? n = r.lexical.indexOf(e13) > -1 : n = r.lexical.indexOf(e13) > -1 || r.var.indexOf(e13) > -1, r.functions.push(e13);
  } else for (var l = this.scopeStack.length - 1; l >= 0; --l) {
    var u = this.scopeStack[l];
    if (u.lexical.indexOf(e13) > -1 && !(u.flags & Gi && u.lexical[0] === e13) || !this.treatFunctionsAsVarInScope(u) && u.functions.indexOf(e13) > -1) {
      n = true;
      break;
    }
    if (u.var.push(e13), this.inModule && u.flags & lt && delete this.undefinedExports[e13], u.flags & Et) break;
  }
  n && this.raiseRecoverable(i, "Identifier '" + e13 + "' has already been declared");
};
ke.checkLocalExport = function(e13) {
  this.scopeStack[0].lexical.indexOf(e13.name) === -1 && this.scopeStack[0].var.indexOf(e13.name) === -1 && (this.undefinedExports[e13.name] = e13);
};
ke.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
ke.currentVarScope = function() {
  for (var e13 = this.scopeStack.length - 1; ; e13--) {
    var t = this.scopeStack[e13];
    if (t.flags & (Et | ut | Pe)) return t;
  }
};
ke.currentThisScope = function() {
  for (var e13 = this.scopeStack.length - 1; ; e13--) {
    var t = this.scopeStack[e13];
    if (t.flags & (Et | ut | Pe) && !(t.flags & ci)) return t;
  }
};
var _t = c(function(t, i, n) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new kt(t, n)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, "Node");
var ct = z.prototype;
ct.startNode = function() {
  return new _t(this, this.start, this.startLoc);
};
ct.startNodeAt = function(e13, t) {
  return new _t(this, e13, t);
};
function en(e13, t, i, n) {
  return e13.type = t, e13.end = i, this.options.locations && (e13.loc.end = n), this.options.ranges && (e13.range[1] = i), e13;
}
c(en, "finishNodeAt");
ct.finishNode = function(e13, t) {
  return en.call(this, e13, t, this.lastTokEnd, this.lastTokEndLoc);
};
ct.finishNodeAt = function(e13, t, i, n) {
  return en.call(this, e13, t, i, n);
};
ct.copyNode = function(e13) {
  var t = new _t(this, e13.start, this.startLoc);
  for (var i in e13) t[i] = e13[i];
  return t;
};
var ds = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz";
var tn = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var nn = tn + " Extended_Pictographic";
var sn = nn;
var an = sn + " EBase EComp EMod EPres ExtPict";
var rn = an;
var ms = rn;
var gs = { 9: tn, 10: nn, 11: sn, 12: an, 13: rn, 14: ms };
var ys = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
var xs = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: ys };
var Oi = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var on = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ln = on + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var un = ln + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var cn = un + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var hn = cn + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var bs = hn + " " + ds;
var vs = { 9: on, 10: ln, 11: un, 12: cn, 13: hn, 14: bs };
var pn = {};
function Ss(e13) {
  var t = pn[e13] = { binary: Se(gs[e13] + " " + Oi), binaryOfStrings: Se(xs[e13]), nonBinary: { General_Category: Se(Oi), Script: Se(vs[e13]) } };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
c(Ss, "buildUnicodeData");
for (xt = 0, ni = [9, 10, 11, 12, 13, 14]; xt < ni.length; xt += 1) Fi = ni[xt], Ss(Fi);
var Fi;
var xt;
var ni;
var w = z.prototype;
var wt = c(function(t, i) {
  this.parent = t, this.base = i || this;
}, "BranchID");
wt.prototype.separatedFrom = c(function(t) {
  for (var i = this; i; i = i.parent) for (var n = t; n; n = n.parent) if (i.base === n.base && i !== n) return true;
  return false;
}, "separatedFrom");
wt.prototype.sibling = c(function() {
  return new wt(this.parent, this.base);
}, "sibling");
var he = c(function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = pn[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = false, this.switchV = false, this.switchN = false, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = false, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
}, "RegExpValidationState");
he.prototype.reset = c(function(t, i, n) {
  var s = n.indexOf("v") !== -1, a = n.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = n, s && this.parser.options.ecmaVersion >= 15 ? (this.switchU = true, this.switchV = true, this.switchN = true) : (this.switchU = a && this.parser.options.ecmaVersion >= 6, this.switchV = false, this.switchN = a && this.parser.options.ecmaVersion >= 9);
}, "reset");
he.prototype.raise = c(function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
}, "raise");
he.prototype.at = c(function(t, i) {
  i === void 0 && (i = false);
  var n = this.source, s = n.length;
  if (t >= s) return -1;
  var a = n.charCodeAt(t);
  if (!(i || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s) return a;
  var r = n.charCodeAt(t + 1);
  return r >= 56320 && r <= 57343 ? (a << 10) + r - 56613888 : a;
}, "at");
he.prototype.nextIndex = c(function(t, i) {
  i === void 0 && (i = false);
  var n = this.source, s = n.length;
  if (t >= s) return s;
  var a = n.charCodeAt(t), r;
  return !(i || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (r = n.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2;
}, "nextIndex");
he.prototype.current = c(function(t) {
  return t === void 0 && (t = false), this.at(this.pos, t);
}, "current");
he.prototype.lookahead = c(function(t) {
  return t === void 0 && (t = false), this.at(this.nextIndex(this.pos, t), t);
}, "lookahead");
he.prototype.advance = c(function(t) {
  t === void 0 && (t = false), this.pos = this.nextIndex(this.pos, t);
}, "advance");
he.prototype.eat = c(function(t, i) {
  return i === void 0 && (i = false), this.current(i) === t ? (this.advance(i), true) : false;
}, "eat");
he.prototype.eatChars = c(function(t, i) {
  i === void 0 && (i = false);
  for (var n = this.pos, s = 0, a = t; s < a.length; s += 1) {
    var r = a[s], l = this.at(n, i);
    if (l === -1 || l !== r) return false;
    n = this.nextIndex(n, i);
  }
  return this.pos = n, true;
}, "eatChars");
w.validateRegExpFlags = function(e13) {
  for (var t = e13.validFlags, i = e13.flags, n = false, s = false, a = 0; a < i.length; a++) {
    var r = i.charAt(a);
    t.indexOf(r) === -1 && this.raise(e13.start, "Invalid regular expression flag"), i.indexOf(r, a + 1) > -1 && this.raise(e13.start, "Duplicate regular expression flag"), r === "u" && (n = true), r === "v" && (s = true);
  }
  this.options.ecmaVersion >= 15 && n && s && this.raise(e13.start, "Invalid regular expression flag");
};
function ws(e13) {
  for (var t in e13) return true;
  return false;
}
c(ws, "hasProp");
w.validateRegExpPattern = function(e13) {
  this.regexp_pattern(e13), !e13.switchN && this.options.ecmaVersion >= 9 && ws(e13.groupNames) && (e13.switchN = true, this.regexp_pattern(e13));
};
w.regexp_pattern = function(e13) {
  e13.pos = 0, e13.lastIntValue = 0, e13.lastStringValue = "", e13.lastAssertionIsQuantifiable = false, e13.numCapturingParens = 0, e13.maxBackReference = 0, e13.groupNames = /* @__PURE__ */ Object.create(null), e13.backReferenceNames.length = 0, e13.branchID = null, this.regexp_disjunction(e13), e13.pos !== e13.source.length && (e13.eat(41) && e13.raise("Unmatched ')'"), (e13.eat(93) || e13.eat(125)) && e13.raise("Lone quantifier brackets")), e13.maxBackReference > e13.numCapturingParens && e13.raise("Invalid escape");
  for (var t = 0, i = e13.backReferenceNames; t < i.length; t += 1) {
    var n = i[t];
    e13.groupNames[n] || e13.raise("Invalid named capture referenced");
  }
};
w.regexp_disjunction = function(e13) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e13.branchID = new wt(e13.branchID, null)), this.regexp_alternative(e13); e13.eat(124); ) t && (e13.branchID = e13.branchID.sibling()), this.regexp_alternative(e13);
  t && (e13.branchID = e13.branchID.parent), this.regexp_eatQuantifier(e13, true) && e13.raise("Nothing to repeat"), e13.eat(123) && e13.raise("Lone quantifier brackets");
};
w.regexp_alternative = function(e13) {
  for (; e13.pos < e13.source.length && this.regexp_eatTerm(e13); ) ;
};
w.regexp_eatTerm = function(e13) {
  return this.regexp_eatAssertion(e13) ? (e13.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e13) && e13.switchU && e13.raise("Invalid quantifier"), true) : (e13.switchU ? this.regexp_eatAtom(e13) : this.regexp_eatExtendedAtom(e13)) ? (this.regexp_eatQuantifier(e13), true) : false;
};
w.regexp_eatAssertion = function(e13) {
  var t = e13.pos;
  if (e13.lastAssertionIsQuantifiable = false, e13.eat(94) || e13.eat(36)) return true;
  if (e13.eat(92)) {
    if (e13.eat(66) || e13.eat(98)) return true;
    e13.pos = t;
  }
  if (e13.eat(40) && e13.eat(63)) {
    var i = false;
    if (this.options.ecmaVersion >= 9 && (i = e13.eat(60)), e13.eat(61) || e13.eat(33)) return this.regexp_disjunction(e13), e13.eat(41) || e13.raise("Unterminated group"), e13.lastAssertionIsQuantifiable = !i, true;
  }
  return e13.pos = t, false;
};
w.regexp_eatQuantifier = function(e13, t) {
  return t === void 0 && (t = false), this.regexp_eatQuantifierPrefix(e13, t) ? (e13.eat(63), true) : false;
};
w.regexp_eatQuantifierPrefix = function(e13, t) {
  return e13.eat(42) || e13.eat(43) || e13.eat(63) || this.regexp_eatBracedQuantifier(e13, t);
};
w.regexp_eatBracedQuantifier = function(e13, t) {
  var i = e13.pos;
  if (e13.eat(123)) {
    var n = 0, s = -1;
    if (this.regexp_eatDecimalDigits(e13) && (n = e13.lastIntValue, e13.eat(44) && this.regexp_eatDecimalDigits(e13) && (s = e13.lastIntValue), e13.eat(125))) return s !== -1 && s < n && !t && e13.raise("numbers out of order in {} quantifier"), true;
    e13.switchU && !t && e13.raise("Incomplete quantifier"), e13.pos = i;
  }
  return false;
};
w.regexp_eatAtom = function(e13) {
  return this.regexp_eatPatternCharacters(e13) || e13.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e13) || this.regexp_eatCharacterClass(e13) || this.regexp_eatUncapturingGroup(e13) || this.regexp_eatCapturingGroup(e13);
};
w.regexp_eatReverseSolidusAtomEscape = function(e13) {
  var t = e13.pos;
  if (e13.eat(92)) {
    if (this.regexp_eatAtomEscape(e13)) return true;
    e13.pos = t;
  }
  return false;
};
w.regexp_eatUncapturingGroup = function(e13) {
  var t = e13.pos;
  if (e13.eat(40)) {
    if (e13.eat(63)) {
      if (this.options.ecmaVersion >= 16) {
        var i = this.regexp_eatModifiers(e13), n = e13.eat(45);
        if (i || n) {
          for (var s = 0; s < i.length; s++) {
            var a = i.charAt(s);
            i.indexOf(a, s + 1) > -1 && e13.raise("Duplicate regular expression modifiers");
          }
          if (n) {
            var r = this.regexp_eatModifiers(e13);
            !i && !r && e13.current() === 58 && e13.raise("Invalid regular expression modifiers");
            for (var l = 0; l < r.length; l++) {
              var u = r.charAt(l);
              (r.indexOf(u, l + 1) > -1 || i.indexOf(u) > -1) && e13.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e13.eat(58)) {
        if (this.regexp_disjunction(e13), e13.eat(41)) return true;
        e13.raise("Unterminated group");
      }
    }
    e13.pos = t;
  }
  return false;
};
w.regexp_eatCapturingGroup = function(e13) {
  if (e13.eat(40)) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e13) : e13.current() === 63 && e13.raise("Invalid group"), this.regexp_disjunction(e13), e13.eat(41)) return e13.numCapturingParens += 1, true;
    e13.raise("Unterminated group");
  }
  return false;
};
w.regexp_eatModifiers = function(e13) {
  for (var t = "", i = 0; (i = e13.current()) !== -1 && ks(i); ) t += me(i), e13.advance();
  return t;
};
function ks(e13) {
  return e13 === 105 || e13 === 109 || e13 === 115;
}
c(ks, "isRegularExpressionModifier");
w.regexp_eatExtendedAtom = function(e13) {
  return e13.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e13) || this.regexp_eatCharacterClass(e13) || this.regexp_eatUncapturingGroup(e13) || this.regexp_eatCapturingGroup(e13) || this.regexp_eatInvalidBracedQuantifier(e13) || this.regexp_eatExtendedPatternCharacter(e13);
};
w.regexp_eatInvalidBracedQuantifier = function(e13) {
  return this.regexp_eatBracedQuantifier(e13, true) && e13.raise("Nothing to repeat"), false;
};
w.regexp_eatSyntaxCharacter = function(e13) {
  var t = e13.current();
  return fn(t) ? (e13.lastIntValue = t, e13.advance(), true) : false;
};
function fn(e13) {
  return e13 === 36 || e13 >= 40 && e13 <= 43 || e13 === 46 || e13 === 63 || e13 >= 91 && e13 <= 94 || e13 >= 123 && e13 <= 125;
}
c(fn, "isSyntaxCharacter");
w.regexp_eatPatternCharacters = function(e13) {
  for (var t = e13.pos, i = 0; (i = e13.current()) !== -1 && !fn(i); ) e13.advance();
  return e13.pos !== t;
};
w.regexp_eatExtendedPatternCharacter = function(e13) {
  var t = e13.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e13.advance(), true) : false;
};
w.regexp_groupSpecifier = function(e13) {
  if (e13.eat(63)) {
    this.regexp_eatGroupName(e13) || e13.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e13.groupNames[e13.lastStringValue];
    if (i) if (t) for (var n = 0, s = i; n < s.length; n += 1) {
      var a = s[n];
      a.separatedFrom(e13.branchID) || e13.raise("Duplicate capture group name");
    }
    else e13.raise("Duplicate capture group name");
    t ? (i || (e13.groupNames[e13.lastStringValue] = [])).push(e13.branchID) : e13.groupNames[e13.lastStringValue] = true;
  }
};
w.regexp_eatGroupName = function(e13) {
  if (e13.lastStringValue = "", e13.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e13) && e13.eat(62)) return true;
    e13.raise("Invalid capture group name");
  }
  return false;
};
w.regexp_eatRegExpIdentifierName = function(e13) {
  if (e13.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e13)) {
    for (e13.lastStringValue += me(e13.lastIntValue); this.regexp_eatRegExpIdentifierPart(e13); ) e13.lastStringValue += me(e13.lastIntValue);
    return true;
  }
  return false;
};
w.regexp_eatRegExpIdentifierStart = function(e13) {
  var t = e13.pos, i = this.options.ecmaVersion >= 11, n = e13.current(i);
  return e13.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e13, i) && (n = e13.lastIntValue), Cs(n) ? (e13.lastIntValue = n, true) : (e13.pos = t, false);
};
function Cs(e13) {
  return ue(e13, true) || e13 === 36 || e13 === 95;
}
c(Cs, "isRegExpIdentifierStart");
w.regexp_eatRegExpIdentifierPart = function(e13) {
  var t = e13.pos, i = this.options.ecmaVersion >= 11, n = e13.current(i);
  return e13.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e13, i) && (n = e13.lastIntValue), Es(n) ? (e13.lastIntValue = n, true) : (e13.pos = t, false);
};
function Es(e13) {
  return we(e13, true) || e13 === 36 || e13 === 95 || e13 === 8204 || e13 === 8205;
}
c(Es, "isRegExpIdentifierPart");
w.regexp_eatAtomEscape = function(e13) {
  return this.regexp_eatBackReference(e13) || this.regexp_eatCharacterClassEscape(e13) || this.regexp_eatCharacterEscape(e13) || e13.switchN && this.regexp_eatKGroupName(e13) ? true : (e13.switchU && (e13.current() === 99 && e13.raise("Invalid unicode escape"), e13.raise("Invalid escape")), false);
};
w.regexp_eatBackReference = function(e13) {
  var t = e13.pos;
  if (this.regexp_eatDecimalEscape(e13)) {
    var i = e13.lastIntValue;
    if (e13.switchU) return i > e13.maxBackReference && (e13.maxBackReference = i), true;
    if (i <= e13.numCapturingParens) return true;
    e13.pos = t;
  }
  return false;
};
w.regexp_eatKGroupName = function(e13) {
  if (e13.eat(107)) {
    if (this.regexp_eatGroupName(e13)) return e13.backReferenceNames.push(e13.lastStringValue), true;
    e13.raise("Invalid named reference");
  }
  return false;
};
w.regexp_eatCharacterEscape = function(e13) {
  return this.regexp_eatControlEscape(e13) || this.regexp_eatCControlLetter(e13) || this.regexp_eatZero(e13) || this.regexp_eatHexEscapeSequence(e13) || this.regexp_eatRegExpUnicodeEscapeSequence(e13, false) || !e13.switchU && this.regexp_eatLegacyOctalEscapeSequence(e13) || this.regexp_eatIdentityEscape(e13);
};
w.regexp_eatCControlLetter = function(e13) {
  var t = e13.pos;
  if (e13.eat(99)) {
    if (this.regexp_eatControlLetter(e13)) return true;
    e13.pos = t;
  }
  return false;
};
w.regexp_eatZero = function(e13) {
  return e13.current() === 48 && !Pt(e13.lookahead()) ? (e13.lastIntValue = 0, e13.advance(), true) : false;
};
w.regexp_eatControlEscape = function(e13) {
  var t = e13.current();
  return t === 116 ? (e13.lastIntValue = 9, e13.advance(), true) : t === 110 ? (e13.lastIntValue = 10, e13.advance(), true) : t === 118 ? (e13.lastIntValue = 11, e13.advance(), true) : t === 102 ? (e13.lastIntValue = 12, e13.advance(), true) : t === 114 ? (e13.lastIntValue = 13, e13.advance(), true) : false;
};
w.regexp_eatControlLetter = function(e13) {
  var t = e13.current();
  return dn(t) ? (e13.lastIntValue = t % 32, e13.advance(), true) : false;
};
function dn(e13) {
  return e13 >= 65 && e13 <= 90 || e13 >= 97 && e13 <= 122;
}
c(dn, "isControlLetter");
w.regexp_eatRegExpUnicodeEscapeSequence = function(e13, t) {
  t === void 0 && (t = false);
  var i = e13.pos, n = t || e13.switchU;
  if (e13.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e13, 4)) {
      var s = e13.lastIntValue;
      if (n && s >= 55296 && s <= 56319) {
        var a = e13.pos;
        if (e13.eat(92) && e13.eat(117) && this.regexp_eatFixedHexDigits(e13, 4)) {
          var r = e13.lastIntValue;
          if (r >= 56320 && r <= 57343) return e13.lastIntValue = (s - 55296) * 1024 + (r - 56320) + 65536, true;
        }
        e13.pos = a, e13.lastIntValue = s;
      }
      return true;
    }
    if (n && e13.eat(123) && this.regexp_eatHexDigits(e13) && e13.eat(125) && Is(e13.lastIntValue)) return true;
    n && e13.raise("Invalid unicode escape"), e13.pos = i;
  }
  return false;
};
function Is(e13) {
  return e13 >= 0 && e13 <= 1114111;
}
c(Is, "isValidUnicode");
w.regexp_eatIdentityEscape = function(e13) {
  if (e13.switchU) return this.regexp_eatSyntaxCharacter(e13) ? true : e13.eat(47) ? (e13.lastIntValue = 47, true) : false;
  var t = e13.current();
  return t !== 99 && (!e13.switchN || t !== 107) ? (e13.lastIntValue = t, e13.advance(), true) : false;
};
w.regexp_eatDecimalEscape = function(e13) {
  e13.lastIntValue = 0;
  var t = e13.current();
  if (t >= 49 && t <= 57) {
    do
      e13.lastIntValue = 10 * e13.lastIntValue + (t - 48), e13.advance();
    while ((t = e13.current()) >= 48 && t <= 57);
    return true;
  }
  return false;
};
var mn = 0;
var ge = 1;
var ae = 2;
w.regexp_eatCharacterClassEscape = function(e13) {
  var t = e13.current();
  if (_s(t)) return e13.lastIntValue = -1, e13.advance(), ge;
  var i = false;
  if (e13.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e13.lastIntValue = -1, e13.advance();
    var n;
    if (e13.eat(123) && (n = this.regexp_eatUnicodePropertyValueExpression(e13)) && e13.eat(125)) return i && n === ae && e13.raise("Invalid property name"), n;
    e13.raise("Invalid property name");
  }
  return mn;
};
function _s(e13) {
  return e13 === 100 || e13 === 68 || e13 === 115 || e13 === 83 || e13 === 119 || e13 === 87;
}
c(_s, "isCharacterClassEscape");
w.regexp_eatUnicodePropertyValueExpression = function(e13) {
  var t = e13.pos;
  if (this.regexp_eatUnicodePropertyName(e13) && e13.eat(61)) {
    var i = e13.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e13)) {
      var n = e13.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e13, i, n), ge;
    }
  }
  if (e13.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e13)) {
    var s = e13.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e13, s);
  }
  return mn;
};
w.regexp_validateUnicodePropertyNameAndValue = function(e13, t, i) {
  je(e13.unicodeProperties.nonBinary, t) || e13.raise("Invalid property name"), e13.unicodeProperties.nonBinary[t].test(i) || e13.raise("Invalid property value");
};
w.regexp_validateUnicodePropertyNameOrValue = function(e13, t) {
  if (e13.unicodeProperties.binary.test(t)) return ge;
  if (e13.switchV && e13.unicodeProperties.binaryOfStrings.test(t)) return ae;
  e13.raise("Invalid property name");
};
w.regexp_eatUnicodePropertyName = function(e13) {
  var t = 0;
  for (e13.lastStringValue = ""; gn(t = e13.current()); ) e13.lastStringValue += me(t), e13.advance();
  return e13.lastStringValue !== "";
};
function gn(e13) {
  return dn(e13) || e13 === 95;
}
c(gn, "isUnicodePropertyNameCharacter");
w.regexp_eatUnicodePropertyValue = function(e13) {
  var t = 0;
  for (e13.lastStringValue = ""; Ps(t = e13.current()); ) e13.lastStringValue += me(t), e13.advance();
  return e13.lastStringValue !== "";
};
function Ps(e13) {
  return gn(e13) || Pt(e13);
}
c(Ps, "isUnicodePropertyValueCharacter");
w.regexp_eatLoneUnicodePropertyNameOrValue = function(e13) {
  return this.regexp_eatUnicodePropertyValue(e13);
};
w.regexp_eatCharacterClass = function(e13) {
  if (e13.eat(91)) {
    var t = e13.eat(94), i = this.regexp_classContents(e13);
    return e13.eat(93) || e13.raise("Unterminated character class"), t && i === ae && e13.raise("Negated character class may contain strings"), true;
  }
  return false;
};
w.regexp_classContents = function(e13) {
  return e13.current() === 93 ? ge : e13.switchV ? this.regexp_classSetExpression(e13) : (this.regexp_nonEmptyClassRanges(e13), ge);
};
w.regexp_nonEmptyClassRanges = function(e13) {
  for (; this.regexp_eatClassAtom(e13); ) {
    var t = e13.lastIntValue;
    if (e13.eat(45) && this.regexp_eatClassAtom(e13)) {
      var i = e13.lastIntValue;
      e13.switchU && (t === -1 || i === -1) && e13.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e13.raise("Range out of order in character class");
    }
  }
};
w.regexp_eatClassAtom = function(e13) {
  var t = e13.pos;
  if (e13.eat(92)) {
    if (this.regexp_eatClassEscape(e13)) return true;
    if (e13.switchU) {
      var i = e13.current();
      (i === 99 || bn(i)) && e13.raise("Invalid class escape"), e13.raise("Invalid escape");
    }
    e13.pos = t;
  }
  var n = e13.current();
  return n !== 93 ? (e13.lastIntValue = n, e13.advance(), true) : false;
};
w.regexp_eatClassEscape = function(e13) {
  var t = e13.pos;
  if (e13.eat(98)) return e13.lastIntValue = 8, true;
  if (e13.switchU && e13.eat(45)) return e13.lastIntValue = 45, true;
  if (!e13.switchU && e13.eat(99)) {
    if (this.regexp_eatClassControlLetter(e13)) return true;
    e13.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e13) || this.regexp_eatCharacterEscape(e13);
};
w.regexp_classSetExpression = function(e13) {
  var t = ge, i;
  if (!this.regexp_eatClassSetRange(e13)) if (i = this.regexp_eatClassSetOperand(e13)) {
    i === ae && (t = ae);
    for (var n = e13.pos; e13.eatChars([38, 38]); ) {
      if (e13.current() !== 38 && (i = this.regexp_eatClassSetOperand(e13))) {
        i !== ae && (t = ge);
        continue;
      }
      e13.raise("Invalid character in character class");
    }
    if (n !== e13.pos) return t;
    for (; e13.eatChars([45, 45]); ) this.regexp_eatClassSetOperand(e13) || e13.raise("Invalid character in character class");
    if (n !== e13.pos) return t;
  } else e13.raise("Invalid character in character class");
  for (; ; ) if (!this.regexp_eatClassSetRange(e13)) {
    if (i = this.regexp_eatClassSetOperand(e13), !i) return t;
    i === ae && (t = ae);
  }
};
w.regexp_eatClassSetRange = function(e13) {
  var t = e13.pos;
  if (this.regexp_eatClassSetCharacter(e13)) {
    var i = e13.lastIntValue;
    if (e13.eat(45) && this.regexp_eatClassSetCharacter(e13)) {
      var n = e13.lastIntValue;
      return i !== -1 && n !== -1 && i > n && e13.raise("Range out of order in character class"), true;
    }
    e13.pos = t;
  }
  return false;
};
w.regexp_eatClassSetOperand = function(e13) {
  return this.regexp_eatClassSetCharacter(e13) ? ge : this.regexp_eatClassStringDisjunction(e13) || this.regexp_eatNestedClass(e13);
};
w.regexp_eatNestedClass = function(e13) {
  var t = e13.pos;
  if (e13.eat(91)) {
    var i = e13.eat(94), n = this.regexp_classContents(e13);
    if (e13.eat(93)) return i && n === ae && e13.raise("Negated character class may contain strings"), n;
    e13.pos = t;
  }
  if (e13.eat(92)) {
    var s = this.regexp_eatCharacterClassEscape(e13);
    if (s) return s;
    e13.pos = t;
  }
  return null;
};
w.regexp_eatClassStringDisjunction = function(e13) {
  var t = e13.pos;
  if (e13.eatChars([92, 113])) {
    if (e13.eat(123)) {
      var i = this.regexp_classStringDisjunctionContents(e13);
      if (e13.eat(125)) return i;
    } else e13.raise("Invalid escape");
    e13.pos = t;
  }
  return null;
};
w.regexp_classStringDisjunctionContents = function(e13) {
  for (var t = this.regexp_classString(e13); e13.eat(124); ) this.regexp_classString(e13) === ae && (t = ae);
  return t;
};
w.regexp_classString = function(e13) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e13); ) t++;
  return t === 1 ? ge : ae;
};
w.regexp_eatClassSetCharacter = function(e13) {
  var t = e13.pos;
  if (e13.eat(92)) return this.regexp_eatCharacterEscape(e13) || this.regexp_eatClassSetReservedPunctuator(e13) ? true : e13.eat(98) ? (e13.lastIntValue = 8, true) : (e13.pos = t, false);
  var i = e13.current();
  return i < 0 || i === e13.lookahead() && As(i) || Ms(i) ? false : (e13.advance(), e13.lastIntValue = i, true);
};
function As(e13) {
  return e13 === 33 || e13 >= 35 && e13 <= 38 || e13 >= 42 && e13 <= 44 || e13 === 46 || e13 >= 58 && e13 <= 64 || e13 === 94 || e13 === 96 || e13 === 126;
}
c(As, "isClassSetReservedDoublePunctuatorCharacter");
function Ms(e13) {
  return e13 === 40 || e13 === 41 || e13 === 45 || e13 === 47 || e13 >= 91 && e13 <= 93 || e13 >= 123 && e13 <= 125;
}
c(Ms, "isClassSetSyntaxCharacter");
w.regexp_eatClassSetReservedPunctuator = function(e13) {
  var t = e13.current();
  return Ls(t) ? (e13.lastIntValue = t, e13.advance(), true) : false;
};
function Ls(e13) {
  return e13 === 33 || e13 === 35 || e13 === 37 || e13 === 38 || e13 === 44 || e13 === 45 || e13 >= 58 && e13 <= 62 || e13 === 64 || e13 === 96 || e13 === 126;
}
c(Ls, "isClassSetReservedPunctuator");
w.regexp_eatClassControlLetter = function(e13) {
  var t = e13.current();
  return Pt(t) || t === 95 ? (e13.lastIntValue = t % 32, e13.advance(), true) : false;
};
w.regexp_eatHexEscapeSequence = function(e13) {
  var t = e13.pos;
  if (e13.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e13, 2)) return true;
    e13.switchU && e13.raise("Invalid escape"), e13.pos = t;
  }
  return false;
};
w.regexp_eatDecimalDigits = function(e13) {
  var t = e13.pos, i = 0;
  for (e13.lastIntValue = 0; Pt(i = e13.current()); ) e13.lastIntValue = 10 * e13.lastIntValue + (i - 48), e13.advance();
  return e13.pos !== t;
};
function Pt(e13) {
  return e13 >= 48 && e13 <= 57;
}
c(Pt, "isDecimalDigit");
w.regexp_eatHexDigits = function(e13) {
  var t = e13.pos, i = 0;
  for (e13.lastIntValue = 0; yn(i = e13.current()); ) e13.lastIntValue = 16 * e13.lastIntValue + xn(i), e13.advance();
  return e13.pos !== t;
};
function yn(e13) {
  return e13 >= 48 && e13 <= 57 || e13 >= 65 && e13 <= 70 || e13 >= 97 && e13 <= 102;
}
c(yn, "isHexDigit");
function xn(e13) {
  return e13 >= 65 && e13 <= 70 ? 10 + (e13 - 65) : e13 >= 97 && e13 <= 102 ? 10 + (e13 - 97) : e13 - 48;
}
c(xn, "hexToInt");
w.regexp_eatLegacyOctalEscapeSequence = function(e13) {
  if (this.regexp_eatOctalDigit(e13)) {
    var t = e13.lastIntValue;
    if (this.regexp_eatOctalDigit(e13)) {
      var i = e13.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e13) ? e13.lastIntValue = t * 64 + i * 8 + e13.lastIntValue : e13.lastIntValue = t * 8 + i;
    } else e13.lastIntValue = t;
    return true;
  }
  return false;
};
w.regexp_eatOctalDigit = function(e13) {
  var t = e13.current();
  return bn(t) ? (e13.lastIntValue = t - 48, e13.advance(), true) : (e13.lastIntValue = 0, false);
};
function bn(e13) {
  return e13 >= 48 && e13 <= 55;
}
c(bn, "isOctalDigit");
w.regexp_eatFixedHexDigits = function(e13, t) {
  var i = e13.pos;
  e13.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var s = e13.current();
    if (!yn(s)) return e13.pos = i, false;
    e13.lastIntValue = 16 * e13.lastIntValue + xn(s), e13.advance();
  }
  return true;
};
var di = c(function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new kt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, "Token");
var N = z.prototype;
N.next = function(e13) {
  !e13 && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new di(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
N.getToken = function() {
  return this.next(), new di(this);
};
typeof Symbol < "u" && (N[Symbol.iterator] = function() {
  var e13 = this;
  return { next: c(function() {
    var t = e13.getToken();
    return { done: t.type === o.eof, value: t };
  }, "next") };
});
N.nextToken = function() {
  var e13 = this.curContext();
  if ((!e13 || !e13.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(o.eof);
  if (e13.override) return e13.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
N.readToken = function(e13) {
  return ue(e13, this.options.ecmaVersion >= 6) || e13 === 92 ? this.readWord() : this.getTokenFromCode(e13);
};
N.fullCharCodeAtPos = function() {
  var e13 = this.input.charCodeAt(this.pos);
  if (e13 <= 55295 || e13 >= 56320) return e13;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e13 : (e13 << 10) + t - 56613888;
};
N.skipBlockComment = function() {
  var e13 = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations) for (var n = void 0, s = t; (n = Ui(this.input, s, this.pos)) > -1; ) ++this.curLine, s = this.lineStart = n;
  this.options.onComment && this.options.onComment(true, this.input.slice(t + 2, i), t, this.pos, e13, this.curPosition());
};
N.skipLineComment = function(e13) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e13); this.pos < this.input.length && !Ue(n); ) n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(false, this.input.slice(t + e13, this.pos), t, this.pos, i, this.curPosition());
};
N.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e13 = this.input.charCodeAt(this.pos);
    switch (e13) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (e13 > 8 && e13 < 14 || e13 >= 5760 && ji.test(String.fromCharCode(e13))) ++this.pos;
        else break e;
    }
  }
};
N.finishToken = function(e13, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e13, this.value = t, this.updateContext(i);
};
N.readToken_dot = function() {
  var e13 = this.input.charCodeAt(this.pos + 1);
  if (e13 >= 48 && e13 <= 57) return this.readNumber(true);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e13 === 46 && t === 46 ? (this.pos += 3, this.finishToken(o.ellipsis)) : (++this.pos, this.finishToken(o.dot));
};
N.readToken_slash = function() {
  var e13 = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e13 === 61 ? this.finishOp(o.assign, 2) : this.finishOp(o.slash, 1);
};
N.readToken_mult_modulo_exp = function(e13) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, n = e13 === 42 ? o.star : o.modulo;
  return this.options.ecmaVersion >= 7 && e13 === 42 && t === 42 && (++i, n = o.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(o.assign, i + 1) : this.finishOp(n, i);
};
N.readToken_pipe_amp = function(e13) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e13) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61) return this.finishOp(o.assign, 3);
    }
    return this.finishOp(e13 === 124 ? o.logicalOR : o.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(o.assign, 2) : this.finishOp(e13 === 124 ? o.bitwiseOR : o.bitwiseAND, 1);
};
N.readToken_caret = function() {
  var e13 = this.input.charCodeAt(this.pos + 1);
  return e13 === 61 ? this.finishOp(o.assign, 2) : this.finishOp(o.bitwiseXOR, 1);
};
N.readToken_plus_min = function(e13) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e13 ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || te.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(o.incDec, 2) : t === 61 ? this.finishOp(o.assign, 2) : this.finishOp(o.plusMin, 1);
};
N.readToken_lt_gt = function(e13) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e13 ? (i = e13 === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(o.assign, i + 1) : this.finishOp(o.bitShift, i)) : t === 33 && e13 === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(o.relational, i));
};
N.readToken_eq_excl = function(e13) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(o.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e13 === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(o.arrow)) : this.finishOp(e13 === 61 ? o.eq : o.prefix, 1);
};
N.readToken_question = function() {
  var e13 = this.options.ecmaVersion;
  if (e13 >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57) return this.finishOp(o.questionDot, 2);
    }
    if (t === 63) {
      if (e13 >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61) return this.finishOp(o.assign, 3);
      }
      return this.finishOp(o.coalesce, 2);
    }
  }
  return this.finishOp(o.question, 1);
};
N.readToken_numberSign = function() {
  var e13 = this.options.ecmaVersion, t = 35;
  if (e13 >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), ue(t, true) || t === 92)) return this.finishToken(o.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + me(t) + "'");
};
N.getTokenFromCode = function(e13) {
  switch (e13) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(o.parenL);
    case 41:
      return ++this.pos, this.finishToken(o.parenR);
    case 59:
      return ++this.pos, this.finishToken(o.semi);
    case 44:
      return ++this.pos, this.finishToken(o.comma);
    case 91:
      return ++this.pos, this.finishToken(o.bracketL);
    case 93:
      return ++this.pos, this.finishToken(o.bracketR);
    case 123:
      return ++this.pos, this.finishToken(o.braceL);
    case 125:
      return ++this.pos, this.finishToken(o.braceR);
    case 58:
      return ++this.pos, this.finishToken(o.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(o.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(e13);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e13);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e13);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e13);
    case 60:
    case 62:
      return this.readToken_lt_gt(e13);
    case 61:
    case 33:
      return this.readToken_eq_excl(e13);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(o.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + me(e13) + "'");
};
N.finishOp = function(e13, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e13, i);
};
N.readRegexp = function() {
  for (var e13, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (te.test(n) && this.raise(i, "Unterminated regular expression"), e13) e13 = false;
    else {
      if (n === "[") t = true;
      else if (n === "]" && t) t = false;
      else if (n === "/" && !t) break;
      e13 = n === "\\";
    }
    ++this.pos;
  }
  var s = this.input.slice(i, this.pos);
  ++this.pos;
  var a = this.pos, r = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var l = this.regexpState || (this.regexpState = new he(this));
  l.reset(i, s, r), this.validateRegExpFlags(l), this.validateRegExpPattern(l);
  var u = null;
  try {
    u = new RegExp(s, r);
  } catch {
  }
  return this.finishToken(o.regexp, { pattern: s, flags: r, value: u });
};
N.readInt = function(e13, t, i) {
  for (var n = this.options.ecmaVersion >= 12 && t === void 0, s = i && this.input.charCodeAt(this.pos) === 48, a = this.pos, r = 0, l = 0, u = 0, h = t ?? 1 / 0; u < h; ++u, ++this.pos) {
    var p = this.input.charCodeAt(this.pos), v = void 0;
    if (n && p === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), l === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), u === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), l = p;
      continue;
    }
    if (p >= 97 ? v = p - 97 + 10 : p >= 65 ? v = p - 65 + 10 : p >= 48 && p <= 57 ? v = p - 48 : v = 1 / 0, v >= e13) break;
    l = p, r = r * e13 + v;
  }
  return n && l === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || t != null && this.pos - a !== t ? null : r;
};
function Ns(e13, t) {
  return t ? parseInt(e13, 8) : parseFloat(e13.replace(/_/g, ""));
}
c(Ns, "stringToNumber");
function vn(e13) {
  return typeof BigInt != "function" ? null : BigInt(e13.replace(/_/g, ""));
}
c(vn, "stringToBigInt");
N.readRadixNumber = function(e13) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e13);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e13), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = vn(this.input.slice(t, this.pos)), ++this.pos) : ue(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(o.num, i);
};
N.readNumber = function(e13) {
  var t = this.pos;
  !e13 && this.readInt(10, void 0, true) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!i && !e13 && this.options.ecmaVersion >= 11 && n === 110) {
    var s = vn(this.input.slice(t, this.pos));
    return ++this.pos, ue(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(o.num, s);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = false), n === 46 && !i && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !i && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), ue(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var a = Ns(this.input.slice(t, this.pos), i);
  return this.finishToken(o.num, a);
};
N.readCodePoint = function() {
  var e13 = this.input.charCodeAt(this.pos), t;
  if (e13 === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else t = this.readHexChar(4);
  return t;
};
N.readString = function(e13) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === e13) break;
    n === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(false), i = this.pos) : n === 8232 || n === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Ue(n) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(o.string, t);
};
var Sn = {};
N.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (e13) {
    if (e13 === Sn) this.readInvalidTemplateToken();
    else throw e13;
  }
  this.inTemplateElement = false;
};
N.invalidStringToken = function(e13, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Sn;
  this.raise(e13, t);
};
N.readTmplToken = function() {
  for (var e13 = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === o.template || this.type === o.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(o.dollarBraceL)) : (++this.pos, this.finishToken(o.backQuote)) : (e13 += this.input.slice(t, this.pos), this.finishToken(o.template, e13));
    if (i === 92) e13 += this.input.slice(t, this.pos), e13 += this.readEscapedChar(true), t = this.pos;
    else if (Ue(i)) {
      switch (e13 += this.input.slice(t, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e13 += `
`;
          break;
        default:
          e13 += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else ++this.pos;
  }
};
N.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
    case "\\":
      ++this.pos;
      break;
    case "$":
      if (this.input[this.pos + 1] !== "{") break;
    case "`":
      return this.finishToken(o.invalidTemplate, this.input.slice(this.start, this.pos));
    case "\r":
      this.input[this.pos + 1] === `
` && ++this.pos;
    case `
`:
    case "\u2028":
    case "\u2029":
      ++this.curLine, this.lineStart = this.pos + 1;
      break;
  }
  this.raise(this.start, "Unterminated template");
};
N.readEscapedChar = function(e13) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return me(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e13) {
        var i = this.pos - 1;
        this.invalidStringToken(i, "Invalid escape sequence in template string");
      }
    default:
      if (t >= 48 && t <= 55) {
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], s = parseInt(n, 8);
        return s > 255 && (n = n.slice(0, -1), s = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), (n !== "0" || t === 56 || t === 57) && (this.strict || e13) && this.invalidStringToken(this.pos - 1 - n.length, e13 ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(s);
      }
      return Ue(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
N.readHexChar = function(e13) {
  var t = this.pos, i = this.readInt(16, e13);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
N.readWord1 = function() {
  this.containsEsc = false;
  for (var e13 = "", t = true, i = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (we(s, n)) this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      this.containsEsc = true, e13 += this.input.slice(i, this.pos);
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var r = this.readCodePoint();
      (t ? ue : we)(r, n) || this.invalidStringToken(a, "Invalid Unicode escape"), e13 += me(r), i = this.pos;
    } else break;
    t = false;
  }
  return e13 + this.input.slice(i, this.pos);
};
N.readWord = function() {
  var e13 = this.readWord1(), t = o.name;
  return this.keywords.test(e13) && (t = li[e13]), this.finishToken(t, e13);
};
var Rs = "8.15.0";
z.acorn = { Parser: z, version: Rs, defaultOptions: ai, Position: ot, SourceLocation: kt, getLineInfo: qi, Node: _t, TokenType: D, tokTypes: o, keywordTypes: li, TokContext: le, tokContexts: W, isIdentifierChar: we, isIdentifierStart: ue, Token: di, isNewLine: Ue, lineBreak: te, lineBreakG: is, nonASCIIwhitespace: ji };
function wn(e13, t) {
  return z.parse(e13, t);
}
c(wn, "parse");
function At(e13, t, i, n, s) {
  i || (i = y), c((function a(r, l, u) {
    var h = u || r.type;
    i[h](r, l, a), t[h] && t[h](r, l);
  }), "c")(e13, n, s);
}
c(At, "simple");
function mi(e13, t, i) {
  i(e13, t);
}
c(mi, "skipThrough");
function Ae(e13, t, i) {
}
c(Ae, "ignore");
var y = {};
y.Program = y.BlockStatement = y.StaticBlock = function(e13, t, i) {
  for (var n = 0, s = e13.body; n < s.length; n += 1) {
    var a = s[n];
    i(a, t, "Statement");
  }
};
y.Statement = mi;
y.EmptyStatement = Ae;
y.ExpressionStatement = y.ParenthesizedExpression = y.ChainExpression = function(e13, t, i) {
  return i(e13.expression, t, "Expression");
};
y.IfStatement = function(e13, t, i) {
  i(e13.test, t, "Expression"), i(e13.consequent, t, "Statement"), e13.alternate && i(e13.alternate, t, "Statement");
};
y.LabeledStatement = function(e13, t, i) {
  return i(e13.body, t, "Statement");
};
y.BreakStatement = y.ContinueStatement = Ae;
y.WithStatement = function(e13, t, i) {
  i(e13.object, t, "Expression"), i(e13.body, t, "Statement");
};
y.SwitchStatement = function(e13, t, i) {
  i(e13.discriminant, t, "Expression");
  for (var n = 0, s = e13.cases; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
};
y.SwitchCase = function(e13, t, i) {
  e13.test && i(e13.test, t, "Expression");
  for (var n = 0, s = e13.consequent; n < s.length; n += 1) {
    var a = s[n];
    i(a, t, "Statement");
  }
};
y.ReturnStatement = y.YieldExpression = y.AwaitExpression = function(e13, t, i) {
  e13.argument && i(e13.argument, t, "Expression");
};
y.ThrowStatement = y.SpreadElement = function(e13, t, i) {
  return i(e13.argument, t, "Expression");
};
y.TryStatement = function(e13, t, i) {
  i(e13.block, t, "Statement"), e13.handler && i(e13.handler, t), e13.finalizer && i(e13.finalizer, t, "Statement");
};
y.CatchClause = function(e13, t, i) {
  e13.param && i(e13.param, t, "Pattern"), i(e13.body, t, "Statement");
};
y.WhileStatement = y.DoWhileStatement = function(e13, t, i) {
  i(e13.test, t, "Expression"), i(e13.body, t, "Statement");
};
y.ForStatement = function(e13, t, i) {
  e13.init && i(e13.init, t, "ForInit"), e13.test && i(e13.test, t, "Expression"), e13.update && i(e13.update, t, "Expression"), i(e13.body, t, "Statement");
};
y.ForInStatement = y.ForOfStatement = function(e13, t, i) {
  i(e13.left, t, "ForInit"), i(e13.right, t, "Expression"), i(e13.body, t, "Statement");
};
y.ForInit = function(e13, t, i) {
  e13.type === "VariableDeclaration" ? i(e13, t) : i(e13, t, "Expression");
};
y.DebuggerStatement = Ae;
y.FunctionDeclaration = function(e13, t, i) {
  return i(e13, t, "Function");
};
y.VariableDeclaration = function(e13, t, i) {
  for (var n = 0, s = e13.declarations; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
};
y.VariableDeclarator = function(e13, t, i) {
  i(e13.id, t, "Pattern"), e13.init && i(e13.init, t, "Expression");
};
y.Function = function(e13, t, i) {
  e13.id && i(e13.id, t, "Pattern");
  for (var n = 0, s = e13.params; n < s.length; n += 1) {
    var a = s[n];
    i(a, t, "Pattern");
  }
  i(e13.body, t, e13.expression ? "Expression" : "Statement");
};
y.Pattern = function(e13, t, i) {
  e13.type === "Identifier" ? i(e13, t, "VariablePattern") : e13.type === "MemberExpression" ? i(e13, t, "MemberPattern") : i(e13, t);
};
y.VariablePattern = Ae;
y.MemberPattern = mi;
y.RestElement = function(e13, t, i) {
  return i(e13.argument, t, "Pattern");
};
y.ArrayPattern = function(e13, t, i) {
  for (var n = 0, s = e13.elements; n < s.length; n += 1) {
    var a = s[n];
    a && i(a, t, "Pattern");
  }
};
y.ObjectPattern = function(e13, t, i) {
  for (var n = 0, s = e13.properties; n < s.length; n += 1) {
    var a = s[n];
    a.type === "Property" ? (a.computed && i(a.key, t, "Expression"), i(a.value, t, "Pattern")) : a.type === "RestElement" && i(a.argument, t, "Pattern");
  }
};
y.Expression = mi;
y.ThisExpression = y.Super = y.MetaProperty = Ae;
y.ArrayExpression = function(e13, t, i) {
  for (var n = 0, s = e13.elements; n < s.length; n += 1) {
    var a = s[n];
    a && i(a, t, "Expression");
  }
};
y.ObjectExpression = function(e13, t, i) {
  for (var n = 0, s = e13.properties; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
};
y.FunctionExpression = y.ArrowFunctionExpression = y.FunctionDeclaration;
y.SequenceExpression = function(e13, t, i) {
  for (var n = 0, s = e13.expressions; n < s.length; n += 1) {
    var a = s[n];
    i(a, t, "Expression");
  }
};
y.TemplateLiteral = function(e13, t, i) {
  for (var n = 0, s = e13.quasis; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
  for (var r = 0, l = e13.expressions; r < l.length; r += 1) {
    var u = l[r];
    i(u, t, "Expression");
  }
};
y.TemplateElement = Ae;
y.UnaryExpression = y.UpdateExpression = function(e13, t, i) {
  i(e13.argument, t, "Expression");
};
y.BinaryExpression = y.LogicalExpression = function(e13, t, i) {
  i(e13.left, t, "Expression"), i(e13.right, t, "Expression");
};
y.AssignmentExpression = y.AssignmentPattern = function(e13, t, i) {
  i(e13.left, t, "Pattern"), i(e13.right, t, "Expression");
};
y.ConditionalExpression = function(e13, t, i) {
  i(e13.test, t, "Expression"), i(e13.consequent, t, "Expression"), i(e13.alternate, t, "Expression");
};
y.NewExpression = y.CallExpression = function(e13, t, i) {
  if (i(e13.callee, t, "Expression"), e13.arguments) for (var n = 0, s = e13.arguments; n < s.length; n += 1) {
    var a = s[n];
    i(a, t, "Expression");
  }
};
y.MemberExpression = function(e13, t, i) {
  i(e13.object, t, "Expression"), e13.computed && i(e13.property, t, "Expression");
};
y.ExportNamedDeclaration = y.ExportDefaultDeclaration = function(e13, t, i) {
  e13.declaration && i(e13.declaration, t, e13.type === "ExportNamedDeclaration" || e13.declaration.id ? "Statement" : "Expression"), e13.source && i(e13.source, t, "Expression");
};
y.ExportAllDeclaration = function(e13, t, i) {
  e13.exported && i(e13.exported, t), i(e13.source, t, "Expression");
};
y.ImportDeclaration = function(e13, t, i) {
  for (var n = 0, s = e13.specifiers; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
  i(e13.source, t, "Expression");
};
y.ImportExpression = function(e13, t, i) {
  i(e13.source, t, "Expression");
};
y.ImportSpecifier = y.ImportDefaultSpecifier = y.ImportNamespaceSpecifier = y.Identifier = y.PrivateIdentifier = y.Literal = Ae;
y.TaggedTemplateExpression = function(e13, t, i) {
  i(e13.tag, t, "Expression"), i(e13.quasi, t, "Expression");
};
y.ClassDeclaration = y.ClassExpression = function(e13, t, i) {
  return i(e13, t, "Class");
};
y.Class = function(e13, t, i) {
  e13.id && i(e13.id, t, "Pattern"), e13.superClass && i(e13.superClass, t, "Expression"), i(e13.body, t);
};
y.ClassBody = function(e13, t, i) {
  for (var n = 0, s = e13.body; n < s.length; n += 1) {
    var a = s[n];
    i(a, t);
  }
};
y.MethodDefinition = y.PropertyDefinition = y.Property = function(e13, t, i) {
  e13.computed && i(e13.key, t, "Expression"), e13.value && i(e13.value, t, "Expression");
};
var Me = class {
  static {
    c(this, "HighliteResources");
  }
  dbName = "Highlite";
  storeName = "Resources";
  db = null;
  initialized = false;
  constructor() {
  }
  async init() {
    if (this.initialized && this.db) return true;
    let t = window.indexedDB.open(this.dbName);
    return new Promise((i) => {
      t.onsuccess = (n) => {
        let s = n.target;
        this.db = s.result, console.debug(`[Ryelite Loader] IndexDB ${this.dbName} opened successfully.`), this.initialized = true, i(true);
      }, t.onerror = () => {
        console.error(`[Ryelite Loader] IndexDB ${this.dbName} could not be opened.`), this.db = null, this.initialized = false, i(false);
      }, t.onupgradeneeded = (n) => {
        let s = n.target;
        this.db = s.result, console.debug(`[Ryelite Loader] IndexDB ${this.dbName} was created.`), this.db && !this.db.objectStoreNames.contains(this.storeName) && (this.db.createObjectStore(this.storeName), console.debug(`[Ryelite Loader] IndexDB Object Store ${this.storeName} was created.`));
      };
    });
  }
  async setItem(t, i) {
    if (!this.initialized) return console.warn("[Ryelite Loader] Attempted to setItem before the database was initialized"), false;
    if (!this.db) return console.warn("[Ryelite Loader] Attempted to setItem on a 'null' database"), false;
    if (!this.db.objectStoreNames.contains(this.storeName)) return console.error(`[Ryelite Loader] Object store ${this.storeName} does not exist.`), false;
    let n = this.db.transaction(this.storeName, "readwrite");
    n.oncomplete = () => {
      console.debug("[Ryelite Loader] setItem transaction request succeeded");
    }, n.onerror = () => {
      console.warn(`[Ryelite Loader] setItem transaction request failed on ${this.storeName}`);
    };
    let a = n.objectStore(this.storeName).put(i, t);
    return new Promise((r) => {
      a.onsuccess = () => {
        console.debug(`[Ryelite Loader] setItem set Key: ${t} to Value (type): ${typeof i}`), r(true);
      }, a.onerror = () => {
        console.warn(`[Ryelite Loader] setItem could not set Key: ${t}`), r(false);
      };
    });
  }
  async getItem(t) {
    if (!this.initialized) return console.warn("[Ryelite Loader] Attempted to getItem before the database was initialized"), null;
    if (!this.db) return console.warn("[Ryelite Loader] Attempted to getItem on a 'null' database"), null;
    if (!this.db.objectStoreNames.contains(this.storeName)) return console.error(`[Ryelite Loader] Object store ${this.storeName} does not exist.`), null;
    let i = this.db.transaction(this.storeName, "readonly");
    i.oncomplete = () => {
      console.debug("[Ryelite Loader] getItem transaction request succeeded");
    }, i.onerror = () => {
      console.warn(`[Ryelite Loader] getItem transaction request failed on ${this.storeName}`);
    };
    let s = i.objectStore(this.storeName).get(t);
    return new Promise((a) => {
      s.onsuccess = () => {
        console.debug(`[Ryelite Loader] getItem retrieved Key: ${t} with Value (type): ${typeof s.result}`), a(s.result ?? null);
      }, s.onerror = () => {
        console.warn(`[Ryelite Loader] getItem could not retrieve Key: ${t}`), a(null);
      };
    });
  }
  async deleteItem(t) {
    if (!this.initialized || !this.db) return console.warn("[Ryelite Loader] Attempted to deleteItem before database was ready"), false;
    if (!this.db.objectStoreNames.contains(this.storeName)) return console.error(`[Ryelite Loader] Object store ${this.storeName} does not exist.`), false;
    let s = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).delete(t);
    return new Promise((a) => {
      s.onsuccess = () => {
        console.debug(`[Ryelite Loader] deleteItem removed Key: ${t}`), a(true);
      }, s.onerror = () => {
        console.warn(`[Ryelite Loader] deleteItem failed for Key: ${t}`), a(false);
      };
    });
  }
  async clear() {
    if (!this.initialized || !this.db) return console.warn("[Ryelite Loader] Attempted to clear before database was ready"), false;
    if (!this.db.objectStoreNames.contains(this.storeName)) return console.error(`[Ryelite Loader] Object store ${this.storeName} does not exist.`), false;
    let n = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).clear();
    return new Promise((s) => {
      n.onsuccess = () => {
        console.debug(`[Ryelite Loader] clear removed all keys in ${this.storeName}`), s(true);
      }, n.onerror = () => {
        console.warn(`[Ryelite Loader] clear failed on ${this.storeName}`), s(false);
      };
    });
  }
  close() {
    this.db && (this.db.close(), this.db = null, this.initialized = false, console.debug(`[Ryelite Loader] IndexDB ${this.dbName} was closed.`));
  }
};
var gi = [["EntityManager", { methods: ["CurrentOnlinePlayerCount", "NPCs"] }], ["GroundItemManager", { methods: ["GroundItemCount"] }], ["MeshManager", { methods: ["getInstanceCountForMeshByFileName"] }], ["WorldMapManager", { methods: ["NextWorldEntityTypeID"] }], ["AtmosphereManager", { methods: ["_initializeEarthOverworldAtmosphere"] }], ["WorldEntityManager", { methods: ["WorldEntities"] }], ["SpellManager", { methods: ["CurrentlySelectedSpell"] }], ["SpellMeshManager", { methods: ["PendingMainPlayerTeleportEndSpellMesh"] }], ["GameLoop", { methods: ["startGameLoop"] }], ["ChatManager", { methods: ["Friends", "LastPrivateMessageReceivedFrom"] }], ["RangeManager", { methods: ["handleEntityFiredProjectile"] }], ["SocketManager", { methods: ["openSocketConnection", "emitPacket"] }], ["GameEngine", { methods: ["Scene", "Engine", "Canvas"] }], ["ItemManager", { methods: ["CurrentSelectedItem", "IsItemCurrentlySelected"] }], ["LoginScreen", { methods: ["_createControl", "_createLoginMenu"] }], ["PrivateChatMessageList", { methods: ["getElement", "getChatMessages"] }], ["InventoryManager", { methods: ["Items", "IsWaitingForSwapItemConfirmation"] }], ["UIManager", { methods: ["Manager"] }], ["BankUIManager", { methods: ["_initializeBankMenu"] }], ["NameplateManager", { methods: ["getTextColorClassNameForEntityType"] }], ["InventoryItemSpriteManager", { methods: ["getSlot", "getElement", "updateAmountText"] }], ["SpriteSheetManager", { methods: ["ItemSpritesheetInfo"] }], ["GameCameraManager", { methods: ["initializeCamera"] }], ["ItemDefinitionManager", { methods: ["loadFromJSON", "getDefById"], contains: "_itemDefMap" }], ["NpcDefinitionManager", { methods: ["loadFromJSON", "getDefById"], contains: "_npcDefMap" }], ["SpellDefinitionManager", { methods: ["loadFromJSON", "getDefById"], contains: "SpellDefs" }], ["AppearanceUtils", { methods: ["updateAppearance", "doesAppearanceAndEquippedItemsMatch"] }], ["BlobLoader", { methods: ["SizeBytes", "createObjectURL"] }], ["HTMLUIManager", { methods: ["getGameContainer"] }], ["ScreenMask", { methods: ["getForceDesktopModeControl"] }], ["ContextMenuManager", { methods: ["createContextMenu", "createContextMenuItem"] }], ["ContextMenuItemManager", { methods: ["_createInventoryItemContextMenuItems", "_createGameWorldContextMenuItems"] }], ["TargetActionManager", { methods: ["getActionsAndEntitiesAtMousePointer"] }], ["MagicSkillManager", { methods: ["canCastSpellAtLevel"] }], ["SpellMenuManager", { methods: ["_handleAutoCastChanged", "_handlePendingSpellChanged"] }], ["QuestDefinitionManager", { methods: ["loadFromJSON", "getDefById"], contains: "QuestDefs" }], ["StatsMenuManager", { methods: ["_handleStatItemPointerOver", "_handleStatItemPointerOut"] }], ["GameMenuBarManager", { methods: ["_handleGameMenuBarButtonPointerDown", "_toggleGameMenuBarButton"] }], ["ExperienceManager", { methods: ["getExperienceAtLevel", "getLevelAtExperience"] }]];
var yi = [["GameWorldActions", { includes: ["attack", "talk_to"] }], ["InventoryActions", { includes: ["use", "inspect", "drop"] }], ["PlayerActions", { includes: ["IdleState", "MovingState"] }], ["Skills", { includes: ["hitpoints", "accuracy"] }], ["EntityTypes", { includes: ["Environment", "Item"] }], ["AppearanceTypes", { includes: ["HairID", "BeardID", "ShirtID"], excludes: ["Username"] }], ["UISettings", { includes: ["UITheme", "IsGameWindowFullScreen"] }], ["GameInterfaces", { includes: ["Inventory", "Bank", "Shop"] }], ["GameObjects", { includes: ["caveentrance", "caveexit", "oaktree"] }], ["RequirementTypes", { includes: ["availableinventoryspace", "equippeditem", "quest", "skill"] }], ["SpellTypes", { includes: ["combat", "status", "inventory", "teleport"] }]];
var $e = class e12 {
  static {
    c(this, "Reflector");
  }
  static source;
  static ast;
  static classes = [];
  static enums = [];
  static classHooks = /* @__PURE__ */ new Map();
  static enumHooks = /* @__PURE__ */ new Map();
  static async loadHooksFromSource(t) {
    e12.source = t, e12.ast = wn(t, { ecmaVersion: "latest", sourceType: "module" }), e12.extractClasses(), e12.extractEnums(), e12.findHooksBySignature(), await e12.saveHooks();
  }
  static async loadHooksFromDB() {
    let t = new Me();
    await t.init();
    let i = await t.getItem("clientClassHooks");
    Array.isArray(i) && (e12.classHooks = e12.deserializeHookEntries(i));
    let n = await t.getItem("clientEnumHooks");
    Array.isArray(n) && (e12.enumHooks = e12.deserializeHookEntries(n));
  }
  static async saveHooks() {
    let t = new Me();
    await t.init(), await t.setItem("clientClassHooks", e12.serializeHookMap(e12.classHooks)), await t.setItem("clientEnumHooks", e12.serializeHookMap(e12.enumHooks));
  }
  static async hasSavedHooks() {
    let t = new Me();
    await t.init();
    let i = await t.getItem("clientClassHooks"), n = await t.getItem("clientEnumHooks"), s = Array.isArray(i) ? i.length : 0, a = Array.isArray(n) ? n.length : 0;
    return s + a > 0;
  }
  static extractClasses() {
    return At(e12.ast, { ClassDeclaration(t) {
      let i = { name: t.id?.name ?? "", staticFields: [], instanceFields: [], staticMethods: [], instanceMethods: [], start: t.start, end: t.end };
      for (let n of t.body.body) n.type === "MethodDefinition" ? (n.static ? i.staticMethods : i.instanceMethods).push({ name: n.key.name, kind: n.kind }) : (n.type === "PropertyDefinition" || n.type === "ClassProperty") && (n.static ? i.staticFields : i.instanceFields).push(n.key.name);
      e12.classes.push(i);
    } }), e12.classes;
  }
  static extractEnums() {
    return At(e12.ast, { CallExpression(t) {
      if (t.arguments.length !== 1) return;
      let i = t.arguments[0];
      if (i.type !== "LogicalExpression" || i.operator !== "||" || i.left.type !== "Identifier") return;
      let n;
      if (i.right.type === "AssignmentExpression" ? n = i.right : i.right.type === "ParenthesizedExpression" && i.right.expression.type === "AssignmentExpression" && (n = i.right.expression), !n || n.left.type !== "Identifier" || n.left.name !== i.left.name) return;
      let s = t.callee;
      if (s.type !== "FunctionExpression" && s.type !== "ArrowFunctionExpression") return;
      let a = /* @__PURE__ */ new Set();
      if (At(s.body, { Literal(l) {
        typeof l.value == "string" && a.add(l.value);
      } }), !a.size) return;
      let r = { name: i.left.name, members: Array.from(a), start: t.start, end: t.end };
      e12.enums.push(r);
    } }), e12.enums;
  }
  static findHooksBySignature() {
    for (let [t, i] of gi) {
      let n = e12.findClassBySignature(i);
      n ? (e12.classHooks.set(t, n.name), console.log(`[Reflector] Successfully matched ${t} as ${n.name}`)) : console.error(`[Reflector] Unable to find ${t}`);
    }
    for (let [t, i] of yi) {
      let n = e12.findEnumBySignature(i);
      n ? (e12.enumHooks.set(t, n.name), console.log(`[Reflector] Successfully matched ${t} as ${n.name}`)) : console.error(`[Reflector] Unable to find ${t}`);
    }
  }
  static findClassBySignature(t) {
    return e12.classes.find((i) => {
      if (t.fields) {
        let n = /* @__PURE__ */ new Set([...i.staticFields, ...i.instanceFields]);
        if (!t.fields.every((s) => n.has(s))) return false;
      }
      if (t.methods) {
        let n = /* @__PURE__ */ new Set([...i.staticMethods.map((s) => s.name), ...i.instanceMethods.map((s) => s.name)]);
        if (!t.methods.every((s) => n.has(s))) return false;
      }
      return !(t.contains && e12.source.slice(i.start, i.end).indexOf(t.contains) < 0);
    });
  }
  static findEnumBySignature(t) {
    return e12.enums.find((i) => !(!t.includes.every((n) => i.members.includes(n)) || t.excludes && t.excludes.some((n) => i.members.includes(n))));
  }
  static getClassHook(t) {
    return e12.classHooks.get(t);
  }
  static getEnumHook(t) {
    return e12.enumHooks.get(t);
  }
  static bindClassHooks(t) {
    for (let [i, n] of e12.classHooks.entries()) console.debug(i, n), t.registerClass(n, i);
  }
  static bindEnumHooks(t) {
    for (let [i, n] of e12.enumHooks.entries()) t.registerEnum(n, i);
  }
  static serializeHookMap(t) {
    return Array.from(t.entries());
  }
  static deserializeHookEntries(t) {
    return new Map(t ?? []);
  }
};
var xi = class {
  static {
    c(this, "Highlite");
  }
  hookManager;
  contextMenuManager;
  notificationManager;
  pluginManager;
  uiManager;
  panelManager;
  settingsManager;
  databaseManager;
  soundManager;
  pluginDataManager;
  constructor() {
    console.info("[Ryelite] Core Initializing!"), document.highlite = { managers: {}, gameHooks: {}, gameLookups: {} }, this.pluginManager = new Xe(), this.hookManager = new Ye(), this.contextMenuManager = new Ke(), this.notificationManager = new Qe(), this.uiManager = new Ce(), this.panelManager = new Ee(), this.soundManager = new at(), this.settingsManager = new _e(), this.databaseManager = new fe(), this.pluginDataManager = new yt(), this.initialize();
  }
  async loginHooks(t, ...i) {
    t === "LoginScreen_handleRegisterButtonClicked" && window.open("https://highspell.com/register", "_blank"), t === "LoginScreen_handleHomeButtonClicked" && window.open("https://highspell.com/", "_blank");
  }
  async startHook(t, ...i) {
    await this.settingsManager.init(), await this.settingsManager.registerPlugins(), await this.pluginDataManager.initialize();
    for (let n of this.pluginManager.plugins) n.instance && await this.pluginDataManager.addPlugin(n.instance);
    this.pluginManager.initAll(), this.pluginManager.postInitAll(), this.pluginManager.startAll(), this.pluginManager.setLoginState(true);
  }
  async stopHook(t, ...i) {
    console.warn(`[Ryelite] Stopping all plugins due to: ${t}`), this.panelManager.forceClose(), this.settingsManager.deinit(), this.pluginManager.stopAll(), this.pluginManager.setLoginState(false);
  }
  initialize() {
    console.info("[Ryelite] Core Initializing"), $e.bindClassHooks(this.hookManager), $e.bindEnumHooks(this.hookManager), this.hookManager.registerClassOverrideHook("LoginScreen", "_handleRegisterButtonClicked", this.loginHooks), this.hookManager.registerClassOverrideHook("LoginScreen", "_handleHomeButtonClicked", this.loginHooks), this.hookManager.registerClassHook("SocketManager", "_loggedIn", this.startHook.bind(this)), this.hookManager.registerClassHook("SocketManager", "_handleLostConnection", this.stopHook.bind(this)), this.hookManager.registerClassHook("SocketManager", "_handleReconnectFailed", this.stopHook.bind(this)), this.hookManager.registerClassHook("SocketManager", "_handleConnectFailed", this.stopHook.bind(this)), this.hookManager.registerClassHook("SocketManager", "_handleLoggedOut", this.stopHook.bind(this)), this.hookManager.registerClassHook("SocketManager", "_loginFailed", this.stopHook.bind(this)), this.contextMenuManager.registerContextHook("ContextMenuItemManager", "_createInventoryItemContextMenuItems", this.contextMenuManager.inventoryContextHook), this.contextMenuManager.registerContextHook("ContextMenuItemManager", "_createGameWorldContextMenuItems", this.contextMenuManager.gameWorldContextHook), this.hookManager.registerStaticClassHook("TargetActionManager", "handleTargetAction"), this.hookManager.registerStaticClassHook("TargetActionManager", "getActionsAndEntitiesAtMousePointer", this.contextMenuManager.ActionSorting);
  }
  async start() {
    if (console.info("[Ryelite] Core Started!"), await this.databaseManager.initDB(), this.databaseManager.database) console.info("[Ryelite] Database initialized!");
    else {
      console.error("[Ryelite] Database not initialized!");
      return;
    }
    await this.notificationManager.askNotificationPermission(), await this.pluginManager.initialize();
  }
  stop() {
    console.info("[Ryelite] Core Stopped!"), this.pluginManager.stopAll();
  }
  reload() {
    console.info("[Ryelite] Core Reloading"), this.stop(), this.start();
  }
};
var bi = class {
  static {
    c(this, "Plugin");
  }
  settings = { enable: { text: "Enable", type: 0, value: false, callback: this.onSettingsChanged_enabled } };
  data = {};
  onSettingsChanged_enabled() {
    this.settings.enable.value ? this.start() : this.stop();
  }
  get gameHooks() {
    return document.highlite?.gameHooks;
  }
  get gameLookups() {
    return document.highlite?.gameLookups;
  }
  log(...t) {
    console.info(`[RyeLite][${this.pluginName} Plugin]`, ...t);
  }
  info(...t) {
    console.info(`[RyeLite][${this.pluginName} Plugin]`, ...t);
  }
  warn(...t) {
    console.warn(`[RyeLite][${this.pluginName} Plugin]`, ...t);
  }
  error(...t) {
    console.error(`[RyeLite][${this.pluginName} Plugin]`, ...t);
  }
};
function Ts(e13) {
  return e13 < 1e3 ? e13.toString() : e13 < 1e6 ? (e13 / 1e3).toFixed(1) + "K" : e13 < 1e9 ? (e13 / 1e6).toFixed(2) + "M" : e13 < 1e12 ? (e13 / 1e9).toFixed(3) + "B" : (e13 / 1e12).toFixed(4) + "T";
}
c(Ts, "abbreviateValue");

// resources/css/tcg.css
var tcg_default = `/* HighSpell TCG \u2014 all UI styles. Card CSS is ported from
   tools/card_design_template.html (the reference implementation);
   only the class names changed (.tcg \u2192 .hstcg-card etc.) and everything is
   scoped under #hstcg-root so nothing leaks into the game. */

#hstcg-root {
    --hstcg-bg: #16171b;
    --hstcg-panel: #1f2127;
    --hstcg-row: #23252c;
    --hstcg-text: #d6d7db;
    --hstcg-dim: #8b8e98;
    --hstcg-border: #33363f;
    --hstcg-common: #9aa0ab;
    --hstcg-uncommon: #4caf50;
    --hstcg-rare: #2f8fdd;
    --hstcg-epic: #a64ce0;
    --hstcg-legendary: #e8912d;
    font: 14px/1.4 system-ui, sans-serif;
    color: var(--hstcg-text);
}
#hstcg-root *, #hstcg-root *::before, #hstcg-root *::after { box-sizing: border-box; }

/* ============================ window chrome ============================ */

#hstcg-window {
    position: fixed;
    z-index: 3000;
    min-width: 680px;
    min-height: 480px;
    max-width: 96vw;
    max-height: 94vh;
    display: flex;
    flex-direction: column;
    background: color-mix(in srgb, var(--hstcg-bg) var(--hstcg-bg-opacity, 94%), transparent);
    backdrop-filter: blur(6px);
    border: 1px solid var(--hstcg-border);
    border-radius: 10px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.65);
    resize: both;
    overflow: hidden;
}
#hstcg-titlebar {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: none;
    padding: 8px 12px;
    background: var(--hstcg-panel);
    border-bottom: 1px solid var(--hstcg-border);
    cursor: move;
    user-select: none;
}
#hstcg-titlebar .hstcg-title {
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
}
#hstcg-tabs { display: flex; gap: 4px; }
#hstcg-tabs button {
    background: transparent;
    color: var(--hstcg-dim);
    font: 600 13px/1 system-ui;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
}
#hstcg-tabs button:hover { color: var(--hstcg-text); }
#hstcg-tabs button.on {
    color: var(--hstcg-text);
    background: var(--hstcg-row);
    border-color: var(--hstcg-border);
}
#hstcg-credits {
    margin-left: auto;
    font: 700 13px/1 system-ui;
    color: #ffd76e;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid #4a3d1e;
    border-radius: 999px;
    padding: 6px 12px;
    white-space: nowrap;
}
#hstcg-close {
    flex: none;
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    border: 1px solid var(--hstcg-border);
    background: var(--hstcg-row);
    color: var(--hstcg-dim);
    font: 700 13px/1 system-ui;
    cursor: pointer;
}
#hstcg-close:hover { color: #fff; background: #a33; border-color: #a33; }

#hstcg-body { flex: 1; min-height: 0; overflow: auto; padding: 14px; }

/* ------- user zoom (settings): --hstcg-uizoom scales all window UI text,
   --hstcg-cardzoom stacks on top of it for card renders specifically ------- */
#hstcg-body,
#hstcg-titlebar,
#hstcg-modal .hstcg-modal-box,
#hstcg-confirm .hstcg-confirm-box,
#hstcg-excl .hstcg-excl-box,
.hstcg-toast {
    zoom: var(--hstcg-uizoom, 1);
}
.hstcg-flip,
.hstcg-pk,
.hstcg-binder .hstcg-cell,
#hstcg-modal-card {
    zoom: var(--hstcg-cardzoom, 1);
}
#hstcg-body::-webkit-scrollbar { width: 12px; }
#hstcg-body::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
}
#hstcg-body::-webkit-scrollbar-thumb {
    background: #5a6170;
    border-radius: 6px;
}
#hstcg-body::-webkit-scrollbar-thumb:hover { background: #707a8c; }
.hstcg-tabpage[hidden] { display: none; }

/* ============================ shared bits ============================ */

.hstcg-btn {
    background: var(--hstcg-row);
    color: var(--hstcg-text);
    font: 600 13px/1 system-ui;
    border: 1px solid var(--hstcg-border);
    border-radius: 6px;
    padding: 8px 14px;
    cursor: pointer;
}
.hstcg-btn:hover:not(:disabled) { filter: brightness(1.2); }
.hstcg-btn:disabled { opacity: 0.45; cursor: default; }
.hstcg-btn.primary {
    background: #2c4a2e;
    border-color: #3f7a44;
    color: #d8f0da;
}
.hstcg-muted { color: var(--hstcg-dim); font-size: 12.5px; }

/* Toasts can land on document.body (credit toasts fire while the TCG window
   is closed), so no #hstcg-root vars here \u2014 gold to match the credit HUD. */
.hstcg-toast {
    position: fixed;
    left: 50%;
    bottom: 12%;
    transform: translateX(-50%);
    z-index: 4000;
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid #4a3d1e;
    border-radius: 8px;
    padding: 10px 18px;
    font: 600 13px/1.3 system-ui;
    color: #ffd76e;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
    animation: hstcg-toast 2.6s ease forwards;
    pointer-events: none;
}
@keyframes hstcg-toast {
    0% { opacity: 0; translate: 0 8px; }
    10%, 82% { opacity: 1; translate: 0 0; }
    100% { opacity: 0; }
}

/* ============================ card front ============================ */

.hstcg-card {
    --rc: var(--hstcg-common);
    --rc-edge: color-mix(in srgb, var(--rc) 60%, #101116);
    width: 240px;
    height: 336px;
    position: relative;
    border-radius: 14px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: #d6d7db;
    /* bottom radial = rarity light rising from the card base ("full lower
       tint" \u2014 see tools/card-design-bottom.html) */
    background:
        radial-gradient(ellipse 130% 58% at 50% 103%,
            color-mix(in srgb, var(--rc) 22%, transparent), transparent 74%),
        linear-gradient(160deg, #282c36, #1a1c22 44%, #141519 100%);
    border: 1px solid #06070a;
    box-shadow:
        inset 0 0 0 2px var(--rc-edge),
        inset 0 0 0 3px rgba(0, 0, 0, 0.6),
        inset 0 18px 30px rgba(255, 255, 255, 0.03),
        0 6px 18px rgba(0, 0, 0, 0.55);
    user-select: none;
}
.hstcg-card.r-common { --rc: var(--hstcg-common); }
.hstcg-card.r-uncommon { --rc: var(--hstcg-uncommon); }
.hstcg-card.r-rare { --rc: var(--hstcg-rare); }
.hstcg-card.r-epic { --rc: var(--hstcg-epic); }
.hstcg-card.r-legendary { --rc: var(--hstcg-legendary); }
.hstcg-card.r-epic {
    box-shadow: inset 0 0 0 2px var(--rc-edge), inset 0 0 0 3px rgba(0, 0, 0, 0.6),
        0 0 14px color-mix(in srgb, var(--hstcg-epic) 40%, transparent),
        0 6px 18px rgba(0, 0, 0, 0.55);
}
.hstcg-card.r-legendary {
    box-shadow: inset 0 0 0 2px var(--rc-edge), inset 0 0 0 3px rgba(0, 0, 0, 0.6),
        0 0 18px color-mix(in srgb, var(--hstcg-legendary) 45%, transparent),
        0 6px 18px rgba(0, 0, 0, 0.55);
}
@property --hstcg-shimmer {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
.hstcg-card.r-legendary::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 13px;
    padding: 2px;
    background: conic-gradient(from var(--hstcg-shimmer),
        transparent 0turn, transparent 0.68turn,
        rgba(255, 214, 120, 0.9) 0.75turn, transparent 0.82turn, transparent 1turn);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: hstcg-shimmer 4.5s linear infinite;
    pointer-events: none;
}
@keyframes hstcg-shimmer { to { --hstcg-shimmer: 360deg; } }

.hstcg-name {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 6px;
    padding: 5px 9px 4px;
    border-radius: 7px;
    font: 700 13.5px/1.15 Georgia, "Palatino Linotype", serif;
    letter-spacing: 0.015em;
    background: linear-gradient(180deg,
        color-mix(in srgb, var(--rc) 26%, #1c1e25),
        color-mix(in srgb, var(--rc) 11%, #16181d));
    border: 1px solid color-mix(in srgb, var(--rc) 50%, #000);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    white-space: nowrap;
    overflow: hidden;
}
.hstcg-name .nm { overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.hstcg-card.r-legendary .hstcg-name .nm { color: #f6cf79; }
.hstcg-card.r-epic .hstcg-name .nm { color: #dcaef7; }

.hstcg-art {
    position: relative;
    height: 152px;
    flex: none;
    border-radius: 8px;
    overflow: hidden;
    display: grid;
    place-items: center;
    background:
        radial-gradient(ellipse 90% 70% at 50% 42%,
            color-mix(in srgb, var(--rc) 20%, transparent), transparent 78%),
        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.016) 0 6px, transparent 6px 12px),
        linear-gradient(180deg, #111318, #0a0b0f);
    border: 1px solid #000;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 12px 26px rgba(0, 0, 0, 0.5);
}
.hstcg-spr {
    image-rendering: pixelated;
    background-repeat: no-repeat;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.6));
}
.hstcg-lv {
    position: absolute;
    right: 6px;
    bottom: 6px;
    font: 700 10.5px/1 system-ui;
    letter-spacing: 0.03em;
    padding: 3px 8px;
    border-radius: 999px;
    color: #e9eaef;
    background: rgba(8, 9, 12, 0.82);
    border: 1px solid color-mix(in srgb, var(--rc) 65%, #000);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
.hstcg-type {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 3px;
    flex: none;
    font: 600 10px/1 system-ui;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--rc) 45%, #9ba0b0);
}
.hstcg-type .ids {
    font: 500 10px/1 system-ui;
    letter-spacing: 0.02em;
    color: color-mix(in srgb, var(--rc) 30%, #6d717e);
}
.hstcg-flavor {
    flex: 1;
    min-height: 0;
    overflow: hidden;
    padding: 0 4px;
    font: italic 11.5px/1.4 Georgia, "Palatino Linotype", serif;
    color: color-mix(in srgb, var(--rc) 32%, #989cab);
}
/* footer = the name-plate gradient flipped, so the card is bookended by
   rarity colour top and bottom */
.hstcg-foot {
    display: flex;
    align-items: center;
    gap: 7px;
    flex: none;
    padding: 6px 9px;
    border-radius: 7px;
    background: linear-gradient(0deg,
        color-mix(in srgb, var(--rc) 26%, #1c1e25),
        color-mix(in srgb, var(--rc) 11%, #16181d));
    border: 1px solid color-mix(in srgb, var(--rc) 50%, #000);
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.09);
}
.hstcg-gem {
    width: 11px;
    height: 11px;
    rotate: 45deg;
    border-radius: 2.5px;
    flex: none;
    background: radial-gradient(circle at 35% 30%,
        color-mix(in srgb, var(--rc) 55%, #fff),
        var(--rc) 55%,
        color-mix(in srgb, var(--rc) 50%, #000));
    box-shadow: 0 0 7px color-mix(in srgb, var(--rc) 75%, transparent),
        inset 0 0 2px rgba(255, 255, 255, 0.5);
}
.hstcg-rar {
    font: 700 11px/1 system-ui;
    letter-spacing: 0.05em;
    color: color-mix(in srgb, var(--rc) 55%, #fff);
}
.hstcg-pts { margin-left: auto; font: 700 11px/1 system-ui; color: #c9cbd3; }
.hstcg-pts .u { font-weight: 500; font-size: 9px; color: #83879a; margin-left: 2px; }

/* binder states */
.hstcg-card.unowned { filter: grayscale(1) brightness(0.62) contrast(0.92); }
.hstcg-card.unowned .hstcg-spr {
    filter: brightness(0) opacity(0.55);
}
.hstcg-dupe {
    position: absolute;
    top: -7px;
    right: -7px;
    z-index: 2;
    font: 700 11px/1 system-ui;
    color: #14161a;
    padding: 4px 8px;
    border-radius: 999px;
    background: linear-gradient(180deg, #f0f1f4, #c6c9d2);
    border: 1px solid #0a0b0e;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* scale wrapper (binder / popover size = same card, scaled) */
.hstcg-scale { transform-origin: top left; position: relative; flex: none; }

/* card back */
.hstcg-back {
    width: 240px;
    height: 336px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #06070a;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
    position: relative;
}
.hstcg-back svg { display: block; width: 100%; height: 100%; }

/* ============================ packs tab ============================ */

/* 16px side inset matches the shop's own padding \u2014 content shouldn't hug
   the window wall. Same inset on packarea, filters and binderwrap below. */
.hstcg-packbar {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    margin: 0 16px 6px;
}
/* Foil/holo variant \u2014 animated rainbow sheen confined to the ART WINDOW
   so the rarity frame/gem colors stay readable */
.hstcg-card.foil .hstcg-art::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 6;
    background:
        linear-gradient(
            115deg,
            rgba(255, 64, 160, 0.28) 0%,
            rgba(255, 214, 64, 0.28) 25%,
            rgba(64, 255, 160, 0.28) 50%,
            rgba(64, 170, 255, 0.28) 75%,
            rgba(190, 64, 255, 0.28) 100%
        );
    background-size: 250% 250%;
    mix-blend-mode: screen;
    animation: hstcg-foil-shift 5s ease-in-out infinite;
}
@keyframes hstcg-foil-shift {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}

/* Foil starfield \u2014 four-point sparkle stars (SVG tiles) drifting up the
   card in three parallax layers (big/small stars + fine stardust), with a
   twinkle pulse. Each layer scrolls exactly one tile per loop = seamless. */
.hstcg-card.foil::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 6;
    mix-blend-mode: screen;
    background-image:
        /* big sparkles */
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='240'><defs><path id='s' d='M0 -1 Q0.18 -0.18 1 0 Q0.18 0.18 0 1 Q-0.18 0.18 -1 0 Q-0.18 -0.18 0 -1Z'/></defs><use href='%23s' transform='translate(34 42) scale(8)' fill='%23ffffff' opacity='.95'/><use href='%23s' transform='translate(150 84) scale(11) rotate(18)' fill='%23ffe9a8' opacity='.9'/><use href='%23s' transform='translate(84 190) scale(7) rotate(-14)' fill='%23bfe4ff' opacity='.9'/><use href='%23s' transform='translate(196 208) scale(6)' fill='%23ffffff' opacity='.8'/></svg>"),
        /* small sparkles */
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='170'><defs><path id='s' d='M0 -1 Q0.18 -0.18 1 0 Q0.18 0.18 0 1 Q-0.18 0.18 -1 0 Q-0.18 -0.18 0 -1Z'/></defs><use href='%23s' transform='translate(20 30) scale(3.5)' fill='%23ffffff' opacity='.85'/><use href='%23s' transform='translate(92 62) scale(4.5) rotate(22)' fill='%23ffe9a8' opacity='.8'/><use href='%23s' transform='translate(122 142) scale(3) rotate(-10)' fill='%23bfe4ff' opacity='.85'/><use href='%23s' transform='translate(50 112) scale(4)' fill='%23ffffff' opacity='.75'/><use href='%23s' transform='translate(138 18) scale(3)' fill='%23ffffff' opacity='.7'/><use href='%23s' transform='translate(66 158) scale(3.5) rotate(30)' fill='%23dcc8ff' opacity='.75'/></svg>"),
        /* fine stardust */
        radial-gradient(1.4px 1.4px at 25px 35px, rgba(255, 255, 255, 0.8), transparent 55%),
        radial-gradient(1px 1px at 90px 120px, rgba(180, 220, 255, 0.7), transparent 55%);
    background-size: 220px 240px, 150px 170px, 120px 140px, 100px 130px;
    animation:
        hstcg-foil-stars 13s linear infinite,
        hstcg-foil-twinkle 2.2s ease-in-out infinite;
}
@keyframes hstcg-foil-stars {
    from { background-position: 0 0, 0 0, 0 0, 0 0; }
    to {
        background-position:
            220px -240px,
            150px -170px,
            120px -140px,
            100px -130px;
    }
}
@keyframes hstcg-foil-twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

/* On-screen credit tracker (Coin Counter-style HUD) \u2014 lives INSIDE the game
   container (can't reach the sidebar); position set in JS (defaults to
   center of the game view, remembered after dragging) */
#hstcg-hud {
    position: absolute;
    z-index: 2500;
    font: 700 13px/1 system-ui;
    color: #ffd76e;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid #4a3d1e;
    border-radius: 999px;
    padding: 7px 12px;
    cursor: grab;
    user-select: none;
    touch-action: none;
}
#hstcg-hud:active { cursor: grabbing; }
.hstcg-hud-delta {
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translateX(-50%);
    color: #9fe89f;
    font: 700 12px/1 system-ui;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    animation: hstcg-hud-delta 1.5s ease-out forwards;
    pointer-events: none;
    white-space: nowrap;
}
@keyframes hstcg-hud-delta {
    0% { opacity: 0; translate: 0 6px; }
    15% { opacity: 1; }
    100% { opacity: 0; translate: 0 -26px; }
}

/* Inventory cross-out \u2014 full-slot X drawn with two diagonal
   strokes so it scales to the slot; translucent so the item stays visible */
.hstcg-cross {
    position: absolute;
    inset: 2px;
    z-index: 3;
    pointer-events: none;
    background:
        linear-gradient(45deg, transparent 46%, rgba(255, 70, 70, 0.8) 46%,
            rgba(255, 70, 70, 0.8) 54%, transparent 54%),
        linear-gradient(-45deg, transparent 46%, rgba(255, 70, 70, 0.8) 46%,
            rgba(255, 70, 70, 0.8) 54%, transparent 54%);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7));
}
.hstcg-packarea {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    perspective: 1400px;
    min-height: 356px;
    align-content: flex-start;
    /* side inset keeps the first card's rarity glow clear of the scroll
       container's clip edge */
    padding: 12px 16px 16px;
}
.hstcg-flip {
    width: 240px;
    height: 336px;
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.55s cubic-bezier(0.4, 0.1, 0.2, 1);
}
.hstcg-flip.flipped { transform: rotateY(180deg); }
.hstcg-flip .face { position: absolute; inset: 0; backface-visibility: hidden; }
.hstcg-flip .front { transform: rotateY(180deg); }
.hstcg-flip.flipped .front .hstcg-card { animation: hstcg-reveal 0.6s ease-out; }
@keyframes hstcg-reveal {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--rc) 90%, transparent); }
    60% { box-shadow: 0 0 42px 10px color-mix(in srgb, var(--rc) 65%, transparent); }
    100% {}
}
.hstcg-flip:not(.flipped):hover { transform: translateY(-6px) rotateY(0); }

/* Face-down hover rarity glow \u2014 gated on #hstcg-root.hstcg-peek (the
   "Rarity glow on face-down cards" setting, default OFF: it spoils pulls) */
.hstcg-flip.r-common { --rc: var(--hstcg-common); }
.hstcg-flip.r-uncommon { --rc: var(--hstcg-uncommon); }
.hstcg-flip.r-rare { --rc: var(--hstcg-rare); }
.hstcg-flip.r-epic { --rc: var(--hstcg-epic); }
.hstcg-flip.r-legendary { --rc: var(--hstcg-legendary); }
.hstcg-peek .hstcg-flip .hstcg-back { transition: box-shadow 0.25s ease; }
.hstcg-peek .hstcg-flip:not(.flipped):hover .hstcg-back {
    box-shadow:
        0 0 26px 6px color-mix(in srgb, var(--rc) 65%, transparent),
        0 0 3px 1px color-mix(in srgb, var(--rc) 85%, transparent),
        0 6px 18px rgba(0, 0, 0, 0.55);
}

/* Revealed cards always glow their rarity \u2014 NOT gated on the peek setting.
   On the face wrapper, not .hstcg-card, so the card's own inset-ring
   box-shadow stack stays untouched. */
.hstcg-flip.flipped .face.front {
    border-radius: 14px;
    box-shadow:
        0 0 24px 5px color-mix(in srgb, var(--rc) 50%, transparent),
        0 0 3px 1px color-mix(in srgb, var(--rc) 70%, transparent);
}

/* "NEW" tag on first-ever copies \u2014 pops in once the flip shows the front */
.hstcg-newtag {
    position: absolute;
    top: -9px;
    right: -10px;
    z-index: 3;
    font: 800 12px/1 system-ui;
    letter-spacing: 0.09em;
    color: #2b1d04;
    padding: 5px 10px;
    border-radius: 999px;
    background: linear-gradient(180deg, #ffdf8a, #dfa32e);
    border: 1px solid #5c3d06;
    transform: rotate(8deg);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5),
        0 0 14px rgba(255, 214, 120, 0.35);
}
.hstcg-flip.flipped .hstcg-newtag {
    animation: hstcg-newpop 0.3s cubic-bezier(0.35, 1.6, 0.4, 1) 0.4s backwards;
}
@keyframes hstcg-newpop {
    from { transform: rotate(8deg) scale(0); opacity: 0; }
    to { transform: rotate(8deg) scale(1); opacity: 1; }
}

/* ================== booster wrapper (buy \u2192 rip \u2192 fountain) ==============
   "Red Midnight" wrapper. Pull & snap rip + fountain deal
   (ported from tools/pack-lab.html). */
.hstcg-packarea { position: relative; margin: 0 16px; }
.hstcg-packrow {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    perspective: 1400px;
}
.hstcg-packstage { position: absolute; inset: 0; pointer-events: none; }
.hstcg-pk {
    --pk1: #5f1414; /* dark stripe */
    --pk2: #a32222; /* bright \u2014 rails/accents */
    --pk3: #7e1a1a; /* mid stripe */
    position: absolute;
    left: 50%;
    top: 6px;
    width: 210px;
    height: 328px;
    margin-left: -105px;
    pointer-events: auto;
    cursor: pointer;
    filter: drop-shadow(0 12px 26px rgba(0, 0, 0, 0.6));
    transition: transform 0.15s;
}
/* Hover = LIFT, not scale. A fractional scale makes Chromium resample the
   tear strip's clip-path edge and its AA fringe darkens \u2014 a hairline "black
   line" across the Merchant's bright awning at the tear line (invisible on
   the dark wrappers, but always there). Whole-pixel translation never
   resamples, so the seam class is gone for good. */
.hstcg-pk:hover { transform: translateY(-5px); }
.hstcg-pk.pulling { cursor: default; }
.hstcg-pk.pulling:hover { transform: none; }
.hstcg-pk-hint {
    position: absolute;
    top: 348px;
    width: 100%;
    text-align: center;
}

.hstcg-pk-art {
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    height: 328px;
    border-radius: 6px;
    background: linear-gradient(180deg, #17181d, #0a0b0e);
}
.hstcg-pk-art .rail {
    position: absolute;
    top: 22px;
    bottom: 22px;
    width: 2px;
    background: var(--pk2);
    opacity: 0.85;
}
.hstcg-pk-art .rail.l { left: 0; }
.hstcg-pk-art .rail.r { right: 0; }
.hstcg-pk-art .rule {
    position: absolute;
    left: 14%;
    width: 72%;
    height: 1px;
    background: var(--pk2);
    opacity: 0.4;
}
.hstcg-pk-art .r1 { top: 30%; }
.hstcg-pk-art .r2 { top: 70%; }
.hstcg-pk-art .logo { position: absolute; left: 14%; top: 44%; width: 72%; }
.hstcg-pk-art .lbl {
    position: absolute;
    top: 33.5%;
    width: 100%;
    text-align: center;
    font: 600 11px system-ui;
    letter-spacing: 7px;
    color: #8b8e98;
}
.hstcg-pk-art .n5 {
    position: absolute;
    top: 73%;
    width: 100%;
    text-align: center;
    font: 700 11px system-ui;
    letter-spacing: 3px;
    color: var(--pk2);
}

/* ---- focus packs (designs from tools/pack-style-lab.html):
   Hunter's Pack = emerald + claw-slash; Merchant's Pack = ledger blue +
   market-awning scallops + balance scales. Guarantee \u22651 of their kind. */
.hstcg-pk.k-creature { --pk1: #123f1e; --pk2: #2f9e50; --pk3: #1c6b35; }
.hstcg-pk.k-shopkeeper { --pk1: #16295c; --pk2: #3f6fd4; --pk3: #23408e; }
/* longer footer text ("\u2026 \xB7 1+ CREATURE") needs a slightly tighter fit */
.hstcg-pk.k-creature .n5, .hstcg-pk.k-shopkeeper .n5 {
    font-size: 10px;
    letter-spacing: 2px;
}
.hstcg-pk-art .n5 .plus { color: #e8b64c; }
/* big faint watermark emblem behind the wrapper furniture */
.hstcg-pk-art .wm {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    transform: translate(-50%, -50%);
    opacity: 0.07;
}
/* small crisp emblem between logo and bottom rule */
.hstcg-pk-art .em {
    position: absolute;
    left: 50%;
    top: 52.5%;
    width: 56px;
    height: 56px;
    transform: translateX(-50%);
}
.hstcg-pk-art .wm svg, .hstcg-pk-art .em svg { width: 100%; height: 100%; }
/* Merchant's shop-canopy awning \u2014 right under the top crimp.
   It straddles the tear line: the tab/body art copies align while sealed,
   and the rip visibly tears through it \u2014 no extra animation work.
   Top tucks 2px UNDER the opaque crimp so hover-scale subpixel rounding
   can't open a dark hairline between the two layers. */
.hstcg-pk-art .awning { position: absolute; left: 0; right: 0; top: 20px; height: 26px; }
.hstcg-pk-art .awning .stripes {
    position: absolute;
    inset: 0 0 8px 0;
    background: repeating-linear-gradient(90deg,
        var(--pk2) 0 14px, #e9e2cf 14px 28px);
}
.hstcg-pk-art .awning .scallops {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: radial-gradient(circle 7px at 7px 0, var(--pk2) 0 6.5px, transparent 7px) 0 0/28px 8px,
                radial-gradient(circle 7px at 7px 0, #e9e2cf 0 6.5px, transparent 7px) 14px 0/28px 8px;
}
/* shop price buttons tinted to their wrapper colorway (override .primary) */
.hstcg-btn.pk-standard, .hstcg-btn.pk-mega { background: #4a2020; border-color: #a32222; color: #f0d8d8; }
.hstcg-btn.pk-creature { background: #1d3a24; border-color: #2f9e50; color: #d8f0da; }
.hstcg-btn.pk-shopkeeper { background: #1c2a4a; border-color: #3f6fd4; color: #d8e2f0; }

/* foil crimps \u2014 flat stripes, zigzag cut on the outer edge only */
.hstcg-pk-crimp {
    position: absolute;
    left: 0;
    right: 0;
    height: 22px;
    background: repeating-linear-gradient(90deg,
        var(--pk1) 0 3px, var(--pk2) 3px 6px, var(--pk3) 6px 9px);
    z-index: 3;
}
.hstcg-pk-crimp.top {
    top: 0;
    clip-path: polygon(0 100%, 100% 100%, 100% 7px,
        96% 0, 92% 7px, 88% 0, 84% 7px, 80% 0, 76% 7px, 72% 0, 68% 7px,
        64% 0, 60% 7px, 56% 0, 52% 7px, 48% 0, 44% 7px, 40% 0, 36% 7px,
        32% 0, 28% 7px, 24% 0, 20% 7px, 16% 0, 12% 7px, 8% 0, 4% 7px, 0 0);
}
.hstcg-pk-crimp.bot {
    bottom: 0;
    transition: transform 0.8s cubic-bezier(0.4, 0.1, 0.7, 1), opacity 0.8s;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7px),
        96% 100%, 92% calc(100% - 7px), 88% 100%, 84% calc(100% - 7px),
        80% 100%, 76% calc(100% - 7px), 72% 100%, 68% calc(100% - 7px),
        64% 100%, 60% calc(100% - 7px), 56% 100%, 52% calc(100% - 7px),
        48% 100%, 44% calc(100% - 7px), 40% 100%, 36% calc(100% - 7px),
        32% 100%, 28% calc(100% - 7px), 24% 100%, 20% calc(100% - 7px),
        16% 100%, 12% calc(100% - 7px), 8% 100%, 4% calc(100% - 7px), 0 100%);
}

/* tear strip (jagged lower edge) over the body (matching jagged top) */
.hstcg-pk-tab {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 46px;
    z-index: 4;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 78%,
        94% 100%, 87% 80%, 80% 98%, 73% 82%, 66% 100%, 59% 80%, 52% 96%,
        45% 80%, 38% 100%, 31% 82%, 24% 98%, 17% 80%, 10% 100%, 4% 84%, 0 92%);
}
.hstcg-pk-tab .hstcg-pk-art, .hstcg-pk-body .hstcg-pk-art {
    position: absolute;
    left: 0;
    top: 0;
    /* The art's near-black background must not paint behind the crimps'
       zigzag notches (outer 7px top/bottom) \u2014 it shows as a black margin
       around the foil when the window background is transparent. Everything
       in that band is either a notch gap or covered by solid crimp. */
    clip-path: inset(7px 0);
}
.hstcg-pk-body {
    position: absolute;
    inset: 0;
    z-index: 2;
    /* The body's jagged top edge sits ~3px ABOVE the tab's jagged bottom
       edge (0.3\u20131.3px was not enough: the hover scale(1.03) rasterizes the
       two layers with different subpixel rounding and a hairline gap opens
       along the tear line \u2014 glaring across the Merchant's bright awning).
       The overlap hides this edge under the opaque tab, so the tab's edge
       is the only visible tear line while sealed. */
    clip-path: polygon(0 38px, 4% 35px, 10% 43px, 17% 33px, 24% 41px,
        31% 34px, 38% 43px, 45% 33px, 52% 40px, 59% 33px, 66% 43px,
        73% 34px, 80% 41px, 87% 33px, 94% 43px, 100% 32px,
        100% 100%, 0 100%);
    transition: transform 0.8s cubic-bezier(0.4, 0.1, 0.7, 1), opacity 0.8s;
}

/* PULL & SNAP: slow strain upward, then the strip snaps off fast */
.hstcg-pk.pulling .hstcg-pk-tab {
    transform-origin: 50% 100%;
    animation: hstcg-tabpull 1.02s cubic-bezier(0.55, 0, 0.9, 0.4) forwards;
}
@keyframes hstcg-tabpull {
    0%   { transform: none; opacity: 1; }
    30%  { transform: translateY(-3px) rotate(-1.5deg); }
    58%  { transform: translateY(-7px) rotate(-4deg); }
    68%  { transform: translateY(-9px) rotate(-6deg) scaleY(1.06); }
    78%  { transform: translate(90px, -80px) rotate(30deg); opacity: 1; filter: blur(1px); }
    100% { transform: translate(280px, -150px) rotate(95deg); opacity: 0; filter: blur(2px); }
}
/* body strains with the pull (independent translate/scale props so this
   never fights the .opened drop transform) */
.hstcg-pk.pulling .hstcg-pk-body,
.hstcg-pk.pulling .hstcg-pk-crimp.bot { animation: hstcg-strain 1.02s ease; }
@keyframes hstcg-strain {
    0%   { translate: 0 0; scale: 1 1; }
    58%  { translate: 0 -4px; scale: 1 1.012; }
    68%  { translate: 0 -6px; scale: 1 1.018; }
    76%  { translate: 0 3px; scale: 1 0.995; }
    88%  { translate: 0 -1px; scale: 1 1.004; }
    100% { translate: 0 0; scale: 1 1; }
}
/* emptied wrapper falls away while the cards fountain out */
.hstcg-pk.opened .hstcg-pk-body,
.hstcg-pk.opened .hstcg-pk-crimp.bot {
    transform: translateY(300px) rotate(-7deg);
    opacity: 0;
}

/* snap flash + shreds */
.hstcg-pk-flash {
    position: absolute;
    left: 50%;
    top: 130px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
}
.hstcg-pk-flash.go { animation: hstcg-packflash 0.55s ease-out; }
@keyframes hstcg-packflash {
    0% { opacity: 0.95; box-shadow: 0 0 0 0 rgba(163, 34, 34, 0.6), 0 0 34px 14px rgba(208, 64, 64, 0.55); }
    100% { opacity: 0; box-shadow: 0 0 0 200px transparent, 0 0 80px 60px transparent; }
}
/* focus packs flash in their own foil colour */
.hstcg-packstage.k-creature .hstcg-pk-flash.go { animation-name: hstcg-packflash-cr; }
@keyframes hstcg-packflash-cr {
    0% { opacity: 0.95; box-shadow: 0 0 0 0 rgba(47, 158, 80, 0.6), 0 0 34px 14px rgba(84, 200, 118, 0.55); }
    100% { opacity: 0; box-shadow: 0 0 0 200px transparent, 0 0 80px 60px transparent; }
}
.hstcg-packstage.k-shopkeeper .hstcg-pk-flash.go { animation-name: hstcg-packflash-sk; }
@keyframes hstcg-packflash-sk {
    0% { opacity: 0.95; box-shadow: 0 0 0 0 rgba(63, 111, 212, 0.6), 0 0 34px 14px rgba(110, 150, 235, 0.55); }
    100% { opacity: 0; box-shadow: 0 0 0 200px transparent, 0 0 80px 60px transparent; }
}
.hstcg-shred {
    position: absolute;
    left: 50%;
    top: 48px;
    width: 8px;
    height: 4px;
    border-radius: 1px;
    opacity: 0;
    pointer-events: none;
}
.hstcg-shred.go { animation: hstcg-shredfly 0.7s ease-out forwards; }
@keyframes hstcg-shredfly {
    0% { opacity: 1; transform: none; }
    100% { opacity: 0; transform: translate(var(--sx), var(--sy)) rotate(var(--sr)); }
}

/* FOUNTAIN deal: cards launch up out of the pack with spin, then settle
   into their row slots. --fx/--fy = vector from a card's slot back to the
   pack (set inline per card); backwards-fill hides cards during stagger. */
.hstcg-flip.dealing {
    animation: hstcg-fountain 0.8s cubic-bezier(0.3, 0.5, 0.25, 1) backwards;
}
@keyframes hstcg-fountain {
    0% { transform: translate(var(--fx), var(--fy)) scale(0.55); opacity: 0; }
    12% { opacity: 1; }
    45% { transform: translate(calc(var(--fx) * 0.92), calc(var(--fy) - 280px)) rotate(var(--fr)) scale(0.85); }
    100% { transform: none; opacity: 1; }
}

/* ============================== pack shop ==============================
   Storefront shown when no pack is in flight: each product on a shelf
   card \u2014 sealed wrapper art (the real .hstcg-pk, scaled), name, blurb,
   price. Buying swaps the shop out for the reveal view. */
.hstcg-shophint { padding: 12px 16px 0; }
.hstcg-shop {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-content: flex-start;
    padding: 12px 16px 16px;
}
.hstcg-shopitem {
    width: 218px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    padding: 16px 14px;
    border-radius: 12px;
    border: 1px solid #2a2c33;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(0, 0, 0, 0.22));
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
}
.hstcg-shopitem.k-standard, .hstcg-shopitem.k-mega { --sh: #a32222; }
.hstcg-shopitem.k-creature { --sh: #2f9e50; }
.hstcg-shopitem.k-shopkeeper { --sh: #3f6fd4; }
.hstcg-shopitem:hover {
    transform: translateY(-4px);
    border-color: var(--sh);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
}
.hstcg-shopitem.poor { opacity: 0.55; cursor: default; }
.hstcg-shopitem.poor:hover {
    transform: none;
    border-color: #2a2c33;
    box-shadow: none;
}
/* the sealed pack at shelf size (210\xD7328 \u2192 \xD70.72). Shrunk with ZOOM, not
   transform: a resting fractional scale() is exactly the hover-scale bug
   again \u2014 the tear strip rasterizes then resamples and its clip-path AA
   fringe darkens into the hairline "black line" across the Merchant's
   awning. zoom rescales at layout time and paints clip edges once at
   final resolution, so nothing resamples. */
.hstcg-shoppk {
    position: relative;
    width: 152px;
    height: 236px;
}
.hstcg-pk.shelf {
    left: 0;
    top: 0;
    margin: 0;
    zoom: 0.72;
    pointer-events: none; /* clicks land on the shelf card */
    filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.55));
}
/* shelf \u2192 stage FLIP flight: the bought pack flies from its shelf to
   center stage, growing to full size. The transient fractional scale is
   fine here \u2014 the tear-line hairline rule is about RESTING
   states like hover; this ends at exactly scale(1). */
.hstcg-pk.flying {
    transition: transform 0.42s cubic-bezier(0.22, 0.8, 0.3, 1);
    pointer-events: none;
}
.hstcg-pk-hint { transition: opacity 0.3s; }
.hstcg-pk-hint.waiting { opacity: 0; }
/* the reveal view's bar eases in under the flight instead of popping */
.hstcg-packbar { animation: hstcg-fadein 0.35s ease; }
@keyframes hstcg-fadein { from { opacity: 0; } }
.hstcg-shopname {
    font: 700 15px system-ui;
    color: #e8e9ee;
}
.hstcg-shopblurb {
    font: 400 12px/1.45 system-ui;
    color: #9a9daa;
    text-align: center;
    min-height: 3.6em;
}

/* ============================ collection tab ============================ */

/* Collection tab: filters stay pinned, only the binder grid scrolls.
   Other tabs keep #hstcg-body as their scroller. The scroller is a plain
   block WRAPPER around the flex grid \u2014 putting overflow on the flex
   container itself makes Chromium paint content-visibility cells at stale
   positions in the gaps (ghost cards) during fast scrolls. */
#hstcg-body:has(> .hstcg-scrollhost) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.hstcg-scrollhost {
    flex: 1;
    min-height: 0;
    position: relative;
    display: flex;
}
.hstcg-binderwrap {
    flex: 1;
    min-width: 0;
    overflow-y: scroll;
    padding-left: 16px; /* side inset \u2014 see .hstcg-packbar note */
    padding-right: 18px; /* room for the plugin-drawn scrollbar */
    scrollbar-width: none; /* native bar hidden \u2014 we draw our own */
}
.hstcg-binderwrap::-webkit-scrollbar { display: none; }
/* generic tab scroller (packs, stats) \u2014 same treatment as the binder */
.hstcg-tabscroll {
    flex: 1;
    min-width: 0;
    overflow-y: scroll;
    padding-right: 18px;
    scrollbar-width: none; /* native bar hidden \u2014 we draw our own */
}
.hstcg-tabscroll::-webkit-scrollbar { display: none; }
/* plugin-drawn scrollbar (native overlay bars auto-hide and can't be styled) */
.hstcg-sbtrack {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 10px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 5px;
}
.hstcg-sbthumb {
    position: absolute;
    left: 0;
    right: 0;
    background: #5a6170;
    border-radius: 5px;
    min-height: 30px;
    cursor: pointer;
}
.hstcg-sbthumb:hover, .hstcg-sbthumb.drag { background: #707a8c; }
.hstcg-filters {
    flex: none;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 16px 12px; /* side inset \u2014 see .hstcg-packbar note */
}
.hstcg-filters input[type="text"],
.hstcg-filters select {
    background: var(--hstcg-row);
    color: var(--hstcg-text);
    font: 500 13px/1.2 system-ui;
    border: 1px solid var(--hstcg-border);
    border-radius: 6px;
    padding: 7px 10px;
    outline: none;
}
.hstcg-filters input[type="text"] { width: 180px; }
.hstcg-filters input[type="text"]:focus,
.hstcg-filters select:focus { border-color: #7a86b8; }
.hstcg-foilcheck {
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--hstcg-row);
    border: 1px solid var(--hstcg-border);
    border-radius: 6px;
    padding: 7px 10px;
    font: 500 13px/1.2 system-ui;
    cursor: pointer;
    user-select: none;
}
.hstcg-foilcheck input { margin: 0; cursor: pointer; }

/* full-width section header rows inside the binder grid \u2014 click to collapse */
.hstcg-group-header {
    flex: 1 0 100%;
    font: 700 15px/1.2 system-ui;
    border-bottom: 1px solid var(--hstcg-border);
    padding: 8px 2px 6px;
    margin-top: 6px;
    cursor: pointer;
    user-select: none;
}
.hstcg-group-header:first-child { margin-top: 0; }
.hstcg-group-header:hover { color: #fff; }
.hstcg-group-header span {
    color: var(--hstcg-dim);
    font-weight: 600;
    font-size: 13px;
}
.hstcg-group-header .tw {
    display: inline-block;
    width: 18px;
    color: var(--hstcg-dim);
    font-size: 12px;
}
.hstcg-group-header.closed { opacity: 0.75; }

.hstcg-binder {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-content: flex-start;
}
/* One grid for the whole set: the CELL (sized to the card's visual footprint)
   skips layout/paint off-screen. content-visibility must stay off .hstcg-scale
   itself \u2014 its paint containment would clip the pre-transform card overflow. */
.hstcg-binder .hstcg-cell {
    flex: none;
    content-visibility: auto;
}
.hstcg-binder .hstcg-scale { cursor: pointer; }
.hstcg-binder .hstcg-scale:hover { filter: brightness(1.12); }

/* ============================ stats tab ============================ */

.hstcg-stats { display: flex; flex-direction: column; gap: 18px; max-width: 560px; }
.hstcg-statrow {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font: 600 13px/1.3 system-ui;
}
.hstcg-statrow .v { color: #ffd76e; }
.hstcg-bar {
    height: 8px;
    border-radius: 999px;
    background: var(--hstcg-row);
    overflow: hidden;
    border: 1px solid var(--hstcg-border);
}
.hstcg-bar > div { height: 100%; border-radius: 999px; }

/* ============================ detail modal ============================ */

#hstcg-modal {
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.55);
}
#hstcg-modal .hstcg-modal-box {
    display: flex;
    gap: 22px;
    align-items: center;
    background: var(--hstcg-panel);
    border: 1px solid var(--hstcg-border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.7);
}
#hstcg-modal .hstcg-modal-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 170px;
    max-width: 240px;
    font: 500 13px/1.5 system-ui;
}
#hstcg-modal .hstcg-modal-meta h3 {
    margin: 0;
    font: 700 16px/1.2 Georgia, serif;
    text-transform: capitalize;
}

/* In-overlay confirm dialog \u2014 browser confirm() looks too web-popup in-game */
#hstcg-confirm {
    position: fixed;
    inset: 0;
    z-index: 3600; /* above the card detail modal */
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.55);
}
#hstcg-confirm .hstcg-confirm-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 380px;
    background: var(--hstcg-panel);
    border: 1px solid var(--hstcg-border);
    border-radius: 12px;
    padding: 20px 22px;
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.7);
    font: 500 14px/1.5 system-ui;
    color: var(--hstcg-text);
}
#hstcg-confirm .hstcg-confirm-btns {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

/* ============== Cardman exclusion picker (settings button) ==============
   Opens over the game even with the TCG window hidden, so it's a fixed
   backdrop like the confirm dialog. */
#hstcg-excl {
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.55);
}
#hstcg-excl .hstcg-excl-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 440px;
    max-height: 82vh;
    background: var(--hstcg-panel);
    border: 1px solid var(--hstcg-border);
    border-radius: 12px;
    padding: 20px 22px;
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.7);
    font: 500 13px/1.5 system-ui;
    color: var(--hstcg-text);
}
#hstcg-excl h3 { margin: 0; font: 700 16px/1.2 Georgia, serif; }
#hstcg-excl-search {
    background: var(--hstcg-row);
    color: var(--hstcg-text);
    font: 500 13px/1.2 system-ui;
    border: 1px solid var(--hstcg-border);
    border-radius: 6px;
    padding: 7px 10px;
    outline: none;
}
#hstcg-excl-search:focus { border-color: #7a86b8; }
/* search results \u2014 only in the DOM flow while a query is typed */
#hstcg-excl-results {
    max-height: 260px;
    overflow: auto;
    border: 1px solid var(--hstcg-border);
    border-radius: 6px;
}
#hstcg-excl-results[hidden] { display: none; }
.hstcg-excl-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 6px 10px;
    cursor: pointer;
}
.hstcg-excl-row:hover { background: rgba(255, 255, 255, 0.06); }
.hstcg-excl-row .ids { color: var(--hstcg-dim); font-size: 11px; }
.hstcg-excl-row.on { color: #8fd79a; }
.hstcg-excl-row.on .ids::after { content: " \u2713"; color: #8fd79a; }
.hstcg-excl-none { padding: 8px 10px; }
#hstcg-excl-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    max-height: 120px;
    overflow: auto;
}
.hstcg-excl-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--hstcg-row);
    border: 1px solid var(--hstcg-border);
    border-radius: 999px;
    padding: 5px 11px;
    cursor: pointer;
    font: 600 12px/1 system-ui;
    color: var(--hstcg-text);
}
.hstcg-excl-pill b { color: var(--hstcg-dim); }
.hstcg-excl-pill:hover { border-color: #a05656; }
.hstcg-excl-pill:hover b { color: #e07a7a; }

/* ------------------------------------------------------- settings header
   The framework's \`info\`-type setting renders as a centered blue banner
   with hard-coded inline styles. Override them (same trick as
   QuickDeposit's subtitle headers) so the "Careful below this" divider
   above the legacy/reset buttons reads as a quiet label, not a button. */
#highlite-settings-content-row-dangerHeader {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 12px 4px 0 4px !important;
    transition: none !important;
}
#highlite-settings-content-row-dangerHeader > div {
    padding: 0 !important;
    border: none !important;
    background: transparent !important;
    border-radius: 0 !important;
    text-align: left !important;
    box-shadow: none !important;
    gap: 0 !important;
}
#highlite-settings-content-row-dangerHeader > div > div:first-child {
    font-weight: 700 !important;
    font-size: 20px !important;
    color: #d0d0d0 !important;
    margin: 0 !important;
    padding: 0 !important;
    text-align: left !important;
}
#highlite-settings-content-row-dangerHeader > div > div:last-child {
    display: none !important;
}

/* "Collect legacy points" after it's been used: drawn as spent, but the
   button stays clickable so the "already collected" toast can explain
   itself. The class on <html> is synced by syncLegacyClaimedLook();
   !important beats the settings panel's inline styles (incl. hover). */
html.hstcg-legacy-claimed #highlite-settings-content-row-collectLegacy button {
    background: var(--theme-background-mute) !important;
    border: 1px solid var(--theme-border) !important;
    color: var(--theme-text-muted) !important;
    box-shadow: none !important;
    cursor: not-allowed !important;
    opacity: 0.55 !important;
    transform: none !important;
}
`;

// tools/item-cards.json
var item_cards_default = [
  {
    card: 1,
    name: "unknown item",
    defIds: [
      1
    ],
    idsDisplay: "1",
    rarity: "common"
  },
  {
    card: 2,
    name: "raw bass",
    defIds: [
      2
    ],
    idsDisplay: "2",
    rarity: "common"
  },
  {
    card: 3,
    name: "bass",
    defIds: [
      3
    ],
    idsDisplay: "3",
    rarity: "common"
  },
  {
    card: 4,
    name: "raw bluegill",
    defIds: [
      4
    ],
    idsDisplay: "4",
    rarity: "common"
  },
  {
    card: 5,
    name: "bluegill",
    defIds: [
      5
    ],
    idsDisplay: "5",
    rarity: "common"
  },
  {
    card: 6,
    name: "coins",
    defIds: [
      6
    ],
    idsDisplay: "6",
    rarity: "common"
  },
  {
    card: 7,
    name: "basic rod",
    defIds: [
      7
    ],
    idsDisplay: "7",
    rarity: "common"
  },
  {
    card: 8,
    name: "great rod",
    defIds: [
      8
    ],
    idsDisplay: "8",
    rarity: "uncommon"
  },
  {
    card: 9,
    name: "ultra rod",
    defIds: [
      9
    ],
    idsDisplay: "9",
    rarity: "rare"
  },
  {
    card: 10,
    name: "master rod",
    defIds: [
      10
    ],
    idsDisplay: "10",
    rarity: "epic"
  },
  {
    card: 11,
    name: "raw stingray",
    defIds: [
      11
    ],
    idsDisplay: "11",
    rarity: "uncommon"
  },
  {
    card: 12,
    name: "stingray",
    defIds: [
      12
    ],
    idsDisplay: "12",
    rarity: "uncommon"
  },
  {
    card: 13,
    name: "raw crab",
    defIds: [
      13
    ],
    idsDisplay: "13",
    rarity: "uncommon"
  },
  {
    card: 14,
    name: "crab",
    defIds: [
      14
    ],
    idsDisplay: "14",
    rarity: "uncommon"
  },
  {
    card: 15,
    name: "raw clownfish",
    defIds: [
      15
    ],
    idsDisplay: "15",
    rarity: "common"
  },
  {
    card: 16,
    name: "clownfish",
    defIds: [
      16
    ],
    idsDisplay: "16",
    rarity: "common"
  },
  {
    card: 17,
    name: "raw marlin",
    defIds: [
      17
    ],
    idsDisplay: "17",
    rarity: "uncommon"
  },
  {
    card: 18,
    name: "marlin",
    defIds: [
      18
    ],
    idsDisplay: "18",
    rarity: "rare"
  },
  {
    card: 19,
    name: "raw whaleshark",
    defIds: [
      19
    ],
    idsDisplay: "19",
    rarity: "epic"
  },
  {
    card: 20,
    name: "whaleshark",
    defIds: [
      20
    ],
    idsDisplay: "20",
    rarity: "epic"
  },
  {
    card: 21,
    name: "raw tuna",
    defIds: [
      21
    ],
    idsDisplay: "21",
    rarity: "uncommon"
  },
  {
    card: 22,
    name: "tuna",
    defIds: [
      22
    ],
    idsDisplay: "22",
    rarity: "uncommon"
  },
  {
    card: 23,
    name: "raw octopus",
    defIds: [
      23
    ],
    idsDisplay: "23",
    rarity: "epic"
  },
  {
    card: 24,
    name: "octopus",
    defIds: [
      24
    ],
    idsDisplay: "24",
    rarity: "epic"
  },
  {
    card: 25,
    name: "raw salmon",
    defIds: [
      25
    ],
    idsDisplay: "25",
    rarity: "common"
  },
  {
    card: 26,
    name: "salmon",
    defIds: [
      26
    ],
    idsDisplay: "26",
    rarity: "common"
  },
  {
    card: 27,
    name: "raw piranha",
    defIds: [
      27
    ],
    idsDisplay: "27",
    rarity: "common"
  },
  {
    card: 28,
    name: "piranha",
    defIds: [
      28
    ],
    idsDisplay: "28",
    rarity: "common"
  },
  {
    card: 29,
    name: "raw koi",
    defIds: [
      29
    ],
    idsDisplay: "29",
    rarity: "common"
  },
  {
    card: 30,
    name: "koi",
    defIds: [
      30
    ],
    idsDisplay: "30",
    rarity: "common"
  },
  {
    card: 31,
    name: "raw turtle",
    defIds: [
      31
    ],
    idsDisplay: "31",
    rarity: "uncommon"
  },
  {
    card: 32,
    name: "turtle",
    defIds: [
      32
    ],
    idsDisplay: "32",
    rarity: "rare"
  },
  {
    card: 33,
    name: "raw carp",
    defIds: [
      33
    ],
    idsDisplay: "33",
    rarity: "common"
  },
  {
    card: 34,
    name: "carp",
    defIds: [
      34
    ],
    idsDisplay: "34",
    rarity: "common"
  },
  {
    card: 35,
    name: "raw walleye",
    defIds: [
      35
    ],
    idsDisplay: "35",
    rarity: "common"
  },
  {
    card: 36,
    name: "walleye",
    defIds: [
      36
    ],
    idsDisplay: "36",
    rarity: "common"
  },
  {
    card: 37,
    name: "raw frog",
    defIds: [
      37
    ],
    idsDisplay: "37",
    rarity: "uncommon"
  },
  {
    card: 38,
    name: "frog",
    defIds: [
      38
    ],
    idsDisplay: "38",
    rarity: "uncommon"
  },
  {
    card: 39,
    name: "bones",
    defIds: [
      39
    ],
    idsDisplay: "39",
    rarity: "common"
  },
  {
    card: 40,
    name: "bronze chestplate",
    defIds: [
      40
    ],
    idsDisplay: "40",
    rarity: "common"
  },
  {
    card: 41,
    name: "bronze platelegs",
    defIds: [
      41
    ],
    idsDisplay: "41",
    rarity: "common"
  },
  {
    card: 42,
    name: "steel chestplate",
    defIds: [
      42
    ],
    idsDisplay: "42",
    rarity: "common"
  },
  {
    card: 43,
    name: "steel platelegs",
    defIds: [
      43
    ],
    idsDisplay: "43",
    rarity: "common"
  },
  {
    card: 44,
    name: "palladium chestplate",
    defIds: [
      44
    ],
    idsDisplay: "44",
    rarity: "uncommon"
  },
  {
    card: 45,
    name: "palladium platelegs",
    defIds: [
      45
    ],
    idsDisplay: "45",
    rarity: "uncommon"
  },
  {
    card: 46,
    name: "coronium chestplate",
    defIds: [
      46
    ],
    idsDisplay: "46",
    rarity: "rare"
  },
  {
    card: 47,
    name: "coronium platelegs",
    defIds: [
      47
    ],
    idsDisplay: "47",
    rarity: "rare"
  },
  {
    card: 48,
    name: "palladium ore",
    defIds: [
      48
    ],
    idsDisplay: "48",
    rarity: "uncommon"
  },
  {
    card: 49,
    name: "copper ore",
    defIds: [
      49
    ],
    idsDisplay: "49",
    rarity: "common"
  },
  {
    card: 50,
    name: "tin ore",
    defIds: [
      50
    ],
    idsDisplay: "50",
    rarity: "common"
  },
  {
    card: 51,
    name: "coronium ore",
    defIds: [
      51
    ],
    idsDisplay: "51",
    rarity: "rare"
  },
  {
    card: 52,
    name: "bronze helm",
    defIds: [
      52
    ],
    idsDisplay: "52",
    rarity: "common"
  },
  {
    card: 53,
    name: "steel helm",
    defIds: [
      53
    ],
    idsDisplay: "53",
    rarity: "common"
  },
  {
    card: 54,
    name: "palladium helm",
    defIds: [
      54
    ],
    idsDisplay: "54",
    rarity: "uncommon"
  },
  {
    card: 55,
    name: "coronium helm",
    defIds: [
      55
    ],
    idsDisplay: "55",
    rarity: "uncommon"
  },
  {
    card: 56,
    name: "bronze battleaxe",
    defIds: [
      56
    ],
    idsDisplay: "56",
    rarity: "common"
  },
  {
    card: 57,
    name: "iron battleaxe",
    defIds: [
      57
    ],
    idsDisplay: "57",
    rarity: "common"
  },
  {
    card: 58,
    name: "bronze longsword",
    defIds: [
      58
    ],
    idsDisplay: "58",
    rarity: "common"
  },
  {
    card: 59,
    name: "iron longsword",
    defIds: [
      59
    ],
    idsDisplay: "59",
    rarity: "common"
  },
  {
    card: 60,
    name: "steel longsword",
    defIds: [
      60
    ],
    idsDisplay: "60",
    rarity: "common"
  },
  {
    card: 61,
    name: "palladium longsword",
    defIds: [
      61
    ],
    idsDisplay: "61",
    rarity: "uncommon"
  },
  {
    card: 62,
    name: "coronium longsword",
    defIds: [
      62
    ],
    idsDisplay: "62",
    rarity: "rare"
  },
  {
    card: 63,
    name: "steel battleaxe",
    defIds: [
      63
    ],
    idsDisplay: "63",
    rarity: "common"
  },
  {
    card: 64,
    name: "logs",
    defIds: [
      64
    ],
    idsDisplay: "64",
    rarity: "common"
  },
  {
    card: 65,
    name: "pine logs",
    defIds: [
      65
    ],
    idsDisplay: "65",
    rarity: "uncommon"
  },
  {
    card: 66,
    name: "oak logs",
    defIds: [
      66
    ],
    idsDisplay: "66",
    rarity: "uncommon"
  },
  {
    card: 67,
    name: "palm logs",
    defIds: [
      67
    ],
    idsDisplay: "67",
    rarity: "uncommon"
  },
  {
    card: 68,
    name: "cherry logs",
    defIds: [
      68
    ],
    idsDisplay: "68",
    rarity: "uncommon"
  },
  {
    card: 69,
    name: "money bag",
    defIds: [
      69
    ],
    idsDisplay: "69",
    rarity: "uncommon"
  },
  {
    card: 70,
    name: "bronze bar",
    defIds: [
      70
    ],
    idsDisplay: "70",
    rarity: "common"
  },
  {
    card: 71,
    name: "silver bar",
    defIds: [
      71
    ],
    idsDisplay: "71",
    rarity: "uncommon"
  },
  {
    card: 72,
    name: "gold bar",
    defIds: [
      72
    ],
    idsDisplay: "72",
    rarity: "uncommon"
  },
  {
    card: 73,
    name: "bronze pickaxe",
    defIds: [
      73
    ],
    idsDisplay: "73",
    rarity: "common"
  },
  {
    card: 74,
    name: "iron pickaxe",
    defIds: [
      74
    ],
    idsDisplay: "74",
    rarity: "common"
  },
  {
    card: 75,
    name: "steel pickaxe",
    defIds: [
      75
    ],
    idsDisplay: "75",
    rarity: "common"
  },
  {
    card: 76,
    name: "palladium pickaxe",
    defIds: [
      76
    ],
    idsDisplay: "76",
    rarity: "uncommon"
  },
  {
    card: 77,
    name: "coronium pickaxe",
    defIds: [
      77
    ],
    idsDisplay: "77",
    rarity: "rare"
  },
  {
    card: 78,
    name: "palladium battleaxe",
    defIds: [
      78
    ],
    idsDisplay: "78",
    rarity: "uncommon"
  },
  {
    card: 79,
    name: "iron ore",
    defIds: [
      79
    ],
    idsDisplay: "79",
    rarity: "uncommon"
  },
  {
    card: 80,
    name: "amethyst gem",
    defIds: [
      80
    ],
    idsDisplay: "80",
    rarity: "common"
  },
  {
    card: 81,
    name: "sapphire gem",
    defIds: [
      81
    ],
    idsDisplay: "81",
    rarity: "common"
  },
  {
    card: 82,
    name: "emerald gem",
    defIds: [
      82
    ],
    idsDisplay: "82",
    rarity: "common"
  },
  {
    card: 83,
    name: "topaz gem",
    defIds: [
      83
    ],
    idsDisplay: "83",
    rarity: "common"
  },
  {
    card: 84,
    name: "citrine gem",
    defIds: [
      84
    ],
    idsDisplay: "84",
    rarity: "common"
  },
  {
    card: 85,
    name: "ruby gem",
    defIds: [
      85
    ],
    idsDisplay: "85",
    rarity: "rare"
  },
  {
    card: 86,
    name: "diamond gem",
    defIds: [
      86
    ],
    idsDisplay: "86",
    rarity: "rare"
  },
  {
    card: 87,
    name: "carbonado gem",
    defIds: [
      87
    ],
    idsDisplay: "87",
    rarity: "epic"
  },
  {
    card: 88,
    name: "uranium ore",
    defIds: [
      88
    ],
    idsDisplay: "88",
    rarity: "legendary"
  },
  {
    card: 89,
    name: "silver nugget",
    defIds: [
      89
    ],
    idsDisplay: "89",
    rarity: "common"
  },
  {
    card: 90,
    name: "gold nugget",
    defIds: [
      90
    ],
    idsDisplay: "90",
    rarity: "uncommon"
  },
  {
    card: 91,
    name: "cyclops eye",
    defIds: [
      91
    ],
    idsDisplay: "91",
    rarity: "epic"
  },
  {
    card: 92,
    name: "bronze gloves",
    defIds: [
      92
    ],
    idsDisplay: "92",
    rarity: "common"
  },
  {
    card: 93,
    name: "steel gloves",
    defIds: [
      93
    ],
    idsDisplay: "93",
    rarity: "common"
  },
  {
    card: 94,
    name: "palladium gloves",
    defIds: [
      94
    ],
    idsDisplay: "94",
    rarity: "uncommon"
  },
  {
    card: 95,
    name: "coronium gloves",
    defIds: [
      95
    ],
    idsDisplay: "95",
    rarity: "rare"
  },
  {
    card: 96,
    name: "coronium battleaxe",
    defIds: [
      96
    ],
    idsDisplay: "96",
    rarity: "uncommon"
  },
  {
    card: 97,
    name: "bronze great sword",
    defIds: [
      97
    ],
    idsDisplay: "97",
    rarity: "common"
  },
  {
    card: 98,
    name: "potato",
    defIds: [
      98
    ],
    idsDisplay: "98",
    rarity: "common"
  },
  {
    card: 99,
    name: "wheat",
    defIds: [
      99
    ],
    idsDisplay: "99",
    rarity: "common"
  },
  {
    card: 100,
    name: "corn",
    defIds: [
      100
    ],
    idsDisplay: "100",
    rarity: "common"
  },
  {
    card: 101,
    name: "tomato",
    defIds: [
      101
    ],
    idsDisplay: "101",
    rarity: "common"
  },
  {
    card: 102,
    name: "onion",
    defIds: [
      102
    ],
    idsDisplay: "102",
    rarity: "common"
  },
  {
    card: 103,
    name: "strawberry",
    defIds: [
      103
    ],
    idsDisplay: "103",
    rarity: "uncommon"
  },
  {
    card: 104,
    name: "watermelon",
    defIds: [
      104
    ],
    idsDisplay: "104",
    rarity: "common"
  },
  {
    card: 105,
    name: "pumpkin",
    defIds: [
      105
    ],
    idsDisplay: "105",
    rarity: "common"
  },
  {
    card: 106,
    name: "grapes",
    defIds: [
      106
    ],
    idsDisplay: "106",
    rarity: "uncommon"
  },
  {
    card: 107,
    name: "rose",
    defIds: [
      107
    ],
    idsDisplay: "107",
    rarity: "legendary"
  },
  {
    card: 108,
    name: "pinecone",
    defIds: [
      108
    ],
    idsDisplay: "108",
    rarity: "common"
  },
  {
    card: 109,
    name: "golden pinecone",
    defIds: [
      109
    ],
    idsDisplay: "109",
    rarity: "epic"
  },
  {
    card: 110,
    name: "acorn",
    defIds: [
      110
    ],
    idsDisplay: "110",
    rarity: "common"
  },
  {
    card: 111,
    name: "golden acorn",
    defIds: [
      111
    ],
    idsDisplay: "111",
    rarity: "epic"
  },
  {
    card: 112,
    name: "leaf",
    defIds: [
      112
    ],
    idsDisplay: "112",
    rarity: "common"
  },
  {
    card: 113,
    name: "golden leaf",
    defIds: [
      113
    ],
    idsDisplay: "113",
    rarity: "epic"
  },
  {
    card: 114,
    name: "coconut",
    defIds: [
      114
    ],
    idsDisplay: "114",
    rarity: "common"
  },
  {
    card: 115,
    name: "golden coconut",
    defIds: [
      115
    ],
    idsDisplay: "115",
    rarity: "epic"
  },
  {
    card: 116,
    name: "cherry blossom",
    defIds: [
      116
    ],
    idsDisplay: "116",
    rarity: "rare"
  },
  {
    card: 117,
    name: "golden blossom",
    defIds: [
      117
    ],
    idsDisplay: "117",
    rarity: "epic"
  },
  {
    card: 118,
    name: "iron chestplate",
    defIds: [
      118
    ],
    idsDisplay: "118",
    rarity: "common"
  },
  {
    card: 119,
    name: "iron platelegs",
    defIds: [
      119
    ],
    idsDisplay: "119",
    rarity: "common"
  },
  {
    card: 120,
    name: "iron helm",
    defIds: [
      120
    ],
    idsDisplay: "120",
    rarity: "common"
  },
  {
    card: 121,
    name: "iron gloves",
    defIds: [
      121
    ],
    idsDisplay: "121",
    rarity: "common"
  },
  {
    card: 122,
    name: "bronze full helm",
    defIds: [
      122
    ],
    idsDisplay: "122",
    rarity: "common"
  },
  {
    card: 123,
    name: "steel full helm",
    defIds: [
      123
    ],
    idsDisplay: "123",
    rarity: "common"
  },
  {
    card: 124,
    name: "palladium full helm",
    defIds: [
      124
    ],
    idsDisplay: "124",
    rarity: "uncommon"
  },
  {
    card: 125,
    name: "coronium full helm",
    defIds: [
      125
    ],
    idsDisplay: "125",
    rarity: "rare"
  },
  {
    card: 126,
    name: "iron great sword",
    defIds: [
      126
    ],
    idsDisplay: "126",
    rarity: "common"
  },
  {
    card: 127,
    name: "steel great sword",
    defIds: [
      127
    ],
    idsDisplay: "127",
    rarity: "common"
  },
  {
    card: 128,
    name: "iron full helm",
    defIds: [
      128
    ],
    idsDisplay: "128",
    rarity: "common"
  },
  {
    card: 129,
    name: "red cape",
    defIds: [
      129
    ],
    idsDisplay: "129",
    rarity: "common"
  },
  {
    card: 130,
    name: "blue cape",
    defIds: [
      130
    ],
    idsDisplay: "130",
    rarity: "common"
  },
  {
    card: 131,
    name: "green cape",
    defIds: [
      131
    ],
    idsDisplay: "131",
    rarity: "common"
  },
  {
    card: 132,
    name: "black cape",
    defIds: [
      132
    ],
    idsDisplay: "132",
    rarity: "common"
  },
  {
    card: 133,
    name: "orange cape",
    defIds: [
      133
    ],
    idsDisplay: "133",
    rarity: "common"
  },
  {
    card: 134,
    name: "yellow cape",
    defIds: [
      134
    ],
    idsDisplay: "134",
    rarity: "common"
  },
  {
    card: 135,
    name: "purple cape",
    defIds: [
      135
    ],
    idsDisplay: "135",
    rarity: "uncommon"
  },
  {
    card: 136,
    name: "bandit mask",
    defIds: [
      136
    ],
    idsDisplay: "136",
    rarity: "uncommon"
  },
  {
    card: 137,
    name: "black leather gloves",
    defIds: [
      137
    ],
    idsDisplay: "137",
    rarity: "uncommon"
  },
  {
    card: 138,
    name: "coronium full helm (gold plating)",
    defIds: [
      138
    ],
    idsDisplay: "138",
    rarity: "rare"
  },
  {
    card: 139,
    name: "coronium chestplate (gold plating)",
    defIds: [
      139
    ],
    idsDisplay: "139",
    rarity: "rare"
  },
  {
    card: 140,
    name: "coronium platelegs (gold plating)",
    defIds: [
      140
    ],
    idsDisplay: "140",
    rarity: "rare"
  },
  {
    card: 141,
    name: "coronium helm (gold plating)",
    defIds: [
      141
    ],
    idsDisplay: "141",
    rarity: "rare"
  },
  {
    card: 142,
    name: "coal",
    defIds: [
      142
    ],
    idsDisplay: "142",
    rarity: "uncommon"
  },
  {
    card: 143,
    name: "steel bar",
    defIds: [
      143
    ],
    idsDisplay: "143",
    rarity: "common"
  },
  {
    card: 144,
    name: "palladium bar",
    defIds: [
      144
    ],
    idsDisplay: "144",
    rarity: "uncommon"
  },
  {
    card: 145,
    name: "coronium bar",
    defIds: [
      145
    ],
    idsDisplay: "145",
    rarity: "rare"
  },
  {
    card: 146,
    name: "palladium great sword",
    defIds: [
      146
    ],
    idsDisplay: "146",
    rarity: "uncommon"
  },
  {
    card: 147,
    name: "coronium great sword",
    defIds: [
      147
    ],
    idsDisplay: "147",
    rarity: "uncommon"
  },
  {
    card: 148,
    name: "iron bar",
    defIds: [
      148
    ],
    idsDisplay: "148",
    rarity: "uncommon"
  },
  {
    card: 149,
    name: "scroll",
    defIds: [
      149
    ],
    idsDisplay: "149",
    rarity: "common"
  },
  {
    card: 150,
    name: "pine scroll",
    defIds: [
      150
    ],
    idsDisplay: "150",
    rarity: "uncommon"
  },
  {
    card: 151,
    name: "oak scroll",
    defIds: [
      151
    ],
    idsDisplay: "151",
    rarity: "uncommon"
  },
  {
    card: 152,
    name: "palm scroll",
    defIds: [
      152
    ],
    idsDisplay: "152",
    rarity: "uncommon"
  },
  {
    card: 153,
    name: "sakura scroll",
    defIds: [
      153
    ],
    idsDisplay: "153",
    rarity: "rare"
  },
  {
    card: 154,
    name: "chisel",
    defIds: [
      154
    ],
    idsDisplay: "154",
    rarity: "common"
  },
  {
    card: 155,
    name: "hammer",
    defIds: [
      155
    ],
    idsDisplay: "155",
    rarity: "common"
  },
  {
    card: 156,
    name: "empty glass",
    defIds: [
      156
    ],
    idsDisplay: "156",
    rarity: "common"
  },
  {
    card: 157,
    name: "glass of water",
    defIds: [
      157
    ],
    idsDisplay: "157",
    rarity: "common"
  },
  {
    card: 158,
    name: "unheated mash",
    defIds: [
      158
    ],
    idsDisplay: "158",
    rarity: "common"
  },
  {
    card: 159,
    name: "beer",
    defIds: [
      159,
      160
    ],
    idsDisplay: "159\u2192160",
    rarity: "common"
  },
  {
    card: 161,
    name: "mt. tan dew",
    defIds: [
      161
    ],
    idsDisplay: "161",
    rarity: "rare"
  },
  {
    card: 162,
    name: "unheated dew mash",
    defIds: [
      162
    ],
    idsDisplay: "162",
    rarity: "rare"
  },
  {
    card: 163,
    name: "dew beer",
    defIds: [
      163,
      164
    ],
    idsDisplay: "163\u2192164",
    rarity: "rare"
  },
  {
    card: 165,
    name: "giant's milk",
    defIds: [
      165,
      166
    ],
    idsDisplay: "165\u2192166",
    rarity: "rare"
  },
  {
    card: 167,
    name: "pestle and mortar",
    defIds: [
      167
    ],
    idsDisplay: "167",
    rarity: "common"
  },
  {
    card: 168,
    name: "bone meal",
    defIds: [
      168
    ],
    idsDisplay: "168",
    rarity: "uncommon"
  },
  {
    card: 169,
    name: "calcium brew",
    defIds: [
      169,
      170
    ],
    idsDisplay: "169\u2192170",
    rarity: "uncommon"
  },
  {
    card: 171,
    name: "coronium full helm (silver plating)",
    defIds: [
      171
    ],
    idsDisplay: "171",
    rarity: "rare"
  },
  {
    card: 172,
    name: "coronium chestplate (silver plating)",
    defIds: [
      172
    ],
    idsDisplay: "172",
    rarity: "rare"
  },
  {
    card: 173,
    name: "coronium platelegs (silver plating)",
    defIds: [
      173
    ],
    idsDisplay: "173",
    rarity: "rare"
  },
  {
    card: 174,
    name: "coronium helm (silver plating)",
    defIds: [
      174
    ],
    idsDisplay: "174",
    rarity: "rare"
  },
  {
    card: 175,
    name: "fire scroll",
    defIds: [
      175
    ],
    idsDisplay: "175",
    rarity: "common"
  },
  {
    card: 176,
    name: "water scroll",
    defIds: [
      176
    ],
    idsDisplay: "176",
    rarity: "common"
  },
  {
    card: 177,
    name: "nature scroll",
    defIds: [
      177
    ],
    idsDisplay: "177",
    rarity: "common"
  },
  {
    card: 178,
    name: "fury scroll",
    defIds: [
      178
    ],
    idsDisplay: "178",
    rarity: "uncommon"
  },
  {
    card: 179,
    name: "rage scroll",
    defIds: [
      179
    ],
    idsDisplay: "179",
    rarity: "rare"
  },
  {
    card: 180,
    name: "energy scroll",
    defIds: [
      180
    ],
    idsDisplay: "180",
    rarity: "uncommon"
  },
  {
    card: 181,
    name: "warp scroll",
    defIds: [
      181
    ],
    idsDisplay: "181",
    rarity: "rare"
  },
  {
    card: 182,
    name: "lucky logs",
    defIds: [
      182
    ],
    idsDisplay: "182",
    rarity: "uncommon"
  },
  {
    card: 183,
    name: "lucky scroll",
    defIds: [
      183
    ],
    idsDisplay: "183",
    rarity: "rare"
  },
  {
    card: 184,
    name: "alchemy scroll",
    defIds: [
      184
    ],
    idsDisplay: "184",
    rarity: "rare"
  },
  {
    card: 185,
    name: "bronze shield",
    defIds: [
      185
    ],
    idsDisplay: "185",
    rarity: "common"
  },
  {
    card: 186,
    name: "steel shield",
    defIds: [
      186
    ],
    idsDisplay: "186",
    rarity: "common"
  },
  {
    card: 187,
    name: "palladium shield",
    defIds: [
      187
    ],
    idsDisplay: "187",
    rarity: "uncommon"
  },
  {
    card: 188,
    name: "coronium shield",
    defIds: [
      188
    ],
    idsDisplay: "188",
    rarity: "rare"
  },
  {
    card: 189,
    name: "flour",
    defIds: [
      189
    ],
    idsDisplay: "189",
    rarity: "common"
  },
  {
    card: 190,
    name: "giant bones",
    defIds: [
      190
    ],
    idsDisplay: "190",
    rarity: "uncommon"
  },
  {
    card: 191,
    name: "iron shield",
    defIds: [
      191
    ],
    idsDisplay: "191",
    rarity: "common"
  },
  {
    card: 192,
    name: "coronium shield (gold plating)",
    defIds: [
      192
    ],
    idsDisplay: "192",
    rarity: "rare"
  },
  {
    card: 193,
    name: "coronium shield (silver plating)",
    defIds: [
      193
    ],
    idsDisplay: "193",
    rarity: "rare"
  },
  {
    card: 194,
    name: "amethyst necklace",
    defIds: [
      194
    ],
    idsDisplay: "194",
    rarity: "common"
  },
  {
    card: 195,
    name: "sapphire necklace",
    defIds: [
      195
    ],
    idsDisplay: "195",
    rarity: "common"
  },
  {
    card: 196,
    name: "emerald necklace",
    defIds: [
      196
    ],
    idsDisplay: "196",
    rarity: "common"
  },
  {
    card: 197,
    name: "topaz necklace",
    defIds: [
      197
    ],
    idsDisplay: "197",
    rarity: "common"
  },
  {
    card: 198,
    name: "citrine necklace",
    defIds: [
      198
    ],
    idsDisplay: "198",
    rarity: "common"
  },
  {
    card: 199,
    name: "ruby necklace",
    defIds: [
      199
    ],
    idsDisplay: "199",
    rarity: "common"
  },
  {
    card: 200,
    name: "diamond necklace",
    defIds: [
      200
    ],
    idsDisplay: "200",
    rarity: "common"
  },
  {
    card: 201,
    name: "robe top",
    defIds: [
      201
    ],
    idsDisplay: "201",
    rarity: "common"
  },
  {
    card: 202,
    name: "robe bottoms",
    defIds: [
      202
    ],
    idsDisplay: "202",
    rarity: "common"
  },
  {
    card: 203,
    name: "wizard's top",
    defIds: [
      203
    ],
    idsDisplay: "203",
    rarity: "uncommon"
  },
  {
    card: 204,
    name: "wizard's bottoms",
    defIds: [
      204
    ],
    idsDisplay: "204",
    rarity: "uncommon"
  },
  {
    card: 205,
    name: "sage's top",
    defIds: [
      205
    ],
    idsDisplay: "205",
    rarity: "uncommon"
  },
  {
    card: 206,
    name: "sage's bottoms",
    defIds: [
      206
    ],
    idsDisplay: "206",
    rarity: "uncommon"
  },
  {
    card: 207,
    name: "wizard's hat",
    defIds: [
      207
    ],
    idsDisplay: "207",
    rarity: "uncommon"
  },
  {
    card: 208,
    name: "witch's top",
    defIds: [
      208
    ],
    idsDisplay: "208",
    rarity: "common"
  },
  {
    card: 209,
    name: "witch's bottoms",
    defIds: [
      209
    ],
    idsDisplay: "209",
    rarity: "common"
  },
  {
    card: 210,
    name: "witch's hat",
    defIds: [
      210
    ],
    idsDisplay: "210",
    rarity: "common"
  },
  {
    card: 211,
    name: "blue wizard's top",
    defIds: [
      211
    ],
    idsDisplay: "211",
    rarity: "rare"
  },
  {
    card: 212,
    name: "blue wizard's bottoms",
    defIds: [
      212
    ],
    idsDisplay: "212",
    rarity: "rare"
  },
  {
    card: 213,
    name: "blue wizard's hat",
    defIds: [
      213
    ],
    idsDisplay: "213",
    rarity: "rare"
  },
  {
    card: 214,
    name: "gnome's hat",
    defIds: [
      214
    ],
    idsDisplay: "214",
    rarity: "epic"
  },
  {
    card: 215,
    name: "giant gnome's hat",
    defIds: [
      215
    ],
    idsDisplay: "215",
    rarity: "rare"
  },
  {
    card: 216,
    name: "giant gnome's top",
    defIds: [
      216
    ],
    idsDisplay: "216",
    rarity: "rare"
  },
  {
    card: 217,
    name: "blood robe top",
    defIds: [
      217
    ],
    idsDisplay: "217",
    rarity: "epic"
  },
  {
    card: 218,
    name: "blood robe bottoms",
    defIds: [
      218
    ],
    idsDisplay: "218",
    rarity: "epic"
  },
  {
    card: 219,
    name: "blood hat",
    defIds: [
      219
    ],
    idsDisplay: "219",
    rarity: "epic"
  },
  {
    card: 220,
    name: "scallop shell",
    defIds: [
      220
    ],
    idsDisplay: "220",
    rarity: "common"
  },
  {
    card: 221,
    name: "sand dollar",
    defIds: [
      221
    ],
    idsDisplay: "221",
    rarity: "rare"
  },
  {
    card: 222,
    name: "conch",
    defIds: [
      222
    ],
    idsDisplay: "222",
    rarity: "epic"
  },
  {
    card: 223,
    name: "seaweed",
    defIds: [
      223
    ],
    idsDisplay: "223",
    rarity: "common"
  },
  {
    card: 224,
    name: "starfish",
    defIds: [
      224
    ],
    idsDisplay: "224",
    rarity: "uncommon"
  },
  {
    card: 225,
    name: "driftwood",
    defIds: [
      225
    ],
    idsDisplay: "225",
    rarity: "common"
  },
  {
    card: 226,
    name: "seashell shores bank key",
    defIds: [
      226
    ],
    idsDisplay: "226",
    rarity: "common"
  },
  {
    card: 227,
    name: "pirate's key",
    defIds: [
      227
    ],
    idsDisplay: "227",
    rarity: "rare"
  },
  {
    card: 228,
    name: "elf ears",
    defIds: [
      228
    ],
    idsDisplay: "228",
    rarity: "uncommon"
  },
  {
    card: 229,
    name: "sewer key",
    defIds: [
      229
    ],
    idsDisplay: "229",
    rarity: "common"
  },
  {
    card: 230,
    name: "trumpet",
    defIds: [
      230
    ],
    idsDisplay: "230",
    rarity: "common"
  },
  {
    card: 231,
    name: "leprechaun sketch",
    defIds: [
      231
    ],
    idsDisplay: "231",
    rarity: "legendary"
  },
  {
    card: 232,
    name: "tattered skirt",
    defIds: [
      232
    ],
    idsDisplay: "232",
    rarity: "common"
  },
  {
    card: 233,
    name: "raw beef",
    defIds: [
      233
    ],
    idsDisplay: "233",
    rarity: "common"
  },
  {
    card: 234,
    name: "steak",
    defIds: [
      234
    ],
    idsDisplay: "234",
    rarity: "common"
  },
  {
    card: 235,
    name: "rat tail",
    defIds: [
      235
    ],
    idsDisplay: "235",
    rarity: "uncommon"
  },
  {
    card: 236,
    name: "squirrel pelt",
    defIds: [
      236
    ],
    idsDisplay: "236",
    rarity: "common"
  },
  {
    card: 237,
    name: "raw chicken",
    defIds: [
      237
    ],
    idsDisplay: "237",
    rarity: "common"
  },
  {
    card: 238,
    name: "chicken",
    defIds: [
      238
    ],
    idsDisplay: "238",
    rarity: "common"
  },
  {
    card: 239,
    name: "raw rodent meat",
    defIds: [
      239
    ],
    idsDisplay: "239",
    rarity: "common"
  },
  {
    card: 240,
    name: "rodent meat",
    defIds: [
      240
    ],
    idsDisplay: "240",
    rarity: "common"
  },
  {
    card: 241,
    name: "helmet of melee",
    defIds: [
      241
    ],
    idsDisplay: "241",
    rarity: "legendary"
  },
  {
    card: 242,
    name: "barbarian helm",
    defIds: [
      242
    ],
    idsDisplay: "242",
    rarity: "uncommon"
  },
  {
    card: 243,
    name: "celadon chestplate",
    defIds: [
      243
    ],
    idsDisplay: "243",
    rarity: "epic"
  },
  {
    card: 244,
    name: "celadon platelegs",
    defIds: [
      244
    ],
    idsDisplay: "244",
    rarity: "epic"
  },
  {
    card: 245,
    name: "celadon pickaxe",
    defIds: [
      245
    ],
    idsDisplay: "245",
    rarity: "epic"
  },
  {
    card: 246,
    name: "celadon gloves",
    defIds: [
      246
    ],
    idsDisplay: "246",
    rarity: "epic"
  },
  {
    card: 247,
    name: "celadon full helm",
    defIds: [
      247
    ],
    idsDisplay: "247",
    rarity: "epic"
  },
  {
    card: 248,
    name: "celadon shield",
    defIds: [
      248
    ],
    idsDisplay: "248",
    rarity: "epic"
  },
  {
    card: 249,
    name: "celadon longsword",
    defIds: [
      249
    ],
    idsDisplay: "249",
    rarity: "epic"
  },
  {
    card: 250,
    name: "celadon battleaxe",
    defIds: [
      250
    ],
    idsDisplay: "250",
    rarity: "rare"
  },
  {
    card: 251,
    name: "celadon great sword",
    defIds: [
      251
    ],
    idsDisplay: "251",
    rarity: "rare"
  },
  {
    card: 252,
    name: "celadium ore",
    defIds: [
      252
    ],
    idsDisplay: "252",
    rarity: "epic"
  },
  {
    card: 253,
    name: "celadium bar",
    defIds: [
      253
    ],
    idsDisplay: "253",
    rarity: "epic"
  },
  {
    card: 254,
    name: "gold warrior helm",
    defIds: [
      254
    ],
    idsDisplay: "254",
    rarity: "rare"
  },
  {
    card: 255,
    name: "silver warrior helm",
    defIds: [
      255
    ],
    idsDisplay: "255",
    rarity: "rare"
  },
  {
    card: 256,
    name: "coronium gloves (silver plating)",
    defIds: [
      256
    ],
    idsDisplay: "256",
    rarity: "rare"
  },
  {
    card: 257,
    name: "coronium gloves (gold plating)",
    defIds: [
      257
    ],
    idsDisplay: "257",
    rarity: "rare"
  },
  {
    card: 258,
    name: "celadon helm",
    defIds: [
      258
    ],
    idsDisplay: "258",
    rarity: "rare"
  },
  {
    card: 259,
    name: "vial",
    defIds: [
      259
    ],
    idsDisplay: "259",
    rarity: "common"
  },
  {
    card: 260,
    name: "vial of water",
    defIds: [
      260
    ],
    idsDisplay: "260",
    rarity: "common"
  },
  {
    card: 261,
    name: "potion of accuracy",
    defIds: [
      261,
      262
    ],
    idsDisplay: "261\u2192262",
    rarity: "rare"
  },
  {
    card: 263,
    name: "potion of defense",
    defIds: [
      263,
      264
    ],
    idsDisplay: "263\u2192264",
    rarity: "rare"
  },
  {
    card: 265,
    name: "potion of strength",
    defIds: [
      265,
      266
    ],
    idsDisplay: "265\u2192266",
    rarity: "uncommon"
  },
  {
    card: 267,
    name: "potion of fishing",
    defIds: [
      267,
      268
    ],
    idsDisplay: "267\u2192268",
    rarity: "common"
  },
  {
    card: 269,
    name: "potion of smithing",
    defIds: [
      269,
      270
    ],
    idsDisplay: "269\u2192270",
    rarity: "common"
  },
  {
    card: 271,
    name: "potion of mining",
    defIds: [
      271,
      272
    ],
    idsDisplay: "271\u2192272",
    rarity: "common"
  },
  {
    card: 273,
    name: "potion of restoration",
    defIds: [
      273,
      274
    ],
    idsDisplay: "273\u2192274",
    rarity: "common"
  },
  {
    card: 275,
    name: "potion of forestry",
    defIds: [
      275,
      276
    ],
    idsDisplay: "275\u2192276",
    rarity: "common"
  },
  {
    card: 277,
    name: "fiji root",
    defIds: [
      277
    ],
    idsDisplay: "277",
    rarity: "common"
  },
  {
    card: 278,
    name: "tonga root",
    defIds: [
      278
    ],
    idsDisplay: "278",
    rarity: "rare"
  },
  {
    card: 279,
    name: "nauru root",
    defIds: [
      279
    ],
    idsDisplay: "279",
    rarity: "rare"
  },
  {
    card: 280,
    name: "maui root",
    defIds: [
      280
    ],
    idsDisplay: "280",
    rarity: "uncommon"
  },
  {
    card: 281,
    name: "vanua root",
    defIds: [
      281
    ],
    idsDisplay: "281",
    rarity: "epic"
  },
  {
    card: 282,
    name: "samoan root",
    defIds: [
      282
    ],
    idsDisplay: "282",
    rarity: "rare"
  },
  {
    card: 283,
    name: "aruba root",
    defIds: [
      283
    ],
    idsDisplay: "283",
    rarity: "common"
  },
  {
    card: 284,
    name: "grenada root",
    defIds: [
      284
    ],
    idsDisplay: "284",
    rarity: "uncommon"
  },
  {
    card: 285,
    name: "potion of mischief",
    defIds: [
      285,
      286
    ],
    idsDisplay: "285\u2192286",
    rarity: "common"
  },
  {
    card: 287,
    name: "carrot",
    defIds: [
      287
    ],
    idsDisplay: "287",
    rarity: "common"
  },
  {
    card: 288,
    name: "sardinian root",
    defIds: [
      288
    ],
    idsDisplay: "288",
    rarity: "common"
  },
  {
    card: 289,
    name: "baked potato",
    defIds: [
      289
    ],
    idsDisplay: "289",
    rarity: "common"
  },
  {
    card: 290,
    name: "grilled corn",
    defIds: [
      290
    ],
    idsDisplay: "290",
    rarity: "uncommon"
  },
  {
    card: 291,
    name: "potion of magic",
    defIds: [
      291,
      292
    ],
    idsDisplay: "291\u2192292",
    rarity: "rare"
  },
  {
    card: 293,
    name: "mariana root",
    defIds: [
      293
    ],
    idsDisplay: "293",
    rarity: "epic"
  },
  {
    card: 294,
    name: "red mushroom",
    defIds: [
      294
    ],
    idsDisplay: "294",
    rarity: "common"
  },
  {
    card: 295,
    name: "leprechaun hat",
    defIds: [
      295
    ],
    idsDisplay: "295",
    rarity: "uncommon"
  },
  {
    card: 296,
    name: "gnome jail key",
    defIds: [
      296
    ],
    idsDisplay: "296",
    rarity: "common"
  },
  {
    card: 297,
    name: "leprechaun flute",
    defIds: [
      297
    ],
    idsDisplay: "297",
    rarity: "uncommon"
  },
  {
    card: 298,
    name: "rough amethyst",
    defIds: [
      298
    ],
    idsDisplay: "298",
    rarity: "common"
  },
  {
    card: 299,
    name: "rough sapphire",
    defIds: [
      299
    ],
    idsDisplay: "299",
    rarity: "common"
  },
  {
    card: 300,
    name: "rough emerald",
    defIds: [
      300
    ],
    idsDisplay: "300",
    rarity: "common"
  },
  {
    card: 301,
    name: "rough topaz",
    defIds: [
      301
    ],
    idsDisplay: "301",
    rarity: "common"
  },
  {
    card: 302,
    name: "rough citrine",
    defIds: [
      302
    ],
    idsDisplay: "302",
    rarity: "common"
  },
  {
    card: 303,
    name: "rough ruby",
    defIds: [
      303
    ],
    idsDisplay: "303",
    rarity: "uncommon"
  },
  {
    card: 304,
    name: "rough diamond",
    defIds: [
      304
    ],
    idsDisplay: "304",
    rarity: "uncommon"
  },
  {
    card: 305,
    name: "rough carbonado",
    defIds: [
      305
    ],
    idsDisplay: "305",
    rarity: "rare"
  },
  {
    card: 306,
    name: "chef's hat",
    defIds: [
      306
    ],
    idsDisplay: "306",
    rarity: "common"
  },
  {
    card: 307,
    name: "blood hood",
    defIds: [
      307
    ],
    idsDisplay: "307",
    rarity: "rare"
  },
  {
    card: 308,
    name: "old hood",
    defIds: [
      308
    ],
    idsDisplay: "308",
    rarity: "common"
  },
  {
    card: 309,
    name: "dark hood",
    defIds: [
      309
    ],
    idsDisplay: "309",
    rarity: "rare"
  },
  {
    card: 310,
    name: "druid's hood",
    defIds: [
      310
    ],
    idsDisplay: "310",
    rarity: "common"
  },
  {
    card: 311,
    name: "helmet of ranging",
    defIds: [
      311
    ],
    idsDisplay: "311",
    rarity: "legendary"
  },
  {
    card: 312,
    name: "helmet of magic",
    defIds: [
      312
    ],
    idsDisplay: "312",
    rarity: "epic"
  },
  {
    card: 313,
    name: "armoury key",
    defIds: [
      313
    ],
    idsDisplay: "313",
    rarity: "common"
  },
  {
    card: 314,
    name: "bronze hatchet",
    defIds: [
      314
    ],
    idsDisplay: "314",
    rarity: "common"
  },
  {
    card: 315,
    name: "iron hatchet",
    defIds: [
      315
    ],
    idsDisplay: "315",
    rarity: "common"
  },
  {
    card: 316,
    name: "steel hatchet",
    defIds: [
      316
    ],
    idsDisplay: "316",
    rarity: "common"
  },
  {
    card: 317,
    name: "palladium hatchet",
    defIds: [
      317
    ],
    idsDisplay: "317",
    rarity: "uncommon"
  },
  {
    card: 318,
    name: "coronium hatchet",
    defIds: [
      318
    ],
    idsDisplay: "318",
    rarity: "rare"
  },
  {
    card: 319,
    name: "celadon hatchet",
    defIds: [
      319
    ],
    idsDisplay: "319",
    rarity: "epic"
  },
  {
    card: 320,
    name: "red headband",
    defIds: [
      320
    ],
    idsDisplay: "320",
    rarity: "uncommon"
  },
  {
    card: 321,
    name: "raw game meat",
    defIds: [
      321
    ],
    idsDisplay: "321",
    rarity: "common"
  },
  {
    card: 322,
    name: "game meat",
    defIds: [
      322
    ],
    idsDisplay: "322",
    rarity: "common"
  },
  {
    card: 323,
    name: "brown bear paw",
    defIds: [
      323
    ],
    idsDisplay: "323",
    rarity: "common"
  },
  {
    card: 324,
    name: "black bear paw",
    defIds: [
      324
    ],
    idsDisplay: "324",
    rarity: "common"
  },
  {
    card: 325,
    name: "burnt food",
    defIds: [
      325
    ],
    idsDisplay: "325",
    rarity: "common"
  },
  {
    card: 326,
    name: "arrow shafts",
    defIds: [
      326
    ],
    idsDisplay: "326",
    rarity: "common"
  },
  {
    card: 327,
    name: "headless arrows",
    defIds: [
      327
    ],
    idsDisplay: "327",
    rarity: "uncommon"
  },
  {
    card: 328,
    name: "bronze arrowheads",
    defIds: [
      328
    ],
    idsDisplay: "328",
    rarity: "common"
  },
  {
    card: 329,
    name: "iron arrowheads",
    defIds: [
      329
    ],
    idsDisplay: "329",
    rarity: "common"
  },
  {
    card: 330,
    name: "steel arrowheads",
    defIds: [
      330
    ],
    idsDisplay: "330",
    rarity: "common"
  },
  {
    card: 331,
    name: "palladium arrowheads",
    defIds: [
      331
    ],
    idsDisplay: "331",
    rarity: "uncommon"
  },
  {
    card: 332,
    name: "coronium arrowheads",
    defIds: [
      332
    ],
    idsDisplay: "332",
    rarity: "uncommon"
  },
  {
    card: 333,
    name: "celadon arrowheads",
    defIds: [
      333
    ],
    idsDisplay: "333",
    rarity: "uncommon"
  },
  {
    card: 334,
    name: "bronze arrows",
    defIds: [
      334
    ],
    idsDisplay: "334",
    rarity: "common"
  },
  {
    card: 335,
    name: "iron arrows",
    defIds: [
      335
    ],
    idsDisplay: "335",
    rarity: "common"
  },
  {
    card: 336,
    name: "steel arrows",
    defIds: [
      336
    ],
    idsDisplay: "336",
    rarity: "uncommon"
  },
  {
    card: 337,
    name: "palladium arrows",
    defIds: [
      337
    ],
    idsDisplay: "337",
    rarity: "uncommon"
  },
  {
    card: 338,
    name: "coronium arrows",
    defIds: [
      338
    ],
    idsDisplay: "338",
    rarity: "rare"
  },
  {
    card: 339,
    name: "celadon arrows",
    defIds: [
      339
    ],
    idsDisplay: "339",
    rarity: "epic"
  },
  {
    card: 340,
    name: "feathers",
    defIds: [
      340
    ],
    idsDisplay: "340",
    rarity: "common"
  },
  {
    card: 341,
    name: "wooden bow",
    defIds: [
      341
    ],
    idsDisplay: "341",
    rarity: "common"
  },
  {
    card: 342,
    name: "pine bow",
    defIds: [
      342
    ],
    idsDisplay: "342",
    rarity: "common"
  },
  {
    card: 343,
    name: "oak bow",
    defIds: [
      343
    ],
    idsDisplay: "343",
    rarity: "uncommon"
  },
  {
    card: 344,
    name: "palm bow",
    defIds: [
      344
    ],
    idsDisplay: "344",
    rarity: "uncommon"
  },
  {
    card: 345,
    name: "cherry bow",
    defIds: [
      345
    ],
    idsDisplay: "345",
    rarity: "uncommon"
  },
  {
    card: 346,
    name: "knife",
    defIds: [
      346
    ],
    idsDisplay: "346",
    rarity: "common"
  },
  {
    card: 347,
    name: "unstrung bow",
    defIds: [
      347
    ],
    idsDisplay: "347",
    rarity: "common"
  },
  {
    card: 348,
    name: "unstrung pine bow",
    defIds: [
      348
    ],
    idsDisplay: "348",
    rarity: "common"
  },
  {
    card: 349,
    name: "unstrung oak bow",
    defIds: [
      349
    ],
    idsDisplay: "349",
    rarity: "common"
  },
  {
    card: 350,
    name: "unstrung palm bow",
    defIds: [
      350
    ],
    idsDisplay: "350",
    rarity: "uncommon"
  },
  {
    card: 351,
    name: "unstrung cherry bow",
    defIds: [
      351
    ],
    idsDisplay: "351",
    rarity: "uncommon"
  },
  {
    card: 352,
    name: "string",
    defIds: [
      352
    ],
    idsDisplay: "352",
    rarity: "common"
  },
  {
    card: 353,
    name: "wizard logs",
    defIds: [
      353
    ],
    idsDisplay: "353",
    rarity: "rare"
  },
  {
    card: 354,
    name: "wizard scroll",
    defIds: [
      354
    ],
    idsDisplay: "354",
    rarity: "rare"
  },
  {
    card: 355,
    name: "magic scroll",
    defIds: [
      355
    ],
    idsDisplay: "355",
    rarity: "rare"
  },
  {
    card: 356,
    name: "deadwood logs",
    defIds: [
      356
    ],
    idsDisplay: "356",
    rarity: "rare"
  },
  {
    card: 357,
    name: "deadwood scroll",
    defIds: [
      357
    ],
    idsDisplay: "357",
    rarity: "rare"
  },
  {
    card: 358,
    name: "blood scroll",
    defIds: [
      358
    ],
    idsDisplay: "358",
    rarity: "epic"
  },
  {
    card: 359,
    name: "unstrung wizard's bow",
    defIds: [
      359
    ],
    idsDisplay: "359",
    rarity: "uncommon"
  },
  {
    card: 360,
    name: "wizard's bow",
    defIds: [
      360
    ],
    idsDisplay: "360",
    rarity: "rare"
  },
  {
    card: 361,
    name: "unstrung deadwood bow",
    defIds: [
      361
    ],
    idsDisplay: "361",
    rarity: "rare"
  },
  {
    card: 362,
    name: "deadwood bow",
    defIds: [
      362
    ],
    idsDisplay: "362",
    rarity: "epic"
  },
  {
    card: 363,
    name: "staff",
    defIds: [
      363
    ],
    idsDisplay: "363",
    rarity: "common"
  },
  {
    card: 364,
    name: "bronze scimitar",
    defIds: [
      364
    ],
    idsDisplay: "364",
    rarity: "common"
  },
  {
    card: 365,
    name: "iron scimitar",
    defIds: [
      365
    ],
    idsDisplay: "365",
    rarity: "common"
  },
  {
    card: 366,
    name: "steel scimitar",
    defIds: [
      366
    ],
    idsDisplay: "366",
    rarity: "common"
  },
  {
    card: 367,
    name: "palladium scimitar",
    defIds: [
      367
    ],
    idsDisplay: "367",
    rarity: "uncommon"
  },
  {
    card: 368,
    name: "coronium scimitar",
    defIds: [
      368
    ],
    idsDisplay: "368",
    rarity: "rare"
  },
  {
    card: 369,
    name: "celadon scimitar",
    defIds: [
      369
    ],
    idsDisplay: "369",
    rarity: "epic"
  },
  {
    card: 370,
    name: "bronze chainmail body",
    defIds: [
      370
    ],
    idsDisplay: "370",
    rarity: "common"
  },
  {
    card: 371,
    name: "iron chainmail body",
    defIds: [
      371
    ],
    idsDisplay: "371",
    rarity: "common"
  },
  {
    card: 372,
    name: "steel chainmail body",
    defIds: [
      372
    ],
    idsDisplay: "372",
    rarity: "common"
  },
  {
    card: 373,
    name: "palladium chainmail body",
    defIds: [
      373
    ],
    idsDisplay: "373",
    rarity: "uncommon"
  },
  {
    card: 374,
    name: "coronium chainmail body",
    defIds: [
      374
    ],
    idsDisplay: "374",
    rarity: "rare"
  },
  {
    card: 375,
    name: "coronium chainmail body (silver plating)",
    defIds: [
      375
    ],
    idsDisplay: "375",
    rarity: "rare"
  },
  {
    card: 376,
    name: "coronium chainmail body (gold plating)",
    defIds: [
      376
    ],
    idsDisplay: "376",
    rarity: "rare"
  },
  {
    card: 377,
    name: "celadon chainmail body",
    defIds: [
      377
    ],
    idsDisplay: "377",
    rarity: "epic"
  },
  {
    card: 378,
    name: "flax",
    defIds: [
      378
    ],
    idsDisplay: "378",
    rarity: "common"
  },
  {
    card: 379,
    name: "mansion key",
    defIds: [
      379
    ],
    idsDisplay: "379",
    rarity: "common"
  },
  {
    card: 380,
    name: "monk's necklace",
    defIds: [
      380
    ],
    idsDisplay: "380",
    rarity: "common"
  },
  {
    card: 381,
    name: "pirate's bandana",
    defIds: [
      381
    ],
    idsDisplay: "381",
    rarity: "uncommon"
  },
  {
    card: 382,
    name: "kitchen key",
    defIds: [
      382
    ],
    idsDisplay: "382",
    rarity: "common"
  },
  {
    card: 383,
    name: "pig iron bar",
    defIds: [
      383
    ],
    idsDisplay: "383",
    rarity: "legendary"
  },
  {
    card: 384,
    name: "necklace mould",
    defIds: [
      384
    ],
    idsDisplay: "384",
    rarity: "common"
  },
  {
    card: 385,
    name: "monk's necklace mould",
    defIds: [
      385
    ],
    idsDisplay: "385",
    rarity: "common"
  },
  {
    card: 386,
    name: "undercroft key",
    defIds: [
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407
    ],
    idsDisplay: "386\u2192407",
    rarity: "common"
  },
  {
    card: 408,
    name: "celadon orb",
    defIds: [
      408,
      409,
      410,
      411,
      412,
      413
    ],
    idsDisplay: "408\u2192413",
    rarity: "uncommon"
  },
  {
    card: 414,
    name: "red santa hat",
    defIds: [
      414
    ],
    idsDisplay: "414",
    rarity: "legendary"
  },
  {
    card: 415,
    name: "green santa hat",
    defIds: [
      415
    ],
    idsDisplay: "415",
    rarity: "legendary"
  },
  {
    card: 416,
    name: "blue santa hat",
    defIds: [
      416
    ],
    idsDisplay: "416",
    rarity: "legendary"
  },
  {
    card: 417,
    name: "cyan christmas present (2023)",
    defIds: [
      417
    ],
    idsDisplay: "417",
    rarity: "legendary"
  },
  {
    card: 418,
    name: "green christmas present (2023)",
    defIds: [
      418
    ],
    idsDisplay: "418",
    rarity: "legendary"
  },
  {
    card: 419,
    name: "white christmas present (2023)",
    defIds: [
      419
    ],
    idsDisplay: "419",
    rarity: "legendary"
  },
  {
    card: 420,
    name: "red christmas present (2023)",
    defIds: [
      420
    ],
    idsDisplay: "420",
    rarity: "legendary"
  },
  {
    card: 421,
    name: "charred bones",
    defIds: [
      421
    ],
    idsDisplay: "421",
    rarity: "common"
  },
  {
    card: 422,
    name: "charred bone meal",
    defIds: [
      422
    ],
    idsDisplay: "422",
    rarity: "common"
  },
  {
    card: 423,
    name: "empty bottle",
    defIds: [
      423
    ],
    idsDisplay: "423",
    rarity: "common"
  },
  {
    card: 424,
    name: "bottle of rum",
    defIds: [
      424
    ],
    idsDisplay: "424",
    rarity: "common"
  },
  {
    card: 425,
    name: "message in a bottle",
    defIds: [
      425
    ],
    idsDisplay: "425",
    rarity: "epic"
  },
  {
    card: 426,
    name: "carbonado necklace",
    defIds: [
      426
    ],
    idsDisplay: "426",
    rarity: "uncommon"
  },
  {
    card: 427,
    name: "gold amethyst necklace",
    defIds: [
      427
    ],
    idsDisplay: "427",
    rarity: "uncommon"
  },
  {
    card: 428,
    name: "gold sapphire necklace",
    defIds: [
      428
    ],
    idsDisplay: "428",
    rarity: "uncommon"
  },
  {
    card: 429,
    name: "gold emerald necklace",
    defIds: [
      429
    ],
    idsDisplay: "429",
    rarity: "uncommon"
  },
  {
    card: 430,
    name: "gold topaz necklace",
    defIds: [
      430
    ],
    idsDisplay: "430",
    rarity: "uncommon"
  },
  {
    card: 431,
    name: "gold citrine necklace",
    defIds: [
      431
    ],
    idsDisplay: "431",
    rarity: "uncommon"
  },
  {
    card: 432,
    name: "gold ruby necklace",
    defIds: [
      432
    ],
    idsDisplay: "432",
    rarity: "rare"
  },
  {
    card: 433,
    name: "gold diamond necklace",
    defIds: [
      433
    ],
    idsDisplay: "433",
    rarity: "rare"
  },
  {
    card: 434,
    name: "gold carbonado necklace",
    defIds: [
      434
    ],
    idsDisplay: "434",
    rarity: "epic"
  },
  {
    card: 435,
    name: "ember staff",
    defIds: [
      435
    ],
    idsDisplay: "435",
    rarity: "epic"
  },
  {
    card: 436,
    name: "hydro staff",
    defIds: [
      436
    ],
    idsDisplay: "436",
    rarity: "rare"
  },
  {
    card: 437,
    name: "forest staff",
    defIds: [
      437
    ],
    idsDisplay: "437",
    rarity: "rare"
  },
  {
    card: 438,
    name: "knight's cape",
    defIds: [
      438
    ],
    idsDisplay: "438",
    rarity: "epic"
  },
  {
    card: 439,
    name: "magician's cape",
    defIds: [
      439
    ],
    idsDisplay: "439",
    rarity: "epic"
  },
  {
    card: 440,
    name: "archer's cape",
    defIds: [
      440
    ],
    idsDisplay: "440",
    rarity: "epic"
  },
  {
    card: 441,
    name: "champion's cape",
    defIds: [
      441
    ],
    idsDisplay: "441",
    rarity: "legendary"
  },
  {
    card: 442,
    name: "treasure map",
    defIds: [
      442
    ],
    idsDisplay: "442",
    rarity: "common"
  },
  {
    card: 443,
    name: "treasure map",
    defIds: [
      443
    ],
    idsDisplay: "443",
    rarity: "uncommon"
  },
  {
    card: 444,
    name: "shovel",
    defIds: [
      444
    ],
    idsDisplay: "444",
    rarity: "common"
  },
  {
    card: 445,
    name: "halo",
    defIds: [
      445
    ],
    idsDisplay: "445",
    rarity: "legendary"
  },
  {
    card: 446,
    name: "coronium shield (gold trim)",
    defIds: [
      446
    ],
    idsDisplay: "446",
    rarity: "rare"
  },
  {
    card: 447,
    name: "coronium shield (silver plating and gold trim)",
    defIds: [
      447
    ],
    idsDisplay: "447",
    rarity: "rare"
  },
  {
    card: 448,
    name: "coronium shield (gold plating and gold trim)",
    defIds: [
      448
    ],
    idsDisplay: "448",
    rarity: "rare"
  },
  {
    card: 449,
    name: "celadon shield (gold trim)",
    defIds: [
      449
    ],
    idsDisplay: "449",
    rarity: "epic"
  },
  {
    card: 450,
    name: "coronium full helm (gold plume)",
    defIds: [
      450
    ],
    idsDisplay: "450",
    rarity: "rare"
  },
  {
    card: 451,
    name: "coronium full helm (silver plating and gold plume)",
    defIds: [
      451
    ],
    idsDisplay: "451",
    rarity: "rare"
  },
  {
    card: 452,
    name: "coronium full helm (gold plating and gold plume)",
    defIds: [
      452
    ],
    idsDisplay: "452",
    rarity: "rare"
  },
  {
    card: 453,
    name: "celadon full helm (gold plume)",
    defIds: [
      453
    ],
    idsDisplay: "453",
    rarity: "epic"
  },
  {
    card: 454,
    name: "coronium full helm (purple plume)",
    defIds: [
      454
    ],
    idsDisplay: "454",
    rarity: "rare"
  },
  {
    card: 455,
    name: "celadon full helm (purple plume)",
    defIds: [
      455
    ],
    idsDisplay: "455",
    rarity: "epic"
  },
  {
    card: 456,
    name: "treasure map",
    defIds: [
      456
    ],
    idsDisplay: "456",
    rarity: "rare"
  },
  {
    card: 457,
    name: "green headband",
    defIds: [
      457
    ],
    idsDisplay: "457",
    rarity: "uncommon"
  },
  {
    card: 458,
    name: "blue headband",
    defIds: [
      458
    ],
    idsDisplay: "458",
    rarity: "uncommon"
  },
  {
    card: 459,
    name: "celadon full helm (silver plating)",
    defIds: [
      459
    ],
    idsDisplay: "459",
    rarity: "legendary"
  },
  {
    card: 460,
    name: "celadon helm (silver plating)",
    defIds: [
      460
    ],
    idsDisplay: "460",
    rarity: "epic"
  },
  {
    card: 461,
    name: "celadon chestplate (silver plating)",
    defIds: [
      461
    ],
    idsDisplay: "461",
    rarity: "legendary"
  },
  {
    card: 462,
    name: "celadon chainmail body (silver plating)",
    defIds: [
      462
    ],
    idsDisplay: "462",
    rarity: "epic"
  },
  {
    card: 463,
    name: "celadon platelegs (silver plating)",
    defIds: [
      463
    ],
    idsDisplay: "463",
    rarity: "legendary"
  },
  {
    card: 464,
    name: "celadon shield (silver plating)",
    defIds: [
      464
    ],
    idsDisplay: "464",
    rarity: "legendary"
  },
  {
    card: 465,
    name: "celadon gloves (silver plating)",
    defIds: [
      465
    ],
    idsDisplay: "465",
    rarity: "legendary"
  },
  {
    card: 466,
    name: "celadon full helm (silver plating and gold plume)",
    defIds: [
      466
    ],
    idsDisplay: "466",
    rarity: "legendary"
  },
  {
    card: 467,
    name: "celadon shield (silver plating and gold trim)",
    defIds: [
      467
    ],
    idsDisplay: "467",
    rarity: "legendary"
  },
  {
    card: 468,
    name: "celadon full helm (gold plating)",
    defIds: [
      468
    ],
    idsDisplay: "468",
    rarity: "legendary"
  },
  {
    card: 469,
    name: "celadon helm (gold plating)",
    defIds: [
      469
    ],
    idsDisplay: "469",
    rarity: "epic"
  },
  {
    card: 470,
    name: "celadon chestplate (gold plating)",
    defIds: [
      470
    ],
    idsDisplay: "470",
    rarity: "legendary"
  },
  {
    card: 471,
    name: "celadon chainmail body (gold plating)",
    defIds: [
      471
    ],
    idsDisplay: "471",
    rarity: "epic"
  },
  {
    card: 472,
    name: "celadon platelegs (gold plating)",
    defIds: [
      472
    ],
    idsDisplay: "472",
    rarity: "legendary"
  },
  {
    card: 473,
    name: "celadon shield (gold plating)",
    defIds: [
      473
    ],
    idsDisplay: "473",
    rarity: "epic"
  },
  {
    card: 474,
    name: "celadon gloves (gold plating)",
    defIds: [
      474
    ],
    idsDisplay: "474",
    rarity: "legendary"
  },
  {
    card: 475,
    name: "celadon full helm (gold plating and gold plume)",
    defIds: [
      475
    ],
    idsDisplay: "475",
    rarity: "legendary"
  },
  {
    card: 476,
    name: "celadon shield (gold plating and gold trim)",
    defIds: [
      476
    ],
    idsDisplay: "476",
    rarity: "epic"
  },
  {
    card: 477,
    name: "wizard's gloves",
    defIds: [
      477
    ],
    idsDisplay: "477",
    rarity: "uncommon"
  },
  {
    card: 478,
    name: "blue wizard's gloves",
    defIds: [
      478
    ],
    idsDisplay: "478",
    rarity: "rare"
  },
  {
    card: 479,
    name: "blood gloves",
    defIds: [
      479
    ],
    idsDisplay: "479",
    rarity: "epic"
  },
  {
    card: 480,
    name: "archer's gloves",
    defIds: [
      480
    ],
    idsDisplay: "480",
    rarity: "epic"
  },
  {
    card: 481,
    name: "goblin banker's key",
    defIds: [
      481
    ],
    idsDisplay: "481",
    rarity: "common"
  },
  {
    card: 482,
    name: "legendary scimitar",
    defIds: [
      482
    ],
    idsDisplay: "482",
    rarity: "legendary"
  },
  {
    card: 483,
    name: "legendary longsword",
    defIds: [
      483
    ],
    idsDisplay: "483",
    rarity: "legendary"
  },
  {
    card: 484,
    name: "legendary battleaxe",
    defIds: [
      484
    ],
    idsDisplay: "484",
    rarity: "legendary"
  },
  {
    card: 485,
    name: "legendary shield",
    defIds: [
      485
    ],
    idsDisplay: "485",
    rarity: "legendary"
  },
  {
    card: 486,
    name: "cave bear paw",
    defIds: [
      486
    ],
    idsDisplay: "486",
    rarity: "rare"
  },
  {
    card: 487,
    name: "damogui's staff",
    defIds: [
      487
    ],
    idsDisplay: "487",
    rarity: "epic"
  },
  {
    card: 488,
    name: "leather",
    defIds: [
      488
    ],
    idsDisplay: "488",
    rarity: "common"
  },
  {
    card: 489,
    name: "plains dragonleather",
    defIds: [
      489
    ],
    idsDisplay: "489",
    rarity: "uncommon"
  },
  {
    card: 490,
    name: "water dragonleather",
    defIds: [
      490
    ],
    idsDisplay: "490",
    rarity: "uncommon"
  },
  {
    card: 491,
    name: "fire dragonleather",
    defIds: [
      491
    ],
    idsDisplay: "491",
    rarity: "rare"
  },
  {
    card: 492,
    name: "leather body armour",
    defIds: [
      492
    ],
    idsDisplay: "492",
    rarity: "common"
  },
  {
    card: 493,
    name: "leather bracers",
    defIds: [
      493
    ],
    idsDisplay: "493",
    rarity: "common"
  },
  {
    card: 494,
    name: "plains dragonleather bracers",
    defIds: [
      494
    ],
    idsDisplay: "494",
    rarity: "uncommon"
  },
  {
    card: 495,
    name: "water dragonleather bracers",
    defIds: [
      495
    ],
    idsDisplay: "495",
    rarity: "uncommon"
  },
  {
    card: 496,
    name: "fire dragonleather bracers",
    defIds: [
      496
    ],
    idsDisplay: "496",
    rarity: "rare"
  },
  {
    card: 497,
    name: "royal cape",
    defIds: [
      497
    ],
    idsDisplay: "497",
    rarity: "rare"
  },
  {
    card: 498,
    name: "leather boots",
    defIds: [
      498
    ],
    idsDisplay: "498",
    rarity: "common"
  },
  {
    card: 499,
    name: "wizard's boots",
    defIds: [
      499
    ],
    idsDisplay: "499",
    rarity: "uncommon"
  },
  {
    card: 500,
    name: "blue wizard's boots",
    defIds: [
      500
    ],
    idsDisplay: "500",
    rarity: "rare"
  },
  {
    card: 501,
    name: "archer's boots",
    defIds: [
      501
    ],
    idsDisplay: "501",
    rarity: "epic"
  },
  {
    card: 502,
    name: "black leather boots",
    defIds: [
      502
    ],
    idsDisplay: "502",
    rarity: "uncommon"
  },
  {
    card: 503,
    name: "leather gloves",
    defIds: [
      503
    ],
    idsDisplay: "503",
    rarity: "common"
  },
  {
    card: 504,
    name: "plains dragonleather chaps",
    defIds: [
      504
    ],
    idsDisplay: "504",
    rarity: "uncommon"
  },
  {
    card: 505,
    name: "water dragonleather chaps",
    defIds: [
      505
    ],
    idsDisplay: "505",
    rarity: "uncommon"
  },
  {
    card: 506,
    name: "fire dragonleather chaps",
    defIds: [
      506
    ],
    idsDisplay: "506",
    rarity: "rare"
  },
  {
    card: 507,
    name: "leather chaps",
    defIds: [
      507
    ],
    idsDisplay: "507",
    rarity: "common"
  },
  {
    card: 508,
    name: "empty turtle shell",
    defIds: [
      508
    ],
    idsDisplay: "508",
    rarity: "common"
  },
  {
    card: 509,
    name: "goblin whistle",
    defIds: [
      509
    ],
    idsDisplay: "509",
    rarity: "uncommon"
  },
  {
    card: 510,
    name: "legendary gloves",
    defIds: [
      510
    ],
    idsDisplay: "510",
    rarity: "legendary"
  },
  {
    card: 511,
    name: "potion of stamina",
    defIds: [
      511,
      512
    ],
    idsDisplay: "511\u2192512",
    rarity: "common"
  },
  {
    card: 513,
    name: "golden koi",
    defIds: [
      513
    ],
    idsDisplay: "513",
    rarity: "uncommon"
  },
  {
    card: 514,
    name: "bronze platelegs (gold trim)",
    defIds: [
      514
    ],
    idsDisplay: "514",
    rarity: "uncommon"
  },
  {
    card: 515,
    name: "bronze chestplate (gold trim)",
    defIds: [
      515
    ],
    idsDisplay: "515",
    rarity: "uncommon"
  },
  {
    card: 516,
    name: "bronze shield (gold trim)",
    defIds: [
      516
    ],
    idsDisplay: "516",
    rarity: "uncommon"
  },
  {
    card: 517,
    name: "bronze full helm (gold trim)",
    defIds: [
      517
    ],
    idsDisplay: "517",
    rarity: "uncommon"
  },
  {
    card: 518,
    name: "iron platelegs (gold trim)",
    defIds: [
      518
    ],
    idsDisplay: "518",
    rarity: "uncommon"
  },
  {
    card: 519,
    name: "iron chestplate (gold trim)",
    defIds: [
      519
    ],
    idsDisplay: "519",
    rarity: "uncommon"
  },
  {
    card: 520,
    name: "iron shield (gold trim)",
    defIds: [
      520
    ],
    idsDisplay: "520",
    rarity: "uncommon"
  },
  {
    card: 521,
    name: "iron full helm (gold trim)",
    defIds: [
      521
    ],
    idsDisplay: "521",
    rarity: "uncommon"
  },
  {
    card: 522,
    name: "steel platelegs (gold trim)",
    defIds: [
      522
    ],
    idsDisplay: "522",
    rarity: "common"
  },
  {
    card: 523,
    name: "steel chestplate (gold trim)",
    defIds: [
      523
    ],
    idsDisplay: "523",
    rarity: "common"
  },
  {
    card: 524,
    name: "steel shield (gold trim)",
    defIds: [
      524
    ],
    idsDisplay: "524",
    rarity: "common"
  },
  {
    card: 525,
    name: "steel full helm (gold trim)",
    defIds: [
      525
    ],
    idsDisplay: "525",
    rarity: "common"
  },
  {
    card: 526,
    name: "palladium platelegs (gold trim)",
    defIds: [
      526
    ],
    idsDisplay: "526",
    rarity: "uncommon"
  },
  {
    card: 527,
    name: "palladium chestplate (gold trim)",
    defIds: [
      527
    ],
    idsDisplay: "527",
    rarity: "uncommon"
  },
  {
    card: 528,
    name: "palladium shield (gold trim)",
    defIds: [
      528
    ],
    idsDisplay: "528",
    rarity: "uncommon"
  },
  {
    card: 529,
    name: "palladium full helm (gold trim)",
    defIds: [
      529
    ],
    idsDisplay: "529",
    rarity: "uncommon"
  },
  {
    card: 530,
    name: "coronium platelegs (gold trim)",
    defIds: [
      530
    ],
    idsDisplay: "530",
    rarity: "rare"
  },
  {
    card: 531,
    name: "coronium chestplate (gold trim)",
    defIds: [
      531
    ],
    idsDisplay: "531",
    rarity: "rare"
  },
  {
    card: 532,
    name: "coronium full helm (gold trim)",
    defIds: [
      532
    ],
    idsDisplay: "532",
    rarity: "rare"
  },
  {
    card: 533,
    name: "celadon platelegs (gold trim)",
    defIds: [
      533
    ],
    idsDisplay: "533",
    rarity: "epic"
  },
  {
    card: 534,
    name: "celadon chestplate (gold trim)",
    defIds: [
      534
    ],
    idsDisplay: "534",
    rarity: "epic"
  },
  {
    card: 535,
    name: "celadon full helm (gold trim)",
    defIds: [
      535
    ],
    idsDisplay: "535",
    rarity: "epic"
  },
  {
    card: 536,
    name: "legendary great sword",
    defIds: [
      536
    ],
    idsDisplay: "536",
    rarity: "legendary"
  },
  {
    card: 537,
    name: "legendary helm",
    defIds: [
      537
    ],
    idsDisplay: "537",
    rarity: "legendary"
  },
  {
    card: 538,
    name: "purple bandit mask",
    defIds: [
      538
    ],
    idsDisplay: "538",
    rarity: "uncommon"
  },
  {
    card: 539,
    name: "red bandit mask",
    defIds: [
      539
    ],
    idsDisplay: "539",
    rarity: "uncommon"
  },
  {
    card: 540,
    name: "green bandit mask",
    defIds: [
      540
    ],
    idsDisplay: "540",
    rarity: "uncommon"
  },
  {
    card: 541,
    name: "blue bandit mask",
    defIds: [
      541
    ],
    idsDisplay: "541",
    rarity: "uncommon"
  },
  {
    card: 542,
    name: "golden royal crown",
    defIds: [
      542
    ],
    idsDisplay: "542",
    rarity: "rare"
  },
  {
    card: 543,
    name: "silver royal crown",
    defIds: [
      543
    ],
    idsDisplay: "543",
    rarity: "uncommon"
  },
  {
    card: 544,
    name: "forester's pendant",
    defIds: [
      544
    ],
    idsDisplay: "544",
    rarity: "rare"
  },
  {
    card: 545,
    name: "fisherman's pendant",
    defIds: [
      545
    ],
    idsDisplay: "545",
    rarity: "rare"
  },
  {
    card: 546,
    name: "miner's pendant",
    defIds: [
      546
    ],
    idsDisplay: "546",
    rarity: "rare"
  },
  {
    card: 547,
    name: "harvester's pendant",
    defIds: [
      547
    ],
    idsDisplay: "547",
    rarity: "rare"
  },
  {
    card: 548,
    name: "shadow dragonleather",
    defIds: [
      548
    ],
    idsDisplay: "548",
    rarity: "epic"
  },
  {
    card: 549,
    name: "sky dragonleather",
    defIds: [
      549
    ],
    idsDisplay: "549",
    rarity: "epic"
  },
  {
    card: 550,
    name: "ice bones",
    defIds: [
      550
    ],
    idsDisplay: "550",
    rarity: "uncommon"
  },
  {
    card: 551,
    name: "shadow dragonleather chaps",
    defIds: [
      551
    ],
    idsDisplay: "551",
    rarity: "epic"
  },
  {
    card: 552,
    name: "shadow dragonleather bracers",
    defIds: [
      552
    ],
    idsDisplay: "552",
    rarity: "epic"
  },
  {
    card: 553,
    name: "sky dragonleather chaps",
    defIds: [
      553
    ],
    idsDisplay: "553",
    rarity: "epic"
  },
  {
    card: 554,
    name: "sky dragonleather bracers",
    defIds: [
      554
    ],
    idsDisplay: "554",
    rarity: "epic"
  },
  {
    card: 555,
    name: "celadon key",
    defIds: [
      555
    ],
    idsDisplay: "555",
    rarity: "epic"
  },
  {
    card: 556,
    name: "fuchsia key",
    defIds: [
      556
    ],
    idsDisplay: "556",
    rarity: "epic"
  },
  {
    card: 557,
    name: "bronze platelegs (silver trim)",
    defIds: [
      557
    ],
    idsDisplay: "557",
    rarity: "common"
  },
  {
    card: 558,
    name: "bronze chestplate (silver trim)",
    defIds: [
      558
    ],
    idsDisplay: "558",
    rarity: "common"
  },
  {
    card: 559,
    name: "bronze shield (silver trim)",
    defIds: [
      559
    ],
    idsDisplay: "559",
    rarity: "common"
  },
  {
    card: 560,
    name: "bronze full helm (silver trim)",
    defIds: [
      560
    ],
    idsDisplay: "560",
    rarity: "common"
  },
  {
    card: 561,
    name: "iron platelegs (silver trim)",
    defIds: [
      561
    ],
    idsDisplay: "561",
    rarity: "common"
  },
  {
    card: 562,
    name: "iron chestplate (silver trim)",
    defIds: [
      562
    ],
    idsDisplay: "562",
    rarity: "common"
  },
  {
    card: 563,
    name: "iron shield (silver trim)",
    defIds: [
      563
    ],
    idsDisplay: "563",
    rarity: "common"
  },
  {
    card: 564,
    name: "iron full helm (silver trim)",
    defIds: [
      564
    ],
    idsDisplay: "564",
    rarity: "common"
  },
  {
    card: 565,
    name: "steel platelegs (silver trim)",
    defIds: [
      565
    ],
    idsDisplay: "565",
    rarity: "common"
  },
  {
    card: 566,
    name: "steel chestplate (silver trim)",
    defIds: [
      566
    ],
    idsDisplay: "566",
    rarity: "common"
  },
  {
    card: 567,
    name: "steel shield (silver trim)",
    defIds: [
      567
    ],
    idsDisplay: "567",
    rarity: "common"
  },
  {
    card: 568,
    name: "steel full helm (silver trim)",
    defIds: [
      568
    ],
    idsDisplay: "568",
    rarity: "common"
  },
  {
    card: 569,
    name: "palladium platelegs (silver trim)",
    defIds: [
      569
    ],
    idsDisplay: "569",
    rarity: "uncommon"
  },
  {
    card: 570,
    name: "palladium chestplate (silver trim)",
    defIds: [
      570
    ],
    idsDisplay: "570",
    rarity: "uncommon"
  },
  {
    card: 571,
    name: "palladium shield (silver trim)",
    defIds: [
      571
    ],
    idsDisplay: "571",
    rarity: "uncommon"
  },
  {
    card: 572,
    name: "palladium full helm (silver trim)",
    defIds: [
      572
    ],
    idsDisplay: "572",
    rarity: "uncommon"
  },
  {
    card: 573,
    name: "coronium platelegs (silver trim)",
    defIds: [
      573
    ],
    idsDisplay: "573",
    rarity: "rare"
  },
  {
    card: 574,
    name: "coronium chestplate (silver trim)",
    defIds: [
      574
    ],
    idsDisplay: "574",
    rarity: "rare"
  },
  {
    card: 575,
    name: "coronium shield (silver trim)",
    defIds: [
      575
    ],
    idsDisplay: "575",
    rarity: "rare"
  },
  {
    card: 576,
    name: "coronium full helm (silver trim)",
    defIds: [
      576
    ],
    idsDisplay: "576",
    rarity: "rare"
  },
  {
    card: 577,
    name: "celadon platelegs (silver trim)",
    defIds: [
      577
    ],
    idsDisplay: "577",
    rarity: "epic"
  },
  {
    card: 578,
    name: "celadon chestplate (silver trim)",
    defIds: [
      578
    ],
    idsDisplay: "578",
    rarity: "epic"
  },
  {
    card: 579,
    name: "celadon shield (silver trim)",
    defIds: [
      579
    ],
    idsDisplay: "579",
    rarity: "epic"
  },
  {
    card: 580,
    name: "celadon full helm (silver trim)",
    defIds: [
      580
    ],
    idsDisplay: "580",
    rarity: "epic"
  },
  {
    card: 581,
    name: "bronze platelegs (red trim)",
    defIds: [
      581
    ],
    idsDisplay: "581",
    rarity: "common"
  },
  {
    card: 582,
    name: "bronze chestplate (red trim)",
    defIds: [
      582
    ],
    idsDisplay: "582",
    rarity: "common"
  },
  {
    card: 583,
    name: "bronze shield (red trim)",
    defIds: [
      583
    ],
    idsDisplay: "583",
    rarity: "common"
  },
  {
    card: 584,
    name: "bronze full helm (red trim)",
    defIds: [
      584
    ],
    idsDisplay: "584",
    rarity: "common"
  },
  {
    card: 585,
    name: "iron platelegs (red trim)",
    defIds: [
      585
    ],
    idsDisplay: "585",
    rarity: "common"
  },
  {
    card: 586,
    name: "iron chestplate (red trim)",
    defIds: [
      586
    ],
    idsDisplay: "586",
    rarity: "common"
  },
  {
    card: 587,
    name: "iron shield (red trim)",
    defIds: [
      587
    ],
    idsDisplay: "587",
    rarity: "common"
  },
  {
    card: 588,
    name: "iron full helm (red trim)",
    defIds: [
      588
    ],
    idsDisplay: "588",
    rarity: "common"
  },
  {
    card: 589,
    name: "steel platelegs (red trim)",
    defIds: [
      589
    ],
    idsDisplay: "589",
    rarity: "common"
  },
  {
    card: 590,
    name: "steel chestplate (red trim)",
    defIds: [
      590
    ],
    idsDisplay: "590",
    rarity: "common"
  },
  {
    card: 591,
    name: "steel shield (red trim)",
    defIds: [
      591
    ],
    idsDisplay: "591",
    rarity: "common"
  },
  {
    card: 592,
    name: "steel full helm (red trim)",
    defIds: [
      592
    ],
    idsDisplay: "592",
    rarity: "common"
  },
  {
    card: 593,
    name: "palladium platelegs (red trim)",
    defIds: [
      593
    ],
    idsDisplay: "593",
    rarity: "uncommon"
  },
  {
    card: 594,
    name: "palladium chestplate (red trim)",
    defIds: [
      594
    ],
    idsDisplay: "594",
    rarity: "uncommon"
  },
  {
    card: 595,
    name: "palladium shield (red trim)",
    defIds: [
      595
    ],
    idsDisplay: "595",
    rarity: "uncommon"
  },
  {
    card: 596,
    name: "palladium full helm (red trim)",
    defIds: [
      596
    ],
    idsDisplay: "596",
    rarity: "uncommon"
  },
  {
    card: 597,
    name: "coronium platelegs (red trim)",
    defIds: [
      597
    ],
    idsDisplay: "597",
    rarity: "rare"
  },
  {
    card: 598,
    name: "coronium chestplate (red trim)",
    defIds: [
      598
    ],
    idsDisplay: "598",
    rarity: "rare"
  },
  {
    card: 599,
    name: "coronium shield (red trim)",
    defIds: [
      599
    ],
    idsDisplay: "599",
    rarity: "rare"
  },
  {
    card: 600,
    name: "coronium full helm (red trim)",
    defIds: [
      600
    ],
    idsDisplay: "600",
    rarity: "rare"
  },
  {
    card: 601,
    name: "celadon platelegs (red trim)",
    defIds: [
      601
    ],
    idsDisplay: "601",
    rarity: "epic"
  },
  {
    card: 602,
    name: "celadon chestplate (red trim)",
    defIds: [
      602
    ],
    idsDisplay: "602",
    rarity: "epic"
  },
  {
    card: 603,
    name: "celadon shield (red trim)",
    defIds: [
      603
    ],
    idsDisplay: "603",
    rarity: "epic"
  },
  {
    card: 604,
    name: "celadon full helm (red trim)",
    defIds: [
      604
    ],
    idsDisplay: "604",
    rarity: "epic"
  },
  {
    card: 605,
    name: "celadon knight's cape",
    defIds: [
      605
    ],
    idsDisplay: "605",
    rarity: "rare"
  },
  {
    card: 606,
    name: "fuchsia knight's cape",
    defIds: [
      606
    ],
    idsDisplay: "606",
    rarity: "rare"
  },
  {
    card: 607,
    name: "elite chef's hat",
    defIds: [
      607
    ],
    idsDisplay: "607",
    rarity: "rare"
  },
  {
    card: 608,
    name: "thief's cape",
    defIds: [
      608
    ],
    idsDisplay: "608",
    rarity: "uncommon"
  },
  {
    card: 609,
    name: "pumpkin cape",
    defIds: [
      609
    ],
    idsDisplay: "609",
    rarity: "epic"
  },
  {
    card: 610,
    name: "black pumpkin cape",
    defIds: [
      610
    ],
    idsDisplay: "610",
    rarity: "epic"
  },
  {
    card: 611,
    name: "leather bracers and archer's gloves",
    defIds: [
      611
    ],
    idsDisplay: "611",
    rarity: "epic"
  },
  {
    card: 612,
    name: "plains dragonleather bracers and archer's gloves",
    defIds: [
      612
    ],
    idsDisplay: "612",
    rarity: "epic"
  },
  {
    card: 613,
    name: "water dragonleather bracers and archer's gloves",
    defIds: [
      613
    ],
    idsDisplay: "613",
    rarity: "epic"
  },
  {
    card: 614,
    name: "fire dragonleather bracers and archer's gloves",
    defIds: [
      614
    ],
    idsDisplay: "614",
    rarity: "epic"
  },
  {
    card: 615,
    name: "shadow dragonleather bracers and archer's gloves",
    defIds: [
      615
    ],
    idsDisplay: "615",
    rarity: "epic"
  },
  {
    card: 616,
    name: "sky dragonleather bracers and archer's gloves",
    defIds: [
      616
    ],
    idsDisplay: "616",
    rarity: "epic"
  },
  {
    card: 617,
    name: "pumpkin mask",
    defIds: [
      617
    ],
    idsDisplay: "617",
    rarity: "epic"
  },
  {
    card: 618,
    name: "christmas present",
    defIds: [
      618
    ],
    idsDisplay: "618",
    rarity: "epic"
  },
  {
    card: 619,
    name: "golden santa hat",
    defIds: [
      619
    ],
    idsDisplay: "619",
    rarity: "legendary"
  },
  {
    card: 620,
    name: "silver santa hat",
    defIds: [
      620
    ],
    idsDisplay: "620",
    rarity: "epic"
  },
  {
    card: 621,
    name: "purple santa hat",
    defIds: [
      621
    ],
    idsDisplay: "621",
    rarity: "epic"
  },
  {
    card: 622,
    name: "yellow santa hat",
    defIds: [
      622
    ],
    idsDisplay: "622",
    rarity: "epic"
  },
  {
    card: 623,
    name: "pink santa hat",
    defIds: [
      623
    ],
    idsDisplay: "623",
    rarity: "epic"
  }
];

// tools/mob-cards.json
var mob_cards_default = [
  {
    card: 37,
    name: "Rat",
    level: 1,
    kind: "creature",
    defIds: [
      37
    ],
    idsDisplay: "37",
    icon: 6,
    suggestedRarity: "common",
    description: "A nasty little rodent",
    render: {
      type: "small",
      spriteId: 0
    }
  },
  {
    card: 45,
    name: "Sewer Rat",
    level: 10,
    kind: "creature",
    defIds: [
      45
    ],
    idsDisplay: "45",
    icon: 3,
    suggestedRarity: "common",
    description: "A big nasty rat",
    render: {
      type: "small",
      spriteId: 0
    }
  },
  {
    card: 155,
    name: "Isradore's Rat",
    level: 56,
    kind: "creature",
    defIds: [
      155
    ],
    idsDisplay: "155",
    icon: 1,
    suggestedRarity: "rare",
    description: "A huge nasty rodent",
    render: {
      type: "small",
      spriteId: 0
    }
  },
  {
    card: 38,
    name: "Squirrel",
    level: 2,
    kind: "creature",
    defIds: [
      38
    ],
    idsDisplay: "38",
    icon: 7,
    suggestedRarity: "common",
    description: "A nutty little squirrel",
    render: {
      type: "small",
      spriteId: 1
    }
  },
  {
    card: 46,
    name: "Big Squirrel",
    level: 12,
    kind: "creature",
    defIds: [
      46
    ],
    idsDisplay: "46",
    icon: 4,
    suggestedRarity: "common",
    description: "Now thats a big squirrel",
    render: {
      type: "small",
      spriteId: 1
    }
  },
  {
    card: 138,
    name: "Squirrel",
    level: 100,
    kind: "creature",
    defIds: [
      138
    ],
    idsDisplay: "138",
    icon: 1,
    suggestedRarity: "legendary",
    description: "A nutty little squirrel",
    render: {
      type: "small",
      spriteId: 1
    }
  },
  {
    card: 39,
    name: "Chicken",
    level: 2,
    kind: "creature",
    defIds: [
      39
    ],
    idsDisplay: "39",
    icon: 6,
    suggestedRarity: "uncommon",
    description: "It's a chicken",
    render: {
      type: "small",
      spriteId: 2
    }
  },
  {
    card: 154,
    name: "Isradore's Chicken",
    level: 30,
    kind: "creature",
    defIds: [
      154
    ],
    idsDisplay: "154",
    icon: 1,
    suggestedRarity: "rare",
    description: "It's a big chicken",
    render: {
      type: "small",
      spriteId: 2
    }
  },
  {
    card: 49,
    name: "Hell Rat",
    level: 26,
    kind: "creature",
    defIds: [
      49
    ],
    idsDisplay: "49",
    icon: 6,
    suggestedRarity: "common",
    description: "A nasty little rodent from hell",
    render: {
      type: "small",
      spriteId: 3
    }
  },
  {
    card: 48,
    name: "Giant Hell Rat",
    level: 66,
    kind: "creature",
    defIds: [
      48
    ],
    idsDisplay: "48",
    icon: 4,
    suggestedRarity: "common",
    description: "A big nasty rat from hell",
    render: {
      type: "small",
      spriteId: 3
    }
  },
  {
    card: 117,
    name: "Rooster",
    level: 4,
    kind: "creature",
    defIds: [
      117
    ],
    idsDisplay: "117",
    icon: 4,
    suggestedRarity: "uncommon",
    description: "A mean old rooster",
    render: {
      type: "small",
      spriteId: 4
    }
  },
  {
    card: 157,
    name: "Cave Chicken",
    level: 24,
    kind: "creature",
    defIds: [
      157
    ],
    idsDisplay: "157",
    icon: 4,
    suggestedRarity: "uncommon",
    description: "How did it get so big",
    render: {
      type: "small",
      spriteId: 5
    }
  },
  {
    card: 71,
    name: "Ghost",
    level: 20,
    kind: "creature",
    defIds: [
      71
    ],
    idsDisplay: "71",
    icon: 5,
    suggestedRarity: "epic",
    description: "Now that's scary",
    render: {
      type: "medium",
      spriteId: 0
    }
  },
  {
    card: 95,
    name: "Minotaur",
    level: 80,
    kind: "creature",
    defIds: [
      95
    ],
    idsDisplay: "95",
    icon: 4,
    suggestedRarity: "common",
    description: "Half man, half bull",
    render: {
      type: "medium",
      spriteId: 1
    }
  },
  {
    card: 96,
    name: "Corrupt Minotaur",
    level: 97,
    kind: "creature",
    defIds: [
      96
    ],
    idsDisplay: "96",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "It's been corrupted by evil",
    render: {
      type: "medium",
      spriteId: 2
    }
  },
  {
    card: 98,
    name: "Nisse",
    level: 2,
    kind: "creature",
    defIds: [
      98
    ],
    idsDisplay: "98",
    icon: 2,
    suggestedRarity: "common",
    description: "It looks like a small gnome",
    render: {
      type: "medium",
      spriteId: 3
    }
  },
  {
    card: 163,
    name: "Damogui",
    level: 250,
    kind: "creature",
    defIds: [
      163
    ],
    idsDisplay: "163",
    icon: 3,
    suggestedRarity: "legendary",
    description: "An extremely powerful demon",
    render: {
      type: "medium",
      spriteId: 4
    }
  },
  {
    card: 168,
    name: "Goblin Jockey",
    level: 29,
    kind: "creature",
    defIds: [
      168
    ],
    idsDisplay: "168",
    icon: 4,
    suggestedRarity: "rare",
    description: "It's a goblin riding a chicken",
    render: {
      type: "medium",
      spriteId: 5
    }
  },
  {
    card: 169,
    name: "King Goblin Jockey",
    level: 222,
    kind: "creature",
    defIds: [
      169
    ],
    idsDisplay: "169",
    icon: 4,
    suggestedRarity: "legendary",
    description: "It's the King Goblin Jockey",
    render: {
      type: "medium",
      spriteId: 6
    }
  },
  {
    card: 40,
    name: "Cow",
    level: 5,
    kind: "creature",
    defIds: [
      40
    ],
    idsDisplay: "40",
    icon: 3,
    suggestedRarity: "common",
    description: "It's a dairy cow",
    render: {
      type: "large",
      spriteId: 0
    }
  },
  {
    card: 41,
    name: "Bull",
    level: 14,
    kind: "creature",
    defIds: [
      41
    ],
    idsDisplay: "41",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Grabbing him by the horns looks easier said than done",
    render: {
      type: "large",
      spriteId: 1
    }
  },
  {
    card: 160,
    name: "Brown Bear Cub",
    level: 7,
    kind: "creature",
    defIds: [
      160
    ],
    idsDisplay: "160",
    icon: 6,
    suggestedRarity: "common",
    description: "Its kind of cute",
    render: {
      type: "large",
      spriteId: 2
    }
  },
  {
    card: 82,
    name: "Brown Bear",
    level: 25,
    kind: "creature",
    defIds: [
      82
    ],
    idsDisplay: "82",
    icon: 3,
    suggestedRarity: "common",
    description: "Maybe I should try to play dead",
    render: {
      type: "large",
      spriteId: 2
    }
  },
  {
    card: 161,
    name: "Black Bear Cub",
    level: 9,
    kind: "creature",
    defIds: [
      161
    ],
    idsDisplay: "161",
    icon: 6,
    suggestedRarity: "common",
    description: "Its kind of cute",
    render: {
      type: "large",
      spriteId: 3
    }
  },
  {
    card: 83,
    name: "Black Bear",
    level: 32,
    kind: "creature",
    defIds: [
      83
    ],
    idsDisplay: "83",
    icon: 3,
    suggestedRarity: "common",
    description: "That's a big scary bear",
    render: {
      type: "large",
      spriteId: 3
    }
  },
  {
    card: 162,
    name: "Cave Bear",
    level: 119,
    kind: "creature",
    defIds: [
      162
    ],
    idsDisplay: "162",
    icon: 3,
    suggestedRarity: "legendary",
    description: "I think it wants to eat me",
    render: {
      type: "large",
      spriteId: 4
    }
  },
  {
    card: 113,
    name: "Dragon Hatchling",
    level: 40,
    kind: "creature",
    defIds: [
      113
    ],
    idsDisplay: "113",
    icon: 6,
    suggestedRarity: "common",
    description: "Cute but still dangerous",
    render: {
      type: "largest",
      spriteId: 0
    }
  },
  {
    card: 70,
    name: "Plains Dragon",
    level: 84,
    kind: "creature",
    defIds: [
      70
    ],
    idsDisplay: "70",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "A large green dragon",
    render: {
      type: "largest",
      spriteId: 0
    }
  },
  {
    card: 176,
    name: "Dragon Hatchling",
    level: 60,
    kind: "creature",
    defIds: [
      176
    ],
    idsDisplay: "176",
    icon: 6,
    suggestedRarity: "common",
    description: "Cute but still dangerous",
    render: {
      type: "largest",
      spriteId: 1
    }
  },
  {
    card: 171,
    name: "Shadow Dragon",
    level: 184,
    kind: "creature",
    defIds: [
      171
    ],
    idsDisplay: "171",
    icon: 3,
    suggestedRarity: "epic",
    description: "A large black dragon",
    render: {
      type: "largest",
      spriteId: 1
    }
  },
  {
    card: 77,
    name: "Dragon Hatchling",
    level: 45,
    kind: "creature",
    defIds: [
      77
    ],
    idsDisplay: "77",
    icon: 6,
    suggestedRarity: "common",
    description: "Cute but still dangerous",
    render: {
      type: "largest",
      spriteId: 2
    }
  },
  {
    card: 76,
    name: "Water Dragon",
    level: 109,
    kind: "creature",
    defIds: [
      76
    ],
    idsDisplay: "76",
    icon: 3,
    suggestedRarity: "rare",
    description: "A large blue dragon",
    render: {
      type: "largest",
      spriteId: 2
    }
  },
  {
    card: 84,
    name: "Dragon Hatchling",
    level: 52,
    kind: "creature",
    defIds: [
      84
    ],
    idsDisplay: "84",
    icon: 6,
    suggestedRarity: "common",
    description: "Cute but still dangerous",
    render: {
      type: "largest",
      spriteId: 3
    }
  },
  {
    card: 156,
    name: "Isradore's Dragon",
    level: 103,
    kind: "creature",
    defIds: [
      156
    ],
    idsDisplay: "156",
    icon: 0,
    suggestedRarity: "rare",
    description: "A large red dragon",
    render: {
      type: "largest",
      spriteId: 3
    }
  },
  {
    card: 135,
    name: "Fire Dragon",
    level: 131,
    kind: "creature",
    defIds: [
      135
    ],
    idsDisplay: "135",
    icon: 3,
    suggestedRarity: "rare",
    description: "A large red dragon",
    render: {
      type: "largest",
      spriteId: 3
    }
  },
  {
    card: 175,
    name: "Sky Dragon",
    level: 210,
    kind: "creature",
    defIds: [
      175
    ],
    idsDisplay: "175",
    icon: 3,
    suggestedRarity: "epic",
    description: "A large white dragon",
    render: {
      type: "largest",
      spriteId: 4
    }
  },
  {
    card: 9,
    name: "Bandit",
    level: 10,
    kind: "humanoid",
    defIds: [
      9
    ],
    idsDisplay: "9",
    icon: 3,
    suggestedRarity: "rare",
    description: "He lives outside the law",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 1,
        body: 1,
        pants: 3
      },
      equip: [
        [
          0,
          15,
          136,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          4,
          58,
          -1,
          -1
        ],
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 145,
    name: "Bandit",
    level: 18,
    kind: "humanoid",
    defIds: [
      145
    ],
    idsDisplay: "145",
    icon: 1,
    suggestedRarity: "rare",
    description: "He lives outside the law",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 1,
        body: 1,
        pants: 3
      },
      equip: [
        [
          0,
          15,
          136,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          24,
          343,
          -1,
          -1
        ],
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 51,
    name: "Barbarian",
    level: 20,
    kind: "humanoid",
    defIds: [
      51
    ],
    idsDisplay: "51",
    icon: 3,
    suggestedRarity: "common",
    description: "His helmet has horns on it so you just know hes barbaric",
    render: {
      base: {
        hair: 18,
        beard: 10,
        shirt: 0,
        body: 0,
        pants: 10
      },
      equip: [
        [
          0,
          28,
          242,
          -1,
          -1
        ],
        null,
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        [
          0,
          15,
          57,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          6,
          121,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 31,
    name: "Beach Gnome",
    level: 18,
    kind: "humanoid",
    defIds: [
      31
    ],
    idsDisplay: "31",
    icon: 3,
    suggestedRarity: "common",
    description: "A tiny little gnome getting his tan on",
    render: {
      base: {
        hair: 4,
        beard: 12,
        shirt: 0,
        body: 1,
        pants: 7
      },
      equip: [
        [
          0,
          23,
          215,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 72,
    name: "Blood Mage",
    level: 27,
    kind: "humanoid",
    defIds: [
      72,
      73
    ],
    idsDisplay: "72\u219273",
    icon: 3,
    suggestedRarity: "common",
    description: "An aggressive, evil wizard",
    render: {
      base: {
        hair: 3,
        beard: 11,
        shirt: 2,
        body: 4,
        pants: 6
      },
      equip: [
        [
          0,
          25,
          219,
          -1,
          -1
        ],
        null,
        [
          0,
          14,
          218,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          0,
          129,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 74,
    name: "Blood Mage",
    level: 44,
    kind: "humanoid",
    defIds: [
      74
    ],
    idsDisplay: "74",
    icon: 4,
    suggestedRarity: "uncommon",
    description: "An aggressive, evil wizard",
    render: {
      base: {
        hair: 3,
        beard: 11,
        shirt: 2,
        body: 4,
        pants: 6
      },
      equip: [
        [
          0,
          31,
          307,
          -1,
          -1
        ],
        [
          0,
          15,
          217,
          -1,
          -1
        ],
        [
          0,
          14,
          218,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 137,
    name: "Brute",
    level: 48,
    kind: "humanoid",
    defIds: [
      137
    ],
    idsDisplay: "137",
    icon: 3,
    suggestedRarity: "common",
    description: "He looks like one tough guy",
    render: {
      base: {
        hair: 3,
        beard: 0,
        shirt: 2,
        body: 1,
        pants: 5
      },
      equip: [
        [
          0,
          37,
          320,
          -1,
          -1
        ],
        [
          0,
          9,
          201,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 177,
    name: "Celadon Guard",
    level: 50,
    kind: "humanoid",
    defIds: [
      177
    ],
    idsDisplay: "177",
    icon: 3,
    suggestedRarity: "common",
    description: "I wonder what he's guarding",
    render: {
      base: {
        hair: 1,
        beard: 1,
        shirt: 1,
        body: 0,
        pants: 3
      },
      equip: [
        [
          0,
          5,
          258,
          -1,
          -1
        ],
        [
          0,
          20,
          377,
          -1,
          -1
        ],
        [
          0,
          4,
          244,
          -1,
          -1
        ],
        [
          0,
          4,
          248,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          4,
          246,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 140,
    name: "Charred Skeleton",
    level: 36,
    kind: "humanoid",
    defIds: [
      140
    ],
    idsDisplay: "140",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "His bones are looking a bit burnt",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 13,
        pants: 18
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 141,
    name: "Charred Skeleton",
    level: 48,
    kind: "humanoid",
    defIds: [
      141
    ],
    idsDisplay: "141",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "His bones are looking a bit burnt",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 13,
        pants: 18
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        [
          0,
          5,
          199,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 159,
    name: "Cursed Goblin",
    level: 64,
    kind: "humanoid",
    defIds: [
      159
    ],
    idsDisplay: "159",
    icon: 3,
    suggestedRarity: "epic",
    description: "An aggressive red creature",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 15,
        pants: 20
      },
      equip: [
        null,
        null,
        null,
        [
          0,
          6,
          191,
          -1,
          -1
        ],
        [
          0,
          15,
          57,
          -1,
          -1
        ],
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 133,
    name: "Dark Monk",
    level: 46,
    kind: "humanoid",
    defIds: [
      133
    ],
    idsDisplay: "133",
    icon: 3,
    suggestedRarity: "rare",
    description: "A monk who went down the wrong path",
    render: {
      base: {
        hair: 31,
        beard: 4,
        shirt: 7,
        body: 0,
        pants: 5
      },
      equip: [
        [
          0,
          32,
          308,
          -1,
          -1
        ],
        [
          0,
          9,
          201,
          -1,
          -1
        ],
        [
          0,
          9,
          202,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 15,
    name: "Dwarf",
    level: 14,
    kind: "humanoid",
    defIds: [
      15
    ],
    idsDisplay: "15",
    icon: 3,
    suggestedRarity: "rare",
    description: "He's short tempered",
    render: {
      base: {
        hair: 22,
        beard: 14,
        shirt: 13,
        body: 4,
        pants: 6
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          11,
          74,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 18,
    name: "Elder Knight",
    level: 102,
    kind: "humanoid",
    defIds: [
      18
    ],
    idsDisplay: "18",
    icon: 3,
    suggestedRarity: "rare",
    description: "An old, noble warrior",
    render: {
      base: {
        hair: 4,
        beard: 12,
        shirt: 13,
        body: 0,
        pants: 5
      },
      equip: [
        [
          0,
          18,
          255,
          -1,
          -1
        ],
        [
          0,
          8,
          172,
          -1,
          -1
        ],
        [
          0,
          8,
          173,
          -1,
          -1
        ],
        [
          0,
          8,
          193,
          -1,
          -1
        ],
        [
          0,
          8,
          62,
          -1,
          -1
        ],
        [
          0,
          0,
          129,
          -1,
          -1
        ],
        [
          0,
          5,
          199,
          -1,
          -1
        ],
        [
          0,
          5,
          256,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 33,
    name: "Elf",
    level: 35,
    kind: "humanoid",
    defIds: [
      33,
      55
    ],
    idsDisplay: "33, 55",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Look at those ears",
    render: {
      base: {
        hair: 18,
        beard: 0,
        shirt: 6,
        body: 4,
        pants: 7
      },
      equip: [
        [
          0,
          26,
          228,
          -1,
          -1
        ],
        null,
        [
          0,
          1,
          43,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          60,
          -1,
          -1
        ],
        [
          0,
          2,
          131,
          -1,
          -1
        ],
        null,
        [
          0,
          1,
          93,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 5,
    name: "Farmer",
    level: 5,
    kind: "humanoid",
    defIds: [
      5
    ],
    idsDisplay: "5",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "He tends the crops",
    render: {
      base: {
        hair: 12,
        beard: 4,
        shirt: 14,
        body: 1,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 29,
    name: "Fighter Gnome",
    level: 30,
    kind: "humanoid",
    defIds: [
      29
    ],
    idsDisplay: "29",
    icon: 3,
    suggestedRarity: "common",
    description: "Look at his tiny little armor",
    render: {
      base: {
        hair: 4,
        beard: 12,
        shirt: 6,
        body: 0,
        pants: 5
      },
      equip: [
        [
          0,
          23,
          215,
          -1,
          -1
        ],
        [
          0,
          14,
          216,
          -1,
          -1
        ],
        [
          0,
          1,
          43,
          -1,
          -1
        ],
        [
          0,
          1,
          186,
          -1,
          -1
        ],
        [
          0,
          6,
          60,
          -1,
          -1
        ],
        [
          0,
          2,
          131,
          -1,
          -1
        ],
        null,
        [
          0,
          1,
          93,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 10,
    name: "Fisherman",
    level: 8,
    kind: "humanoid",
    defIds: [
      10
    ],
    idsDisplay: "10",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "He catches fish for a living",
    render: {
      base: {
        hair: 9,
        beard: 1,
        shirt: 14,
        body: 0,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          0,
          7,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 78,
    name: "Forest Giant",
    level: 58,
    kind: "humanoid",
    defIds: [
      78
    ],
    idsDisplay: "78",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "He's nearly as tall as a tree",
    render: {
      base: {
        hair: 26,
        beard: 9,
        shirt: 0,
        body: 9,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 79,
    name: "Forest Warrior",
    level: 49,
    kind: "humanoid",
    defIds: [
      79
    ],
    idsDisplay: "79",
    icon: 3,
    suggestedRarity: "common",
    description: "A tree hugging warrior",
    render: {
      base: {
        hair: 1,
        beard: 1,
        shirt: 0,
        body: 9,
        pants: 5
      },
      equip: [
        null,
        [
          0,
          0,
          40,
          -1,
          -1
        ],
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 170,
    name: "Forgotten Knight",
    level: 86,
    kind: "humanoid",
    defIds: [
      170
    ],
    idsDisplay: "170",
    icon: 3,
    suggestedRarity: "epic",
    description: "A knight who died in battle long ago",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 13,
        body: 0,
        pants: 5
      },
      equip: [
        [
          0,
          8,
          128,
          -1,
          -1
        ],
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        [
          0,
          6,
          191,
          -1,
          -1
        ],
        [
          0,
          6,
          60,
          -1,
          -1
        ],
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        [
          0,
          3,
          197,
          -1,
          -1
        ],
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: true,
        chest: true
      },
      filter: 1
    }
  },
  {
    card: 85,
    name: "Frost Giant",
    level: 73,
    kind: "humanoid",
    defIds: [
      85
    ],
    idsDisplay: "85",
    icon: 3,
    suggestedRarity: "common",
    description: "An ice-cold giant",
    render: {
      base: {
        hair: 0,
        beard: 13,
        shirt: 0,
        body: 10,
        pants: 2
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          15,
          57,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 86,
    name: "Frost Warrior",
    level: 59,
    kind: "humanoid",
    defIds: [
      86
    ],
    idsDisplay: "86",
    icon: 3,
    suggestedRarity: "common",
    description: "A frozen warrior",
    render: {
      base: {
        hair: 5,
        beard: 5,
        shirt: 3,
        body: 10,
        pants: 5
      },
      equip: [
        [
          0,
          3,
          54,
          -1,
          -1
        ],
        [
          0,
          2,
          44,
          -1,
          -1
        ],
        [
          0,
          2,
          45,
          -1,
          -1
        ],
        null,
        [
          0,
          15,
          57,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 4,
    name: "Giant",
    level: 43,
    kind: "humanoid",
    defIds: [
      4
    ],
    idsDisplay: "4",
    icon: 1,
    suggestedRarity: "rare",
    description: "I hope he doesn't step on me",
    render: {
      base: {
        hair: 11,
        beard: 11,
        shirt: 0,
        body: 1,
        pants: 11
      },
      equip: [
        null,
        null,
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 116,
    name: "Giant Skeleton",
    level: 60,
    kind: "humanoid",
    defIds: [
      116
    ],
    idsDisplay: "116",
    icon: 3,
    suggestedRarity: "common",
    description: "A big spooky skeleton",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        [
          0,
          5,
          371,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 26,
    name: "Gnome",
    level: 8,
    kind: "humanoid",
    defIds: [
      26
    ],
    idsDisplay: "26",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "A tiny little gnome",
    render: {
      base: {
        hair: 4,
        beard: 12,
        shirt: 6,
        body: 0,
        pants: 5
      },
      equip: [
        [
          0,
          23,
          215,
          -1,
          -1
        ],
        [
          0,
          14,
          216,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 103,
    name: "Goblin",
    level: 12,
    kind: "humanoid",
    defIds: [
      103,
      102
    ],
    idsDisplay: "102\u2192103",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "An aggressive little creature",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 12,
        pants: 17
      },
      equip: [
        null,
        null,
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        [
          0,
          24,
          341,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 104,
    name: "Goblin",
    level: 24,
    kind: "humanoid",
    defIds: [
      104
    ],
    idsDisplay: "104",
    icon: 1,
    suggestedRarity: "rare",
    description: "An aggressive green creature",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 12,
        pants: 17
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          4,
          58,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 105,
    name: "Goblin",
    level: 38,
    kind: "humanoid",
    defIds: [
      105
    ],
    idsDisplay: "105",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "An aggressive green creature",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 12,
        pants: 17
      },
      equip: [
        null,
        null,
        null,
        [
          0,
          0,
          185,
          -1,
          -1
        ],
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        [
          0,
          2,
          131,
          -1,
          -1
        ],
        null,
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 6,
    name: "Guard",
    level: 10,
    kind: "humanoid",
    defIds: [
      6
    ],
    idsDisplay: "6",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Looks like he might rough me up",
    render: {
      base: {
        hair: 1,
        beard: 1,
        shirt: 1,
        body: 0,
        pants: 3
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        [
          0,
          16,
          370,
          -1,
          -1
        ],
        null,
        [
          0,
          0,
          185,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 23,
    name: "Guard",
    level: 18,
    kind: "humanoid",
    defIds: [
      23
    ],
    idsDisplay: "23",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Looks like he might rough me up",
    render: {
      base: {
        hair: 1,
        beard: 1,
        shirt: 7,
        body: 1,
        pants: 5
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        null,
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          3,
          197,
          -1,
          -1
        ],
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 52,
    name: "Hell Giant",
    level: 107,
    kind: "humanoid",
    defIds: [
      52
    ],
    idsDisplay: "52",
    icon: 2,
    suggestedRarity: "rare",
    description: "A giant who came straight out of hell",
    render: {
      base: {
        hair: 0,
        beard: 11,
        shirt: 0,
        body: 7,
        pants: 3
      },
      equip: [
        null,
        null,
        [
          0,
          2,
          45,
          -1,
          -1
        ],
        null,
        [
          0,
          7,
          146,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 50,
    name: "Hell Warrior",
    level: 77,
    kind: "humanoid",
    defIds: [
      50
    ],
    idsDisplay: "50",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "A warrior from hell",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 7,
        pants: 3
      },
      equip: [
        null,
        null,
        [
          0,
          2,
          45,
          -1,
          -1
        ],
        null,
        [
          0,
          17,
          78,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 27,
    name: "Hermit",
    level: 20,
    kind: "humanoid",
    defIds: [
      27
    ],
    idsDisplay: "27",
    icon: 3,
    suggestedRarity: "common",
    description: "A crazy old hermit",
    render: {
      base: {
        hair: 26,
        beard: 12,
        shirt: 7,
        body: 4,
        pants: 5
      },
      equip: [
        null,
        [
          0,
          9,
          201,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 173,
    name: "Ice Skeleton",
    level: 70,
    kind: "humanoid",
    defIds: [
      173
    ],
    idsDisplay: "173",
    icon: 3,
    suggestedRarity: "rare",
    description: "He's looking rather fragile",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 2
    }
  },
  {
    card: 16,
    name: "Knight",
    level: 45,
    kind: "humanoid",
    defIds: [
      16
    ],
    idsDisplay: "16",
    icon: 1,
    suggestedRarity: "rare",
    description: "A noble warrior",
    render: {
      base: {
        hair: 2,
        beard: 0,
        shirt: 13,
        body: 0,
        pants: 0
      },
      equip: [
        null,
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          60,
          -1,
          -1
        ],
        [
          0,
          1,
          130,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          121,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 17,
    name: "Knight",
    level: 60,
    kind: "humanoid",
    defIds: [
      17
    ],
    idsDisplay: "17",
    icon: 1,
    suggestedRarity: "rare",
    description: "A noble warrior",
    render: {
      base: {
        hair: 10,
        beard: 0,
        shirt: 0,
        body: 1,
        pants: 10
      },
      equip: [
        [
          0,
          9,
          123,
          -1,
          -1
        ],
        [
          0,
          1,
          42,
          -1,
          -1
        ],
        [
          0,
          1,
          43,
          -1,
          -1
        ],
        [
          0,
          1,
          186,
          -1,
          -1
        ],
        [
          0,
          7,
          61,
          -1,
          -1
        ],
        [
          0,
          1,
          130,
          -1,
          -1
        ],
        null,
        [
          0,
          1,
          93,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: true,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 59,
    name: "Leprechaun",
    level: 27,
    kind: "humanoid",
    defIds: [
      59
    ],
    idsDisplay: "59",
    icon: 3,
    suggestedRarity: "common",
    description: "I wonder where he's hidden his gold",
    render: {
      base: {
        hair: 6,
        beard: 23,
        shirt: 6,
        body: 4,
        pants: 7
      },
      equip: [
        [
          0,
          29,
          295,
          -1,
          -1
        ],
        [
          0,
          14,
          216,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        [
          0,
          2,
          196,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 8,
    name: "Lumberjack",
    level: 10,
    kind: "humanoid",
    defIds: [
      8
    ],
    idsDisplay: "8",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "He loves killing trees",
    render: {
      base: {
        hair: 2,
        beard: 1,
        shirt: 13,
        body: 0,
        pants: 0
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          16,
          316,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 1,
    name: "Man",
    level: 5,
    kind: "humanoid",
    defIds: [
      1
    ],
    idsDisplay: "1",
    icon: 1,
    suggestedRarity: "rare",
    description: "Just an ordinary guy",
    render: {
      base: {
        hair: 9,
        beard: 0,
        shirt: 1,
        body: 0,
        pants: 3
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 139,
    name: "Martial Artist",
    level: 25,
    kind: "humanoid",
    defIds: [
      139
    ],
    idsDisplay: "139",
    icon: 3,
    suggestedRarity: "common",
    description: "A martial arts practitioner",
    render: {
      base: {
        hair: 3,
        beard: 0,
        shirt: 2,
        body: 1,
        pants: 15
      },
      equip: [
        [
          0,
          37,
          320,
          -1,
          -1
        ],
        [
          0,
          11,
          205,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 81,
    name: "Martial Artist",
    level: 30,
    kind: "humanoid",
    defIds: [
      81
    ],
    idsDisplay: "81",
    icon: 1,
    suggestedRarity: "common",
    description: "A martial arts practitioner",
    render: {
      base: {
        hair: 3,
        beard: 0,
        shirt: 2,
        body: 1,
        pants: 15
      },
      equip: [
        [
          0,
          37,
          320,
          -1,
          -1
        ],
        [
          0,
          11,
          205,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 28,
    name: "Old Man",
    level: 5,
    kind: "humanoid",
    defIds: [
      28
    ],
    idsDisplay: "28",
    icon: 3,
    suggestedRarity: "common",
    description: "Hes looking a bit frail",
    render: {
      base: {
        hair: 4,
        beard: 12,
        shirt: 7,
        body: 1,
        pants: 5
      },
      equip: [
        null,
        [
          0,
          9,
          201,
          -1,
          -1
        ],
        [
          0,
          9,
          202,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 118,
    name: "Pirate",
    level: 29,
    kind: "humanoid",
    defIds: [
      118
    ],
    idsDisplay: "118",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "Shiver me timbers!",
    render: {
      base: {
        hair: 3,
        beard: 3,
        shirt: 28,
        body: 0,
        pants: 3
      },
      equip: [
        [
          0,
          38,
          381,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          4,
          364,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          200,
          -1,
          -1
        ],
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 30,
    name: "Sage",
    level: 27,
    kind: "humanoid",
    defIds: [
      30
    ],
    idsDisplay: "30",
    icon: 3,
    suggestedRarity: "common",
    description: "Hes full of wisdom",
    render: {
      base: {
        hair: 12,
        beard: 12,
        shirt: 12,
        body: 3,
        pants: 4
      },
      equip: [
        null,
        [
          0,
          11,
          205,
          -1,
          -1
        ],
        [
          0,
          11,
          206,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 130,
    name: "Skeletal Dwarf",
    level: 44,
    kind: "humanoid",
    defIds: [
      130
    ],
    idsDisplay: "130",
    icon: 3,
    suggestedRarity: "common",
    description: "A short undead dwarf",
    render: {
      base: {
        hair: 22,
        beard: 14,
        shirt: 0,
        body: 11,
        pants: 6
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          11,
          74,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 115,
    name: "Skeletal Mage",
    level: 39,
    kind: "humanoid",
    defIds: [
      115
    ],
    idsDisplay: "115",
    icon: 1,
    suggestedRarity: "common",
    description: "A spooky skeleton",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        [
          0,
          22,
          213,
          -1,
          -1
        ],
        [
          0,
          13,
          211,
          -1,
          -1
        ],
        [
          0,
          13,
          212,
          -1,
          -1
        ],
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 101,
    name: "Skeleton",
    level: 20,
    kind: "humanoid",
    defIds: [
      101,
      106
    ],
    idsDisplay: "101, 106",
    icon: 3,
    suggestedRarity: "common",
    description: "A spooky skeleton",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 114,
    name: "Skeleton",
    level: 45,
    kind: "humanoid",
    defIds: [
      114
    ],
    idsDisplay: "114",
    icon: 3,
    suggestedRarity: "common",
    description: "A spooky skeleton",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        null,
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          5,
          365,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          6,
          121,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 14,
    name: "Squire",
    level: 20,
    kind: "humanoid",
    defIds: [
      14
    ],
    idsDisplay: "14",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "He longs to become a Royal Knight",
    render: {
      base: {
        hair: 1,
        beard: 0,
        shirt: 3,
        body: 0,
        pants: 4
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          5,
          59,
          -1,
          -1
        ],
        [
          0,
          1,
          130,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 47,
    name: "Suit of Armour",
    level: 28,
    kind: "humanoid",
    defIds: [
      47
    ],
    idsDisplay: "47",
    icon: 3,
    suggestedRarity: "common",
    description: "It must be controlled by magic",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 8,
        pants: 16
      },
      equip: [
        null,
        [
          0,
          0,
          40,
          -1,
          -1
        ],
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        [
          0,
          0,
          185,
          -1,
          -1
        ],
        [
          0,
          4,
          97,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 75,
    name: "Suit of Armour",
    level: 46,
    kind: "humanoid",
    defIds: [
      75
    ],
    idsDisplay: "75",
    icon: 3,
    suggestedRarity: "common",
    description: "It must be controlled by magic",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 8,
        pants: 16
      },
      equip: [
        null,
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        [
          0,
          6,
          191,
          -1,
          -1
        ],
        [
          0,
          5,
          126,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          6,
          121,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 54,
    name: "Suit of Armour",
    level: 87,
    kind: "humanoid",
    defIds: [
      54
    ],
    idsDisplay: "54",
    icon: 3,
    suggestedRarity: "common",
    description: "It must be controlled by magic",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 8,
        pants: 16
      },
      equip: [
        null,
        [
          0,
          3,
          46,
          -1,
          -1
        ],
        [
          0,
          3,
          47,
          -1,
          -1
        ],
        [
          0,
          3,
          188,
          -1,
          -1
        ],
        [
          0,
          18,
          96,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          3,
          95,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 142,
    name: "Undead Pirate",
    level: 34,
    kind: "humanoid",
    defIds: [
      142
    ],
    idsDisplay: "142",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "He's not quite dead",
    render: {
      base: {
        hair: 3,
        beard: 3,
        shirt: 0,
        body: 11,
        pants: 3
      },
      equip: [
        [
          0,
          38,
          381,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        [
          0,
          6,
          200,
          -1,
          -1
        ],
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 172,
    name: "Undead Titan",
    level: 123,
    kind: "humanoid",
    defIds: [
      172
    ],
    idsDisplay: "172",
    icon: 3,
    suggestedRarity: "epic",
    description: "A large, dangerous foe",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 13,
        pants: 18
      },
      equip: [
        [
          0,
          11,
          125,
          -1,
          -1
        ],
        [
          0,
          3,
          46,
          -1,
          -1
        ],
        [
          0,
          3,
          47,
          -1,
          -1
        ],
        [
          0,
          3,
          188,
          -1,
          -1
        ],
        [
          0,
          18,
          96,
          -1,
          -1
        ],
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        [
          0,
          8,
          426,
          -1,
          -1
        ],
        [
          0,
          3,
          95,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: true,
        chest: true
      },
      filter: 1
    }
  },
  {
    card: 166,
    name: "Undead Wizard",
    level: 30,
    kind: "humanoid",
    defIds: [
      166
    ],
    idsDisplay: "166",
    icon: 3,
    suggestedRarity: "common",
    description: "So is it dead or alive",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        [
          0,
          20,
          207,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        [
          0,
          6,
          135,
          -1,
          -1
        ],
        [
          0,
          9,
          427,
          -1,
          -1
        ],
        [
          0,
          9,
          477,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 24,
    name: "Witch",
    level: 15,
    kind: "humanoid",
    defIds: [
      24
    ],
    idsDisplay: "24",
    icon: 3,
    suggestedRarity: "common",
    description: "Ew I see a hair growing out of that wart on her nose",
    render: {
      base: {
        hair: 19,
        beard: 0,
        shirt: 1,
        body: 6,
        pants: 3
      },
      equip: [
        [
          0,
          21,
          210,
          -1,
          -1
        ],
        [
          0,
          12,
          208,
          -1,
          -1
        ],
        [
          0,
          12,
          209,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 25,
    name: "Wizard",
    level: 16,
    kind: "humanoid",
    defIds: [
      25
    ],
    idsDisplay: "25",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Hes got cool robes",
    render: {
      base: {
        hair: 1,
        beard: 9,
        shirt: 9,
        body: 4,
        pants: 8
      },
      equip: [
        [
          0,
          20,
          207,
          -1,
          -1
        ],
        [
          0,
          10,
          203,
          -1,
          -1
        ],
        [
          0,
          10,
          204,
          -1,
          -1
        ],
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        null,
        [
          0,
          0,
          194,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 119,
    name: "Wizard",
    level: 40,
    kind: "humanoid",
    defIds: [
      119
    ],
    idsDisplay: "119",
    icon: 3,
    suggestedRarity: "uncommon",
    description: "Hes got cool robes",
    render: {
      base: {
        hair: 20,
        beard: 12,
        shirt: 9,
        body: 0,
        pants: 8
      },
      equip: [
        [
          0,
          22,
          213,
          -1,
          -1
        ],
        [
          0,
          13,
          211,
          -1,
          -1
        ],
        [
          0,
          13,
          212,
          -1,
          -1
        ],
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        [
          0,
          6,
          135,
          -1,
          -1
        ],
        [
          0,
          0,
          194,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 174,
    name: "Wooden Skeleton",
    level: 52,
    kind: "humanoid",
    defIds: [
      174
    ],
    idsDisplay: "174",
    icon: 3,
    suggestedRarity: "rare",
    description: "His bones are made of wood",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        [
          0,
          17,
          544,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 3
    }
  },
  {
    card: 21,
    name: "Zombie",
    level: 16,
    kind: "humanoid",
    defIds: [
      21
    ],
    idsDisplay: "21",
    icon: 3,
    suggestedRarity: "common",
    description: "Please don't bite me",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 5,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 22,
    name: "Zombie",
    level: 24,
    kind: "humanoid",
    defIds: [
      22
    ],
    idsDisplay: "22",
    icon: 3,
    suggestedRarity: "common",
    description: "Please don't bite me",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 5,
        pants: 5
      },
      equip: [
        [
          0,
          0,
          52,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          10,
          73,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 164,
    name: "Zombie",
    level: 40,
    kind: "humanoid",
    defIds: [
      164
    ],
    idsDisplay: "164",
    icon: 3,
    suggestedRarity: "common",
    description: "Please don't bite me",
    render: {
      base: {
        hair: 0,
        beard: 0,
        shirt: 0,
        body: 5,
        pants: 5
      },
      equip: [
        null,
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          2,
          196,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  }
];

// tools/shop-npc-cards.json
var shop_npc_cards_default = [
  {
    card: 2,
    name: "Hank",
    level: null,
    kind: "humanoid",
    defIds: [
      2
    ],
    idsDisplay: "2",
    icon: 1,
    suggestedRarity: "common",
    description: "The helmet man",
    store: "Hank's Helmets",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 1,
        body: 2,
        pants: 0
      },
      equip: [
        [
          0,
          2,
          53,
          -1,
          -1
        ],
        null,
        [
          0,
          1,
          43,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 7,
    name: "Clyde",
    level: null,
    kind: "humanoid",
    defIds: [
      7
    ],
    idsDisplay: "7",
    icon: 1,
    suggestedRarity: "common",
    description: "Hes a cape salesman",
    store: "Clyde's Capes",
    render: {
      base: {
        hair: 3,
        beard: 0,
        shirt: 9,
        body: 0,
        pants: 0
      },
      equip: [
        null,
        null,
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          6,
          135,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 11,
    name: "Tenny",
    level: null,
    kind: "humanoid",
    defIds: [
      11
    ],
    idsDisplay: "11",
    icon: 1,
    suggestedRarity: "common",
    description: "Does he have a milk mustache?",
    store: "Tenny's Giant's Milk Tavern",
    render: {
      base: {
        hair: 9,
        beard: 0,
        shirt: 8,
        body: 0,
        pants: 4
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 13,
    name: "Bartender",
    level: null,
    kind: "humanoid",
    defIds: [
      13
    ],
    idsDisplay: "13",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "He can sell me alcoholic beverages",
    store: "Beer Belly's Tavern / The Dragon Slayer's Inn / The Lazy Warthog",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 13,
        body: 0,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 32,
    name: "Shop Owner",
    level: null,
    kind: "humanoid",
    defIds: [
      32
    ],
    idsDisplay: "32",
    icon: 1,
    suggestedRarity: "rare",
    description: "Hes the boss of this store",
    store: "General Store",
    render: {
      base: {
        hair: 9,
        beard: 1,
        shirt: 15,
        body: 0,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 42,
    name: "Bethany",
    level: null,
    kind: "humanoid",
    defIds: [
      42
    ],
    idsDisplay: "42",
    icon: 1,
    suggestedRarity: "common",
    description: "The battleaxe lady",
    store: "Bethany's Battleaxes",
    render: {
      base: {
        hair: 23,
        beard: 0,
        shirt: 17,
        body: 1,
        pants: 11
      },
      equip: [
        [
          0,
          0,
          52,
          -1,
          -1
        ],
        null,
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        [
          0,
          0,
          129,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 43,
    name: "Shea",
    level: null,
    kind: "humanoid",
    defIds: [
      43
    ],
    idsDisplay: "43",
    icon: 1,
    suggestedRarity: "common",
    description: "The shield guy",
    store: "Shea's Shields",
    render: {
      base: {
        hair: 9,
        beard: 9,
        shirt: 11,
        body: 0,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        [
          0,
          0,
          185,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 44,
    name: "Pradmor",
    level: null,
    kind: "humanoid",
    defIds: [
      44
    ],
    idsDisplay: "44",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "A scroll merchant",
    store: "Pradmore's Magical Scroll Shop",
    render: {
      base: {
        hair: 20,
        beard: 12,
        shirt: 9,
        body: 4,
        pants: 8
      },
      equip: [
        [
          0,
          22,
          213,
          -1,
          -1
        ],
        [
          0,
          13,
          211,
          -1,
          -1
        ],
        [
          0,
          13,
          212,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          1,
          130,
          -1,
          -1
        ],
        [
          0,
          0,
          194,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 53,
    name: "Arnold",
    level: null,
    kind: "humanoid",
    defIds: [
      53
    ],
    idsDisplay: "53",
    icon: 1,
    suggestedRarity: "common",
    description: "A big strong guy who knows a think or two about metal",
    store: "Arnold's Armoury",
    render: {
      base: {
        hair: 9,
        beard: 9,
        shirt: 0,
        body: 0,
        pants: 11
      },
      equip: [
        null,
        null,
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        [
          0,
          4,
          97,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 56,
    name: "Joe",
    level: null,
    kind: "humanoid",
    defIds: [
      56
    ],
    idsDisplay: "56",
    icon: 1,
    suggestedRarity: "common",
    description: "A fish trader",
    store: "Joe's Fish",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 15,
        body: 3,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          0,
          7,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 57,
    name: "Peggy",
    level: null,
    kind: "humanoid",
    defIds: [
      57
    ],
    idsDisplay: "57",
    icon: 1,
    suggestedRarity: "legendary",
    description: "An old witch",
    store: "Peggy's Potions & Magic Shop",
    render: {
      base: {
        hair: 20,
        beard: 0,
        shirt: 16,
        body: 6,
        pants: 3
      },
      equip: [
        [
          0,
          21,
          210,
          -1,
          -1
        ],
        null,
        [
          0,
          12,
          209,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          3,
          132,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 65,
    name: "Conrad",
    level: null,
    kind: "humanoid",
    defIds: [
      65
    ],
    idsDisplay: "65",
    icon: 1,
    suggestedRarity: "common",
    description: "A corn seller",
    store: "Conrad's Corn",
    render: {
      base: {
        hair: 10,
        beard: 0,
        shirt: 4,
        body: 0,
        pants: 7
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 66,
    name: "Porter",
    level: null,
    kind: "humanoid",
    defIds: [
      66
    ],
    idsDisplay: "66",
    icon: 1,
    suggestedRarity: "common",
    description: "A potato merchant",
    store: "Porter's Potatoes",
    render: {
      base: {
        hair: 4,
        beard: 26,
        shirt: 7,
        body: 4,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 67,
    name: "Fishmonger",
    level: null,
    kind: "humanoid",
    defIds: [
      67
    ],
    idsDisplay: "67",
    icon: 1,
    suggestedRarity: "common",
    description: "Specializes in raw fish",
    store: "Fish Shop",
    render: {
      base: {
        hair: 6,
        beard: 14,
        shirt: 3,
        body: 0,
        pants: 4
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 68,
    name: "Gallagher",
    level: null,
    kind: "humanoid",
    defIds: [
      68
    ],
    idsDisplay: "68",
    icon: 1,
    suggestedRarity: "common",
    description: "A strong warrior",
    store: "Gallagher's Goods",
    render: {
      base: {
        hair: 26,
        beard: 1,
        shirt: 0,
        body: 0,
        pants: 11
      },
      equip: [
        null,
        [
          0,
          0,
          40,
          -1,
          -1
        ],
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        [
          0,
          4,
          97,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          0,
          92,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 90,
    name: "Julian",
    level: null,
    kind: "humanoid",
    defIds: [
      90
    ],
    idsDisplay: "90",
    icon: 1,
    suggestedRarity: "common",
    description: "A connoisseur of fine jewels",
    store: "Julian's Jewelry",
    render: {
      base: {
        hair: 11,
        beard: 3,
        shirt: 4,
        body: 1,
        pants: 15
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        [
          0,
          5,
          134,
          -1,
          -1
        ],
        [
          0,
          6,
          200,
          -1,
          -1
        ],
        [
          0,
          5,
          256,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 93,
    name: "Emeril",
    level: null,
    kind: "humanoid",
    defIds: [
      93
    ],
    idsDisplay: "93",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "A dwarven merchant",
    store: "Emeril's Mining Depot",
    render: {
      base: {
        hair: 1,
        beard: 9,
        shirt: 2,
        body: 4,
        pants: 6
      },
      equip: [
        [
          0,
          1,
          120,
          -1,
          -1
        ],
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          11,
          74,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 94,
    name: "Thadric",
    level: null,
    kind: "humanoid",
    defIds: [
      94
    ],
    idsDisplay: "94",
    icon: 1,
    suggestedRarity: "rare",
    description: "A pickaxe specialist",
    store: "Thadric's Pickaxes",
    render: {
      base: {
        hair: 1,
        beard: 9,
        shirt: 13,
        body: 4,
        pants: 6
      },
      equip: [
        null,
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        [
          0,
          12,
          75,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 97,
    name: "Orlando",
    level: null,
    kind: "humanoid",
    defIds: [
      97
    ],
    idsDisplay: "97",
    icon: 1,
    suggestedRarity: "rare",
    description: "A skilled archer and tradesman",
    store: "Orlando's Archery Shop",
    render: {
      base: {
        hair: 11,
        beard: 0,
        shirt: 1,
        body: 3,
        pants: 3
      },
      equip: [
        [
          0,
          32,
          308,
          -1,
          -1
        ],
        [
          0,
          9,
          201,
          -1,
          -1
        ],
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        [
          0,
          24,
          343,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 99,
    name: "Gerrick",
    level: null,
    kind: "humanoid",
    defIds: [
      99
    ],
    idsDisplay: "99",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "A dwarven merchant",
    store: "Gerrick's Adventurers Shop",
    render: {
      base: {
        hair: 1,
        beard: 9,
        shirt: 13,
        body: 4,
        pants: 6
      },
      equip: [
        [
          0,
          0,
          52,
          -1,
          -1
        ],
        null,
        [
          0,
          0,
          41,
          -1,
          -1
        ],
        null,
        [
          0,
          9,
          56,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 120,
    name: "Jack",
    level: null,
    kind: "humanoid",
    defIds: [
      120
    ],
    idsDisplay: "120",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "He's a fan of lumber",
    store: "Jack's Axes",
    render: {
      base: {
        hair: 3,
        beard: 3,
        shirt: 13,
        body: 1,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          16,
          316,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 121,
    name: "Greg",
    level: null,
    kind: "humanoid",
    defIds: [
      121
    ],
    idsDisplay: "121",
    icon: 1,
    suggestedRarity: "common",
    description: "He sells platelegs",
    store: "Greg's Legs",
    render: {
      base: {
        hair: 0,
        beard: 20,
        shirt: 7,
        body: 3,
        pants: 4
      },
      equip: [
        null,
        null,
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 122,
    name: "Guv",
    level: null,
    kind: "humanoid",
    defIds: [
      122
    ],
    idsDisplay: "122",
    icon: 1,
    suggestedRarity: "common",
    description: "A glove seller",
    store: "Guv's Gloves",
    render: {
      base: {
        hair: 9,
        beard: 26,
        shirt: 9,
        body: 0,
        pants: 3
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        [
          0,
          5,
          256,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 123,
    name: "Nate",
    level: null,
    kind: "humanoid",
    defIds: [
      123
    ],
    idsDisplay: "123",
    icon: 1,
    suggestedRarity: "common",
    description: "A platebody merchant",
    store: "Nate's Plates",
    render: {
      base: {
        hair: 9,
        beard: 9,
        shirt: 9,
        body: 0,
        pants: 3
      },
      equip: [
        null,
        [
          0,
          6,
          118,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        [
          0,
          6,
          121,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: true
      },
      filter: 0
    }
  },
  {
    card: 124,
    name: "Raab",
    level: null,
    kind: "humanoid",
    defIds: [
      124
    ],
    idsDisplay: "124",
    icon: 1,
    suggestedRarity: "common",
    description: "Hes got crabs",
    store: "Raab's Crabs",
    render: {
      base: {
        hair: 2,
        beard: 0,
        shirt: 3,
        body: 0,
        pants: 1
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 125,
    name: "Rod",
    level: null,
    kind: "humanoid",
    defIds: [
      125
    ],
    idsDisplay: "125",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "A fishing rod merchant",
    store: "Rod's Rods",
    render: {
      base: {
        hair: 6,
        beard: 6,
        shirt: 7,
        body: 0,
        pants: 1
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          0,
          7,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 126,
    name: "Arthur",
    level: null,
    kind: "humanoid",
    defIds: [
      126
    ],
    idsDisplay: "126",
    icon: 1,
    suggestedRarity: "common",
    description: "A weapons trader",
    store: "Arthur's Quality Weaponry",
    render: {
      base: {
        hair: 2,
        beard: 2,
        shirt: 2,
        body: 0,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          6,
          60,
          -1,
          -1
        ],
        [
          0,
          0,
          129,
          -1,
          -1
        ],
        null,
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 128,
    name: "Link",
    level: null,
    kind: "humanoid",
    defIds: [
      128
    ],
    idsDisplay: "128",
    icon: 1,
    suggestedRarity: "common",
    description: "He specializes in chain mail bodies",
    store: "Link's Chains",
    render: {
      base: {
        hair: 18,
        beard: 0,
        shirt: 6,
        body: 0,
        pants: 3
      },
      equip: [
        null,
        [
          0,
          5,
          371,
          -1,
          -1
        ],
        [
          0,
          6,
          119,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          2,
          131,
          -1,
          -1
        ],
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 129,
    name: "Cindy",
    level: null,
    kind: "humanoid",
    defIds: [
      129
    ],
    idsDisplay: "129",
    icon: 1,
    suggestedRarity: "common",
    description: "She buys and sells crafting supplies",
    store: "Cindy's Crafting Supplies",
    render: {
      base: {
        hair: 18,
        beard: 0,
        shirt: 19,
        body: 4,
        pants: 0
      },
      equip: [
        null,
        null,
        [
          0,
          11,
          206,
          -1,
          -1
        ],
        null,
        null,
        [
          0,
          5,
          134,
          -1,
          -1
        ],
        [
          0,
          3,
          197,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 131,
    name: "Master Fisherman",
    level: null,
    kind: "humanoid",
    defIds: [
      131
    ],
    idsDisplay: "131",
    icon: 1,
    suggestedRarity: "rare",
    description: "He's been fishing all his life",
    store: "Fishing Products",
    render: {
      base: {
        hair: 12,
        beard: 12,
        shirt: 28,
        body: 2,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        [
          0,
          3,
          10,
          -1,
          -1
        ],
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 134,
    name: "Traveling Merchant",
    level: null,
    kind: "humanoid",
    defIds: [
      134
    ],
    idsDisplay: "134",
    icon: 1,
    suggestedRarity: "legendary",
    description: "I wonder what he's selling",
    store: "Quality Goods",
    render: {
      base: {
        hair: 8,
        beard: 5,
        shirt: 9,
        body: 0,
        pants: 3
      },
      equip: [
        [
          0,
          23,
          215,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        [
          0,
          6,
          135,
          -1,
          -1
        ],
        [
          0,
          0,
          194,
          -1,
          -1
        ],
        [
          0,
          7,
          137,
          -1,
          -1
        ],
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 143,
    name: "Vera",
    level: null,
    kind: "humanoid",
    defIds: [
      143
    ],
    idsDisplay: "143",
    icon: 1,
    suggestedRarity: "common",
    description: "A glassware merchant",
    store: "Vera's Glasswares",
    render: {
      base: {
        hair: 19,
        beard: 0,
        shirt: 29,
        body: 2,
        pants: 12
      },
      equip: [
        [
          0,
          37,
          320,
          -1,
          -1
        ],
        null,
        [
          0,
          15,
          232,
          -1,
          -1
        ],
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 165,
    name: "Skoll",
    level: null,
    kind: "humanoid",
    defIds: [
      165
    ],
    idsDisplay: "165",
    icon: 1,
    suggestedRarity: "epic",
    description: "How is he not dead",
    store: "Skoll's Skrolls",
    render: {
      base: {
        hair: 20,
        beard: 12,
        shirt: 0,
        body: 11,
        pants: 16
      },
      equip: [
        [
          0,
          22,
          213,
          -1,
          -1
        ],
        null,
        null,
        null,
        [
          0,
          27,
          363,
          -1,
          -1
        ],
        [
          0,
          1,
          130,
          -1,
          -1
        ],
        [
          0,
          10,
          428,
          -1,
          -1
        ],
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  },
  {
    card: 178,
    name: "Perry",
    level: null,
    kind: "humanoid",
    defIds: [
      178
    ],
    idsDisplay: "178",
    icon: 1,
    suggestedRarity: "uncommon",
    description: "He buys and sells wood",
    store: "Perry's Wood",
    render: {
      base: {
        hair: 27,
        beard: 1,
        shirt: 13,
        body: 4,
        pants: 5
      },
      equip: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      hides: {
        helmet: false,
        chest: false
      },
      filter: 0
    }
  }
];

// src/catalog.ts
var RARITIES = ["common", "uncommon", "rare", "epic", "legendary"];
var POINTS = {
  common: 1,
  uncommon: 3,
  rare: 10,
  epic: 30,
  legendary: 100
};
function buildCatalog() {
  const cards = [];
  for (const it2 of item_cards_default) {
    cards.push({
      id: `item:${it2.card}`,
      kind: "item",
      name: it2.name,
      defIds: it2.defIds,
      idsDisplay: it2.idsDisplay,
      rarity: it2.rarity,
      primaryDef: it2.card
    });
  }
  for (const m of mob_cards_default) {
    cards.push({
      id: `npc:${m.card}`,
      kind: m.kind,
      name: m.name,
      defIds: m.defIds,
      idsDisplay: m.idsDisplay,
      rarity: m.suggestedRarity,
      // matches the frozen mob-rarities map
      level: m.level,
      icon: m.icon,
      render: m.render,
      desc: m.description,
      primaryDef: m.card
    });
  }
  for (const s of shop_npc_cards_default) {
    cards.push({
      id: `npc:${s.card}`,
      kind: "humanoid",
      name: s.name,
      defIds: s.defIds,
      idsDisplay: s.idsDisplay,
      rarity: s.suggestedRarity,
      // matches the frozen shop-npc-rarities map
      icon: s.icon,
      render: s.render,
      desc: s.description,
      store: s.store,
      primaryDef: s.card
    });
  }
  const byId = /* @__PURE__ */ new Map();
  const itemByDef = /* @__PURE__ */ new Map();
  const npcByDef = /* @__PURE__ */ new Map();
  const byRarity = {
    common: [],
    uncommon: [],
    rare: [],
    epic: [],
    legendary: []
  };
  for (const c2 of cards) {
    byId.set(c2.id, c2);
    byRarity[c2.rarity].push(c2);
    for (const d of c2.defIds) {
      (c2.kind === "item" ? itemByDef : npcByDef).set(d, c2);
    }
  }
  return { cards, byId, itemByDef, npcByDef, byRarity };
}

// resources/images/logo.png
var logo_default = "data:image/png;base64,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";

// resources/images/back-sky.png
var back_sky_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAJ2CAYAAADMq4K7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAADvUSURBVHhe7d0LlFTVmejxozYvlVYREURAAaVVQKUhNqCiiCKCPIKgxkgwiqKIisZAjGg0KjE+8jJRE18xg49MVKLJ6rxGSXKXSVYMN8RJJqPOjKM3rxVnXHdukpusZO6+6zvNLk9936nqqu5TVefxZ63fOtXf3tXds+66/rNPVXcHQRA4lLt57kjXvWp8yebNm113d3eJXu+P8HPt+rzh11Fr+nsDgFp8MWhzL+y1X+hn+x/kngsGhLPoXB7r5xWUGRSajpx83MwQ6s9NDAH0hQ6hjyAhjGUGheZDJFHyohFsZAh9DEtflxAC6AP5JydAHzx/GvRXPxNvvPGGeX4BmUGhVYpfs0IYF0X9PQJANfLPRzAuhD6ShLDEDApLoqQjJx9f2DmsLIJ6T5y691WIrF/nZAigVtEQRl8fJIQVmUEhRYOjQ5SWEBJDALWoFEL/umD09ighDJlBIRFCAHkg/6Kh+8WUzqoh5A0zITMoJEIIIA8IYZ+YQSFVCldcqOL2aXXvq/K5CSGAWhHCPjGDQuotQj6EcjqM26fJvvAkGbOmP78/cfb2PRBCAL2JhlCutYSQ1wntoJB6i9C8CUPLROMUp9590b2Vvgehv28AiPIh9JEjhDUxg0KqFiFZ1yHsjT8R6nk1/vuI+x4IIYBaRCNICGtmBoWiT2hxAZJ9Olo+dJX45+q5FhfCSt8HMQRQjfyTuPnAyY9OSAj9r1iLBjK6jxjaQaHoyMQFKLp/yoFDSiHUz61HNITyOfX3E/d9ePr/BgAQ/p9ETYcwOo+GUGae/nwFYgaFEv3dnnG/5zMuPD6E0VhpcUGLioYw+rmjz9PfE79yDUCt4v5Fo0f8yphBofh3g2rVwhO9NaoDV0sI9a3R6Ocui3HM9yX09wMA6BczKBQdmTj6OUnfGu3v9wMA6BczKIxomMpObb2ER4dQn/iqnQjrDmGF5+vvCQDQZ2ZQGIQQAEAIewmWfo6IhlA/Tz9fz/1apRBGvy/9vN6+LwBAn5hBYRBCAAAhrBCdarFpdAj996afF/28ej8AoM/MoDD6G8JqMaz2ef1zCSEA9M/y5ctD0Y/1nhqYQaFUC5be6+kQ1qu/IdR7AaBoNm3aFJLw+cfeW0/vV1rTz6vADArFx0nHxtP7RaNvjUa/ftxz9X4AKJrHr9qzFDxN5rIuj/XzKjCDQokLDiEEgPTyp8Curi4TQX8S9Hv0cyswg0KJC061EMb9CrRXXnmlZv451X5/KCEEgMp85HzwtDFjxhDCesQFp94Q1hrD6H5CCAB9E42cnAp1CAcPHlwWS/38GGZQKHHBIYQAkF7+dUB5rG+P+vDJuiCENYgLTrUQNgMhBIDKosHTIYzeDuVEWKdodCqd1Jql7NRJBAGgTK0h9LdK9fNjmEEh+RDqW556XzPoW6iEEADeUetJjxDWKfq6X6pOhCn4fgAgTeRnBIWea7Xs2cUMCitN0dExbNXpFAAKwAwAoKV27Njh3nzzzdCvf/1rsw4kzAwAoKWiIdRrcXuIJfrJDIDCWrrxMnfBp24yczSfj5wET69FIxi3DtTJDIDCkfj5CPrHeg+aq1roCCESZgZAIfjg+QBGH3v6OWieaqHzIYxbA/rADIDc06c/uR7x7tMMYtg6Dz30UEjP/ZqeId6v7n2/c4+vD+k1lJgBCmD25/dyZ359ZOmq1/NOnwJ9+D76uaUlOor6cwBpJxEkhDUxAxSAD+DcL++d+xDGneqiIdQBjEMMkUVPffom94WL5rruTYtDeh0lZoAC8BH0IVy3bp3ZkxfV3gBTSwSjISSGyBIJofj2A1tCeh0lZoACkPhFT4RFCKGnI1eNvj0qf+eMGCIrbv7cI6GvfHO7+/df/9aso8QMUABFCqGoJ4T7dxzqxp1yXPh45mPPmiBKDPXnB9Lo5C2PuHuf2BaGUOh1lJgBCkDid84PDynFUF4z1HvyInprVPz0x18sExdCT4IoMfRBlKs8R38NII0khBd8YZu7adv20M43OBVWYAYoAAngpT/uKr1zNO8hjHt9UEjsdBhFNIRv3HN0KYZEsAk++O92hj6RCBLCmpgBcu72228vVAgricZOh1BIAKP089EghDAR/jToQygRJIYVmQFyjhD28BH05GO/Fo2hfh4aZ84zzxDCBEgECWFdzAA5598go0OY9zfMxPEB9FGU2dIvfDKk96LBJICeXkNdohHUISSGscwAKLTzv/5ESM/RQNEIEsN+iwshp8KqzAAoNCLYAiqC4S1SvQc10REUV/5dtwkhMSxjBgDQXAu+1oMI9ot+bTAuhJwKY5kBADTVphmjwhASwf4hhH1mBgDQNFdM3s/M0DeVIuhFQ0gMy5gBADTc9TMPdh/sPNDdNu8ws4a+6S2EPoCE0DADAGi4D04fGdJz9B0h7DMzAICGu2PBkWaGflr1ERPDSiGUNfP84jIDAGio8M0xMXMkIxrDuBASQcMMAKBhPjBtBCFE2pgBADTMxhmj3IPndZk50EJmAACJk1OgIIJIITPInasn2hmA5pFToLhr4VFmDUgBM8gVieDjs3roNQCNd+WUYe6uhbxDFKlmBrkhEfQh1GsAGk9uhXIKRAaYQW5wEgRaZ8PRw8PfGnPvimlmDUgZM8g0Hz8iCLSO/MYYCeHdizgNIhPMINN8/ObsY9cANJ68JihvjPnCue8ya0BKmUHmcRoEWkciyC/SRsaYAZCYWbNmubFjx5bIx80S/br6+0LjbDn1cDMDUs4MgMSYIC1Z2BTm68Z8b0ie3BbVMyADzCBxP3p4eujRTR1mDflmgnThqqbQX5cYAqjCDBInAfT0GvIvGqXwxBYTrkbQMdTfFwDsYgaJk9Pgb178CDEssPPOO891dHQ0NYTCf93wa8d8XwDQlBBK/PytUQmiXkf+lUIogdq4oWkIIYAamEHi7r50QimE8tjPfSCFfg7ypSxITYwhIXzHgdf+LKTnAOwgcT6AOoK8dlgchBBAiplBU/jToH/tUK8jXwhhOtx97kwzA2AHTeEjyI9VFENZkCRSd97aNPK1/Q/Z6++rKCSA3RsWlOh1oODMoCl0CEePHm32IF/KgtTEGBY9hNFToI8gMQTKmEFTSPgGDRrkhgwZ4trb20uGDx9u9iIfCGFrRKN39fwpZh2AHTSFBFCiJ/HzUfT0XuQDIWwNXhcEemUGTSMxlPC1tbWZNeRPWZAkUs8+2RRFD2EUt0SBWGYANEQ0SK2ivycAIIRoGkIIIKXMAACAIjEDAACKxAwAACgSMwAAoEjMAACAIjEDAACKxAwAoN/kdwlr/O1RpJQZAEC/yC/S9+EjhMgAM0BfyK/z0jOgoHwIdQwJIVLKDFAPCWD0lzzrdaCAoiGUj/1j/vYoUsoMUA8fwOhfRtd7gILZeM6YshD6U6HM9V4gBcwAtfKnQR/AC1e5YMlCuw8oGAmexM/fCvWPOREipcwA9ZIY+gjK1f+tPb0PKBCJoQ+fRNCfEvU+IAXMAHXaumpqTwB9BKN/dDZmP1AE0ROgf0wIkVJmgDpIBJdNHREq3Sb1EeSdpCgwQogMMQPUqCyCft7kCB770GwzA9Lg7ksnlEI4evRoN2jQINfe3l4yfPhw8xygRcwANYiNoCCCQOldov7NMhJBCZ+Qx0I/B2ghM0AvKkawSa4feaXrCo4Jr57eA7SSnASFnAr1TO8FUsAMUEWrI+j5AHYveCCMol4HANTMDFBBWiIoJICcBgEgEWaAGGmKoPC3RjkNAkC/mQGUtEXQ4zSIqK1bt7otW7aYOYBemQGUY0YPTV0EgSgJoKfXWuHGG290F198sVu0aJFZA1LIDKAQQaSdBDBNJ0L5H4/XnzY+vBJDZIAZAMiYuBD6md7baD6A8pj/EYmMMAMAGbRgwYLSY4ng2rVrW3JClBBGYwhkgBkAyDg5Ce7YsaPpIXzhhRfCKyFExpgBgIwrC2GTfuWf9+CDD7qrrrrKzIEUMwMAWRf9k2D+D0jrPQ0kMdQzIMXMoKFOWrHZzAA0gMRw5VI7B6CZQUPNOH1dGEO5Cr0OAECTmQFQ5hunnFXyT4suMOsAkHFmAJT4+P2fsy8Pr/Kx3gMAGWcGgHv7xz8O+QD6CN539GKzFwAyzgxQh1e6O0Pu9eXO/ccnnfvth82eLJIIvrX16yEfQX865PYogJwxA9Rhy7q9nXvtjJ4QyvW1M8yerOme/h731tNfD2MojyWAcjKMng71cwAgw8wAdZIYhqfCHERQAhjlYxh9jZDbowByxgzQB+63q80si/xp0EdQbo3KVSJIAAHklBmg4CSGng+i3gMAOWIGaLHvXJ+e3wYiMdQzAMgZM0CL3XH6sWYGAGgYM0CLfXiEnQEAGsYM0EISwVsmDXF3nzDerAEAGsIM0EIfPrAnhJ8ghADQLGYANMTy5cvNDABSwAyAxEkEu7q6zBwAUsAMgERJAD29BgApYAZA4jZt2hQiiABSyAyARI0ZM6Z0a1Ri6Oc+irLG64cAWsgMgMT52EkU/Sx6y5RTIoAWMgMgcRLA3XbbrWwm8YueFvVz0mrGC6eUXQFknhkADedPgVl93fDIz003MwCZZQZAU/jbpfqWaRbcfEmHmQHILDMAmsJHUE6D+rZp2nVvWGBmADLLDABUcPe5M8MIvn7HuaWr3gMgc8wAQAyJoFwlgFfPnxI+liunQyDzzABADB88H0EfRvnYPwaQSWYAIEY0fHLlJAjkhhkAqIEPIoDMMwP00UtB4Nwueg35QwiB3DAD9MGiXS6OWQMa7dVXX3XyT88B1MQMAGSMhFC8/uSXnPvet2Lp5wAoMQMAGfTyHbeWSBArIYyAYQYAMsrHLhrFuDgSQ6CMGQBIOf2aoI6dvi2q6X368wMFYwYAUi4uhPoWaNwJ0IuGkxACdgAgA6JvjtHhqxRALRpQ/fmBAjGDwrjh098p0WtA2pVOdK/90twarTWExBAImUFhvHfD4yFCiCySgJWC9tovy0Rve9bCh1R/DaAgzKAwZpy+LgzhSSs2m7Us4DfYFFtZCFUQfdjMuib7IzHkVIiCMoNC8CfBrJ4Kd+zYEf5Kt61bt5o1FEfsLdB6TobRkyQxRHGZQSFEA+gf6z1pJiH0iGFxVQxdpRBGoldpxi3S/PvGHe8ys4IzA2TAhAkTwgCKtWvXmnUUg36TjISsFL7IKa9S+PSJUh4Twnybd+zwkJ4XnBkgA7Zs2RJGUK56zXP/c21Iz5Ev0RBGRU94hBBi47njOQ3GMwNkgASw7Lbos0+aPW89vV9Iz5E/OoLRwOkTo+bnfg8hzBeJnw8gEazIDJARYQQvXOWCjRtcsHJpj11r3avGl0J489yR5rnIl0qnwlpiGN1LBPNFboFK/Do6Otz06dND8+fPN/tgB8g4CZ+E8MLOYSF5TAzzLxq76GuHpei99ksTQyKYb3EhlMd6n+htPefMABkn0fOvD3qEsBh8AGNDGHMy1OHUnw/5QAh7ZQbIODkFyrtKPUJYLDqEUdEfqSCAxUEIe2UGyLh5E4aG8YuGUOKo9yG/qsUwGkAiWAzREA4dOjR23e8hhMgNOQH61wj9a4Z6D/IvGjziV2zHfmy/0BEb2s2axJEQIncev2rPMH7+3aN6HUCxSAC9uDUfSqHXC8AMkAMSP4mhp9cBFIsEbvajB7jDLhlqYhiNpF4rCDMAAOSMP/VJDKOnPplLHGVe0AgKMwAy4X9dfLyZAYjnXx/04YvOfRwJIZBib+8zJrz+28ZT3X9Om2TWAVTnT4Q6dtHXBvVagZgBkFr/OfJQ9/Z+48wcaIQ7g0FuSdBm5nnjT4rXrJpt1grCDIBU+su5Y91fLhnn3j5wnPv9vClmvWjc4+vNDMkpSgS988442swKxAyAVPrbXQe7vz053v1X1yHhx/52aVFt377dzJAMieDGYKCZ55WcBKdMOCCk1wrCDIBUeuayg82sqOYEj7iPnEQIK1mxYoW78sorzbwWRYzgPdcvcT94Yq179RsfCK96TwGYQdOdFgTu9CBws2LWAHHXwiPNTLvgggvcLbfc4p566qnwsV7Pk9X7bnNXHNZNDCs4/Nxpbtn6c8y8N0WLoPAR9CSGek8BmEHzTRvogs5BLugY4IIjBth1FNoVk2v7TRcSv1/84hchCaJezxNCWN2+J41yHYvre82riBEUEkIdQ72nAMyg+Tp3hVAiOLY4L06jdx+YNsI9eF6XmceR+EkE5Z+cCvV6K5xy5KiyK9LLvVjI37FZUuB3jAozaD45CU7fFUK9hsLaOGOUu35m7W+I8SEUhBD1WL16tZmhUMwAaDmJ4F0LjzLzatIYwiL69gNbzAxIOTMAMkni5yOYphA+esN8M8szfqwDGWQGQMtsOHq4u23eYWZei2gI5arX0Xjbtm1z3d3d7uWXXzZrQIqZAdAyXzj3Xe6+lZ1mjmzYNj9w3WcHbvvlvOkNmWIGQEvI64J6hmx55NCeEEoQ9RqQYmYANN2VU4aZGQA0iRkAAFAkZgAALbNjx46SrVu3mnWgAcwAvTizq8MdO2GUO3aiOMisA+g7H0C5btnCzySiKcwAvZh11Fi3eOYR7tRpE93syfyRWCBJ0RByIkSTmAF64UM4acxwt2TmEWYdQN/JKTAaQ70ONIAZoBezjxq3K4QHcCIEEkYI0QJmgF7I64JyEjz35Knu+MnjQnoPgL6RAIa3RC9c5YKNG1xw561mD5AwMwCAlom+QYY3y6BJzAAAgCIxAwBAyp19zAHumjkHh06asK9ZR13MAACQchLAuxePD0kU9TrqYgYAkBqnThhqZngnhE+ef0T4WK+jLmaAOh03eYQLDhrVY/RBoUkH7W72AajfeVP3CxHEcoQwUWaAvhg3xgWHjHXBIeNccOg413UEf48NQOMQwkSZAQAgxeTNMYQwUWYAAEixaAgFIew3MwCAltu0aVMZvV5k0RD6q96DupgBALQcIUQTmQEAtJzEb/ny5SFCiAYzAwBoOYnf5s2bQ93d3WYdSJAZAEDLyUnQh1Ae63UgQWYAAC3nb4mKrq4usw4kyAwAoOUIIZrIDPps5syZ7uSTT3aLFy92p5xyilkHgFpJAMeMGRPizTJoMDPok4ULF4YhPPPMM93s2bPd0qVLzR5k3M6dzsn1gQd6rjt32j1AAiR+0VMgJ0I0mBn0mURQToPHH3+8WUMOPPdcTwCfe84Fd9zRQ+8BgOwxgz6bNWtWeBrs7Ow0a8gBfyIkhADyxQyAeIQQQD6ZAQAARWIGAAAUiRkAAJBpR4wc7SYOG+4mHVLTX+YwA6Dp7jzhPe6CE89w3zxnY0ivA0A9jhh5sBszeLDrOGSCWYthBkDTSQT//PlnSvQ6ANTjqLGHuiPGHuI6DiWEyIiPBT0B/NjiZ9yvN37WrANAA5kB0FRyGlwTOQ0SQgBNZgZAU8lrghLANR/podeRP1977qtmBrSQGQBN9Q9X3RaGUILIabAY7rrrDvfFhx82c6BFzABoGblNqmeonf4DtvrjNCGGSBEzAJAx8meK/F9y93/Dz+vu7k7tnzGSGAo9B5rMDABkjETQB0+TuY+kfl4aXH/a+JCeA01kBgAyxJ8CoyGMngz947SGUBwzeqhbNnWEmQNNYgZARdu3b3ffuuajZo7W8aGTP2Yrj4V+7KOon5smEkM9A5rEDIBYEkG5EsJ08SGUx/KX3H0AvcGDB5ftAWCYAWD4CPLrz9LH3xaVxxLCuNuh/rZpmm+PAi1kBkAZIphu0cBVCqHeB6CMGQAlPoLdM48ya0iHWkLIrVGgKjMAQpwEs6GWkx4hBKoyA6AUPyKYfv7nBPVcq2UPWu/muSPdlAOHuAs7h4XkY70HiTMDAEALzJswNAxf96rxYQw9vQ+JMwMgVTq2OjND350fDDAzpIeE7+B2/t+oycwASJcNr7lg1lY7R598MBhoZkDBmQGAnNtIDIEoMwBQAMQQKDGD0JQHeV0G+XL5e493q84Y6S4//3izVmRLgjYzAwrGDNyEu19xEy9/NLzqNSCLJH6bLj7FLera3y2aub9ZRz6tPX2KO+Oog0PyePVJk8wewITQB1Cueg0AssKHL4oYooJ3Pthv+iJ3wMkXlMjHMU+oy9KlS0N6DgCN4sMnJ8EbV80NRWMo9HNQaD0Pjp291B207Doj5gk1kwCuWLGihCACaIboKdCHMBpDf6tUPw+F9c4H+48Y6zqOOclNO/7delPdfARXrVpVQgwBNEtcDH0E/clQPweF1fNg9D6DwmsSERQ+ghdddFGJj6HeCwBJ068R6lMhIURE4KYeNFQP++38888P4zdt2rQS+ZgQAmgGHzt/AoyeBpsZQv+Ls+X3h+o1pIQ/CSZNTn8SP/n7aEIeX3LJJYQQQNPExdDP5Kr3Jy36FyQIYaqZQSIkhBLAE088MSSPCWExvf5c4LZc3nNdODPZ32YyM2YGRPnwRTUzgoQwE8wgERJCeWPMqaeeGpIYEsFici93hRGUq17rj64p+7iZu+g1oJWyEsHbzxptZgVlBonx7xKVEPKO0WLyARQvPWbX+0MCuOeee7ojxu5p1oBWyUoEUcYMEsUP1BdbNITyWK/3x9Txe7lZU3tOg3vssYdZB5otaxGcd2Tyb5TMKDMAEtOo26JRu+22m5kBzZa1CJ45cpiZFZgZAADqkJUIbt++3cwQMgMAQB2yEkJUZAYAgBoRwVwwAwBADYhgbpgBAKAXRDBXzAAAUAURzB0zAABUQARzyQwAADGI4Due+vRNZpZhZgAAUIhguW3btrmXX37ZzDPKDAAAEUTQIoRAzmzcuNG9733vC8ljvY7iIoLWjUHg7hkduP/xkcvMWkaZAVA40QiK1atXmz0oHiJYmYTwywuOMPNW+sV3P1V6fOum94Qfy1Xvi2EGQOGsX7/ejRs3zl1xxRVhBAkhiGD2/O3NL7v/+MUj7itf+EB4lRDK9bL3zTd7FTMACkkiGL2iuIhgNkkIJX4SPs9/rPcqZgAAhRQNIBHMHn8i1AghANSACGafD6G/JUoIAaBGRDAf/GuDOoY1vGHGDACgMHQAiWB2+XeKShBF9LHeq5gBABSCjqAEkAgWkhkAQO7FRVDvQWGYAQAkYvjShW7URYvMvNVyGcFnn3TBnbeG17ee3q/sY7MXmhkAQCIkhK2K4Z+e2DOk53mN4ONX7dkTPaU0189BlBkAQCKGnXa6O+CsRW6/2aeYtWbQMcxlBIWEbuOGdwLoT4LR06F+DqLMAOiXvfYZ4fba58Ae+x7oxuy/u9mD/Ni0aZOZecNOWxDGUM+bxYdQ5DaCPnqR+MVGUa76ufDMAOiX/UdOcMNHTuwxaqKbfnib2YP86OrqMrM08SF0zw537jtj8xVBEX0dUAIoH3vyscwJYW/MAOiXaYe1uU5xeFsYwemTsh9C+Y+nnhWdBFCMGTPGDR48OLzqPWkwd+7cUgTdix35imAQhLc+w9uf8nGFEJbtQRwzAKDk7T+eSYhGMK0hlAguWrSoFEG3s9O5V08w+/pr0KBBZtY00dOevyXqT4n+RMi7R3tjBgCUeROGhlf/GpNeb5Vf3ft+5x5fb+aNFhdBf0Jcvny52d8KPoIrV64M/6zWunXrwgh6en9ftTSCghAmwQwAVCC3SH0U0+ALF8113ZsWm3mjHTN6aGwE0xLDuAj6tSRjuPfee7u99trLzJuqltf/CGFvzABARjz16Zvctx/YYuaNtHXVVLds6ogwgJUi6OnnJkH+6VlUtQiWfZ4EQpgW4c8KxsxrXU+j3/zmN27nzp3uvvvuc/fee69ZT5gZAMiA6dOnu23btrnt27ebtUa5/rTxYQTlRChXmcVFsNqPVPSV/Hv79//uvv7cU+6Nf33ZrItaI4j08yH81re+ZdYawAwAZMAjjzzStBDKKTAugiJ6AmxkCCV+4ktffMC99MMXXPfXvlK2Lj8iQQSzY+zYsW7y5Mlm7r3++HT3m68f5/71sU6z1gBmACDlfATFyy+/HNJ7kqQj2K1eF2t0BIVEUALor5+447aydUKYLT6EctVrLWAGAFJOh1BOhY2KoY7gN/bay/3j3nu7j0TeLekD2KgIev4kqE+D4r+f2S/8MQkimA377rtvGEFCCKBPPvGJT4Tuv/9+99hjj4UaEUL/xhgfQYlfXAibEcHeRH9WUK8hnXwM9bwFzABAih144IEmhN/97nfDq97bH/okKLNKIQQyzgyAwvrEnMAtHR64v/7ft81aWkgITzzxxNCSJUtCa9asCd1zzz1mf1/ERRDIMTMACufL7xkWRlB8eq5dT5NGh1DfDtXrQA6ZAVA4EsCXPnZ6qk+CUT6G0RDKx3pfvTgJFsvXz37nT6RFHxeQGQCFEo3gYyvbzXoRVPs5QeSbBPCXf/8h97O75rsfXD0+vAq9L+fMACiEH916anhLVCJ407F2vUiIYDFFT4G/+OJlYQj/5SffCum9OWcGQGFIDPWsaJKO4K0nD3Ybpgbuycs7w6teB1LIDAAURNJvjJEIfnl9ZxhBH8KW/5kioHdmAKAA5CQokoqgt7YjcF+86MjQBzvtOpBCZgCgIJIMoPb3G2abGYrnlCNHhZZOGxvS6ylhBgAKrNl/3xD5FA3gqtkTCCGA7GjGn3VCfn3ltkUhH0AfQR9GvT8lzABAH70dM8sS+asW3d3dDfkF3si/dad0uB89cE4YQrlKBH0AU3571AwA9MFLu+h5pmy8zgUfvc0Fn/msXQN6cczYYaUQCh/A6MmQEAI5NXr0aPfpIAjJY70OtNKTd11nZknzp0C5yslQ+ABGI5jS26NmAKBOEr+o4cOHmz1Ihx3OhddH3nzTPfPWW2Y9b84eM8Y9fPY+Zp40CeCjN8wvuzUqogGUE6N+XkqYAYA6yWuDoq2tLTRkyBCzB/0X/tWNoUPNvB4XfuMbYQwlgj6KeXb5xInuus7G/ZiM52+H+ghKFP2bZlJ6CowyAwBB4CYeUPtvRGlvby+FMOtvmEmrOe3tbs7Qof3+KxsSPx/Ax3/zG7OeN80KofC3RIUPYopPgVFmAKBO/nao4DXC5J0kEZwzJ4zh9CPHmfW+uv3nPzezpvjUjS549os99FrCJIQ3z2r8rdE0OfXUU0Pz5s0zaxWYQepcPOtgMwMaZUIdJ0FP3i3q3ywj9Dr6Lwxh5yQzzyQfwSaEsIgkgtOmTQtDOHHiRLMewwxSR0J4yuHDQnoN2bF48WI3a/6lZo5sO33m/u7dp00JzTyymH/PsW4SQH8q1Gvot/lBEIZwlbzEkYcQzj18WBjCjhF7mTVky4gRI9ztt99u5qjPlClTzKyVdAjnd/E/WHvlQ/jgx+0a+k1C+L4gcIcddphZq8AMUoUQ5kfHjMUhPUdtpk6dmsoIzjqqvRRCmS3bdUUVkRC+8cYbdh390tnZGd4ezU0IBa8R5oPcGhV6jtpICPWs1SSEcn33aVMJYT2iJ0K56nX0i4RQjBw50h177LFmPYYZAECf7L777mYGNNvhhx8eXiWEuXiNEACABjMDAACKxAwAACgSMwAAoEjMAACAIjEDAACKxAwAACgSMwAAoEjMAACAIjGDXNm05lwzAwAgwgxy5brrrjMzAAAizCA3rrjiCnfDDTe4z3zmM2YNAIBdzCA3PtTR4W6YPt3dOm+eWWulr90wwq1du9bQ+wCg1UY9Nsod+s1D3bSfTnOXvpbbP6xtBmiwf3tyrNu6dWtJcOetLti4wewDgDQYsmpIGMTJP5xs1nLCDNBgEsKoYOXSnmvMXiDr9txzTzd8+PAyeg/ST0KoZzliBi2zenYPPQeQXe3t7W7AgAFl9B6gxcygJbauC5x73M6BtJsxcY/SX8QWer3oxo0bx4kQaWcGTScBJILIosMOOyzkIyiP9R4AqWcGAGo0Y8Ie4XXatGmEEMguM+jVtddeW6LXgCKRAMrVnwz1OoBMMIOavHHf6WYGFI0PIYBMM4NeEUEAQI6YQa8IIYBG+e9/tTOgwcygqpNOOsnMAKC/Pr8lcL99KXA/+Vrg3nzzTbMONJAZVHTxxRebGQAk4fvf/76Tf3/961/dA7fbdaCBzAAAmu573/ue++pXv+pefPFFToRoNjMAAKBIzAAAgCIxAwAAGmr58uVm1kJmAABAQ6xYscKdddZZZt5iZgAAQJmHH364fHbi7B4nzDJ7q5EQ6lkKmAEAAGV+8IMfuIsuusg99NBDPTOJ4DFTXXDMFLM3g8wAAIBYN910U89jH8I6T4QpZQYAAFR3xKSeCHIiBAAUkg/h0YQQAFBEx051wfhDXHD8TLuWPWYAIGP4I9lAv5gBgIyRt7avXLnSzAHUxAwAZIycCLu6ukqP9TqAqswAQEbJqZAQAnUzAwAZJadCbpECdTMDAACKxAyQtMMn9vzQafjriKb2vO1Y7wEAtIoZIGFnynXmu1ww67h3xOwDALSEGYTuvKXL3XXrTHf3bbn4YcmWunSXy4LArQsCd3kQuPUx+4CknHbpxSE9BxDLDEIPB4F7JAjc5iBwN8SsA0ifOe9dFQbwnI9eW0IQm29VELhjYuZILTMIPRQE7vogcOftiqFeB5A+/iTo+RjqfZXMmTPHzFA/CeHaAYG7ZIBdQyqZQUhCKKdCiSEhBNJPToP+RLjgiktLMfRzvV97+umnzQx94yN4fswaUskMSj4cMwOQThK7WWedE14lhJ7MhN7vSQA5CSbLh5ATYWaYAYCM8tGTAC677qpSCPU+jdNg8jgNZooZoMnO/8BjZpZF8htN5Jc/6zmaS58M9ToAwwzQJBLAUYdMDmU9hvyOSwAZZgao0eQDdjOzWs1bsbEUQXksshpDToIAMs4MUCMJ4ZRdOvYJ3NEjag+jRC8aQB9EvS/tOAkCyAEzQB18CKcesJvrOnRvs16Nj6A/Her1tCOCAHLCDFAHORUed8heZp533A4FkCNm0BDnL7/AnbOg9x/qRfpxEgSQM2bQECdMOs0tnLHMLerkj4Zm0Z+e2DO8chIspuUdgTtv5r7hVa8BOWAGQCyJIREsHonfxWdODUN4Xte+7oyRdg+QcWYAGHPnznWrV6927tUTzFpf/f671zn301tiyZq44ZKTzfPQfO/uCMIArlk01b2na1+zDmScGQBl5CS4bt06M+8viZz48dZLy3zpluVlj/Xz0BrvntRDz4EcMAOgKdYs63Svd18Tkuj5x1Ey188DUFyjRo1yAwcOdMOGDTNr/WAGQFNICKOnPx+//wqCkDzmRAhA7L///m7o0KElEkIJot7XR2YANEX0dmj0Nulju0LIaRBAlARQ4tfW1mbW+skMMqnrsqFu970Ct8cee7hRM+w60icawbhbopwGATSJGWTOcZfu7bou2zuM4ORzBrtZVwwlhhkQPRHqCPoZMQTQBGaQORLCkZ09p8GR04MQIUw/fxr00YuLon4OgMB1jtzLbTxnjKH3oWZm0BKvvvqqmdVDYugfSwj1OtIn+kaZ6G3S6Mf6OQACN3/8vu7RTR2GzPVe1MQMmkoC+Mc//jH0ve99z6wj3+Sdo9Xo/QACd8tJY92PHp5eMmjQINfe3u5Gjx5t9n53yTQzg2EGTRONoDyWED7xxBNmH5CkL18yy12/8EgzB7Luc+8aW3YVEkIRncEwg6bxIYxGkBCi0SSChBB55cO3c96hJZwKe2UGTSPxi5IIcnsUjUQEkWdy6hNXTx3t/mXtwpCE0J8GCWJFZtA0/gToEUHUa58Z+7u9j9zHzONIAJccfZCZA3khwYveCvUfc1u0V2bQVNEToV4DkiIB5CSIIoiLXtwMZcwAyIRp44a7Ew4faeYaEQTQCzMAMmPSyOo/N3XMMcekOoJPxswANJ0ZAJlx+MjKrw9yEgRQIzMA0GCcBIFUMQMAAIrEDAAACZq+dGPIfzz7vC1lH6PlzAAAkCAdQv0xWs4MAAAJOmJDe8h/fFjXWWYPWsoMAAAJOuySoW72oweUgnjsx/Yze9BSZgDk3rLD9zAzoJF8/ORKCFPHDIBcuvTUiW7p4Xu4K5Yc465bs9isAygsM0CDyR/RHBgMdAODAWYNjbH21InuwhMOclcsOdrdeM3FZh1IGxczQ8OYARqsJ4QD3KBgoFlDY0gI1y8+2m268EyzBqSN/KX5l4IgpNfQEGaABmsL9nADgrbwVKjXkLwLjj/Ibd6wxn1o7UqzBqSRhNAbPny4WUfizAAN1ha0hbg1CqTTypUr3bXXXusefvjhMnpfo0j82traQu3t7/zYBRrGDNBgciL0p0K91mrd3d2G3pNmI/YeENJzoB4SQgmfjqHe1ygSP4mhXIcMGWLWkTgzQIFt3rw5/P98UTLT+9LqoPaBIT0H6uFD6OPX7BAKbouWu3nuSNe9anyJXu8nM0CByQlQ/j9fVJZOhfsOaQvpOVAPCeErr7xS+h+BWbw7kjcXdg4LA+iver2fzKBml205yp15wTgzR/PMeOEUd8jVk8y8qIbvNSCk50A9JICtPhGi3JQDh4QB9Fe93k9mULOfTz7e/WDoAe75jslmDc0hETzyc9PNHED/yKnQnwI5EbaeBDB6KtTr/WQGNfMhfKx9rFkDUFz/fFGP50/p8f/++WmzJ+3kjTJCHksUhd6D5okGUF4v1Ov9ZAZ1eXHoAWaGd/zlxfeYWZK6Nyxwr99xrpkDrfAfn5peiuD//mxXeJUI/unZK83etCOE6ZLqEKK61x+2s6RIBMXV86e4u8+dadaBZpIIyulPAuhPgT6Eem/a+Qh2dXWFH8vVRxGtEQ2hPE44hmaADIlGUKKo14Fmid4G9bJ4EhT+zTH+FOh/nELv89piZsgUMwCAmsgpUGIn12j45GO9N6923313t/uuq17rj/suOtnM0DBmgIzhJIhWkuj58GX1BNgfu+22m9tDQhiz1i/cim0mMwCQcv6XHeh5KxQxfprEUOh5vyxZ5oIPbrRzNIIZAMiItMQQCTthjgsWL3XB6veXzX91b/nHSIwZAEip6N+n+/OLnzbryJGV5/TEMDLbtm2b3YckmAGAlJG3i395VwjlbeM6gvILmvVzkEMn3u2Ce7bbOfrLDACkTPS37jfgZ6iQBRLBJfe5YM1Wu4b+MgMAKSPhmzBhQngVDfhdi0g7QthIZgAgZXQI500YavYA6DMzAJAy/hTo6XUA/WIGABro4AVD3NTr9jHz3vi/0M3rg0DizABAA0j8ZtwzrKTeGPpTISEEEmcGABpA4ienQR/Ciav2NnsAtIQZAGgAQgiklhmg4FafNCm09vQpZg19RwiB1DIDFNST5+4XkgjeuGpuKYYvXHO02Yv6SfhENIT1vk4IoCHMAAUnATzjqIPDGMqVk2Ey5DQoorMsnwr5BdDIETNAwUn49KlQ7wEeeeQRMwMyygyAMH4et0YR58QTT3Rr1qwxcyCDzAAI4xcNIDFE1IEHHhiG8J577imbf3ze37uru+42+4GUMwMAqEoi6E+EPoYSQE/vB1LODACgbhLAv1v2E7e282ZiiKwxAwCom8RPbo1KDOXq59HHQEqZAQDUzZ8EJXzy2M+5ZYr777/fzFLGDJBRW7ZsCel5bt3/Jxd85vd2jtTwYSSCxfT5z38+CxEUZoAMkgBu3brV7dixI7zq9fb2djPLtA8+74Jbf+6Ca77pXnnlFbuOVPC3SglhMRFCNNXatWvDAHp6feDAge6AAw5wY8aMCaPo6X1Z8fOf/9z94Q9/cL/73e9ccOb1Zh3pQAiREWaADFq2bFkYQzkZymO9LiGMxi/LIdy2bZtbv369u/zyy8P/m1966SWzBwDqYAbIKB9DPRc+hHIqlI+zHEIASJgZIOs2bnDBnbe6YOXS0owQAkBFZoAc8iGUq3zsXy/U+4CimzdtgJkhmy4//OPuykl3uw2TPlUiH68//M5wLbLXPhn55OPn3zAjH3MqBModfcgebsoU/uJKHqw69EPu/eM3O/l30YSPhFf5J7P3HXpddK99MvJLToT+VAhkib+t30j77ruvmz9rjJs/M9m7JZMu29sdvGiIm3b7vmYNqWAGAFBYI0eOdIcccoiZ94XEz5v8ofbwOuKEQWYfWs4MACA19t9/fzNrpKnj9nAnHZ3M64RyEpRToJAASgyF3oeWMwMgl9qGJvMfN6BWEkJx6Hl7lU6FhDCVzADItQOGDjYzoBEkghI+/xohIUwtMwByTUI4dHBrT4fym3EGDRrkDjroILOG/CCEmWEGQK4N37t1J0IJn+js7CzFUOh9yAcfQrk16l8j5J2jqWQGABpIQijxa2trM2vIFx9CiZ8/Gfow6r1oKTMAACREoufpNaSGGQAAUCRmkIhngyFmBgBACplBv0gAxZ0BbwAAAGSCGfRZNIKEEACK52/fWu3+cNOA0NdOtespZQZ18wGMRpAQAkDx/PmrA93kyZPD6xMz7XpKmUFd4gJICBvn47vIW++T5D+v/noAUC+JoNDzFDODmlWLIEFsjGgIhwwZkhj/eYkhgAIyg5pUi+DGYGCIECbvtSBwj+6SZAyjn1forwug3Bs/+rZ7ecVYM0cmmUFNCGHruAaEUPjPSwiB6n739C1hCHfc9n5imA9mUJPeIhhFDJMVDVZ7e3tiCCFQGwmguGXFiaGffe6DZg8yxQyqqvQO0UoRjNKfC31DCIHWkhOhkAjKiVCiqPcgU8ygor5G8MJgQEh/PvRNNFjDhw9PlLxWKPTXBPCOt77/lbIToV5H5phBRXEBrBZBH0CxJGgL6c+JvvHBkpOcjll/EEIABVQ+eOHzZkOoUgQrhTAugkI+lnX9+VEfQggUzBP3u2DnJ13w00/aNfTZWWce5YI5c+a4p59+ujSsFMJK4mIYF0AfQR9CeY7+XKidD5bEa/To0YkhhEAKbbrTBc/c54LH7nPB3Z+16+izMIQ+gvUGUPMxrCWCno+o/lzonQ9Wo+ivB6DFNt7hgu2fccFTn7NrqJsE0Cu7Nepu6DCb6+FDWEsEdQw1uRWrPz/eocOVNP31ACBPKoawP6fCraumumNGDy0LYfR1Qh3AaiEkggCARqoYwr6SCF5/2ni3bOqIUgz7E0FCCABoJEIIAKjZIUtONbOsSzSE0Qj6EAodPU0HkAgCQPqc0f2lEr2WRdEAJhLCuAj6x7LuA1dLBH0I9dcAALROniIodAT7FcLeIhgVjaGOX/QkmPYQnn322SV6DQDyZMbNV+cqgjp+h47dL9SnEEoA64mg0OHLUgQXL17s1q9fXxFRBJAX0dugeYqgSCyEPoD1RNDTAYxGUO9NC4lg9BSoI0gMAaTFzp07Q3pej2j40hrBpz45K3R0xz4lm9Z0lImb6xBG1RxCfQqsJ4IiLoBpjqCIRrC3IC5YsMA8H8ibgZ0nuLFX3+xGX36DWUP2+fj526J6PQ1aFsL+RlDoCOr1tNGnQU2HUPbrzwHk0cBpx5sZ8iPtt0R9CHX84gKogxdV161RHUH/4xH1RFBkKYJyuusthDqIsp9TIQA0VtNDGBfB6KlQ768mCwH0JGqeDl+c6H79uQAAySGETeJPdz5u5513XplKESSEANBY1UJYSwDjVAxhkhHMGh/CaAzjguj5vdwaBYDGaloIq0VQ782ruBjqAOoQ6s8BAEhWXAj1LdHobU8vblYxhESwRzSEng/fmjVrSnwI5ao/B6D96utr3HVLxrl5x452f3z542Yd6I/vDx8b0vM8aWgI+/IbY/KutxhGT4X6uUAcid9xxx0XXgkhkvS5505yD+13UEiv5ZEPYjSKOnC1CkPYn98Yk3f+tmhcDIkg6iEnQYlfW1tbGMOnb5xj9gD1uviGM8PrNbcfG8Yw7ydCL9EQ6lMgEbT0O0Oj9F6gErktKgGUEEoQ5WO9B+grH8SiiIbQB63a7c9Kntmy2QVEEK3wz9vtLO8kfP5EyG1RJEVOgv7xkrXTzXpeJRrCaACJINA4/g0yckuU0yCS8N71k8ysKBIPYZF+RhBIA4mingGoXVwINR/GuDhKAD1CCADInERDSAQBAFmhg1avaADLToQEEACQBTps9dIRLIVQfyEAaKqNG+wMiNBBq3bbM46OX1kI9RcDgKZbspAYoiodNkIIIDdKd6XuvNUFzz5p1gGhw1YLHbw4//DJ8H+A2S8IAM0gb9bTMyCOjlwtdPTiEEIALcP7E1APHbla6OjFIYQAWoIIolY6brW8LqhjF0cC6BFCAE3F7VDUQ0eOEAIAcq/e8Pk9OnZxogEUf/7L2/I17TcBAECrxEVOxy9uj45eHEIIAEgtHbi42Om50LGLExdAjxACGeUeX29mQJbpwBFCAFVtv7tYf5Ec+VVL7DQdumrRqxRAQghk2COHBm775W3u5fuXmjUgawghgLptmx+47rN7YqjXgKwhhADqRgiRJzpy1ejoVQugDl6cn+78oXwP9psCAKBZdOyq0fEjhEjEnDlz3NNPP23mANBIOnLV6Oj1NYASvqhd34v95lAcRBBAq+jYVaPjRwjRbxI/T68BQH9tWtMRSwcuKu7NMr1Fr1oA3z1rpHHjVTND6vu1/wcg/ySAV111lZkDQBJ0AAkhADTYmjVrXHd3d01kr34+qnvqk7NKdNzqoeMXR8cvSoetVhUC6JkBAGSOD9yM09f1ihjWjxACQAZs3rzZnbSiNrJXPx+VEUIAyABC2DjREB7dsU/Ix01/HFVtrRkBJIQACkVueUrk3rvh8V7JXv18VEYIASAD9JtieqOfj8qiIUziFmmUjl6U//o+ZNVUil+VAHpmAABAGR1BQggAKDwdRn8bNO5WaNw8bqbDqL9mNTqMer0KMwAAoFeEEACAiKRum+rP2wRmAABA3QghAKDQCCEAALv0J4j6czWBGQAA0C+EEACASBArvUNU+DX93CYyAwAAEkEIAQCFVs8tUv3cJjIDAAASQQgBAIWmQxj322f0c1rADAAASAQhBPqi834XzHvJBStcD70OIDMIIdAXEkI9A5BpOohRem8LmAEAAIkihAAS89BDD5kZkHY+hFF6TwuZAYCUIoLIKh1BQggAQHqYAYCU4kQINIQZAABQJGaAnBnxvkNDix48x429cbJZRzZxOgQSYwbIkX/ce6J7as8x4XXbnmPdJwaPDK96H7Jl2k+c27lzp5kD6BMzQI7EhVDofciO559/3gX3uB4x6wDqZgbIEUKYT9wWBRJlBsgRQggAvTID5JCEkAACQCwzAACgSMwAAIAiMQMAAIrEDAAAKBIzAACgSMwAAIAiMQMAAIrEDAAAKBIzAACgSMwAAIAiMQMAAIrEDAAAKBIzAACgSMwAAIAiMQMAAIrEDAAAKBIzAICaPPTQQ1U/BjLCDACgV5WiV2kOpJgZAEBV1WJXbQ1IKTMAgKqIHXLGDACgqmohrLYGpJQZAECvKgWv0hxIMTMA0AdvB4F7KWaeV3HBi5sBGWAGAOp089yRYQSLFEKhw6c/BjLCDADUQSLYvWq8+3QQhOSx3pNnPn5EEBlmBgDqICGU26JRek+e7dy5M6TnQIaYAYA6XNg5rLAhlAC+eNx/hf7pLGfWgYwwAwB1mDdhaFkM5bHek1fPP/+82zr1RyV6HcgIMwBQJ3mTjH+tUK/l3ZXjbg/xGiEyzAwAxNmx/R1qzb9RRug1AKlnBgC0Z5/sceEqFyxZaNcBZJkZAIjSESSEQN6YAQAht0CJIFAEZgDAR/DOW4kgkH9mABSbjiCvCwJ5ZwZIiUeDQH5CuUQ+1nuQsGgEN24ggkAxmAHSwr8+FaX3IDk6gtwOBYrCDJAWPn7yH2ZC2FhxETxhpt0HII/MAGkRjR8hbBwiCBSdGSAtCGHjEUEAMQOkhfzHWejHSAYRBNDDDJAW8h9noR+j/4gggHeYAdKCEDYGEQRQzgyQFoQwUX96Ys8QEQSgmAHSwv8HWx77H6HQe1AXCaF7djgRBBBlBkgD+Y0m8h9rucZ9jD5ZtGiRcy92OPfqCUQQgGcGQC5JBFevXh0+lhCGMYzZB6BwzADInblz57qVK1e6devWlWaEEMAuZgDkirwuqCMIABFmAOSK+85Y53Z2mjnQKvPnzy/Ra2gJMwAANIjEr7Ozs0w0jMSxJcwAANAgOoIaIWwJMwAANEDcaTCOfh4azgwAAA2gg1eJfh4azgwAAA0wePBgN3r06JJo/PxM9ujnoeHMAADQIBI6HcRoBAlhS5gBAKBBfAR99KJhJIQtYwYAgAbRAYzSe9E0ZgAAQJGYAQAARWIGAAAUiRkAAFLo40HgxowZU5Gs6+egJmYAAEihR4PAdXV1VSTr+jmoiRkAAFLotSBwy5cvr0jW9XNQEzMAAKSQhK43+jmoiRkAAFAkZgAAQJGYAQAARWIGAAAUiRkAAFAkZgAAQJGYAQAARWIGAAAUiRkAAFAkZgAAQJGYAQAARWIGAAAUiRkAAFAkZgAAyJjzV84NLVs4y6y975xT3Opz55k5SswAAJAxPoR6Hl2LiyRCZgAAyJhKsZOPq0USITMAAGRMbyHU+1HGDAAAGTNrxhGhuLmeodz/ByWncmPbPoc8AAAAAElFTkSuQmCC";

// src/economy.ts
var XP_PER_CREDIT = 20;
var RED_MIDNIGHT = ["#a32222", "#7e1a1a"];
var PACK_DEFS = {
  standard: {
    cost: 1e3,
    size: 5,
    guarantee: null,
    name: "Booster",
    blurb: "Five random cards from the full set \u2014 items, creatures and shopkeepers alike.",
    artLabel: "BOOSTER",
    artPlus: null,
    shreds: RED_MIDNIGHT
  },
  // the focus packs: pricier, guarantee ≥1 of their kind
  creature: {
    cost: 1500,
    size: 5,
    guarantee: "creature",
    name: "Hunter's Pack",
    blurb: "Five cards with at least one creature guaranteed. For filling out the bestiary.",
    artLabel: "CREATURES",
    artPlus: "1+ CREATURE",
    shreds: ["#2f9e50", "#1c6b35"]
  },
  shopkeeper: {
    cost: 1500,
    size: 5,
    guarantee: "shopkeeper",
    name: "Merchant's Pack",
    blurb: "Five cards with at least one shopkeeper guaranteed. Meet the folks behind the counters.",
    artLabel: "MERCHANTS",
    artPlus: "1+ SHOPKEEPER",
    shreds: ["#3f6fd4", "#23408e"]
  },
  // a plain 10-boosters-at-once box — no guarantee, no discount
  mega: {
    cost: 1e4,
    size: 50,
    guarantee: null,
    name: "Mega Pack",
    blurb: "Fifty random cards in one rip \u2014 ten boosters' worth for the serious collector.",
    artLabel: "MEGA PACK",
    artPlus: null,
    shreds: RED_MIDNIGHT
  }
};
var packCost = (kind) => PACK_DEFS[kind].cost;
var packSize = (kind) => PACK_DEFS[kind].size;
var matchesKind = (card, kind) => kind === "creature" ? card.kind !== "item" && !card.store : !!card.store;
var levelupBonus = (level) => Math.round(200 * Math.pow(50, (level - 2) / 98));
var TREASURE_BONUS = PACK_DEFS.standard.cost;
var TREASURE_MAP_DEFS = /* @__PURE__ */ new Set([442, 443, 456]);
var killBonus = (level) => Math.min(100, Math.round(2 * Math.pow(50, (level - 1) / 98)));
var WEIGHTS = [
  ["common", 70],
  ["uncommon", 18],
  ["rare", 8],
  ["epic", 3],
  ["legendary", 1]
];
function secureInt(max) {
  const range = 4294967296;
  const limit = range - range % max;
  const buf = new Uint32Array(1);
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= limit);
  return buf[0] % max;
}
function rollRarity() {
  let n = secureInt(100);
  for (const [r, w2] of WEIGHTS) {
    if (n < w2) return r;
    n -= w2;
  }
  return "common";
}
function pickCard(catalog, rarity) {
  const pool = catalog.byRarity[rarity];
  return pool[secureInt(pool.length)];
}
var FOIL_CHANCE_PCT = 1;
function openPack(catalog, save, kind = "standard") {
  const cost = packCost(kind);
  if (save.credits < cost) throw new Error("not enough credits");
  const rarities = Array.from({ length: packSize(kind) }, rollRarity);
  const pulls = rarities.map((r) => ({
    card: pickCard(catalog, r),
    foil: secureInt(100) < FOIL_CHANCE_PCT,
    isNew: false
  }));
  const guarantee = PACK_DEFS[kind].guarantee;
  if (guarantee && !pulls.some((p) => matchesKind(p.card, guarantee))) {
    const slot = secureInt(pulls.length);
    const pool = catalog.byRarity[rarities[slot]].filter(
      (c2) => matchesKind(c2, guarantee)
    );
    if (pool.length > 0) pulls[slot].card = pool[secureInt(pool.length)];
  }
  save.credits -= cost;
  for (const p of pulls) {
    p.isNew = (save.collection[p.card.id] ?? 0) === 0;
    save.collection[p.card.id] = (save.collection[p.card.id] ?? 0) + 1;
    if (p.foil) save.foils[p.card.id] = (save.foils[p.card.id] ?? 0) + 1;
  }
  save.stats.packsOpened += 1;
  return pulls;
}
var MELT_VALUE = {
  common: 10,
  uncommon: 40,
  rare: 200,
  epic: 800,
  legendary: 3200
};
function melt(save, card, count, kind = "any") {
  const copies = save.collection[card.id] ?? 0;
  const foils = save.foils[card.id] ?? 0;
  const avail = kind === "foil" ? foils : kind === "plain" ? copies - foils : copies;
  const n = Math.min(count, avail);
  if (n <= 0) return 0;
  const left = copies - n;
  save.collection[card.id] = left;
  if (kind === "foil") save.foils[card.id] = foils - n;
  else if (kind === "any" && foils > left) save.foils[card.id] = left;
  const gained = n * MELT_VALUE[card.rarity];
  save.credits += gained;
  save.stats.creditsEarned += gained;
  return gained;
}
var keptCopies = (save, id) => save.keep[id] ? Infinity : Math.max(1, save.foils[id] ?? 0);
function dupesMeltPreview(catalog, save) {
  let cards = 0;
  let credits = 0;
  for (const [id, copies] of Object.entries(save.collection)) {
    const card = catalog.byId.get(id);
    if (!card) continue;
    const extras = copies - keptCopies(save, id);
    if (extras <= 0) continue;
    cards += extras;
    credits += extras * MELT_VALUE[card.rarity];
  }
  return { cards, credits };
}
function meltAllDupes(catalog, save) {
  const res = dupesMeltPreview(catalog, save);
  for (const [id, copies] of Object.entries(save.collection)) {
    const keep = keptCopies(save, id);
    if (copies > keep && catalog.byId.has(id)) save.collection[id] = keep;
  }
  save.credits += res.credits;
  save.stats.creditsEarned += res.credits;
  return res;
}
function addXpCredits(save, credits) {
  save.credits += credits;
  save.stats.creditsEarned += credits;
}

// src/cardRender.ts
var CARD_W = 240;
var CARD_H = 336;
var SCALE_BINDER = 0.625;
var esc = (s) => String(s).replace(/[&<>"]/g, (c2) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c2]);
var CardRenderer = class {
  constructor(sprites, getItemDesc) {
    this.sprites = sprites;
    this.getItemDesc = getItemDesc;
  }
  /**
   * One card front. If the needed sheet isn't ready the art is a blank
   * placeholder carrying data-hstcg-pending; callers kick ensureCardArt()
   * and re-render (the binder does this per page).
   */
  cardHtml(card, opts = {}) {
    const isMob = card.kind !== "item";
    const rar = card.rarity[0].toUpperCase() + card.rarity.slice(1);
    const cls = ["hstcg-card", "r-" + card.rarity];
    if (opts.unowned) cls.push("unowned");
    if (opts.foil) cls.push("foil");
    const style = this.sprites.spriteStyle(card);
    const desc = isMob ? card.desc ?? "" : this.getItemDesc(card.primaryDef);
    return `<div class="${cls.join(" ")}" data-card="${esc(card.id)}">
    ${opts.dupes && opts.dupes > 1 ? `<div class="hstcg-dupe">\xD7${opts.dupes}</div>` : ""}
    <div class="hstcg-name"><span class="nm">${esc(card.name)}</span></div>
    <div class="hstcg-art">
      <div class="hstcg-spr"${style ? ` style="${style}"` : ` data-hstcg-pending="1"`}></div>
      ${isMob && card.level != null ? `<div class="hstcg-lv">Lv ${card.level}</div>` : ""}
    </div>
    <div class="hstcg-type"><span>${card.kind === "item" ? "Item" : card.store ? "Shopkeeper" : "Creature"}</span><span class="ids">#${esc(card.idsDisplay)}</span></div>
    <div class="hstcg-flavor">${esc(desc)}</div>
    <div class="hstcg-foot">
      <span class="hstcg-gem"></span><span class="hstcg-rar">${rar}</span>
      <span class="hstcg-pts">${POINTS[card.rarity]}<span class="u">pts</span></span>
    </div>
  </div>`;
  }
  /** Same card wrapped for a non-detail size (binder / popover). */
  scaledCard(card, scale, opts = {}) {
    return `<div class="hstcg-scale" style="transform:scale(${scale});width:${CARD_W * scale}px;height:${CARD_H * scale}px">${this.cardHtml(card, opts)}</div>`;
  }
  // ------------------------------------------------------------- card back
  /** Booster wrapper art ("Red Midnight"): near-black wrapper, blood-red
   *  rails/rules between the foil crimps, logo. The crimps/tab/tear
   *  structure lives in overlay markup + tcg.css.
   *  Focus packs (designs from tools/pack-style-lab.html):
   *  Hunter's = emerald + claw-slash emblem; Merchant's = ledger blue +
   *  market-awning scallops + balance-scales emblem. Colorways live on the
   *  .hstcg-pk.k-<kind> classes in tcg.css. */
  packArt(kind = "standard") {
    const emblem = kind === "creature" ? CLAW_SVG : kind === "shopkeeper" ? SCALES_SVG : "";
    const def = PACK_DEFS[kind];
    const label = def.artLabel;
    const n5 = `${def.size} CARDS` + (def.artPlus ? ` \xB7 <span class="plus">${def.artPlus}</span>` : "");
    return `<div class="hstcg-pk-art">
      ${emblem ? `<div class="wm">${emblem}</div>` : ""}
      ${kind === "shopkeeper" ? `<div class="awning"><div class="stripes"></div><div class="scallops"></div></div>` : ""}
      <div class="rail l"></div><div class="rail r"></div>
      <div class="rule r1"></div><div class="rule r2"></div>
      <div class="lbl">${label}</div>
      <img class="logo" src="${logo_default}">
      ${emblem ? `<div class="em">${emblem}</div>` : ""}
      <div class="n5">${n5}</div>
    </div>`;
  }
  /** The full back SVG — self-contained, no sprite sheets needed. */
  backSvg() {
    return `<svg viewBox="0 0 240 336" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="hstcg-lsh" x="-20%" y="-40%" width="140%" height="200%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.4" flood-color="#000" flood-opacity=".85"/>
    </filter>
    <!-- clip the sky to the inside of the gold border so the margin stays black -->
    <clipPath id="hstcg-bclip"><rect x="9" y="9" width="222" height="318" rx="8"/></clipPath>
  </defs>
  <rect width="240" height="336" rx="14" fill="#000"/>
  <image href="${back_sky_default}" width="240" height="336" preserveAspectRatio="xMidYMid slice" clip-path="url(#hstcg-bclip)"/>
  <rect x="8" y="8" width="224" height="320" rx="9" fill="none" stroke="#e8b64c" stroke-width="2"/>
  <rect x="14" y="14" width="212" height="308" rx="6" fill="none" stroke="#e8b64c" stroke-opacity=".35"/>
  <image href="${logo_default}" x="38" y="154" width="164" height="27.8" filter="url(#hstcg-lsh)"/>
</svg>`;
  }
};
var CLAW_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="var(--pk2)">
  <path d="M14 4 Q32 46 52 92 Q28 50 6 8 Z"/>
  <path d="M38 2 Q56 46 74 94 Q50 50 30 6 Z"/>
  <path d="M62 4 Q80 46 96 90 Q72 48 54 8 Z"/>
</svg>`;
var SCALES_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
     stroke="var(--pk2)" fill="none" stroke-width="4.5" stroke-linecap="round">
  <line x1="50" y1="14" x2="50" y2="76"/>
  <line x1="18" y1="24" x2="82" y2="24"/>
  <circle cx="50" cy="11" r="4" fill="var(--pk2)" stroke="none"/>
  <line x1="18" y1="24" x2="9" y2="46" stroke-width="2.5"/>
  <line x1="18" y1="24" x2="27" y2="46" stroke-width="2.5"/>
  <path d="M4 46 A14 14 0 0 0 32 46 Z" fill="var(--pk2)" stroke="none"/>
  <line x1="82" y1="24" x2="73" y2="46" stroke-width="2.5"/>
  <line x1="82" y1="24" x2="91" y2="46" stroke-width="2.5"/>
  <path d="M68 46 A14 14 0 0 0 96 46 Z" fill="var(--pk2)" stroke="none"/>
  <path d="M36 86 L64 86 L50 72 Z" fill="var(--pk2)" stroke="none"/>
</svg>`;

// src/sprites.ts
var ART_W = 206;
var ART_H = 140;
var CREATURE_GEOM = {
  small: [64, 64, 1920],
  medium: [64, 128, 1920],
  large: [128, 128, 1920],
  largest: [256, 184, 2048]
};
var FRAMES_PER_CREATURE = 15;
var MANIFEST_URL = "https://highspell.com:3002/assetsClient";
function fitScale(fw, fh) {
  let s = Math.min(ART_W / fw, ART_H / fh, 2.5);
  s = Math.max(0.25, Math.floor(s * 4) / 4);
  return s;
}
function cssUrl(raw) {
  const m = /url\((['"]?)(.+?)\1\)/.exec(raw);
  return m ? m[2] : null;
}
function looksLikeImageUrl(s) {
  return s.startsWith("blob:") || s.startsWith("data:image") || /^https?:.*\.(png|webp|jpg)/i.test(s) || /^\/.*\.(png|webp|jpg)/i.test(s);
}
function entriesOf(o2) {
  if (!o2 || typeof o2 !== "object") return [];
  if (o2 instanceof Map) return Array.from(o2.entries());
  if (Array.isArray(o2)) return o2.map((v, i) => [i, v]);
  return Object.entries(o2);
}
function findImageUrl(obj, depth = 4, seen = /* @__PURE__ */ new Set()) {
  if (obj == null) return null;
  if (typeof obj === "string") {
    if (looksLikeImageUrl(obj)) return obj;
    const inner = cssUrl(obj);
    return inner && looksLikeImageUrl(inner) ? inner : null;
  }
  if (typeof obj !== "object") return null;
  if (obj instanceof HTMLImageElement) return obj.currentSrc || obj.src || null;
  if (obj instanceof HTMLCanvasElement) {
    try {
      return obj.toDataURL();
    } catch {
      return null;
    }
  }
  if (obj instanceof Blob) return URL.createObjectURL(obj);
  if (depth <= 0 || seen.has(obj)) return null;
  seen.add(obj);
  for (const [, v] of entriesOf(obj)) {
    try {
      const found = findImageUrl(v, depth - 1, seen);
      if (found) return found;
    } catch {
    }
  }
  return null;
}
function findSizeTag(obj, depth = 3, seen = /* @__PURE__ */ new Set()) {
  if (obj == null) return null;
  if (typeof obj === "string") {
    const s = obj.toLowerCase();
    for (const size of ["largest", "medium", "small", "large"]) {
      if (s.includes(size)) return size;
    }
    return null;
  }
  if (typeof obj !== "object" || depth <= 0 || seen.has(obj)) return null;
  seen.add(obj);
  for (const [k, v] of entriesOf(obj)) {
    const fromKey = typeof k === "string" ? findSizeTag(k, 0) : null;
    if (fromKey) return fromKey;
    try {
      const found = findSizeTag(v, depth - 1, seen);
      if (found) return found;
    } catch {
    }
  }
  return null;
}
function describeShape(o2, depth = 2, seen = /* @__PURE__ */ new Set()) {
  if (o2 === null) return "null";
  if (o2 === void 0) return "undefined";
  const t = typeof o2;
  if (t === "string") return `"${o2.slice(0, 60)}"`;
  if (t === "function") return "fn";
  if (t !== "object") return String(o2);
  if (seen.has(o2)) return "<cycle>";
  seen.add(o2);
  if (o2 instanceof HTMLImageElement)
    return `<img ${o2.naturalWidth}x${o2.naturalHeight} src=${(o2.currentSrc || o2.src || "").slice(0, 50)}>`;
  if (o2 instanceof HTMLCanvasElement) return `<canvas ${o2.width}x${o2.height}>`;
  if (o2 instanceof Blob) return `<Blob ${o2.size}b ${o2.type}>`;
  if (o2 instanceof Map) {
    const es2 = Array.from(o2.entries()).slice(0, 6);
    return `Map(${o2.size}){${es2.map(([k, v]) => `${String(k)}=>${depth > 0 ? describeShape(v, depth - 1, seen) : "\u2026"}`).join(", ")}}`;
  }
  if (Array.isArray(o2)) {
    const head = o2.slice(0, 4).map((v) => depth > 0 ? describeShape(v, depth - 1, seen) : "\u2026").join(", ");
    return `[${head}${o2.length > 4 ? ` \u2026+${o2.length - 4}` : ""}]`;
  }
  const ks2 = Object.keys(o2).slice(0, 12);
  return `{${ks2.map((k) => {
    try {
      return `${k}:${depth > 0 ? describeShape(o2[k], depth - 1, seen) : "\u2026"}`;
    } catch {
      return `${k}:<threw>`;
    }
  }).join(", ")}}`;
}
function probeClassImage(classNames) {
  const hosts = [];
  const gameEl = document.querySelector(
    "#hs-chat-menu, #hs-screen-mask, [class^='hs-']"
  );
  if (gameEl) hosts.push(gameEl);
  hosts.push(document.body);
  for (const host of hosts) {
    const el = document.createElement("div");
    el.className = classNames;
    el.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;";
    host.appendChild(el);
    const img = getComputedStyle(el).backgroundImage;
    el.remove();
    const url = img && img !== "none" ? cssUrl(img) : null;
    if (url) return url;
  }
  return null;
}
function probeStyleSheets(classFragment) {
  for (const sheet of Array.from(document.styleSheets)) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of Array.from(rules)) {
      const r = rule;
      if (!r.selectorText || !r.selectorText.includes(classFragment)) continue;
      const img = r.style?.backgroundImage || r.style?.background;
      const url = img ? cssUrl(img) : null;
      if (url) return url;
    }
  }
  return null;
}
async function loadSheet(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ url, width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error(`sheet failed to load: ${url}`));
    img.src = url;
  });
}
var SpriteSource = class {
  constructor(gameHooks, log) {
    this.gameHooks = gameHooks;
    this.log = log;
    this.itemSheet = null;
    this.creatureSheets = {};
    /** card id -> composited 960×128 paper-doll walk sheet (data URL). */
    this.humanSheets = /* @__PURE__ */ new Map();
    this.appearanceImgs = null;
    this.appearancePromise = null;
    this.itemSheetPromise = null;
    /** One-shot shape dump so a failed resolve tells us what to hook next. */
    this.diagnosticsDumped = false;
    // -------------------------------------------------------------- creatures
    this.creatureSheetPromises = {};
    this.creatureUrlCache = null;
  }
  // ------------------------------------------------------------------ items
  async ensureItemSheet() {
    if (this.itemSheet) return this.itemSheet;
    if (!this.itemSheetPromise) {
      this.itemSheetPromise = (async () => {
        const [url, via] = this.resolveItemSheetUrl();
        if (!url) {
          this.dumpSheetDiagnostics();
          throw new Error("item spritesheet not found (see diagnostics)");
        }
        this.log(`item sheet via ${via}: ${url.slice(0, 80)}`);
        this.itemSheet = await loadSheet(url);
        return this.itemSheet;
      })();
      this.itemSheetPromise.catch(() => this.itemSheetPromise = null);
    }
    return this.itemSheetPromise;
  }
  resolveItemSheetUrl() {
    try {
      const ssm = this.gameHooks.SpriteSheetManager;
      for (const info of [ssm?.Instance?.ItemSpritesheetInfo, ssm?.ItemSpritesheetInfo]) {
        const url = findImageUrl(info);
        if (url) return [url, "SpriteSheetManager"];
      }
    } catch {
    }
    for (const cls of ["hs-ui-item-tooltip-sprite", "hs-inventory-item"]) {
      const url = probeClassImage(cls);
      if (url) return [url, `class .${cls}`];
    }
    for (const frag of ["hs-ui-item-tooltip-sprite", "hs-inventory-item"]) {
      const url = probeStyleSheets(frag);
      if (url) return [url, `stylesheet .${frag}`];
    }
    return [null, "none"];
  }
  dumpSheetDiagnostics() {
    if (this.diagnosticsDumped) return;
    this.diagnosticsDumped = true;
    try {
      const inst = this.spriteSheetInstance();
      this.log("DIAG Instance keys:", inst ? Object.keys(inst).join(",") : "<missing>");
      for (const key of [
        "_itemSpritesheetInfo",
        "_creatureSpritesheetInfo",
        "_humanNPCSpritesheetInfo"
      ]) {
        try {
          this.log(`DIAG ${key}:`, describeShape(inst?.[key], 3).slice(0, 700));
        } catch (e13) {
          this.log(`DIAG ${key} threw:`, e13);
        }
      }
      const sheets = Array.from(document.styleSheets).map((s) => {
        try {
          return `${(s.href ?? "inline").slice(-40)}(${s.cssRules.length})`;
        } catch {
          return `${(s.href ?? "inline").slice(-40)}(x-origin)`;
        }
      }).join(" | ");
      this.log("DIAG stylesheets:", sheets);
    } catch (e13) {
      this.log("DIAG dump failed:", e13);
    }
  }
  /** Sheet column/row of an item def's 48×48 frame. */
  itemFramePos(defId) {
    try {
      const pos = this.gameHooks.InventoryItemSpriteManager?.getCSSBackgroundPositionForItem?.(defId);
      if (typeof pos === "string") {
        const m = /(-?[\d.]+)(px|rem)\s+(-?[\d.]+)(px|rem)/.exec(pos);
        if (m) {
          const toFrames = (v, unit) => unit === "rem" ? -parseFloat(v) / 3 : -parseFloat(v) / 48;
          return {
            col: toFrames(m[1], m[2]),
            row: toFrames(m[3], m[4])
          };
        }
      }
    } catch {
    }
    const cols = this.itemSheet ? Math.floor(this.itemSheet.width / 48) : 20;
    const f = defId - 1;
    return { col: f % cols, row: Math.floor(f / cols) };
  }
  async ensureCreatureSheet(type) {
    const existing = this.creatureSheetPromises[type];
    if (existing) return existing;
    const p = (async () => {
      const [url, via] = this.resolveCreatureSheetUrl(type);
      if (!url) {
        this.dumpSheetDiagnostics();
        throw new Error(`creature sheet not found: ${type}`);
      }
      this.log(`${type} creature sheet via ${via}: ${url.slice(0, 80)}`);
      const info = await loadSheet(url);
      this.creatureSheets[type] = info;
      return info;
    })();
    this.creatureSheetPromises[type] = p;
    p.catch(() => delete this.creatureSheetPromises[type]);
    return p;
  }
  spriteSheetInstance() {
    const ssm = this.gameHooks.SpriteSheetManager;
    return ssm?.Instance ?? ssm?._instance ?? ssm;
  }
  resolveCreatureSheetUrl(type) {
    if (!this.creatureUrlCache?.[type]) this.creatureUrlCache = this.harvestCreatureUrls();
    const harvested = this.creatureUrlCache?.[type];
    if (harvested) return [harvested, "_creatureSpritesheetInfo"];
    const cls = `hs-${type}-creature-appearance`;
    const probed = probeClassImage(`hs-appearance ${cls}`);
    if (probed) return [probed, `class .${cls}`];
    const scanned = probeStyleSheets(cls);
    if (scanned) return [scanned, `stylesheet .${cls}`];
    return [null, "none"];
  }
  /** Pull {small|medium|large|largest: url} out of _creatureSpritesheetInfo. */
  harvestCreatureUrls() {
    try {
      const info = this.spriteSheetInstance()?._creatureSpritesheetInfo;
      if (!info) return null;
      const SIZES = ["small", "medium", "large", "largest"];
      const out = {};
      for (const [k, v] of entriesOf(info)) {
        const url = findImageUrl(v);
        if (!url) continue;
        const kstr = String(k).toLowerCase();
        let size = SIZES.find((s) => kstr === s) ?? // "largest" contains "large" — check longest first
        ["largest", "medium", "small", "large"].find((s) => kstr.includes(s)) ?? findSizeTag(v);
        if (!size && typeof k === "number" && k >= 0 && k < SIZES.length) {
          size = SIZES[k];
        }
        if (size && !out[size]) out[size] = url;
      }
      if (Object.keys(out).length) {
        this.log(`creature sheets harvested: ${Object.keys(out).join(",")}`);
        return out;
      }
      return null;
    } catch {
      return null;
    }
  }
  // -------------------------------------------------------------- humanoids
  /** Fetch + gunzip the appearance part sheets once (lazy, on first humanoid). */
  ensureAppearance() {
    if (!this.appearancePromise) {
      this.appearancePromise = (async () => {
        const manifestResp = await fetch(MANIFEST_URL).catch((e13) => {
          throw new Error(`manifest fetch failed: ${e13}`);
        });
        if (!manifestResp.ok)
          throw new Error(`manifest HTTP ${manifestResp.status}`);
        const manifest = await manifestResp.json();
        const url = manifest?.data?.files?.gameAssets?.appearance;
        if (!url) throw new Error("appearance sheet URL missing from manifest");
        this.log(`fetching appearance sheets: ${String(url).slice(0, 100)}`);
        const resp = await fetch(url).catch((e13) => {
          throw new Error(`appearance fetch failed: ${e13}`);
        });
        if (!resp.ok) throw new Error(`appearance HTTP ${resp.status}`);
        const buf = new Uint8Array(await resp.arrayBuffer());
        let text;
        if (buf[0] === 31 && buf[1] === 139) {
          const stream = new Blob([buf]).stream().pipeThrough(new window.DecompressionStream("gzip"));
          text = await new Response(stream).text();
        } else {
          text = new TextDecoder().decode(buf);
        }
        const sheets = JSON.parse(text);
        const imgs = {};
        await Promise.all(
          sheets.map(
            (s) => new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => {
                imgs[s.filename.replace(/\.png$/, "")] = img;
                resolve();
              };
              img.onerror = () => reject(new Error(`appearance sheet: ${s.filename}`));
              img.src = s.data;
            })
          )
        );
        this.appearanceImgs = imgs;
        this.log(`loaded ${sheets.length} appearance part sheets`);
      })();
      this.appearancePromise.catch((e13) => {
        this.log("appearance part sheets failed to load:", e13);
        this.appearancePromise = null;
      });
    }
    return this.appearancePromise;
  }
  async ensureHumanSheet(card) {
    const cached = this.humanSheets.get(card.id);
    if (cached) return cached;
    const fromGame = this.harvestHumanNpcSheet(card.defIds);
    if (fromGame) {
      this.humanSheets.set(card.id, fromGame);
      return fromGame;
    }
    await this.ensureAppearance();
    const url = compositeHumanoid(this.appearanceImgs, card.render);
    this.humanSheets.set(card.id, url);
    return url;
  }
  /** Look for a game-composited sheet keyed by one of this card's def ids. */
  harvestHumanNpcSheet(defIds) {
    try {
      const info = this.spriteSheetInstance()?._humanNPCSpritesheetInfo;
      for (const [k, v] of entriesOf(info)) {
        const kn = typeof k === "number" ? k : parseInt(String(k), 10);
        if (!defIds.includes(kn)) continue;
        const url = findImageUrl(v);
        if (url) return url;
      }
    } catch {
    }
    return null;
  }
  getHumanSheet(card) {
    return this.humanSheets.get(card.id) ?? null;
  }
  // ---------------------------------------------------------------- styling
  /**
   * Ensure everything this card's art needs is loaded (sheet URLs, humanoid
   * composite). Resolves when spriteStyle() can produce a real style.
   */
  async ensureCardArt(card) {
    if (card.kind === "item") {
      await this.ensureItemSheet();
    } else if (card.kind === "creature") {
      await this.ensureCreatureSheet(card.render.type);
    } else {
      await this.ensureHumanSheet(card);
    }
  }
  /**
   * Inline style for the .hstcg-spr div of a card, or null if the needed
   * sheet isn't loaded yet (caller shows a placeholder and retries after
   * ensureCardArt()).
   */
  spriteStyle(card) {
    if (card.kind === "item") {
      if (!this.itemSheet) return null;
      const sc2 = fitScale(48, 48);
      const { col: col2, row: row2 } = this.itemFramePos(card.primaryDef);
      return `width:${48 * sc2}px;height:${48 * sc2}px;background-image:url('${this.itemSheet.url}');background-size:${this.itemSheet.width * sc2}px auto;background-position:${-col2 * 48 * sc2}px ${-row2 * 48 * sc2}px`;
    }
    if (card.kind === "humanoid") {
      const sheet = this.getHumanSheet(card);
      if (!sheet) return null;
      const sc2 = fitScale(64, 128);
      return `width:${64 * sc2}px;height:${128 * sc2}px;background-image:url('${sheet}');background-size:${960 * sc2}px auto;background-position:${-(card.icon ?? 1) * 64 * sc2}px 0px`;
    }
    const render = card.render;
    const info = this.creatureSheets[render.type];
    if (!info) return null;
    const [fw, fh, sheetW] = CREATURE_GEOM[render.type];
    const sc = fitScale(fw, fh);
    const cols = Math.floor(sheetW / fw);
    const idx = render.spriteId * FRAMES_PER_CREATURE + (card.icon ?? 1);
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    return `width:${fw * sc}px;height:${fh * sc}px;background-image:url('${info.url}');background-size:${sheetW * sc}px auto;background-position:${-col * fw * sc}px ${-row * fh * sc}px`;
  }
};
var EQ_TABLE = [
  ["helmet1", "helmet_back1"],
  ["chest1"],
  ["legs1"],
  ["shield_back1", "shield_front1"],
  ["weapon1"],
  ["cape_front1", "cape_back1"],
  ["neck1"],
  ["gloves1"],
  ["boots1"]
];
var TRIM_TABLE = [
  ["helmettrim1"],
  ["chesttrim1"],
  ["legstrim1"],
  ["shieldtrim_back1", "shieldtrim_front1"]
];
var BASE_TABLE = ["hair", "beard", "shirt", "body", "pants"];
var ICE_TINT = [167, 255, 255];
var WOOD_TINT = [94, 55, 35];
var valid = (v) => v !== null && v !== void 0 && !isNaN(v) && v >= 0;
function drawPart(ctx, img, spriteId, fullAnim, filter, isEquip) {
  const cols = img.width / 64;
  let f = spriteId * (fullAnim ? 15 : 5), sx = 0, sy = 0;
  const iceAlpha = filter === 2 && !isEquip;
  if (iceAlpha) {
    ctx.save();
    ctx.globalAlpha = 0.65;
  }
  for (let i = 0; i < 15; i++) {
    if (fullAnim || i % 3 === 0) {
      sy = 128 * Math.floor(f / cols);
      sx = 64 * (f % cols);
      f++;
    }
    ctx.drawImage(img, sx, sy, 64, 128, 64 * i, 0, 64, 128);
  }
  if (iceAlpha) ctx.restore();
}
function drawSlot(ctx, imgs, table, ids, slot, fullAnim, plane, filter, isTrim, isEquip) {
  const row = ids[slot];
  if (!row) return;
  let sheetId = isTrim ? row[3] : row[0];
  const spriteId = isTrim ? row[4] : row[1];
  if (!valid(sheetId) || !valid(spriteId)) return;
  sheetId += plane;
  const stem = table[slot] && table[slot][sheetId];
  if (!stem) return;
  const img = imgs[stem];
  if (!img) return;
  drawPart(ctx, img, spriteId, fullAnim, filter, isEquip);
}
var hasTrim = (eq, slot) => !!eq[slot] && eq[slot][4] !== -1;
function legsBeforeBoots(eq) {
  const b = eq[8], l = eq[2];
  if (!b || !l || !valid(b[0]) || !valid(l[0]) || !valid(b[1]) || !valid(l[1])) return false;
  if (l[0] === 0 && l[1] >= 9 && l[1] <= 14) return false;
  return true;
}
function chestBeforeGloves(eq) {
  const g = eq[7], c2 = eq[1];
  if (!g || !c2 || !valid(g[0]) || !valid(c2[0]) || !valid(g[1]) || !valid(c2[1])) return false;
  if (c2[0] === 0 && c2[1] >= 9 && c2[1] <= 15) return false;
  if (c2[0] === 0 && [0, 1, 2, 3, 4, 6, 7, 8].includes(c2[1]) && g[0] === 0 && [13, 14, 15, 16, 19, 20].includes(g[1])) return false;
  return true;
}
function tint(ctx, rgb) {
  const d = ctx.getImageData(0, 0, 960, 128), p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    p[i] = p[i] * rgb[0] / 255;
    p[i + 1] = p[i + 1] * rgb[1] / 255;
    p[i + 2] = p[i + 2] * rgb[2] / 255;
  }
  ctx.putImageData(d, 0, 0);
}
function grayscale(ctx) {
  const d = ctx.getImageData(0, 0, 960, 128), p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const y2 = 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2];
    p[i] = p[i + 1] = p[i + 2] = y2;
  }
  ctx.putImageData(d, 0, 0);
}
function compositeHumanoid(imgs, m) {
  const cv = document.createElement("canvas");
  cv.width = 960;
  cv.height = 128;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  const eq = m.equip, g = m.filter;
  const base = BASE_TABLE.map((k) => [0, m.base[k]]);
  const drawBase = (slot, fullAnim) => {
    const row = base[slot];
    if (!valid(row[0]) || !valid(row[1])) return;
    const img = imgs[BASE_TABLE[slot]];
    if (!img) return;
    drawPart(ctx, img, row[1], fullAnim, g, false);
  };
  if (eq[0] && eq[0][2] === 617) {
    const pumpkin = [];
    pumpkin[0] = [0, 0, 617];
    drawSlot(ctx, imgs, EQ_TABLE, pumpkin, 0, false, 1, g, false, true);
  }
  drawSlot(ctx, imgs, EQ_TABLE, eq, 5, true, 0, g, false, true);
  drawSlot(ctx, imgs, EQ_TABLE, eq, 3, true, 0, g, false, true);
  if (hasTrim(eq, 3)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 3, true, 0, g, true, true);
  drawBase(4, true);
  if (legsBeforeBoots(eq)) {
    drawSlot(ctx, imgs, EQ_TABLE, eq, 2, true, 0, g, false, true);
    if (hasTrim(eq, 2)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 2, true, 0, g, true, true);
    drawSlot(ctx, imgs, EQ_TABLE, eq, 8, true, 0, g, false, true);
  } else {
    drawSlot(ctx, imgs, EQ_TABLE, eq, 8, true, 0, g, false, true);
    drawSlot(ctx, imgs, EQ_TABLE, eq, 2, true, 0, g, false, true);
    if (hasTrim(eq, 2)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 2, true, 0, g, true, true);
  }
  drawBase(3, true);
  if (!m.hides.chest) drawBase(2, true);
  if (chestBeforeGloves(eq)) {
    drawSlot(ctx, imgs, EQ_TABLE, eq, 1, true, 0, g, false, true);
    if (hasTrim(eq, 1)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 1, true, 0, g, true, true);
    drawSlot(ctx, imgs, EQ_TABLE, eq, 7, true, 0, g, false, true);
  } else {
    drawSlot(ctx, imgs, EQ_TABLE, eq, 7, true, 0, g, false, true);
    drawSlot(ctx, imgs, EQ_TABLE, eq, 1, true, 0, g, false, true);
    if (hasTrim(eq, 1)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 1, true, 0, g, true, true);
  }
  if (eq[7] && eq[7][2] >= 611 && eq[7][2] <= 616) {
    const extra = [];
    extra[7] = [0, 12, 480];
    drawSlot(ctx, imgs, EQ_TABLE, extra, 7, true, 0, g, false, true);
  }
  drawSlot(ctx, imgs, EQ_TABLE, eq, 6, false, 0, g, false, true);
  drawSlot(ctx, imgs, EQ_TABLE, eq, 5, true, 1, g, false, true);
  if (!m.hides.helmet) {
    drawBase(1, false);
    drawBase(0, false);
  }
  drawSlot(ctx, imgs, EQ_TABLE, eq, 0, false, 0, g, false, true);
  if (hasTrim(eq, 0)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 0, true, 0, g, true, true);
  drawSlot(ctx, imgs, EQ_TABLE, eq, 3, true, 1, g, false, true);
  if (hasTrim(eq, 3)) drawSlot(ctx, imgs, TRIM_TABLE, eq, 3, true, 1, g, true, true);
  drawSlot(ctx, imgs, EQ_TABLE, eq, 4, true, 0, g, false, true);
  if (g === 1) grayscale(ctx);
  else if (g === 2) tint(ctx, ICE_TINT);
  else if (g === 3) tint(ctx, WOOD_TINT);
  return cv.toDataURL();
}

// src/save.ts
function freshSave() {
  return {
    v: 1,
    credits: 0,
    collection: {},
    foils: {},
    keep: {},
    legacyClaimed: false,
    stats: { packsOpened: 0, creditsEarned: 0 }
  };
}
var K1 = [104, 115, 116, 99, 103];
var K2 = "night-spire".split("").map((c2) => c2.charCodeAt(0));
var K3 = [46, 53, 56, 50, 43, 49, 48, 48];
function ikm() {
  const bytes = [...K1, ...K2, ...K3];
  const out = new Uint8Array(new ArrayBuffer(bytes.length));
  out.set(bytes);
  return out;
}
var te2 = new TextEncoder();
var td = new TextDecoder();
var SAVE_INFO = "hstcg-save-v1";
var EXPORT_INFO = "hstcg-export-v1";
function b64(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}
function unb64(s) {
  const raw = atob(s);
  const out = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}
async function deriveKey(username, info) {
  const base = await crypto.subtle.importKey("raw", ikm(), "HKDF", false, [
    "deriveKey"
  ]);
  return crypto.subtle.deriveKey(
    {
      name: "HKDF",
      hash: "SHA-256",
      salt: te2.encode("hstcg|" + username.toLowerCase()),
      info: te2.encode(info)
    },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}
async function encodeSave(save, username) {
  return encrypt(save, username, SAVE_INFO);
}
async function encrypt(save, username, info) {
  const key = await deriveKey(username, info);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct2 = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    te2.encode(JSON.stringify(save))
  );
  return { iv: b64(iv), ct: b64(ct2) };
}
async function decodeSave(blob, username) {
  return decrypt(blob, username, SAVE_INFO);
}
async function decrypt(blob, username, info) {
  const key = await deriveKey(username, info);
  const pt2 = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: unb64(blob.iv) },
    key,
    unb64(blob.ct)
  );
  const parsed = JSON.parse(td.decode(pt2));
  if (!parsed || parsed.v !== 1) throw new Error("unsupported save version");
  delete parsed.pity;
  delete parsed.dust;
  if (parsed.stats) delete parsed.stats.dustEarned;
  const fresh = freshSave();
  return {
    ...fresh,
    ...parsed,
    stats: { ...fresh.stats, ...parsed.stats }
  };
}
var EXPORT_FMT = "hstcg-collection";
var ImportError = class extends Error {
  constructor(message, kind) {
    super(message);
    this.kind = kind;
  }
};
async function ownerFingerprint(username) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    te2.encode("hstcg-owner|" + username.toLowerCase())
  );
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function encodeExport(save, username) {
  const out = {
    fmt: EXPORT_FMT,
    v: 1,
    owner: await ownerFingerprint(username),
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    blob: await encrypt(save, username, EXPORT_INFO)
  };
  return JSON.stringify(out, null, 2);
}
async function decodeExport(text, username) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new ImportError("not JSON", "format");
  }
  if (!parsed || parsed.fmt !== EXPORT_FMT || parsed.v !== 1 || typeof parsed.owner !== "string" || !parsed.blob?.iv || !parsed.blob?.ct) {
    throw new ImportError("not a TCG export file", "format");
  }
  if (parsed.owner !== await ownerFingerprint(username)) {
    throw new ImportError("export belongs to a different account", "account");
  }
  try {
    return await decrypt(parsed.blob, username, EXPORT_INFO);
  } catch (e13) {
    throw new ImportError(
      e13 instanceof Error ? e13.message : "decrypt failed",
      "corrupt"
    );
  }
}

// src/overlay.ts
function toast(msg) {
  const el = document.createElement("div");
  el.className = "hstcg-toast";
  el.textContent = msg;
  (document.getElementById("hstcg-root") ?? document.body).appendChild(el);
  setTimeout(() => el.remove(), 2700);
}
var staggerMs = (packSize2, slow, fast) => packSize2 > 10 ? fast : slow;
var TcgOverlay = class {
  constructor(host) {
    this.host = host;
    this.root = null;
    this.win = null;
    this.body = null;
    this.creditsEl = null;
    this.tab = "packs";
    // collection state
    this.search = "";
    this.fType = "all";
    this.fRarity = "all";
    this.fOwned = "all";
    this.fFoil = false;
    this.fSplitFoil = false;
    this.sortBy = "id";
    /** Collapsed binder sections ("Items" / "Creatures" / "Shopkeepers"). */
    this.collapsedGroups = /* @__PURE__ */ new Set();
    this.renderToken = 0;
    /** Lazy binder art loader — cards kick ensureCardArt on scroll-in. */
    this.artObs = null;
    // current pack being revealed
    this.packCards = null;
    /** Pack bought but its wrapper not yet ripped open. */
    this.wrapPending = false;
    /** Which product the current pack is — drives the wrapper colorway. */
    this.packKind = "standard";
    /** Screen rect (centre + width) of the shelf pack the user just clicked —
     *  the launch point for the shop→stage FLIP flight. One-shot. */
    this.flyFrom = null;
    /** A "Flip all" chain is running (renderPacksBar hides the button off
     *  this — any bar rebuild mid-chain must not offer a second click). */
    this.flipChain = false;
    /** The chain's pending tick, so stopFlipChain can cancel it. */
    this.flipTimer = null;
    /** Debounce for the binder search box — a full grid rebuild per keystroke
     *  is wasteful on a large collection. */
    this.searchTimer = null;
    this.escListener = (e13) => {
      if (e13.key === "Escape" && this.isVisible()) this.hide();
    };
    this.resizeObs = null;
    /** Keeps the custom binder scrollbar thumb in sync (see wireScrollbar). */
    this.sbObs = null;
  }
  // ------------------------------------------------------------- lifecycle
  toggle() {
    if (!this.root) this.create();
    if (this.isVisible()) this.hide();
    else this.show();
  }
  isVisible() {
    return !!this.win && this.win.style.visibility !== "hidden";
  }
  show() {
    if (!this.root) this.create();
    this.win.style.visibility = "visible";
    this.clampIntoViewport();
    document.addEventListener("keydown", this.escListener);
    this.refresh();
  }
  hide() {
    if (this.win) this.win.style.visibility = "hidden";
    document.removeEventListener("keydown", this.escListener);
    this.stopFlipChain();
    this.closeModal();
  }
  destroy() {
    document.removeEventListener("keydown", this.escListener);
    this.stopFlipChain();
    this.resizeObs?.disconnect();
    this.resizeObs = null;
    this.sbObs?.disconnect();
    this.sbObs = null;
    this.artObs?.disconnect();
    this.artObs = null;
    this.root?.remove();
    this.root = this.win = this.body = this.creditsEl = null;
    this.packCards = null;
    this.wrapPending = false;
  }
  /** Push the user's background colour/opacity settings onto the CSS vars. */
  applyWindowStyle() {
    if (!this.root) return;
    const { color, opacity } = this.host.getWindowStyle();
    this.root.style.setProperty("--hstcg-bg", color);
    this.root.style.setProperty("--hstcg-bg-opacity", `${opacity}%`);
  }
  /** Sync the hover-rarity-glow setting onto the root (CSS does the rest). */
  applyPeekGlow() {
    this.root?.classList.toggle("hstcg-peek", this.host.getPeekGlow());
  }
  /** Push the card-size / text-size settings onto the zoom CSS vars. */
  applyZoom() {
    if (!this.root) return;
    const z2 = this.host.getZoom();
    this.root.style.setProperty("--hstcg-cardzoom", String(z2.card / z2.text));
    this.root.style.setProperty("--hstcg-uizoom", String(z2.text));
  }
  /** Light refresh of live numbers (credits chip + shop affordability). */
  refreshCredits() {
    if (!this.creditsEl) return;
    const save = this.host.getSave();
    this.creditsEl.textContent = `\u2728 ${save ? save.credits.toLocaleString() : "\u2014"}`;
    if (this.isVisible() && this.tab === "packs") {
      if (this.packCards) this.renderPacksBar();
      else this.updateShopAffordability();
    }
  }
  // ------------------------------------------------------------------- DOM
  create() {
    this.root = document.createElement("div");
    this.root.id = "hstcg-root";
    document.body.appendChild(this.root);
    this.applyWindowStyle();
    this.applyPeekGlow();
    this.applyZoom();
    this.win = document.createElement("div");
    this.win.id = "hstcg-window";
    const saved = this.host.loadWinRect();
    if (saved) {
      this.win.style.width = `${Math.min(saved.w, window.innerWidth - 20)}px`;
      this.win.style.height = `${Math.min(saved.h, window.innerHeight - 20)}px`;
      this.win.style.left = `${saved.x}px`;
      this.win.style.top = `${saved.y}px`;
    } else {
      this.applyDefaultRect(this.win);
    }
    this.win.style.visibility = "hidden";
    this.root.appendChild(this.win);
    this.clampIntoViewport();
    this.resizeObs = new ResizeObserver(() => {
      if (this.isVisible()) this.persistRect();
    });
    this.resizeObs.observe(this.win);
    for (const type of ["keydown", "keyup", "keypress"]) {
      this.win.addEventListener(type, (e13) => {
        if (type === "keydown" && e13.key === "Escape") {
          this.hide();
        }
        e13.stopPropagation();
      });
    }
    const bar = document.createElement("div");
    bar.id = "hstcg-titlebar";
    bar.innerHTML = `
      <span class="hstcg-title">\u{1F3B4} HighSpell TCG</span>
      <div id="hstcg-tabs">
        <button data-tab="packs">Packs</button>
        <button data-tab="collection">Collection</button>
        <button data-tab="stats">Stats</button>
      </div>
      <span id="hstcg-credits">\u2728 \u2014</span>
      <div id="hstcg-close" title="Close">\u2715</div>`;
    this.win.appendChild(bar);
    this.creditsEl = bar.querySelector("#hstcg-credits");
    bar.querySelector("#hstcg-close").onclick = () => this.hide();
    bar.querySelector("#hstcg-tabs").addEventListener("click", (e13) => {
      const b = e13.target.closest("button");
      if (b) this.setTab(b.dataset.tab);
    });
    this.makeDraggable(bar);
    this.body = document.createElement("div");
    this.body.id = "hstcg-body";
    this.win.appendChild(this.body);
    this.setTab("packs");
  }
  /** Pointer-capture drag (same harness as the credit tracker): the bar
   *  receives every move/up even over the game canvas, which swallows
   *  document-level events, and the window is clamped DURING the drag. */
  makeDraggable(bar) {
    bar.addEventListener("pointerdown", (e13) => {
      if (e13.target.closest("button, #hstcg-close")) return;
      e13.preventDefault();
      bar.setPointerCapture(e13.pointerId);
      const win = this.win;
      const startX = e13.clientX - win.offsetLeft;
      const startY = e13.clientY - win.offsetTop;
      const move = (ev) => {
        win.style.left = `${ev.clientX - startX}px`;
        win.style.top = `${ev.clientY - startY}px`;
        this.clampIntoViewport();
      };
      const finish = (ev) => {
        try {
          bar.releasePointerCapture(ev.pointerId);
        } catch {
        }
        bar.removeEventListener("pointermove", move);
        bar.removeEventListener("pointerup", finish);
        bar.removeEventListener("pointercancel", finish);
        this.clampIntoViewport();
        this.persistRect();
      };
      bar.addEventListener("pointermove", move);
      bar.addEventListener("pointerup", finish);
      bar.addEventListener("pointercancel", finish);
    });
  }
  clampIntoViewport() {
    const win = this.win;
    if (!win) return;
    const maxL = Math.max(0, window.innerWidth - 120);
    const maxT = Math.max(0, window.innerHeight - 60);
    win.style.left = `${Math.min(Math.max(win.offsetLeft, -win.offsetWidth + 160), maxL)}px`;
    win.style.top = `${Math.min(Math.max(win.offsetTop, 0), maxT)}px`;
  }
  applyDefaultRect(win) {
    const w2 = Math.min(960, window.innerWidth - 40);
    const h = Math.min(660, window.innerHeight - 40);
    win.style.width = `${w2}px`;
    win.style.height = `${h}px`;
    win.style.left = `${Math.max(10, (window.innerWidth - w2) / 2)}px`;
    win.style.top = `${Math.max(10, (window.innerHeight - h) / 2)}px`;
  }
  persistRect() {
    const win = this.win;
    if (!win) return;
    this.host.saveWinRect({
      x: win.offsetLeft,
      y: win.offsetTop,
      w: win.offsetWidth,
      h: win.offsetHeight
    });
  }
  /** Settings escape hatch: recenter at the default size and show, in case
   *  a bad saved rect ever leaves the window unreachable. */
  resetPosition() {
    if (!this.root) this.create();
    this.applyDefaultRect(this.win);
    this.persistRect();
    this.show();
  }
  setTab(tab) {
    this.tab = tab;
    this.win.querySelectorAll("#hstcg-tabs button").forEach(
      (b) => b.classList.toggle("on", b.dataset.tab === tab)
    );
    this.refresh();
  }
  // ----------------------------------------------------------------- pages
  refresh() {
    if (!this.body) return;
    this.refreshCredits();
    const status = this.host.getSaveStatus();
    if (status === "loading") {
      this.body.innerHTML = `<div class="hstcg-muted">Loading your collection\u2026</div>`;
      return;
    }
    if (status === "corrupted") {
      this.renderCorrupted();
      return;
    }
    if (this.tab === "packs") this.renderPacks();
    else if (this.tab === "collection") this.renderCollection();
    else this.renderStats();
  }
  renderCorrupted() {
    this.body.innerHTML = `
      <div style="max-width:460px;display:flex;flex-direction:column;gap:12px">
        <h3 style="margin:0;color:#e06c6c">Save corrupted</h3>
        <div>Your TCG save could not be decrypted. This happens if the save file
        was edited by hand, or if it belongs to a different account.</div>
        <div class="hstcg-muted">Resetting starts a brand-new collection. This
        cannot be undone.</div>
        <button class="hstcg-btn" id="hstcg-reset">Reset save</button>
      </div>`;
    this.body.querySelector("#hstcg-reset").onclick = async () => {
      if (await this.confirmBox("Really wipe the TCG save and start over?", "Wipe it")) {
        this.host.resetSave();
        this.refresh();
      }
    };
  }
  // ----------------------------------------------------------------- packs
  renderPacks() {
    this.stopFlipChain();
    if (!this.packCards) {
      this.renderShop();
      return;
    }
    this.body.innerHTML = `
      <div class="hstcg-scrollhost">
        <div class="hstcg-tabscroll">
          <div class="hstcg-packbar" id="hstcg-packbar"></div>
          <div class="hstcg-packarea" id="hstcg-packarea"></div>
        </div>
        <div class="hstcg-sbtrack"><div class="hstcg-sbthumb"></div></div>
      </div>`;
    this.bindScrollbar(
      this.body.querySelector(".hstcg-tabscroll"),
      this.body.querySelector(".hstcg-sbtrack")
    );
    this.renderPacksBar();
    const area = this.body.querySelector("#hstcg-packarea");
    if (this.wrapPending) {
      this.renderPackWrapper(area);
    } else {
      this.renderPackCards(this.packCards, area, true);
    }
  }
  /** Cards from the current pack still face-down? (Locks the shop return.) */
  hasUnrevealed() {
    return !!this.body?.querySelector(".hstcg-flip:not(.flipped)");
  }
  /** The storefront: each product on a shelf card — sealed-pack art,
   *  blurb, and a price button. Clicking buys and jumps to the reveal. */
  renderShop() {
    const save = this.host.getSave();
    if (!save) return;
    this.body.innerHTML = `
      <div class="hstcg-scrollhost">
        <div class="hstcg-tabscroll">
          <div class="hstcg-muted hstcg-shophint">Open a pack to reveal your
            cards. Credits come from playing \u2014 XP, kills, and level-ups earn
            them.</div>
          <div class="hstcg-shop" id="hstcg-shop"></div>
        </div>
        <div class="hstcg-sbtrack"><div class="hstcg-sbthumb"></div></div>
      </div>`;
    this.bindScrollbar(
      this.body.querySelector(".hstcg-tabscroll"),
      this.body.querySelector(".hstcg-sbtrack")
    );
    const shop = this.body.querySelector("#hstcg-shop");
    shop.innerHTML = Object.entries(PACK_DEFS).map(([kind, def]) => {
      const art = this.host.renderer.packArt(kind);
      return `<div class="hstcg-shopitem k-${kind}" data-pack="${kind}">
          <div class="hstcg-shoppk">
            <div class="hstcg-pk shelf k-${kind}">
              <div class="hstcg-pk-body">${art}</div>
              <div class="hstcg-pk-tab">${art}<div class="hstcg-pk-crimp top"></div></div>
              <div class="hstcg-pk-crimp bot"></div>
            </div>
          </div>
          <div class="hstcg-shopname">${def.name}</div>
          <div class="hstcg-shopblurb">${def.blurb}</div>
          <button class="hstcg-btn primary pk-${kind}" data-pack="${kind}">
            ${def.cost.toLocaleString()} \u2728
          </button>
        </div>`;
    }).join("");
    shop.querySelectorAll(".hstcg-shopitem").forEach(
      (item) => item.onclick = () => {
        const pk = item.querySelector(".hstcg-pk.shelf");
        if (pk) {
          const r = pk.getBoundingClientRect();
          this.flyFrom = {
            x: r.left + r.width / 2,
            y: r.top + r.height / 2,
            w: r.width
          };
        }
        this.buyPack(item.dataset.pack);
      }
    );
    this.updateShopAffordability();
  }
  /** Cheap credit-tick update: dim shelves the player can't afford. */
  updateShopAffordability() {
    const save = this.host.getSave();
    if (!save) return;
    this.body?.querySelectorAll(".hstcg-shopitem").forEach((item) => {
      const poor = save.credits < packCost(item.dataset.pack);
      item.classList.toggle("poor", poor);
      item.querySelector("button").disabled = poor;
    });
  }
  /** Reveal-view top bar: the way back to the shop + Flip all. */
  renderPacksBar() {
    const bar = this.body?.querySelector("#hstcg-packbar");
    if (!bar) return;
    const locked = this.hasUnrevealed() || this.wrapPending;
    bar.innerHTML = `
      <button class="hstcg-btn" id="hstcg-backshop" ${locked ? "disabled" : ""}>
        \u2190 Back to the shop
      </button>
      ${locked ? `<span class="hstcg-muted">${this.wrapPending ? "Rip your pack open!" : "Flip your cards first"}</span>` : ""}
      <button class="hstcg-btn" id="hstcg-flipall" ${this.hasUnrevealed() && !this.flipChain ? "" : "hidden"}>Flip all</button>`;
    bar.querySelector("#hstcg-backshop").onclick = () => {
      if (this.hasUnrevealed() || this.wrapPending) return;
      this.packCards = null;
      this.renderPacks();
    };
    bar.querySelector("#hstcg-flipall").onclick = () => this.flipAll();
  }
  buyPack(kind) {
    if (this.hasUnrevealed() || this.wrapPending) return;
    const pulls = this.host.buyPack(kind);
    if (!pulls) {
      this.flyFrom = null;
      return;
    }
    this.packCards = pulls;
    this.packKind = kind;
    this.wrapPending = true;
    this.refreshCredits();
    for (const p of pulls)
      this.host.sprites.ensureCardArt(p.card).catch(() => {
      });
    this.renderPacks();
  }
  /** Show the sealed pack (colorway per product) — click rips it open.
   *  Arriving from a shop purchase (flyFrom set), the pack FLIP-flies from
   *  its shelf to the stage, growing to full size, before going clickable. */
  renderPackWrapper(area) {
    const art = this.host.renderer.packArt(this.packKind);
    area.innerHTML = `
      <div class="hstcg-packrow" id="hstcg-packrow"></div>
      <div class="hstcg-packstage k-${this.packKind}" id="hstcg-packstage">
        <div class="hstcg-pk k-${this.packKind}" id="hstcg-pk">
          <div class="hstcg-pk-body">${art}</div>
          <div class="hstcg-pk-tab">${art}<div class="hstcg-pk-crimp top"></div></div>
          <div class="hstcg-pk-crimp bot"></div>
        </div>
        <div class="hstcg-pk-flash"></div>
        <div class="hstcg-muted hstcg-pk-hint">Click the pack to rip it open</div>
      </div>`;
    const pk = area.querySelector("#hstcg-pk");
    const arm = () => pk.onclick = () => this.ripPack(area);
    const fly = this.flyFrom;
    this.flyFrom = null;
    if (!fly) {
      arm();
      return;
    }
    const hint = area.querySelector(".hstcg-pk-hint");
    hint.classList.add("waiting");
    const rect = pk.getBoundingClientRect();
    const zf = pk.offsetWidth ? rect.width / pk.offsetWidth : 1;
    const dx = (fly.x - (rect.left + rect.width / 2)) / zf;
    const dy = (fly.y - (rect.top + rect.height / 2)) / zf;
    pk.style.transition = "none";
    pk.style.transform = `translate(${dx}px, ${dy}px) scale(${fly.w / rect.width})`;
    void pk.offsetWidth;
    pk.style.transition = "";
    pk.classList.add("flying");
    pk.style.transform = "";
    let landed = false;
    const land = () => {
      if (landed) return;
      landed = true;
      pk.classList.remove("flying");
      hint.classList.remove("waiting");
      arm();
    };
    pk.addEventListener("transitionend", land, { once: true });
    setTimeout(land, 500);
  }
  /** Pull-&-snap the wrapper open, then fountain-deal the five cards. */
  ripPack(area) {
    const pk = area.querySelector("#hstcg-pk");
    const stage = area.querySelector("#hstcg-packstage");
    if (!pk || !stage || !this.packCards) return;
    pk.onclick = null;
    pk.classList.add("pulling");
    stage.querySelector(".hstcg-pk-hint")?.remove();
    setTimeout(() => {
      if (!stage.isConnected) return;
      stage.querySelector(".hstcg-pk-flash")?.classList.add("go");
      this.spawnShreds(stage);
      this.host.playFlipSound();
    }, 710);
    setTimeout(() => {
      if (!stage.isConnected || !this.packCards) return;
      const rect = pk.getBoundingClientRect();
      const launch = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.4
      };
      pk.classList.add("opened");
      this.wrapPending = false;
      const row = area.querySelector("#hstcg-packrow");
      this.renderPackCards(this.packCards, row, false, launch);
      this.renderPacksBar();
      setTimeout(() => {
        if (stage.isConnected) stage.remove();
      }, 900);
    }, 940);
  }
  /** Wrapper bits + foil confetti (wrapper colorway) from the tear line. */
  spawnShreds(stage) {
    const [bright, mid] = PACK_DEFS[this.packKind].shreds;
    const colors = [bright, "#2a2b31", mid, "#3a3c44"];
    for (let i = 0; i < 11; i++) {
      const s = document.createElement("div");
      s.className = "hstcg-shred";
      s.style.background = colors[i % colors.length];
      const a = -1.15 + Math.random() * 1.15;
      const d = 55 + Math.random() * 110;
      s.style.setProperty("--sx", `${Math.cos(a) * d}px`);
      s.style.setProperty("--sy", `${Math.sin(a) * d - 28}px`);
      s.style.setProperty("--sr", `${(Math.random() - 0.3) * 540}deg`);
      stage.appendChild(s);
      requestAnimationFrame(() => s.classList.add("go"));
    }
  }
  renderPackCards(pulls, area, faceUp, launch) {
    const r = this.host.renderer;
    const token = ++this.renderToken;
    const front = (p) => r.cardHtml(p.card, { foil: p.foil }) + (p.isNew ? `<div class="hstcg-newtag">NEW</div>` : "");
    area.innerHTML = pulls.map(
      (p, i) => `<div class="hstcg-flip r-${p.card.rarity}${faceUp ? " flipped" : ""}" data-i="${i}">
            <div class="face back"><div class="hstcg-back">${r.backSvg()}</div></div>
            <div class="face front">${front(p)}</div>
          </div>`
    ).join("");
    if (launch) {
      const step = staggerMs(pulls.length, 80, 25);
      const els = [...area.querySelectorAll(".hstcg-flip")];
      const sizes = els.map((el) => ({
        rect: el.getBoundingClientRect(),
        w: el.offsetWidth
      }));
      els.forEach((el, i) => {
        const { rect, w: w2 } = sizes[i];
        const zf = w2 ? rect.width / w2 : 1;
        el.style.setProperty(
          "--fx",
          `${(launch.x - (rect.left + rect.width / 2)) / zf}px`
        );
        el.style.setProperty(
          "--fy",
          `${(launch.y - (rect.top + rect.height / 2)) / zf}px`
        );
        el.style.setProperty(
          "--fr",
          `${(i % 5 - 2) * 28 + (i % 2 ? 14 : -14)}deg`
        );
        el.style.animationDelay = `${i * step}ms`;
        el.classList.add("dealing");
        el.addEventListener(
          "animationend",
          () => {
            el.classList.remove("dealing");
            el.style.animationDelay = "";
          },
          { once: true }
        );
      });
    }
    area.onclick = (e13) => {
      const f = e13.target.closest(".hstcg-flip");
      if (f && !f.classList.contains("flipped")) {
        f.classList.add("flipped");
        this.host.playFlipSound();
        if (!this.hasUnrevealed()) this.renderPacksBar();
      }
    };
    Promise.allSettled(
      pulls.map((p) => this.host.sprites.ensureCardArt(p.card))
    ).then(() => {
      if (token !== this.renderToken || !area.isConnected) return;
      area.querySelectorAll(".hstcg-flip").forEach((el) => {
        if (!el.querySelector("[data-hstcg-pending]")) return;
        const p = pulls[Number(el.dataset.i)];
        const face = el.querySelector(".face.front");
        if (p && face) face.innerHTML = front(p);
      });
    });
    this.host.sprites.ensureItemSheet().catch(() => {
    });
  }
  /** Staggered flip of every face-down card, one tick at a time. Each tick
   *  re-queries the live DOM, so an art patch or bar rebuild mid-chain
   *  can't strand the sequence on detached nodes. */
  flipAll() {
    if (this.flipChain) return;
    this.flipChain = true;
    this.renderPacksBar();
    const step = staggerMs(this.packCards?.length ?? 0, 120, 40);
    const soundEvery = Math.max(1, Math.round(120 / step));
    let flips = 0;
    const tick = () => {
      this.flipTimer = null;
      if (!this.flipChain) return;
      const next = this.body?.querySelector(
        ".hstcg-flip:not(.flipped)"
      );
      if (next) {
        next.classList.add("flipped");
        if (flips++ % soundEvery === 0) this.host.playFlipSound();
      }
      if (next && this.hasUnrevealed()) {
        this.flipTimer = window.setTimeout(tick, step);
      } else {
        this.flipChain = false;
        this.renderPacksBar();
      }
    };
    tick();
  }
  stopFlipChain() {
    this.flipChain = false;
    if (this.flipTimer != null) clearTimeout(this.flipTimer);
    this.flipTimer = null;
    if (this.searchTimer != null) clearTimeout(this.searchTimer);
    this.searchTimer = null;
  }
  // ------------------------------------------------------------ collection
  filteredCards() {
    const save = this.host.getSave();
    const q = this.search.trim().toLowerCase();
    return this.host.catalog.cards.filter((c2) => {
      if (q && !c2.name.toLowerCase().includes(q)) return false;
      if (this.fType === "items" && c2.kind !== "item") return false;
      if (this.fType === "creatures" && (c2.kind === "item" || c2.store)) return false;
      if (this.fType === "shopkeepers" && !c2.store) return false;
      if (this.fRarity !== "all" && c2.rarity !== this.fRarity) return false;
      const owned = (save.collection[c2.id] ?? 0) > 0;
      if (this.fOwned === "owned" && !owned) return false;
      if (this.fOwned === "unowned" && owned) return false;
      if (this.fFoil && (save.foils?.[c2.id] ?? 0) === 0) return false;
      return true;
    });
  }
  renderCollection() {
    const rarOpts = RARITIES.map(
      (r) => `<option value="${r}" ${this.fRarity === r ? "selected" : ""}>${r[0].toUpperCase() + r.slice(1)}</option>`
    ).join("");
    this.body.innerHTML = `
      <div class="hstcg-filters">
        <input type="text" id="hstcg-search" placeholder="Search cards\u2026" value="${esc(this.search)}">
        <select id="hstcg-ftype">
          <option value="all">All types</option>
          <option value="items" ${this.fType === "items" ? "selected" : ""}>Items</option>
          <option value="creatures" ${this.fType === "creatures" ? "selected" : ""}>Creatures</option>
          <option value="shopkeepers" ${this.fType === "shopkeepers" ? "selected" : ""}>Shopkeepers</option>
        </select>
        <select id="hstcg-frarity">
          <option value="all">All rarities</option>${rarOpts}
        </select>
        <select id="hstcg-fowned">
          <option value="all">All cards</option>
          <option value="owned" ${this.fOwned === "owned" ? "selected" : ""}>Owned</option>
          <option value="unowned" ${this.fOwned === "unowned" ? "selected" : ""}>Unowned</option>
        </select>
        <select id="hstcg-fsort">
          <option value="id">Sort: ID</option>
          <option value="rarity" ${this.sortBy === "rarity" ? "selected" : ""}>Sort: Rarity</option>
          <option value="alpha" ${this.sortBy === "alpha" ? "selected" : ""}>Sort: A\u2013Z</option>
          <option value="qty" ${this.sortBy === "qty" ? "selected" : ""}>Sort: Quantity</option>
        </select>
        <label class="hstcg-foilcheck">
          <input type="checkbox" id="hstcg-ffoil" ${this.fFoil ? "checked" : ""}> \u2605 Foils
        </label>
        <label class="hstcg-foilcheck">
          <input type="checkbox" id="hstcg-fsplit" ${this.fSplitFoil ? "checked" : ""}> Split foils
        </label>
        <span class="hstcg-muted" id="hstcg-count"></span>
        <button class="hstcg-btn" id="hstcg-dustdupes">Dust duplicates</button>
      </div>
      <div class="hstcg-scrollhost">
        <div class="hstcg-binderwrap"><div class="hstcg-binder" id="hstcg-binder"></div></div>
        <div class="hstcg-sbtrack"><div class="hstcg-sbthumb"></div></div>
      </div>`;
    const searchEl = this.body.querySelector("#hstcg-search");
    searchEl.oninput = () => {
      this.search = searchEl.value;
      if (this.searchTimer !== null) clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(() => {
        this.searchTimer = null;
        this.renderBinderGrid();
      }, 120);
    };
    const foilEl = this.body.querySelector("#hstcg-ffoil");
    foilEl.onchange = () => {
      this.fFoil = foilEl.checked;
      this.renderBinderGrid();
    };
    const splitEl = this.body.querySelector("#hstcg-fsplit");
    splitEl.onchange = () => {
      this.fSplitFoil = splitEl.checked;
      this.renderBinderGrid();
    };
    for (const [id, setter] of [
      ["#hstcg-ftype", (v) => this.fType = v],
      ["#hstcg-frarity", (v) => this.fRarity = v],
      ["#hstcg-fowned", (v) => this.fOwned = v],
      ["#hstcg-fsort", (v) => this.sortBy = v]
    ]) {
      const el = this.body.querySelector(id);
      el.onchange = () => {
        setter(el.value);
        this.renderBinderGrid();
      };
    }
    this.wireDustDupes();
    this.wireScrollbar();
    this.renderBinderGrid();
  }
  wireScrollbar() {
    this.bindScrollbar(
      this.body.querySelector(".hstcg-binderwrap"),
      this.body.querySelector(".hstcg-sbtrack")
    );
  }
  /**
   * Plugin-drawn scrollbar. The client's Chromium uses Windows-11 overlay
   * scrollbars, which auto-hide and ignore ::-webkit-scrollbar styling
   * entirely — so a native bar can never be made persistently visible.
   * We hide the native one and sync our own track/thumb to the wrap's
   * scroll state instead. The track hides itself when nothing overflows.
   */
  bindScrollbar(wrap, track) {
    const thumb = track.querySelector(".hstcg-sbthumb");
    const update = () => {
      const sh = wrap.scrollHeight;
      const ch = wrap.clientHeight;
      if (sh <= ch + 1) {
        track.style.display = "none";
        return;
      }
      track.style.display = "";
      const th = Math.max(30, ch / sh * track.clientHeight);
      const maxTop = track.clientHeight - th;
      thumb.style.height = `${th}px`;
      thumb.style.top = `${wrap.scrollTop / (sh - ch) * maxTop}px`;
    };
    wrap.addEventListener("scroll", update);
    this.sbObs?.disconnect();
    this.sbObs = new ResizeObserver(update);
    this.sbObs.observe(wrap);
    for (const ch of wrap.children) this.sbObs.observe(ch);
    thumb.onpointerdown = (e13) => {
      e13.preventDefault();
      e13.stopPropagation();
      thumb.setPointerCapture(e13.pointerId);
      thumb.classList.add("drag");
      const startY = e13.clientY;
      const startTop = parseFloat(thumb.style.top || "0");
      thumb.onpointermove = (ev) => {
        const maxTop = track.clientHeight - thumb.offsetHeight;
        const nt2 = Math.min(maxTop, Math.max(0, startTop + ev.clientY - startY));
        wrap.scrollTop = nt2 / maxTop * (wrap.scrollHeight - wrap.clientHeight);
      };
      thumb.onpointerup = () => {
        thumb.onpointermove = thumb.onpointerup = null;
        thumb.classList.remove("drag");
      };
    };
    track.onpointerdown = (e13) => {
      if (e13.target !== track) return;
      const rect = track.getBoundingClientRect();
      const frac = (e13.clientY - rect.top) / rect.height;
      wrap.scrollTop = frac * (wrap.scrollHeight - wrap.clientHeight);
    };
    update();
  }
  wireDustDupes() {
    const btn = this.body.querySelector("#hstcg-dustdupes");
    if (!btn) return;
    const prev = this.host.meltDupesPreview();
    btn.disabled = prev.cards === 0;
    btn.title = prev.cards ? `${prev.cards} duplicate card${prev.cards === 1 ? "" : "s"} \u2192 +${prev.credits.toLocaleString()} \u2728` : "No duplicates to dust";
    btn.onclick = async () => {
      const p = this.host.meltDupesPreview();
      if (!p.cards) return;
      const ok = await this.confirmBox(
        `Dust ${p.cards} duplicate card${p.cards === 1 ? "" : "s"} for +${p.credits.toLocaleString()} \u2728?
One copy of every card is kept \u2014 foils and "Never dust" cards are safe.`,
        "Dust them"
      );
      if (!ok) return;
      const res = this.host.meltDupes();
      toast(`+${res.credits.toLocaleString()} \u2728 from ${res.cards} duplicates`);
      this.refreshCredits();
      this.renderCollection();
    };
  }
  /** The whole (filtered) set in one scrolling grid — no paging. Off-screen
   *  cards skip layout/paint via content-visibility (CSS); art loads lazily
   *  per card on scroll-in, so opening the tab never burst-composites
   *  every sheet at once. */
  renderBinderGrid() {
    const binder = this.body.querySelector("#hstcg-binder");
    const countEl = this.body.querySelector("#hstcg-count");
    if (!binder) return;
    const save = this.host.getSave();
    const all = this.filteredCards();
    if (countEl)
      countEl.textContent = `${all.length}/${this.host.catalog.cards.length} cards`;
    const r = this.host.renderer;
    const cellW = Math.ceil(CARD_W * SCALE_BINDER);
    const cellH = Math.ceil(CARD_H * SCALE_BINDER);
    const cell = (c2, variant) => {
      const n = save.collection[c2.id] ?? 0;
      const nf = save.foils?.[c2.id] ?? 0;
      const opts = variant === "foil" ? { unowned: false, dupes: nf, foil: true } : variant === "plain" ? { unowned: n === 0, dupes: n - nf, foil: false } : { unowned: n === 0, dupes: n, foil: nf > 0 };
      return `<div class="hstcg-cell" data-variant="${variant}" style="width:${cellW}px;height:${cellH}px">` + r.scaledCard(c2, SCALE_BINDER, opts) + `</div>`;
    };
    const cardCells = (c2) => {
      if (!this.fSplitFoil) return cell(c2, "merged");
      const n = save.collection[c2.id] ?? 0;
      const nf = save.foils?.[c2.id] ?? 0;
      let out = "";
      if (!this.fFoil && (n - nf > 0 || n === 0)) out += cell(c2, "plain");
      if (nf > 0) out += cell(c2, "foil");
      return out;
    };
    const groups = [
      ["Items", all.filter((c2) => c2.kind === "item")],
      ["Creatures", all.filter((c2) => c2.kind !== "item" && !c2.store)],
      ["Shopkeepers", all.filter((c2) => !!c2.store)]
    ];
    const rarIdx = (c2) => RARITIES.indexOf(c2.rarity);
    const cmp = {
      id: (a, b) => a.primaryDef - b.primaryDef,
      rarity: (a, b) => rarIdx(b) - rarIdx(a) || a.primaryDef - b.primaryDef,
      alpha: (a, b) => a.name.localeCompare(b.name) || (a.level ?? 0) - (b.level ?? 0) || a.primaryDef - b.primaryDef,
      // most-owned first; ties fall back to the default ID order
      qty: (a, b) => (save.collection[b.id] ?? 0) - (save.collection[a.id] ?? 0) || a.primaryDef - b.primaryDef
    };
    binder.innerHTML = groups.filter(([, cs2]) => cs2.length > 0).map(([title, cs2]) => {
      const closed = this.collapsedGroups.has(title);
      return `<div class="hstcg-group-header${closed ? " closed" : ""}" data-group="${title}"><span class="tw">${closed ? "\u25B8" : "\u25BE"}</span>${title} <span>${cs2.length}</span></div>` + (closed ? "" : cs2.sort(cmp[this.sortBy]).map(cardCells).join(""));
    }).join("");
    this.artObs?.disconnect();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const en2 of entries) {
          if (!en2.isIntersecting) continue;
          const wrap = en2.target;
          obs.unobserve(wrap);
          if (!wrap.querySelector("[data-hstcg-pending]")) continue;
          const id = wrap.querySelector("[data-card]")?.getAttribute("data-card");
          const card = id ? this.host.catalog.byId.get(id) : null;
          if (!card) continue;
          const variant = wrap.getAttribute("data-variant") ?? "merged";
          this.host.sprites.ensureCardArt(card).then(() => {
            if (!wrap.isConnected) return;
            wrap.outerHTML = cell(card, variant);
          }).catch(() => {
          });
        }
      },
      // root must be the actual scroll container (.hstcg-binderwrap) so
      // the preload margin applies to scrolling, not the clipped body
      { root: binder.parentElement, rootMargin: "300px" }
    );
    for (const wrap of binder.querySelectorAll(".hstcg-cell")) obs.observe(wrap);
    this.artObs = obs;
    binder.onclick = (e13) => {
      const head = e13.target.closest("[data-group]");
      if (head) {
        const g = head.getAttribute("data-group");
        if (this.collapsedGroups.has(g)) this.collapsedGroups.delete(g);
        else this.collapsedGroups.add(g);
        this.renderBinderGrid();
        return;
      }
      const el = e13.target.closest("[data-card]");
      if (!el) return;
      const card = this.host.catalog.byId.get(el.getAttribute("data-card"));
      const variant = el.closest(".hstcg-cell")?.getAttribute("data-variant") ?? "merged";
      if (card) this.openModal(card, variant);
    };
  }
  // ----------------------------------------------------------- detail modal
  openModal(card, variant = "merged") {
    this.closeModal();
    const save = this.host.getSave();
    const n = save.collection[card.id] ?? 0;
    const nf = save.foils?.[card.id] ?? 0;
    if (variant === "foil" && nf === 0) variant = "merged";
    if (variant === "plain" && n - nf === 0 && n > 0) variant = "merged";
    const cardOpts = variant === "foil" ? { unowned: false, dupes: nf, foil: true } : variant === "plain" ? { unowned: n === 0, dupes: n - nf, foil: false } : { unowned: n === 0, dupes: n, foil: nf > 0 };
    const meltKind = variant === "foil" ? "foil" : variant === "plain" ? "plain" : "any";
    const dustable = variant === "foil" ? nf : variant === "plain" ? n - nf : n;
    const modal = document.createElement("div");
    modal.id = "hstcg-modal";
    const kindLabel = card.kind === "item" ? "Item" : card.store ? "Shopkeeper" : card.kind === "creature" ? "Creature" : "Creature (humanoid)";
    modal.innerHTML = `
      <div class="hstcg-modal-box">
        <div id="hstcg-modal-card">${this.host.renderer.cardHtml(card, cardOpts)}</div>
        <div class="hstcg-modal-meta">
          <h3>${esc(card.name)}${variant === "foil" ? " \u2605" : ""}</h3>
          <div>${kindLabel}${card.level != null ? ` \xB7 Level ${card.level}` : ""}</div>
          ${card.store ? `<div>Runs: ${esc(card.store)}</div>` : ""}
          <div>Rarity: <b style="text-transform:capitalize">${card.rarity}</b> \xB7 ${POINTS[card.rarity]} pts</div>
          <div>ID${card.defIds.length > 1 ? "s" : ""}: #${esc(card.idsDisplay)}</div>
          ${card.level != null ? `<div>Kill bonus: \u2728 ${killBonus(card.level)}</div>` : ""}
          <div>${n > 0 ? `Owned \u2014 ${n} cop${n === 1 ? "y" : "ies"}` : "Not yet pulled"}${nf > 0 ? ` \xB7 \u2605 ${nf} foil` : ""}</div>
          <div class="hstcg-muted">Your credits: \u2728 ${save.credits.toLocaleString()}</div>
          ${n > 0 ? `<label class="hstcg-foilcheck" title="Dust duplicates skips this card entirely \u2014 its extra copies are safe">
            <input type="checkbox" id="hstcg-modal-keep" ${save.keep[card.id] ? "checked" : ""}> Never dust this card
          </label>` : ""}
          ${dustable > 0 ? `<button class="hstcg-btn" id="hstcg-modal-dust">Dust 1${variant === "foil" ? " foil" : ""} \u2014 +${MELT_VALUE[card.rarity]} \u2728</button>` : ""}
          <button class="hstcg-btn" id="hstcg-modal-close">Close</button>
        </div>
      </div>`;
    this.root.appendChild(modal);
    modal.onclick = (e13) => {
      if (e13.target === modal) this.closeModal();
    };
    modal.querySelector("#hstcg-modal-close").onclick = () => this.closeModal();
    const keepEl = modal.querySelector("#hstcg-modal-keep");
    if (keepEl)
      keepEl.onchange = () => {
        this.host.setKeep(card.id, keepEl.checked);
        if (this.tab === "collection") this.wireDustDupes();
      };
    const dustBtn = modal.querySelector("#hstcg-modal-dust");
    if (dustBtn)
      dustBtn.onclick = async () => {
        if (save.keep[card.id]) {
          const ok = await this.confirmBox(
            'This card is marked "Never dust this card". Dust a copy anyway?',
            "Dust it"
          );
          if (!ok) return;
        }
        if (n === 1) {
          const ok = await this.confirmBox(
            "This is your last copy \u2014 dusting it removes the card from your collection. Dust it anyway?",
            "Dust it"
          );
          if (!ok) return;
        }
        const gained = this.host.meltOne(card, meltKind);
        if (gained > 0) toast(`+${gained} \u2728`);
        this.afterDustAction(card, variant);
      };
    this.host.sprites.ensureCardArt(card).then(() => {
      const holder = modal.querySelector("#hstcg-modal-card");
      if (holder)
        holder.innerHTML = this.host.renderer.cardHtml(card, cardOpts);
    }).catch(() => {
    });
  }
  closeModal() {
    document.getElementById("hstcg-modal")?.remove();
    document.getElementById("hstcg-confirm")?.remove();
    document.getElementById("hstcg-excl")?.remove();
  }
  /** Refresh everything a dust can change, then reopen the modal. */
  afterDustAction(card, variant = "merged") {
    this.refreshCredits();
    if (this.tab === "collection") {
      this.wireDustDupes();
      this.renderBinderGrid();
    }
    this.openModal(card, variant);
  }
  // ------------------------------------------------------ cardman exclusions
  /** Searchable item picker for Cardman exclusions — house-rule items that
   *  never get the inventory ✗. Opened from the plugin settings button, so
   *  it must work with the TCG window itself hidden. */
  openExclusions() {
    if (!this.root) this.create();
    this.closeModal();
    const modal = document.createElement("div");
    modal.id = "hstcg-excl";
    modal.innerHTML = `
      <div class="hstcg-excl-box">
        <h3>Cardman exclusions</h3>
        <div class="hstcg-muted">Excluded items never get the inventory \u2717,
          even while their card is unpulled \u2014 for house rules like
          &ldquo;a shiny Iron Hatchet also unlocks the Bronze Hatchet&rdquo;.
          Click an item to add or remove it.</div>
        <div id="hstcg-excl-pills"></div>
        <input type="text" id="hstcg-excl-search" placeholder="Search items\u2026">
        <div id="hstcg-excl-results" hidden></div>
        <div class="hstcg-confirm-btns">
          <button class="hstcg-btn" id="hstcg-excl-close">Close</button>
        </div>
      </div>`;
    this.root.appendChild(modal);
    for (const type of ["keydown", "keyup", "keypress"]) {
      modal.addEventListener(type, (e13) => {
        if (type === "keydown" && e13.key === "Escape") {
          this.closeModal();
        }
        e13.stopPropagation();
      });
    }
    modal.onclick = (e13) => {
      if (e13.target === modal) this.closeModal();
    };
    modal.querySelector("#hstcg-excl-close").onclick = () => this.closeModal();
    const input = modal.querySelector("#hstcg-excl-search");
    const results = modal.querySelector("#hstcg-excl-results");
    const pills = modal.querySelector("#hstcg-excl-pills");
    const items = this.host.catalog.cards.filter((c2) => c2.kind === "item").sort((a, b) => a.name.localeCompare(b.name));
    const renderPills = () => {
      const ex = this.host.getExclusions();
      pills.innerHTML = ex.length ? ex.map((id) => {
        const c2 = this.host.catalog.byId.get(id);
        return `<span class="hstcg-excl-pill" data-id="${esc(id)}">${esc(c2?.name ?? id)}<b>\u2715</b></span>`;
      }).join("") : `<span class="hstcg-muted">Nothing excluded yet.</span>`;
    };
    const renderResults = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        results.hidden = true;
        results.innerHTML = "";
        return;
      }
      results.hidden = false;
      const ex = new Set(this.host.getExclusions());
      const hits = items.filter((c2) => c2.name.toLowerCase().includes(q));
      const MAX = 30;
      if (!hits.length) {
        results.innerHTML = `<div class="hstcg-excl-none hstcg-muted">No items match.</div>`;
        return;
      }
      results.innerHTML = hits.slice(0, MAX).map(
        (c2) => `<div class="hstcg-excl-row${ex.has(c2.id) ? " on" : ""}" data-id="${esc(c2.id)}">
              <span>${esc(c2.name)}</span><span class="ids">#${esc(c2.idsDisplay)}</span>
            </div>`
      ).join("") + (hits.length > MAX ? `<div class="hstcg-excl-none hstcg-muted">\u2026${hits.length - MAX} more \u2014 keep typing to narrow</div>` : "");
    };
    const toggle = (id) => {
      const ex = this.host.getExclusions();
      this.host.setExclusions(
        ex.includes(id) ? ex.filter((x) => x !== id) : [...ex, id]
      );
      renderPills();
      renderResults();
    };
    results.onclick = (e13) => {
      const row = e13.target.closest(".hstcg-excl-row");
      if (row) toggle(row.dataset.id);
    };
    pills.onclick = (e13) => {
      const pill = e13.target.closest(".hstcg-excl-pill");
      if (pill) toggle(pill.dataset.id);
    };
    input.oninput = renderResults;
    renderPills();
    renderResults();
    input.focus();
  }
  // --------------------------------------------------------- confirm dialog
  /** Confirm for settings-driven flows (legacy collect / full reset) —
   *  creates the root if needed, same as openExclusions, so it works with
   *  the TCG window closed. */
  confirm(msg, okLabel = "Yes") {
    if (!this.root) this.create();
    return this.confirmBox(msg, okLabel);
  }
  /** In-overlay yes/no dialog — same look as the rest of the window, no
   *  browser confirm() popup. Clicking the dim backdrop cancels. */
  confirmBox(msg, okLabel = "Yes") {
    return new Promise((resolve) => {
      document.getElementById("hstcg-confirm")?.remove();
      const el = document.createElement("div");
      el.id = "hstcg-confirm";
      el.innerHTML = `
      <div class="hstcg-confirm-box">
        <div>${esc(msg).replace(/\n/g, "<br>")}</div>
        <div class="hstcg-confirm-btns">
          <button class="hstcg-btn" id="hstcg-conf-no">Cancel</button>
          <button class="hstcg-btn primary" id="hstcg-conf-ok">${esc(okLabel)}</button>
        </div>
      </div>`;
      this.root.appendChild(el);
      const done = (v) => {
        el.remove();
        resolve(v);
      };
      el.querySelector("#hstcg-conf-ok").onclick = () => done(true);
      el.querySelector("#hstcg-conf-no").onclick = () => done(false);
      el.onclick = (e13) => {
        if (e13.target === el) done(false);
      };
    });
  }
  // ----------------------------------------------------------------- stats
  renderStats() {
    const save = this.host.getSave();
    const cat = this.host.catalog;
    const ownedIds = Object.keys(save.collection).filter(
      (id) => save.collection[id] > 0 && cat.byId.has(id)
    );
    const ownedSet = new Set(ownedIds);
    const points = ownedIds.reduce(
      (sum, id) => sum + POINTS[cat.byId.get(id).rarity],
      0
    );
    const maxPoints = cat.cards.reduce((sum, c2) => sum + POINTS[c2.rarity], 0);
    const rarityRows = RARITIES.map((r) => {
      const total = cat.byRarity[r].length;
      const owned = cat.byRarity[r].filter((c2) => ownedSet.has(c2.id)).length;
      const pct2 = total ? owned / total * 100 : 0;
      return `
        <div>
          <div class="hstcg-statrow">
            <span style="text-transform:capitalize;color:var(--hstcg-${r})">${r}</span>
            <span>${owned} / ${total} (${pct2.toFixed(1)}%)</span>
          </div>
          <div class="hstcg-bar"><div style="width:${pct2.toFixed(1)}%;background:var(--hstcg-${r})"></div></div>
        </div>`;
    }).join("");
    const pct = ownedSet.size / cat.cards.length * 100;
    this.body.innerHTML = `
      <div class="hstcg-scrollhost">
        <div class="hstcg-tabscroll">
      <div class="hstcg-stats">
        <div>
          <div class="hstcg-statrow">
            <span>Collection</span>
            <span class="v">${ownedSet.size} / ${cat.cards.length} (${pct.toFixed(1)}%)</span>
          </div>
          <div class="hstcg-bar"><div style="width:${pct.toFixed(1)}%;background:#ffd76e"></div></div>
        </div>
        ${rarityRows}
        <div class="hstcg-statrow"><span>Collection score</span>
          <span class="v">${points.toLocaleString()} / ${maxPoints.toLocaleString()} pts</span></div>
        <div class="hstcg-statrow"><span>Packs opened</span>
          <span class="v">${save.stats.packsOpened.toLocaleString()}</span></div>
        <div class="hstcg-statrow"><span>Credits earned lifetime</span>
          <span class="v">${save.stats.creditsEarned.toLocaleString()} \u2728</span></div>
      </div>
        </div>
        <div class="hstcg-sbtrack"><div class="hstcg-sbthumb"></div></div>
      </div>`;
    this.bindScrollbar(
      this.body.querySelector(".hstcg-tabscroll"),
      this.body.querySelector(".hstcg-sbtrack")
    );
  }
};

// src/crossout.ts
var TABLE_SELECTOR = ".hs-item-table--inventory, .hs-item-table--bank";
var SLOT_SELECTOR = ".hs-inventory-item";
var IMAGE_SELECTOR = ".hs-inventory-item__image";
var BADGE_CLASS = "hstcg-cross";
var POLL_MS = 500;
var SHEET_COLS = 20;
var REM_PER_CELL = 3;
var PX_PER_CELL = 48;
var InventoryCrossout = class {
  constructor(host) {
    this.host = host;
    this.timer = null;
    this.cleared = true;
  }
  start() {
    if (this.timer !== null) return;
    this.timer = window.setInterval(() => this.tick(), POLL_MS);
  }
  stop() {
    if (this.timer !== null) clearInterval(this.timer);
    this.timer = null;
    this.clear();
  }
  tick() {
    const save = this.host.getSave();
    if (!this.host.enabled() || !save) {
      if (!this.cleared) this.clear();
      return;
    }
    this.render(save);
    this.cleared = false;
  }
  /** Decode the slot sprite's inline background-position into an item def id. */
  defIdFromSlot(slot) {
    const img = slot.querySelector(IMAGE_SELECTOR);
    const bp = img?.style?.backgroundPosition ?? "";
    const m = bp.match(/(-?[\d.]+)(px|rem)\s+(-?[\d.]+)(px|rem)/);
    if (!m) return null;
    const cell = (v, unit) => Math.round(
      Math.abs(parseFloat(v)) / (unit === "rem" ? REM_PER_CELL : PX_PER_CELL)
    );
    const col = cell(m[1], m[2]);
    const row = cell(m[3], m[4]);
    return row * SHEET_COLS + col + 1;
  }
  /** Idempotent: adds/removes badges so the DOM matches the ownership state. */
  render(save) {
    document.querySelectorAll(TABLE_SELECTOR).forEach((table) => {
      this.renderTable(table, save);
    });
  }
  renderTable(table, save) {
    table.querySelectorAll(SLOT_SELECTOR).forEach((slot) => {
      const el = slot;
      const defId = this.defIdFromSlot(el);
      const card = defId !== null ? this.host.catalog.itemByDef.get(defId) : void 0;
      const unowned = !!card && !((save.collection[card.id] ?? 0) > 0) && !this.host.excluded(card.id);
      const badge = el.querySelector(`:scope > .${BADGE_CLASS}`);
      if (unowned && !badge) {
        if (getComputedStyle(el).position === "static") {
          el.style.position = "relative";
        }
        const b = document.createElement("div");
        b.className = BADGE_CLASS;
        el.appendChild(b);
      } else if (!unowned && badge) {
        badge.remove();
      }
    });
  }
  clear() {
    document.querySelectorAll(`.${BADGE_CLASS}`).forEach((b) => b.remove());
    this.cleared = true;
  }
};

// src/hud.ts
var POLL_MS2 = 500;
var RIGHT_INSET = 64;
var CreditHud = class {
  constructor(host) {
    this.host = host;
    this.el = null;
    this.valueEl = null;
    this.lastShown = null;
    this.timer = null;
  }
  start() {
    if (this.timer !== null) return;
    this.timer = window.setInterval(() => this.tick(), POLL_MS2);
  }
  stop() {
    if (this.timer !== null) clearInterval(this.timer);
    this.timer = null;
    this.el?.remove();
    this.el = this.valueEl = null;
    this.lastShown = null;
  }
  parentEl() {
    const c2 = this.host.container();
    if (!c2 || c2.clientWidth === 0 || c2.clientHeight === 0) return document.body;
    if (getComputedStyle(c2).position === "static") c2.style.position = "relative";
    return c2;
  }
  /** Usable area: the container's box — or the WINDOW when we're stuck on
   *  <body> (this client's body measures 0×0). */
  bounds(parent) {
    return parent === document.body ? { w: window.innerWidth, h: window.innerHeight } : { w: parent.clientWidth, h: parent.clientHeight };
  }
  /** Clamp a position so the pill stays fully inside its parent, and out
   *  of the sidebar keep-out strip on the right. */
  clamp(parent, el, x, y2) {
    const b = this.bounds(parent);
    return {
      x: Math.max(0, Math.min(x, b.w - el.offsetWidth - RIGHT_INSET)),
      y: Math.max(0, Math.min(y2, b.h - el.offsetHeight))
    };
  }
  ensureEl() {
    if (this.el?.isConnected) return this.el;
    this.lastShown = null;
    const parent = this.parentEl();
    const el = document.createElement("div");
    el.id = "hstcg-hud";
    el.innerHTML = `<span class="v">\u2728 \u2014</span>`;
    el.style.position = parent === document.body ? "fixed" : "absolute";
    parent.appendChild(el);
    this.valueEl = el.querySelector(".v");
    const b = this.bounds(parent);
    const pos = this.host.loadPos();
    const raw = pos ?? {
      x: (b.w - el.offsetWidth) / 2,
      y: (b.h - el.offsetHeight) / 2
    };
    const p = this.clamp(parent, el, raw.x, raw.y);
    el.style.left = `${p.x}px`;
    el.style.top = `${p.y}px`;
    this.makeDraggable(el, parent);
    this.el = el;
    return el;
  }
  /** Pointer-capture drag: the pill receives every move/up no matter what
   *  is under the cursor — the game canvas swallows document-level events
   *  (caused laggy tracking and stuck never-released drags). */
  makeDraggable(el, parent) {
    el.addEventListener("pointerdown", (e13) => {
      e13.preventDefault();
      e13.stopPropagation();
      el.setPointerCapture(e13.pointerId);
      const startX = e13.clientX - el.offsetLeft;
      const startY = e13.clientY - el.offsetTop;
      const move = (ev) => {
        ev.stopPropagation();
        const p = this.clamp(
          parent,
          el,
          ev.clientX - startX,
          ev.clientY - startY
        );
        el.style.left = `${p.x}px`;
        el.style.top = `${p.y}px`;
      };
      const finish = (ev) => {
        ev.stopPropagation();
        try {
          el.releasePointerCapture(ev.pointerId);
        } catch {
        }
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", finish);
        el.removeEventListener("pointercancel", finish);
        this.host.savePos({ x: el.offsetLeft, y: el.offsetTop });
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", finish);
      el.addEventListener("pointercancel", finish);
    });
  }
  tick() {
    const save = this.host.getSave();
    if (!this.host.enabled() || !save) {
      if (this.el) {
        this.el.remove();
        this.el = this.valueEl = null;
      }
      this.lastShown = null;
      return;
    }
    const el = this.ensureEl();
    if (this.lastShown !== null && save.credits > this.lastShown) {
      this.spawnDelta(el, save.credits - this.lastShown);
    }
    if (save.credits !== this.lastShown && this.valueEl) {
      this.valueEl.textContent = `\u2728 ${save.credits.toLocaleString()}`;
    }
    this.lastShown = save.credits;
  }
  /** Floating "+N" that rises out of the pill and fades. */
  spawnDelta(el, gained) {
    const d = document.createElement("div");
    d.className = "hstcg-hud-delta";
    d.textContent = `+${gained.toLocaleString()}`;
    el.appendChild(d);
    setTimeout(() => d.remove(), 1600);
  }
};

// src/HighSpellTCG.ts
var HighSpellTCG = class _HighSpellTCG extends bi {
  constructor() {
    super();
    // Display name kept short — the plugin-list rows ellipsize long names.
    // PluginDataManager keys stored data by this string; see migrateRenamedData.
    this.pluginName = "TCG";
    this.author = "matter";
    this.panelManager = new Ee();
    this.catalog = null;
    this.sprites = null;
    this.renderer = null;
    this.overlay = null;
    this.crossout = null;
    this.hud = null;
    this.save = null;
    this.saveStatus = "loading";
    this.username = null;
    this.styleEl = null;
    this.menuIconRegistered = false;
    this.startupTimer = null;
    this.xpTimer = null;
    /** Bumped on every loadSave start and on stop(); an in-flight async load
     *  compares against it after its await and bails if it no longer matches,
     *  so a stop-during-decode can't restart timers on a torn-down plugin. */
    this.loadGen = 0;
    this.persistTimer = null;
    this.audioCtx = null;
    // XP → credits state (poll-based: robust to client refactors, idle-safe
    // because idle play gains no XP)
    this.lastTotalXp = null;
    this.xpBuffer = 0;
    /** All discovered skill-array paths — the game splits skills across more
     *  than one list (combat vs non-combat), so one path misses XP. */
    this.skillsPaths = null;
    // bonus-credit state (level-ups, treasure maps, kills)
    /** Per-skill levels keyed by "arrayIdx:skillIdx" (stable within one
     *  skills-path discovery; rediscovery re-baselines, same as XP). */
    this.lastLevels = null;
    this.mapCount = null;
    /** Diagnostic twin of mapCount: items whose live def NAME says "treasure
     *  map" — catches maps whose def id isn't in TREASURE_MAP_DEFS. */
    this.nameMapCount = null;
    this.npcTimer = null;
    /** Last sighting of each nearby NPC: eid -> def id. */
    this.npcSightings = /* @__PURE__ */ new Map();
    /** eids the player has had targeted recently (mp._currentTarget), eid -> when. */
    this.targetTimes = /* @__PURE__ */ new Map();
    /** Kill gate = recent XP, NOT player state — auto-attack keeps the player
     *  in IdleState through whole fights. */
    this.lastXpGainAt = 0;
    /** Vanished-NPC candidates waiting for the XP poll to confirm the kill. */
    this.pendingKills = [];
    this.killWatchLogged = false;
    // -------------------------------------------- cardman exclusions (data)
    /** Cache of data.cardmanExclude — the crossout poll checks every slot. */
    this.exclSet = null;
    /** def id -> lowercased live def name ("" when unresolvable). */
    this.mapNameCache = /* @__PURE__ */ new Map();
    /** name-matched map defs already warned about (once per session each). */
    this.unknownMapWarned = /* @__PURE__ */ new Set();
    this.treasureErrLogged = false;
    /** Dig state from chat: "You begin digging with your shovel..." opens a
     *  pending dig; the purple "You received ..." loot lines confirm it (a
     *  failed dig says "...but you only find dirt and rocks" and leaves the
     *  map in the bag, so an attempt alone must NOT arm the bonus — the
     *  player can fail a dig and then discard the map inside the window). */
    this.digPendingAt = 0;
    /** Last CONFIRMED dig (loot text seen after a dig message). */
    this.lastLootAt = 0;
    /** Last "You discarded ..." chat line — explicit veto for the bonus. */
    this.lastDiscardAt = 0;
    this.chatObs = null;
    this.chatObsTarget = null;
    this.chatWatcherLogged = false;
    this.invPathLogged = false;
    /** Player position last kill tick — a big jump means teleport/area
     *  change, whose NPC unload would otherwise fake a kill. NPC entities
     *  expose no hitpoints (probed live: nothing readable), so "it's gone"
     *  is the only death signal and movement is the disambiguator. */
    this.lastPlayerPos = null;
    this.lastBigMoveAt = 0;
    this.settings.cardman = {
      text: "Cardman",
      description: "Opt into inventory cross-out: items whose card you haven't pulled yet get a \u2717 badge in your inventory.",
      type: dt.checkbox,
      value: false,
      callback: () => this.syncExclusionsVisibility()
    };
    this.settings.cardmanExclusions = {
      text: "Cardman: manage exclusions",
      description: 'Pick items that never get the \u2717 even while their card is unpulled \u2014 for house rules like "a shiny Iron Hatchet also unlocks the Bronze Hatchet".',
      type: dt.button,
      value: "Manage",
      hidden: true,
      // only shown while Cardman is on (synced in start)
      callback: () => this.overlay?.openExclusions()
    };
    this.settings.treasureAwards = {
      text: "Treasure maps award points",
      description: "Digging up a treasure map pays \u2728 1,000 \u2014 a free booster. Turn off to also skip the inventory and chat watching it needs.",
      type: dt.checkbox,
      value: true,
      callback: () => this.syncTreasureWatch()
    };
    this.settings.killAwards = {
      text: "Creature kills award points",
      description: "Killing a creature pays a small level-scaled \u2728 bonus. Turn off to also skip the NPC-list watching it needs.",
      type: dt.checkbox,
      value: true,
      callback: () => this.syncKillWatch()
    };
    this.settings.creditTracker = {
      text: "Credit tracker",
      description: "Show a small on-screen \u2728 counter with floating gains. Drag it to move it.",
      type: dt.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.packSounds = {
      text: "Pack-open sounds",
      description: "Play a sound when flipping cards.",
      type: dt.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.hoverRarityGlow = {
      text: "Rarity glow on face-down cards",
      description: "Hovering a face-down pack card makes it glow with the rarity colour of the card underneath (spoils the surprise).",
      type: dt.checkbox,
      value: false,
      callback: () => this.overlay?.applyPeekGlow()
    };
    this.settings.cardSize = {
      text: "Card size (%)",
      description: "Zoom for rendered cards \u2014 packs, binder, and the detail view. 100 = default.",
      type: dt.range,
      min: 60,
      max: 150,
      value: 100,
      callback: () => this.overlay?.applyZoom()
    };
    this.settings.textSize = {
      text: "Text size (%)",
      description: "Zoom for the TCG window's UI text \u2014 tabs, buttons, lists, stats. 100 = default.",
      type: dt.range,
      min: 70,
      max: 150,
      value: 100,
      callback: () => this.overlay?.applyZoom()
    };
    this.settings.windowColor = {
      text: "Window background colour",
      description: "Background colour of the TCG card window.",
      type: dt.color,
      value: "#16171b",
      callback: () => this.overlay?.applyWindowStyle()
    };
    this.settings.windowOpacity = {
      text: "Window background opacity",
      description: "How solid the TCG window background is (0 = fully transparent, 100 = fully opaque).",
      type: dt.range,
      min: 0,
      max: 100,
      value: 94,
      callback: () => this.overlay?.applyWindowStyle()
    };
    this.settings.resetWindowPos = {
      text: "Reset card window position",
      description: "Bring the TCG window back to the center of the screen at its default size.",
      type: dt.button,
      value: "Reset",
      callback: () => this.overlay?.resetPosition()
    };
    this.settings.resetTrackerPos = {
      text: "Reset credit tracker position",
      description: "Bring the \u2728 credit tracker back to the center of the game view.",
      type: dt.button,
      value: "Reset",
      callback: () => {
        this.data.hudPos = null;
        this.hud?.stop();
        this.hud?.start();
      }
    };
    this.settings.exportCollection = {
      text: "Export collection",
      description: "Save your cards, foils, \u2728 credits and stats to a backup file. It only works for this account \u2014 import it on your new PC to carry your collection over.",
      type: dt.button,
      value: "Export",
      callback: () => void this.exportCollection()
    };
    this.settings.importCollection = {
      text: "Import collection",
      description: "Load a backup file exported from this same account. Replaces whatever collection is on this PC.",
      type: dt.button,
      value: "Import",
      callback: () => this.importCollection()
    };
    this.settings.dangerHeader = {
      text: "Careful below this",
      type: dt.info,
      value: "Careful below this",
      callback: () => {
      }
    };
    this.settings.collectLegacy = {
      text: "Collect legacy points",
      description: "One-time \u2728 grant for the XP you earned before installing the plugin \u2014 bare total XP across all skills only (no level-up, treasure, or kill back-pay). For OG accounts that just want to rip packs.",
      type: dt.button,
      value: "Collect",
      callback: () => void this.collectLegacyPoints()
    };
    this.settings.resetAll = {
      text: "Reset cards and legacy points",
      description: "Wipe the whole collection \u2014 cards, foils, \u2728 credits, stats \u2014 and make legacy points collectable again, so you can re-collect and roll fresh packs. Cannot be undone.",
      type: dt.button,
      value: "Reset",
      callback: () => void this.resetAllFromSettings()
    };
  }
  init() {
    this.log("Initialized");
  }
  start() {
    this.log("Started");
    this.migrateRenamedData();
    this.syncExclusionsVisibility();
    this.styleEl = document.createElement("style");
    this.styleEl.textContent = tcg_default;
    document.head.appendChild(this.styleEl);
    this.catalog = buildCatalog();
    this.sprites = new SpriteSource(this.gameHooks, (...a) => this.log(...a));
    this.renderer = new CardRenderer(this.sprites, (defId) => {
      try {
        return this.gameHooks.ItemDefinitionManager._itemDefMap?.get(defId)?._description ?? "";
      } catch {
        return "";
      }
    });
    this.overlay = new TcgOverlay({
      catalog: this.catalog,
      renderer: this.renderer,
      sprites: this.sprites,
      getSave: () => this.save,
      getSaveStatus: () => this.saveStatus,
      buyPack: (kind) => this.buyPack(kind),
      meltOne: (card, kind) => {
        if (!this.save) return 0;
        const gained = melt(this.save, card, 1, kind);
        if (gained > 0) this.persist();
        return gained;
      },
      meltDupesPreview: () => this.save && this.catalog ? dupesMeltPreview(this.catalog, this.save) : { cards: 0, credits: 0 },
      meltDupes: () => {
        if (!this.save || !this.catalog) return { cards: 0, credits: 0 };
        const res = meltAllDupes(this.catalog, this.save);
        if (res.cards > 0) this.persist();
        return res;
      },
      setKeep: (id, keep) => {
        if (!this.save) return;
        if (keep) this.save.keep[id] = true;
        else delete this.save.keep[id];
        this.persist();
      },
      resetSave: () => this.resetSave(),
      playFlipSound: () => this.playFlipSound(),
      loadWinRect: () => this.data.winRect ?? null,
      saveWinRect: (r) => {
        this.data.winRect = r;
      },
      getWindowStyle: () => ({
        color: String(this.settings.windowColor?.value ?? "#16171b"),
        opacity: Number(this.settings.windowOpacity?.value ?? 94)
      }),
      getPeekGlow: () => !!this.settings.hoverRarityGlow?.value,
      getZoom: () => ({
        card: Number(this.settings.cardSize?.value ?? 100) / 100,
        text: Number(this.settings.textSize?.value ?? 100) / 100
      }),
      getExclusions: () => this.getExclusions(),
      setExclusions: (ids) => this.setExclusions(ids)
    });
    try {
      const [icon] = this.panelManager.requestMenuItem("\u{1F3B4}", "TCG");
      this.menuIconRegistered = true;
      icon.onclick = () => this.overlay?.toggle();
    } catch (e13) {
      this.error("Failed to register the \u{1F3B4} menu icon", e13);
    }
    this.crossout = new InventoryCrossout({
      catalog: this.catalog,
      enabled: () => !!this.settings.cardman?.value,
      getSave: () => this.save,
      excluded: (cardId) => this.isExcluded(cardId)
    });
    this.crossout.start();
    this.hud = new CreditHud({
      getSave: () => this.save,
      enabled: () => !!this.settings.creditTracker?.value,
      container: () => {
        try {
          const m = this.gameHooks.HTMLUIManager;
          const c2 = m?.getGameContainer?.() ?? m?.Instance?.getGameContainer?.();
          if (c2 instanceof HTMLElement) return c2;
        } catch {
        }
        return document.querySelector(
          "#game-container, #hs-game-container"
        ) ?? null;
      },
      loadPos: () => this.data.hudPos ?? null,
      savePos: (pos) => {
        this.data.hudPos = pos;
      }
    });
    this.hud.start();
    this.sprites.ensureItemSheet().catch(() => {
    });
    this.waitForPlayerThenLoad();
  }
  stop() {
    this.log("Stopped");
    this.loadGen++;
    if (this.startupTimer !== null) clearInterval(this.startupTimer);
    if (this.xpTimer !== null) clearInterval(this.xpTimer);
    if (this.npcTimer !== null) clearInterval(this.npcTimer);
    this.startupTimer = this.xpTimer = this.npcTimer = null;
    this.lastLevels = null;
    this.mapCount = null;
    this.nameMapCount = null;
    this.treasureErrLogged = false;
    this.chatObs?.disconnect();
    this.chatObs = null;
    this.chatObsTarget = null;
    this.digPendingAt = 0;
    this.lastLootAt = 0;
    this.lastDiscardAt = 0;
    this.npcSightings.clear();
    this.targetTimes.clear();
    this.lastXpGainAt = 0;
    this.pendingKills = [];
    this.killWatchLogged = false;
    this.lastPlayerPos = null;
    this.lastBigMoveAt = 0;
    this.persistNow();
    if (this.menuIconRegistered) {
      try {
        this.panelManager.removeMenuItem("\u{1F3B4}");
      } catch {
      }
      this.menuIconRegistered = false;
    }
    this.crossout?.stop();
    this.crossout = null;
    this.hud?.stop();
    this.hud = null;
    this.overlay?.destroy();
    this.overlay = null;
    this.styleEl?.remove();
    this.styleEl = null;
    document.documentElement.classList.remove("hstcg-legacy-claimed");
    this.save = null;
    this.saveStatus = "loading";
    this.username = null;
    this.lastTotalXp = null;
    this.xpBuffer = 0;
    this.skillsPaths = null;
  }
  // ----------------------------------------------------------------- save
  /**
   * One-time migration for the rename "HighSpell TCG" → "TCG":
   * PluginDataManager keys stored data by pluginName, so without this the
   * old save (collection, credits, HUD position) would be orphaned. Copies
   * the old entry into this.data and drops the old key from the manager's
   * cache — the manager persists the whole cache on the next scheduled
   * write, so the assignment below also persists the deletion.
   */
  migrateRenamedData() {
    const OLD_NAME = "HighSpell TCG";
    try {
      if (this.data.saveBlob) return;
      const mgr = document.highlite?.managers?.PluginDataManager;
      const old = mgr?.inMemoryCache?.[OLD_NAME];
      if (!old || typeof old !== "object") return;
      if (old.saveBlob) this.data.saveBlob = old.saveBlob;
      if (old.hudPos) this.data.hudPos = old.hudPos;
      delete mgr.inMemoryCache[OLD_NAME];
      this.log(`Migrated saved data from "${OLD_NAME}"`);
    } catch (e13) {
      this.warn("Old-name data migration failed", e13);
    }
  }
  /** MainPlayer appears shortly after login — poll until it does. A player
   *  can sit on the login/character screen indefinitely, so this never gives
   *  up (the poll is a cheap property read); stop() clears it. */
  waitForPlayerThenLoad() {
    let tries = 0;
    this.startupTimer = window.setInterval(() => {
      const name = this.currentUsername();
      if (name) {
        clearInterval(this.startupTimer);
        this.startupTimer = null;
        this.username = name;
        void this.loadSave();
      } else if (++tries === 60) {
        this.log("Waiting for login before loading the TCG save\u2026");
      }
    }, 500);
  }
  currentUsername() {
    try {
      const mp = this.gameHooks.EntityManager?.Instance?.MainPlayer;
      const name = mp?._nameLowerCase ?? mp?._name;
      return typeof name === "string" && name.length > 0 ? name.toLowerCase() : null;
    } catch {
      return null;
    }
  }
  async loadSave() {
    const gen = ++this.loadGen;
    const blob = this.data.saveBlob;
    if (!blob || !blob.iv || !blob.ct) {
      this.save = freshSave();
      this.saveStatus = "ready";
      this.log("No existing save \u2014 starting a fresh collection");
    } else {
      try {
        const decoded = await decodeSave(blob, this.username);
        if (gen !== this.loadGen) return;
        this.save = decoded;
        this.saveStatus = "ready";
      } catch (e13) {
        if (gen !== this.loadGen) return;
        this.warn("Save failed to decrypt", e13);
        this.save = null;
        this.saveStatus = "corrupted";
        this.overlay?.refresh();
        return;
      }
    }
    this.syncLegacyClaimedLook();
    this.overlay?.refresh();
    this.startXpEarning();
    this.syncKillWatch();
  }
  persist() {
    if (this.persistTimer !== null) clearTimeout(this.persistTimer);
    this.persistTimer = window.setTimeout(() => this.persistNow(), 800);
  }
  persistNow() {
    if (this.persistTimer !== null) {
      clearTimeout(this.persistTimer);
      this.persistTimer = null;
    }
    if (!this.save || !this.username) return;
    const save = this.save;
    const username = this.username;
    void encodeSave(save, username).then((blob) => {
      this.data.saveBlob = blob;
    }).catch((e13) => this.error("Failed to encode save", e13));
  }
  resetSave() {
    this.save = freshSave();
    this.saveStatus = "ready";
    this.syncLegacyClaimedLook();
    this.persistNow();
    this.log("Save reset by user");
  }
  /** Grey out the "Collect legacy points" button once it's been used —
   *  the button stays clickable (the "already collected" toast explains
   *  itself); tcg.css rules keyed off this <html>-level class do the
   *  styling, since !important CSS beats the panel's inline styles. */
  syncLegacyClaimedLook() {
    document.documentElement.classList.toggle(
      "hstcg-legacy-claimed",
      !!this.save?.legacyClaimed
    );
  }
  /** "Collect legacy points" (settings): one-shot ✨ grant for pre-plugin
   *  XP — bare total skill XP only, no level-up/treasure/kill back-pay.
   *  A full reset (resetAllFromSettings) makes it collectable again. */
  async collectLegacyPoints() {
    if (!this.overlay) return;
    if (!this.save || this.saveStatus !== "ready") {
      toast("TCG save isn't loaded yet \u2014 log in first.");
      return;
    }
    if (this.save.legacyClaimed) {
      toast("Legacy points were already collected on this collection.");
      return;
    }
    const total = this.readTotalXp();
    if (total === null) {
      toast("Couldn't read your skills \u2014 try again in a moment.");
      return;
    }
    const credits = Math.floor(total / XP_PER_CREDIT);
    if (credits <= 0) {
      toast("No XP to collect yet \u2014 go earn some first!");
      return;
    }
    const ok = await this.overlay.confirm(
      `Collect legacy points for ${total.toLocaleString()} total XP?
You'll receive +${credits.toLocaleString()} \u2728. This can only be done once per collection.`,
      "Collect"
    );
    if (!ok) return;
    if (!this.save || this.save.legacyClaimed) return;
    this.save.legacyClaimed = true;
    this.syncLegacyClaimedLook();
    addXpCredits(this.save, credits);
    this.persist();
    this.overlay.refreshCredits();
    toast(`Legacy points collected \u2014 +${credits.toLocaleString()} \u2728`);
    this.log(`Legacy points: ${total} XP \u2192 +${credits} credits`);
  }
  /** "Reset cards and legacy points" (settings): full wipe behind a double
   *  confirm — lets OG players re-collect legacy points and rip packs
   *  again. */
  async resetAllFromSettings() {
    if (!this.overlay) return;
    if (this.saveStatus === "loading") {
      toast("TCG save isn't loaded yet \u2014 log in first.");
      return;
    }
    const ok1 = await this.overlay.confirm(
      "Reset the TCG?\nThis wipes ALL cards, foils, \u2728 credits and stats, and makes legacy points collectable again.",
      "Reset"
    );
    if (!ok1) return;
    const ok2 = await this.overlay.confirm(
      "Really wipe everything and start over?\nThis cannot be undone.",
      "Yes, wipe it all"
    );
    if (!ok2) return;
    this.resetSave();
    this.overlay.refresh();
    toast("Collection reset \u2014 legacy points are collectable again.");
  }
  // ---------------------------------------------------- backup / restore
  /** "Export collection" (settings): hand the browser a download of the
   *  current save, encrypted under an export key derived from the account
   *  name (save.ts). Electron pops its usual Save dialog. */
  async exportCollection() {
    if (!this.save || !this.username || this.saveStatus !== "ready") {
      toast("TCG save isn't loaded yet \u2014 log in first.");
      return;
    }
    try {
      const text = await encodeExport(this.save, this.username);
      const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const name = `tcg-${this.username}-${stamp}.json`;
      const url = URL.createObjectURL(
        new Blob([text], { type: "application/json" })
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 6e4);
      toast(`Exported ${name}`);
      this.log(`Exported collection to ${name}`);
    } catch (e13) {
      this.error("Export failed", e13);
      toast("Export failed \u2014 see the console.");
    }
  }
  /** "Import collection" (settings): pick a backup file, make sure it is
   *  ours (owner fingerprint, then the decrypt itself), confirm, replace.
   *  The file picker must open inside the click — no awaits before it. */
  importCollection() {
    if (!this.save || !this.username || this.saveStatus !== "ready") {
      toast("TCG save isn't loaded yet \u2014 log in first.");
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.style.display = "none";
    input.onchange = () => {
      const file = input.files?.[0];
      input.remove();
      if (file) void this.importFile(file);
    };
    document.body.appendChild(input);
    input.click();
  }
  async importFile(file) {
    if (!this.overlay) return;
    const username = this.username;
    if (!username) return;
    let imported;
    try {
      imported = await decodeExport(await file.text(), username);
    } catch (e13) {
      if (e13 instanceof ImportError) {
        toast(
          e13.kind === "account" ? "That backup belongs to a different account." : e13.kind === "format" ? "That file isn't a TCG collection export." : "That backup is damaged and can't be imported."
        );
      } else {
        toast("Import failed \u2014 see the console.");
      }
      this.warn("Import rejected", e13);
      return;
    }
    const cards = Object.values(imported.collection).reduce(
      (sum, n) => sum + n,
      0
    );
    const ok = await this.overlay.confirm(
      `Import this backup?
${cards.toLocaleString()} cards, ${imported.credits.toLocaleString()} \u2728, ${imported.stats.packsOpened.toLocaleString()} packs opened.
This REPLACES the collection on this PC. Cannot be undone.`,
      "Import"
    );
    if (!ok) return;
    if (this.username !== username || this.saveStatus !== "ready") {
      toast("Import cancelled \u2014 the save changed while confirming.");
      return;
    }
    this.save = imported;
    this.syncLegacyClaimedLook();
    this.persistNow();
    this.overlay.refresh();
    toast(`Collection imported \u2014 ${cards.toLocaleString()} cards.`);
    this.log(`Imported collection from ${file.name}`);
  }
  getExclusions() {
    return this.data.cardmanExclude ?? [];
  }
  setExclusions(ids) {
    this.data.cardmanExclude = ids;
    this.exclSet = new Set(ids);
  }
  isExcluded(cardId) {
    if (!this.exclSet) this.exclSet = new Set(this.getExclusions());
    return this.exclSet.has(cardId);
  }
  /** The exclusions picker only matters while Cardman is on — hide its
   *  settings row otherwise. `hidden` covers the next panel open; the
   *  manager call animates the row if the panel is open right now (it
   *  no-ops when it isn't). */
  syncExclusionsVisibility() {
    const hidden = !this.settings.cardman?.value;
    this.settings.cardmanExclusions.hidden = hidden;
    try {
      document.highlite?.managers?.SettingsManager?.toggleSettingVisibility?.(this.pluginName, "cardmanExclusions", hidden);
    } catch {
    }
  }
  // -------------------------------------------------------------- economy
  buyPack(kind) {
    if (!this.save || !this.catalog) return null;
    if (this.save.credits < packCost(kind)) {
      toast("Not enough credits \u2014 keep playing!");
      return null;
    }
    const pulls = openPack(this.catalog, this.save, kind);
    this.persist();
    return pulls;
  }
  /**
   * Credits from XP: rather than guessing at an internal hook,
   * poll the player's total skill XP and convert the delta. Idle play gains
   * no XP, so this is exactly as idle-proof as an XP hook.
   */
  startXpEarning() {
    if (this.xpTimer !== null) return;
    this.xpTimer = window.setInterval(() => {
      if (!this.save) return;
      const total = this.readTotalXp();
      if (total === null) return;
      if (this.lastTotalXp === null) {
        this.lastTotalXp = total;
        return;
      }
      const gained = total - this.lastTotalXp;
      if (gained > 0) {
        this.lastTotalXp = total;
        this.lastXpGainAt = Date.now();
        this.flushPendingKills();
        this.xpBuffer += gained;
        const credits = Math.floor(this.xpBuffer / XP_PER_CREDIT);
        if (credits > 0) {
          this.xpBuffer -= credits * XP_PER_CREDIT;
          addXpCredits(this.save, credits);
          this.persist();
          this.overlay?.refreshCredits();
        }
      }
      this.checkLevelUps();
      this.checkTreasureMaps();
    }, 2e3);
  }
  // -------------------------------------------------------- bonus credits
  /** Every skill's current level — prefers the skill's own level field,
   *  falls back to the game's XP→level table via ExperienceManager. */
  readLevels() {
    try {
      const mp = this.gameHooks.EntityManager?.Instance?.MainPlayer;
      if (!mp) return null;
      const arrs = this.resolveSkillsArrays(mp);
      if (!arrs) return null;
      const xm = this.gameHooks.ExperienceManager;
      const out = /* @__PURE__ */ new Map();
      for (let a = 0; a < arrs.length; a++)
        for (let i = 0; i < arrs[a].length; i++) {
          const s = arrs[a][i];
          let lvl = s?._level ?? s?._currentLevel ?? s?.level;
          if (typeof lvl !== "number" || !isFinite(lvl)) {
            if (typeof xm?.getLevelAtExperience !== "function")
              return null;
            lvl = xm.getLevelAtExperience(this.skillXp(s));
          }
          out.set(`${a}:${i}`, { level: lvl, skill: s });
        }
      return out;
    } catch {
      return null;
    }
  }
  /** Best-effort skill name via the game's Skills enum lookup. */
  skillName(s) {
    const id = s?._skill ?? s?._skillId ?? s?._type ?? s?._id;
    const n = typeof id === "number" ? this.gameLookups?.Skills?.[id] : void 0;
    return typeof n === "string" && n ? n.charAt(0).toUpperCase() + n.slice(1) : null;
  }
  /** A gained level pays levelupBonus(level reached) — an exponential curve
   *  (see economy.ts), NOT a flat 100×level; a multi-level jump pays each
   *  level passed. Tracked per skill so the toast can say which skill hit
   *  which level. */
  checkLevelUps() {
    if (!this.save) return;
    const levels = this.readLevels();
    if (levels === null) return;
    if (this.lastLevels === null) {
      this.lastLevels = new Map(
        [...levels].map(([k, v]) => [k, v.level])
      );
      return;
    }
    let credits = 0;
    const ups = [];
    for (const [k, v] of levels) {
      const prev = this.lastLevels.get(k);
      if (prev !== void 0 && v.level > prev) {
        for (let l = prev + 1; l <= v.level; l++)
          credits += levelupBonus(l);
        const name = this.skillName(v.skill);
        ups.push(name ? `${name} ${v.level}` : `level ${v.level}`);
      }
      if (prev === void 0 || v.level > prev)
        this.lastLevels.set(k, v.level);
    }
    if (credits <= 0) return;
    addXpCredits(this.save, credits);
    this.persist();
    this.overlay?.refreshCredits();
    toast(`Level up! ${ups.join(", ")} \u2014 +${credits.toLocaleString()} \u2728`);
    this.log(`Level up: ${ups.join(", ")} (+${credits} credits)`);
  }
  /** Attach (or re-attach after a chat rebuild) the dig-message watcher.
   *  Cheap to call every treasure tick. */
  ensureChatWatcher() {
    if (this.chatObsTarget?.isConnected) return;
    this.chatObs?.disconnect();
    this.chatObs = null;
    this.chatObsTarget = null;
    const container = document.querySelector("#hs-chat-menu");
    if (!container) return;
    this.chatObs = new MutationObserver((muts) => {
      for (const m of muts)
        for (const n of m.addedNodes) {
          const t = (n.textContent ?? "").toLowerCase();
          if (t.includes("begin digging")) {
            this.digPendingAt = Date.now();
            this.log("treasure watch: dig message seen in chat");
          } else if (t.includes("only find dirt")) {
            this.digPendingAt = 0;
            this.log("treasure watch: dig came up empty \u2014 not armed");
          } else if (t.includes("you received") && this.digPendingAt && Date.now() - this.digPendingAt < 1e4) {
            this.lastLootAt = Date.now();
            this.log(`treasure watch: dig loot \u2014 ${t.slice(0, 80)}`);
          } else if (t.includes("you discarded")) {
            this.lastDiscardAt = Date.now();
            this.log("treasure watch: discard message seen in chat");
          }
        }
    });
    this.chatObs.observe(container, { childList: true, subtree: true });
    this.chatObsTarget = container;
    if (!this.chatWatcherLogged) {
      this.chatWatcherLogged = true;
      this.log("treasure watch: chat dig-watcher attached");
    }
  }
  /** The player's inventory item array — the hook has moved between client
   *  builds, so probe the known homes and say (once) which one answered,
   *  or what WAS there when none did. */
  inventoryItems() {
    const im = this.gameHooks.InventoryManager;
    const candidates = [
      ["InventoryManager.Items", im?.Items],
      ["InventoryManager.Instance.Items", im?.Instance?.Items],
      ["InventoryManager._items", im?._items],
      ["InventoryManager.Instance._items", im?.Instance?._items],
      [
        "MainPlayer._inventory._items",
        this.gameHooks.EntityManager?.Instance?.MainPlayer?._inventory?._items
      ],
      [
        "MainPlayer.Inventory.Items",
        this.gameHooks.EntityManager?.Instance?.MainPlayer?.Inventory?.Items
      ]
    ];
    for (const [path, v] of candidates) {
      if (Array.isArray(v)) {
        if (!this.invPathLogged) {
          this.invPathLogged = true;
          this.log(`treasure watch: inventory found at ${path}`);
        }
        return v;
      }
    }
    if (!this.invPathLogged) {
      this.invPathLogged = true;
      this.warn(
        `treasure watch: NO inventory array found \u2014 InventoryManager keys: ${im ? Object.keys(im).join(",") : "<missing>"}` + (im?.Instance ? ` | Instance keys: ${Object.keys(im.Instance).join(",")}` : "")
      );
    }
    return null;
  }
  itemDefName(defId) {
    let name = this.mapNameCache.get(defId);
    if (name === void 0) {
      try {
        const def = this.gameHooks.ItemDefinitionManager?._itemDefMap?.get(defId);
        name = String(def?._nameLowerCase ?? def?._name ?? "").toLowerCase();
      } catch {
        name = "";
      }
      this.mapNameCache.set(defId, name);
    }
    return name;
  }
  /** A treasure map leaving the inventory (dug up) = one free pack's worth.
   *  Skipped while the bank is open so deposits don't trigger it.
   *  Logs every count change so a missed bonus is diagnosable from the
   *  console: unknown map def ids, unreadable inventory entries, bank-open
   *  skips, and read errors all leave a trace. */
  checkTreasureMaps() {
    if (!this.save || !this.settings.treasureAwards?.value) return;
    try {
      this.ensureChatWatcher();
      const items = this.inventoryItems();
      if (!items) return;
      let count = 0;
      let nameCount = 0;
      let unreadable = 0;
      const seenIds = [];
      for (const it2 of items) {
        if (it2 == null) continue;
        const id = typeof it2 === "number" ? it2 : it2?._def?._id ?? it2?._itemDefId ?? it2?._id;
        if (typeof id !== "number") {
          unreadable++;
          continue;
        }
        const amt = typeof it2?._amount === "number" ? Math.max(1, it2._amount) : 1;
        if (TREASURE_MAP_DEFS.has(id)) {
          count += amt;
          seenIds.push(id);
        }
        if (this.itemDefName(id).includes("treasure map")) {
          nameCount += amt;
          if (!TREASURE_MAP_DEFS.has(id) && !this.unknownMapWarned.has(id)) {
            this.unknownMapWarned.add(id);
            this.warn(
              `treasure watch: def ${id} ("${this.itemDefName(id)}") is named like a map but is NOT in TREASURE_MAP_DEFS \u2014 its use can never pay the bonus`
            );
          }
        }
      }
      const prev = this.mapCount;
      if (prev !== count || this.nameMapCount !== nameCount) {
        this.log(
          `treasure watch: known-map count ${prev ?? "\u2014"}\u2192${count}, name-matched ${this.nameMapCount ?? "\u2014"}\u2192${nameCount}` + (seenIds.length ? ` (defs ${seenIds.join(",")})` : "") + (unreadable ? `, ${unreadable} unreadable item(s)` : "")
        );
      }
      this.nameMapCount = nameCount;
      this.mapCount = count;
      if (prev === null) return;
      const used = prev - count;
      if (used <= 0) return;
      if (document.getElementById("hs-bank-menu")) {
        this.log(
          `treasure watch: ${used} map(s) left the inventory with the bank open \u2014 treated as a deposit, no bonus`
        );
        return;
      }
      if (this.chatObsTarget) {
        const now = Date.now();
        const lootRecent = now - this.lastLootAt <= 15e3;
        const discardWins = now - this.lastDiscardAt <= 15e3 && this.lastDiscardAt > this.lastLootAt;
        if (!lootRecent || discardWins) {
          this.log(
            `treasure watch: ${used} map(s) left the inventory without confirmed dig loot` + (discardWins ? ` (discard message seen)` : ``) + ` \u2014 no bonus`
          );
          return;
        }
      }
      const credits = used * TREASURE_BONUS;
      addXpCredits(this.save, credits);
      this.persist();
      this.overlay?.refreshCredits();
      this.log(`treasure bonus: ${used} map(s) used \u2192 +${credits} \u2728`);
      toast(`Treasure! +${credits} \u2728`);
    } catch (e13) {
      if (!this.treasureErrLogged) {
        this.treasureErrLogged = true;
        this.warn("treasure watch failed", e13);
      }
    }
  }
  /** Watch the NPC list for entities entering the dead state near a
   *  recently-fighting player — that's a kill, worth a small level-scaled
   *  bonus (never close to a full pack). */
  startKillWatching() {
    if (this.npcTimer !== null) return;
    this.npcTimer = window.setInterval(() => this.killTick(), 600);
  }
  /** "Creature kills award points" toggle: the 600ms NPC poll only runs
   *  while it's on — off tears the timer and all kill state down. */
  syncKillWatch() {
    if (this.settings.killAwards?.value) {
      if (this.save) this.startKillWatching();
    } else {
      if (this.npcTimer !== null) clearInterval(this.npcTimer);
      this.npcTimer = null;
      this.npcSightings.clear();
      this.targetTimes.clear();
      this.pendingKills = [];
      this.lastPlayerPos = null;
      this.lastBigMoveAt = 0;
    }
  }
  /** "Treasure maps award points" toggle: off detaches the chat watcher
   *  and drops the counts; re-enabling re-baselines on the next tick so
   *  changes made while off never mint credits. */
  syncTreasureWatch() {
    if (this.settings.treasureAwards?.value) return;
    this.chatObs?.disconnect();
    this.chatObs = null;
    this.chatObsTarget = null;
    this.mapCount = null;
    this.nameMapCount = null;
    this.digPendingAt = this.lastLootAt = this.lastDiscardAt = 0;
  }
  static {
    /** Tiles per 600ms tick beyond any normal run speed (observed: running
     *  moves ≤2/tick, teleports 46–700+). */
    this.BIG_MOVE_TILES = 8;
  }
  readGamePos(e13) {
    const p = e13?.CurrentGamePosition ?? e13?._currentGamePosition ?? e13?._position;
    const x = p?.X ?? p?._x ?? p?.x;
    const z2 = p?.Z ?? p?._z ?? p?.z;
    return typeof x === "number" && typeof z2 === "number" ? { x, z: z2 } : null;
  }
  killTick() {
    try {
      if (!this.save || !this.catalog) return;
      const mp = this.gameHooks.EntityManager?.Instance?.MainPlayer;
      if (!mp) return;
      const npcs = this.iterEntities(this.gameHooks.EntityManager?.Instance?.NPCs);
      if (!npcs) return;
      if (!this.killWatchLogged && npcs.length > 0) {
        this.killWatchLogged = true;
        this.log(`kill-watch active \u2014 ${npcs.length} NPCs in range`);
      }
      const now = Date.now();
      const tEid = mp._currentTarget?.EntityID ?? mp._currentTarget?._entityId;
      if (typeof tEid === "number") this.targetTimes.set(tEid, now);
      for (const [eid, at2] of this.targetTimes)
        if (now - at2 > 15e3) this.targetTimes.delete(eid);
      const pos = this.readGamePos(mp);
      const movedTiles = pos && this.lastPlayerPos ? Math.max(
        Math.abs(pos.x - this.lastPlayerPos.x),
        Math.abs(pos.z - this.lastPlayerPos.z)
      ) : null;
      this.lastPlayerPos = pos;
      if (movedTiles !== null && movedTiles > _HighSpellTCG.BIG_MOVE_TILES)
        this.lastBigMoveAt = now;
      const seen = /* @__PURE__ */ new Set();
      for (const npc of npcs) {
        const eid = npc?.EntityID ?? npc?._entityId;
        if (typeof eid !== "number") continue;
        seen.add(eid);
        this.npcSightings.set(eid, npc?._def?._id ?? npc?._npcDefId);
      }
      for (const [eid, defId] of this.npcSightings) {
        if (seen.has(eid)) continue;
        this.npcSightings.delete(eid);
        const targetedAt = this.targetTimes.get(eid);
        if (targetedAt === void 0 || now - targetedAt > 1e4) continue;
        this.targetTimes.delete(eid);
        if (now - this.lastBigMoveAt < 2500) {
          this.log(
            `kill-watch: target def ${defId} vanished right after the player moved ${movedTiles ?? "many"} tile(s) \u2014 teleport/area change, no kill credit`
          );
          continue;
        }
        if (now - this.lastXpGainAt < 8e3) {
          this.creditKill(defId);
        } else {
          this.pendingKills.push({ defId, at: now });
          if (this.pendingKills.length > 10) this.pendingKills.shift();
        }
      }
    } catch {
    }
  }
  /** XP just arrived — confirm any recent vanish candidates as kills. */
  flushPendingKills() {
    const now = Date.now();
    const ready = this.pendingKills.filter((p) => now - p.at < 8e3);
    this.pendingKills = [];
    for (const p of ready.slice(0, 4)) this.creditKill(p.defId);
  }
  creditKill(defId) {
    if (!this.save || !this.catalog) return;
    const card = typeof defId === "number" ? this.catalog.npcByDef.get(defId) : void 0;
    const credits = killBonus(card?.level ?? 1);
    addXpCredits(this.save, credits);
    this.persist();
    this.overlay?.refreshCredits();
    this.log(`kill credit: ${card?.name ?? `npc def ${defId}`} +${credits}`);
  }
  iterEntities(raw) {
    if (!raw) return null;
    if (Array.isArray(raw)) return raw;
    if (typeof raw.values === "function") return Array.from(raw.values());
    if (typeof raw === "object") return Object.values(raw);
    return null;
  }
  /** Sum of all skill XP on MainPlayer, or null while the paths are unknown. */
  readTotalXp() {
    try {
      const mp = this.gameHooks.EntityManager?.Instance?.MainPlayer;
      if (!mp) return null;
      let arrs = this.resolveSkillsArrays(mp);
      if (!arrs) {
        this.skillsPaths = this.findSkillsPaths(mp);
        for (const p of this.skillsPaths)
          this.log(`XP source found at MainPlayer.${p.join(".")}`);
        this.lastTotalXp = null;
        this.lastLevels = null;
        arrs = this.resolveSkillsArrays(mp);
      }
      if (!arrs) return null;
      let total = 0;
      for (const arr of arrs) for (const s of arr) total += this.skillXp(s);
      return total;
    } catch {
      return null;
    }
  }
  skillXp(s) {
    const v = s?._experience ?? s?._xp ?? s?.experience;
    return typeof v === "number" && isFinite(v) ? v : 0;
  }
  looksLikeSkills(v) {
    return Array.isArray(v) && v.length >= 8 && v.every(
      (s) => s && typeof s === "object" && typeof (s._experience ?? s._xp ?? s.experience) === "number"
    );
  }
  /** Resolve every known path to a live, deduped (by identity — aliases can
   *  reference the same array) list of skill arrays. Null = rediscover. */
  resolveSkillsArrays(mp) {
    if (!this.skillsPaths || this.skillsPaths.length === 0) return null;
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const path of this.skillsPaths) {
      let v = mp;
      for (const k of path) v = v?.[k];
      if (this.looksLikeSkills(v) && !seen.has(v)) {
        seen.add(v);
        out.push(v);
      }
    }
    return out.length === this.skillsPaths.length ? out : null;
  }
  /** Scan MainPlayer (depth 2) for ALL arrays that look like skill lists —
   *  combat and non-combat skills live in separate arrays (chopping XP
   *  never hits `_combat._skills`). */
  findSkillsPaths(mp) {
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    const add = (path, v) => {
      if (this.looksLikeSkills(v) && !seen.has(v)) {
        seen.add(v);
        out.push(path);
      }
    };
    for (const k of Object.keys(mp)) {
      try {
        const v = mp[k];
        add([k], v);
        if (v && typeof v === "object" && !Array.isArray(v)) {
          for (const k2 of Object.keys(v)) {
            try {
              add([k, k2], v[k2]);
            } catch {
            }
          }
        }
      } catch {
      }
    }
    return out;
  }
  // ---------------------------------------------------------------- sound
  /** Tiny synthesized flip blip — no audio assets needed. */
  playFlipSound() {
    if (!this.settings.packSounds?.value) return;
    try {
      this.audioCtx ??= new AudioContext();
      const ctx = this.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.18);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
    }
  }
};
export {
  HighSpellTCG as default
};
/*! Bundled license information:

@ryelite/core/dist/index.js:
  (*! 
  
  Copyright (C) 2025  HighLite
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  
  *)
*/
