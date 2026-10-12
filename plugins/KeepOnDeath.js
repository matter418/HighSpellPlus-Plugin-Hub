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
    if (this.databaseSettings = await this.database.get("settings", this.username), this.databaseSettings) for (let t in this.databaseSettings) {
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

// src/DeathItems.ts
function getTotalItemQuantity(itemList) {
  return itemList.reduce(
    (a, b) => a + b.quantity,
    // sum .quantity
    0
    // start from 0
  );
}
var DeathItems = class {
  current = {
    // used for calculating where every item goes
    kept: [],
    dropped: [],
    destroyed: []
  };
  display = {
    // same as above but a little nicer for display. separate to avoid messing things up by accident
    kept: [],
    dropped: [],
    destroyed: []
  };
  priceBracket = {};
  // for ease of finding highest value items
  alwaysDestroyedOnDeathItemIDs = [
    // these are gone for good when you die, no matter what
    442,
    // treasure map (tier 1)
    443,
    // treasure map (tier 2)
    456
    // treasure map (tier 3)
  ];
  maxKeptItems = 3;
  // pray protect item to modify
  /* add an individual item to the price brackets */
  parseItem(newItem) {
    if (this.alwaysDestroyedOnDeathItemIDs.includes(newItem.id)) {
      this.current.destroyed.push(newItem);
      return;
    }
    if (this.priceBracket[newItem.value] === void 0) {
      this.priceBracket[newItem.value] = [];
    }
    const existingItemIndex = this.priceBracket[newItem.value].findIndex(
      (thisItem) => {
        thisItem.id === newItem.id;
      }
    );
    if (existingItemIndex >= 0) {
      this.priceBracket[newItem.value][existingItemIndex].quantity += newItem.quantity;
    } else {
      this.priceBracket[newItem.value].push(newItem);
    }
  }
  /* run once all items are parsed to populate our little lists */
  finalise() {
    this.populateKeptList();
    this.populateDroppedList();
    this.populateDestroyedList();
    this.populateDisplayLists();
  }
  /* back to default please */
  reset() {
    this.current.kept = [];
    this.current.dropped = [];
    this.current.destroyed = [];
    this.display.kept = [];
    this.display.dropped = [];
    this.display.destroyed = [];
    this.priceBracket = {};
  }
  /* keep most valuable items */
  populateKeptList() {
    const highToLowPrices = Object.keys(this.priceBracket).map(Number).sort((a, b) => {
      return b - a;
    });
    for (const value of highToLowPrices) {
      let remainingKeepSlots = this.maxKeptItems - getTotalItemQuantity(this.current.kept);
      if (!remainingKeepSlots) {
        return;
      }
      let bracket = this.priceBracket[value];
      if (getTotalItemQuantity(bracket) <= remainingKeepSlots) {
        bracket.forEach((item) => {
          this.current.kept.push(item);
        });
        continue;
      }
      const sortedBracket = bracket.toSorted(
        // not sorting in place so the price bracket remains unchanged
        (a, b) => {
          return b.slotIndex - a.slotIndex;
        }
      );
      for (const item of sortedBracket) {
        remainingKeepSlots = this.maxKeptItems - getTotalItemQuantity(this.current.kept);
        if (!remainingKeepSlots) {
          return;
        }
        if (item.quantity <= remainingKeepSlots) {
          this.current.kept.push(item);
          continue;
        }
        this.current.kept.push({
          id: item.id,
          name: item.name,
          value: item.value,
          quantity: remainingKeepSlots,
          // only the quantity we can fit
          tradeable: item.tradeable,
          slotIndex: item.slotIndex,
          cssBackgroundPosition: item.cssBackgroundPosition
        });
        return;
      }
    }
  }
  /* drop that which we cannot keep */
  populateDroppedList() {
    Object.values(this.priceBracket).forEach((bracket) => {
      bracket.forEach((thisItem) => {
        const keptItem = this.current.kept.find(
          (keptItem2) => {
            return thisItem.id === keptItem2.id && thisItem.slotIndex === keptItem2.slotIndex;
          }
        );
        if (!keptItem) {
          this.current.dropped.push(thisItem);
          return;
        }
        if (thisItem.quantity === keptItem.quantity) {
          return;
        }
        const remainingQuantity = thisItem.quantity - keptItem.quantity;
        this.current.dropped.push({
          id: thisItem.id,
          name: thisItem.name,
          value: thisItem.value,
          quantity: remainingQuantity,
          tradeable: thisItem.tradeable,
          slotIndex: thisItem.slotIndex,
          cssBackgroundPosition: thisItem.cssBackgroundPosition
        });
      });
    });
  }
  /* destroy that which we cannot drop */
  populateDestroyedList() {
  }
  /* combine non-stackable items together into a single quantity, for nicer display in side panel */
  populateDisplayLists() {
    Object.keys(this.current).forEach((listName) => {
      let storedItems = this.current[listName];
      let tempItems = [];
      storedItems.forEach((storedItem) => {
        const existingItemIndex = tempItems.findIndex((tempItem) => {
          return tempItem.id === storedItem.id;
        });
        if (existingItemIndex >= 0) {
          tempItems[existingItemIndex].quantity += storedItem.quantity;
        } else {
          tempItems.push(structuredClone(storedItem));
        }
      });
      tempItems.sort((a, b) => {
        if (a.value === b.value) {
          return a.id - b.id;
        } else {
          return b.value * b.quantity - a.value * a.quantity;
        }
      });
      this.display[listName] = tempItems;
    });
  }
};

// resources/html/keepondeath.html
var keepondeath_default = `<html lang="en">\r
<body>\r
<div id="inner"> <!-- our own inner since styling @scope'd <body> doesn't work... -->\r
\r
  <h1>Death Items</h1>\r
\r
  <main>\r
\r
    <section id="kept">\r
      <h2>KEPT</h2>\r
      <h3>these stay in your inventory</h3>\r
      <article class="item-container">\r
\r
      </article>\r
    </section>\r
\r
    <section id="dropped">\r
      <h2>DROPPED</h2>\r
      <h3>these lie with your corpse</h3>\r
      <article class="item-container">\r
\r
      </article>\r
      <h4>total value: <span class="total-value"></span></h4>\r
    </section>\r
\r
    <section id="destroyed">\r
      <h2>DESTROYED</h2>\r
      <h3>these will be forever lost</h3>\r
      <article class="item-container">\r
\r
      </article>\r
    </section>\r
\r
    <section id="empty">\r
      <h3>zen level: HIGH</h3>\r
    </section>\r
\r
  </main>\r
\r
  <footer>\r
    notice any errors? report bugs in the official HighSpell discord :)\r
  </footer>\r
\r
</div>\r
</body>\r
</html>\r
`;

// resources/css/keepondeath.css
var keepondeath_default2 = "@scope{#inner{display:flex;align-items:center;flex-direction:column;font-family:Inter,Arial,sans-serif;user-select:none;pointer-events:none;background:#222;color:#fff;align-items:stretch}h1,h2,h3,h4{margin:0;text-align:center}h1{font-size:2rem;font-family:serif;font-variant-caps:small-caps;text-shadow:-2px 2px 0px #a33939}h2{font-size:1.5rem}h3{font-size:1rem;font-weight:400}h4{font-size:.8rem;font-weight:400;font-style:italic}.total-value{color:#ffff60;font-weight:700}section{margin:1.5rem 0}.item-container{display:flex;flex-wrap:wrap;gap:0 4px;padding:4px;background:#2b251d;border:2px white solid;border-radius:.25rem}.item{width:48px;height:48px;background-image:url(<<SPRITESHEET_URL>>);position:relative}.quantity{background-color:#000000a6;color:#ffff60;position:absolute;top:0;left:0;padding:0 .125rem;border-radius:.25rem;text-align:right;font-size:.6875rem}.untradeable{background-color:#c80000a6;color:#fff;position:absolute;bottom:0;right:0;padding:0 .125rem;border-radius:.25rem;text-align:right;font-size:.6875rem}.item:hover .untradeable{font-size:.5rem}.item:has(.untradeable){pointer-events:auto}#kept h2{color:#0f0}#kept .item-container{border-color:#0f0}#dropped h2{color:orange}#dropped .item-container{border-color:orange}#destroyed h2{color:red}#destroyed .item-container{border-color:red}#empty h3{font-style:italic;font-family:serif;font-variant-caps:small-caps;padding:0 10px;font-size:2rem;color:#87ceeb;animation:zen 3s alternate-reverse infinite}footer{padding:0 10px;font-size:.7rem;font-style:italic;text-align:center;color:#d3d3d3}@keyframes zen{0%{text-shadow:0 0 2px white}to{text-shadow:0 0 10px white}}}\n";

// src/KeepOnDeath.ts
function createItemElement(cssBackgroundPosition, quantity, tradeable) {
  let itemElm = document.createElement("div");
  itemElm.classList.add("item");
  itemElm.style.backgroundPosition = cssBackgroundPosition;
  let quantityElm = document.createElement("div");
  quantityElm.classList.add("quantity");
  quantityElm.innerText = quantity === 1 ? "" : formatValueString(quantity);
  itemElm.append(quantityElm);
  if (!tradeable) {
    let untradeable = document.createElement("div");
    untradeable.classList.add("untradeable");
    untradeable.innerText = "U";
    itemElm.addEventListener("mouseenter", () => {
      untradeable.innerText = "Untradeable";
    });
    itemElm.addEventListener("mouseleave", () => {
      untradeable.innerText = "U";
    });
    itemElm.append(untradeable);
  }
  return itemElm;
}
function formatValueString(quantity) {
  let output = "";
  if (quantity >= 1e10) {
    let quantityString = (quantity / 1e9).toString();
    if (quantityString.indexOf(".") >= 0) {
      let split = quantityString.split(".");
      output = split[0] + "." + split[1].charAt(0) + "B";
    } else {
      output = quantityString + ".0B";
    }
  } else if (quantity >= 1e9) {
    let quantityString = (quantity / 1e9).toString();
    if (quantityString.indexOf(".") >= 0) {
      let split = quantityString.split(".");
      1 === split[1].length ? output = split[0] + "." + split[1].charAt(0) + "0B" : output = split[0] + "." + split[1].substr(0, 2) + "B";
    } else {
      output = quantityString + ".00B";
    }
  } else if (quantity >= 1e7) {
    output = Math.trunc(quantity / 1e6).toString() + "M";
  } else if (quantity >= 1e5) {
    output = Math.trunc(quantity / 1e3).toString() + "K";
  } else {
    output = quantity.toString();
  }
  return output;
}
var KeepOnDeath = class extends bi {
  panelManager = new Ee();
  pluginName = "Keep On Death";
  pluginDescription = "Display which items will be kept, dropped, or destroyed when you die";
  author = "wienerWizard";
  version = "1.0.0";
  menuIcon = "\u{1F480}";
  enableDebug = false;
  // development helperino
  deathItems = new DeathItems();
  panelContent = void 0;
  // html contents of the side panel
  timeoutDuration = 50;
  // short delay (ms) before recalculating death items
  timeoutID = 0;
  // death items recalculation setTimeout ID
  constructor() {
    super();
    if (this.enableDebug) {
      this.settings.DebugPrintDeathItems = {
        text: "death items: current",
        type: dt.button,
        value: "",
        callback: () => this.debugPrintCurrentitems()
      };
      this.settings.DebugPrintDisplayItems = {
        text: "death items: display",
        type: dt.button,
        value: "",
        callback: () => this.debugPrintDisplayItems()
      };
      this.settings.DebugPrintPriceBracket = {
        text: "price bracket",
        type: dt.button,
        value: "",
        callback: () => this.debugPrintPriceBracket()
      };
    }
  }
  /* built-in plugin funcs */
  init() {
    this.log("initalising");
    this.deathItems = new DeathItems();
  }
  start() {
    this.log("started :)");
    this.panelContent = this.panelManager.requestMenuItem(this.menuIcon, this.pluginName)[1];
    this.panelContent.innerHTML = keepondeath_default;
    const modifiedCSS = keepondeath_default2.replace(
      "<<SPRITESHEET_URL>>",
      this.gameHooks.SpriteSheetManager.Instance.ItemSpritesheetInfo.SpritesheetURL
    );
    let styleTag = document.createElement("style");
    styleTag.innerText = `${modifiedCSS}`;
    this.panelContent.appendChild(styleTag);
    this.refreshKeptItemsTimeout();
  }
  stop() {
    this.log("stopped :(");
    this.panelManager.removeMenuItem(this.menuIcon);
  }
  /* lower level of logging */
  debug(message) {
    if (this.enableDebug) {
      this.log(`[###] ${message}`);
    }
  }
  /* debug functions, for debugging (they help us debug) */
  debugPrintCurrentitems() {
    this.debug("\n\nKEPT (current):");
    this.debug(JSON.stringify(this.deathItems.current.kept, null, 2));
    this.debug("\n\nDROPPED (current):");
    this.debug(JSON.stringify(this.deathItems.current.dropped, null, 2));
    this.debug("\n\nDESTROYED (current):");
    this.debug(JSON.stringify(this.deathItems.current.destroyed, null, 2));
  }
  debugPrintDisplayItems() {
    this.debug("\n\nKEPT (display):");
    this.debug(JSON.stringify(this.deathItems.display.kept, null, 2));
    this.debug("\n\nDROPPED (display):");
    this.debug(JSON.stringify(this.deathItems.display.dropped, null, 2));
    this.debug("\n\nDESTROYED (display):");
    this.debug(JSON.stringify(this.deathItems.display.destroyed, null, 2));
  }
  debugPrintPriceBracket() {
    this.debug("\n\nPRICE BRACKET:");
    this.debug(JSON.stringify(this.deathItems.priceBracket, null, 2));
  }
  /* push all our items through the sieve and see what falls out */
  parseAllPlayerItems() {
    this.debug("parsing all player items");
    this.deathItems.reset();
    const items = [].concat(
      this.gameHooks.EntityManager.Instance.MainPlayer.Inventory.Items,
      this.gameHooks.EntityManager.Instance.MainPlayer.Loadout.Items
      // loadout handled AFTER inventory
    );
    items.forEach((item, slotIndex) => {
      if (!item) {
        return;
      }
      this.deathItems.parseItem({
        id: item._id,
        name: item._def._nameCapitalized,
        value: item._def._cost,
        quantity: item._amount,
        tradeable: item._def._isTradeable,
        slotIndex,
        cssBackgroundPosition: this.gameHooks.InventoryItemSpriteManager.getCSSBackgroundPositionForItem(item._id)
      });
    });
    this.deathItems.finalise();
  }
  /* display death item lists in side panel */
  updatePanelHTML() {
    this.debug("updating panel html");
    this.parseAllPlayerItems();
    const data = [
      {
        querySelector: "#kept",
        // where to find this section in the panel
        itemList: this.deathItems.display.kept
        // what items to add to this section
      },
      {
        querySelector: "#dropped",
        itemList: this.deathItems.display.dropped
      },
      {
        querySelector: "#destroyed",
        itemList: this.deathItems.display.destroyed
      }
    ];
    let numSectionsVisible = 0;
    data.forEach((section) => {
      let sectionParent = this.panelContent?.querySelector(section.querySelector);
      let sectionContainer = sectionParent.querySelector(".item-container");
      if (!section.itemList.length) {
        sectionParent.style.display = "none";
        return;
      }
      let fragment = document.createDocumentFragment();
      section.itemList.forEach((item) => {
        fragment.append(createItemElement(
          item.cssBackgroundPosition,
          item.quantity,
          item.tradeable
        ));
      });
      sectionContainer.innerHTML = "";
      sectionContainer.append(fragment);
      sectionParent.style.display = "";
      numSectionsVisible += 1;
    });
    let droppedValueElm = this.panelContent?.querySelector("#dropped .total-value");
    const droppedValue = this.deathItems.display.dropped.reduce(
      (a, b) => a + b.value * b.quantity,
      // sum stack value of each item
      0
      // start from 0
    );
    droppedValueElm.innerText = formatValueString(droppedValue);
    let emptyElm = this.panelContent?.querySelector("#empty");
    if (numSectionsVisible) {
      emptyElm.style.display = "none";
    } else {
      emptyElm.style.display = "";
    }
  }
  /* return current player ID */
  getMainPlayerID() {
    return this.gameHooks.EntityManager.Instance.MainPlayer._entityId;
  }
  /* on any inventory/loadout change, set a timeout to recalculate the kept items
     this prevents running the calculations 28 times in a row when we pull a full inventory of items from bank, for example */
  refreshKeptItemsTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(
      () => {
        this.updatePanelHTML();
      },
      // anon func to fix the "this" issue: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#the_this_problem
      this.timeoutDuration
    );
  }
  SocketManager_handleAddedItemAtInventorySlotPacket(packet) {
    this.refreshKeptItemsTimeout();
  }
  SocketManager_handleRemovedItemFromInventoryAtSlotPacket(packet) {
    this.refreshKeptItemsTimeout();
  }
  SocketManager_handleReorganizedInventorySlotsPacket(packet) {
    this.refreshKeptItemsTimeout();
  }
  SocketManager_handleEquippedItemPacket(packet) {
    const playerID = packet[0];
    if (playerID === this.getMainPlayerID()) {
      this.refreshKeptItemsTimeout();
    }
  }
  SocketManager_handleUnequippedItemPacket(packet) {
    const playerID = packet[0];
    if (playerID === this.getMainPlayerID()) {
      this.refreshKeptItemsTimeout();
    }
  }
};
export {
  KeepOnDeath as default
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
