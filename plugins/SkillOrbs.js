// src/SkillOrbs.ts
import { Plugin, UIManager, abbreviateValue } from "@highlite/core";
import { SettingsTypes } from "@highlite/core";

// resources/css/skill-orbs.css
var skill_orbs_default = '.hl-skill-orbs{pointer-events:none;position:absolute;display:inline-flex;width:max-content;white-space:nowrap;left:50%;transform:translate(-50%);gap:8px}.hl-skill-orbs{--offset: calc((var(--hs-canvas-width) - var(--hs-compass-button-right)) / 2)}.hl-skill-orb{position:relative;pointer-events:none;width:var(--size);height:var(--size);transition:opacity .22s ease,transform .22s ease;--outerR: calc(var(--size) / 2);--innerDpx: calc(var(--size) * var(--innerScale));--innerRpx: calc(var(--innerDpx) / 2);--coreOpacity: 1}.hl-skill-orb.is-fading{opacity:0;transform:translateY(-4px)}.hl-skill-orb__ring{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--ringColor, hsl(0, 60%, 45%)) calc(var(--ringPct, 0) * 100%),rgba(0,0,0,.2) 0);box-sizing:border-box;padding:calc(var(--size) * var(--thickness));clip-path:circle(50% at 50% 50%);box-shadow:0 1px 4px #00000040}.hl-skill-orb__core{position:absolute;inset:0;border-radius:50%;background:#1b1b1b;opacity:var(--coreOpacity, .8);clip-path:circle(var(--innerRpx) at 50% 50%)}.hl-skill-orb__mask{position:absolute;inset:0;border-radius:50%;background:#000000b3;clip-path:circle(var(--innerRpx) at 50% 50%);opacity:0;transition:opacity .12s ease;pointer-events:none;z-index:1}.hl-skill-orb.is-hover .hl-skill-orb__mask{opacity:1}.hl-skill-orb__iconwrap{position:relative;width:var(--size);height:var(--size);border-radius:50%;clip-path:circle(50% at 50% 50%);overflow:clip}.hl-skill-orb__iconcenter{position:absolute;left:50%;top:50%;transform-origin:50% 50%;transform:translate(-50%,-50%)}.hl-skill-orb__iconcenter>.hs-stat-menu-item__icon{margin:0!important;pointer-events:none;transform-origin:50% 50%;transform:scale(var(--iconScale, 1));will-change:transform}.hl-skill-orb.is-hover .hl-skill-orb__icon{opacity:.25}.hl-skill-orb__level{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-weight:800;font-size:calc(var(--size) * .38);color:#ffd21e;text-shadow:0 1px 2px rgba(0,0,0,.6);pointer-events:none;opacity:0;z-index:2}.hl-skill-orb.is-hover .hl-skill-orb__level{opacity:1}.hl-skill-orb__tip{position:absolute;left:50%;top:calc(100% + 8px);transform:translate(-50%) translateY(-2px);min-width:200px;padding:8px 10px;border-radius:10px;background:#000000d9;color:#fff;font-size:12px;line-height:1.35;box-shadow:0 4px 12px #00000059;opacity:0;pointer-events:none;transition:opacity .12s ease,transform .12s ease}.hl-skill-orb.is-hover .hl-skill-orb__tip{opacity:1;transform:translate(-50%) translateY(0)}.hl-skill-orb__tip-header{display:flex;justify-content:space-between;gap:12px;margin-bottom:6px;font-weight:700}.hl-skill-orb__tip-row{display:flex;justify-content:space-between;gap:24px}.hl-skill-orb__tip-row span:first-child{text-align:left}.hl-skill-orb__tip-row span:last-child{text-align:right;min-width:96px}.hl-skill-orb__tip:after{content:"";position:absolute;left:50%;bottom:100%;transform:translate(-50%);border:6px solid transparent;border-bottom-color:#000000d9}.hl-skill-orb__tip-row.is-hidden{display:none!important}\n';

// src/SkillOrbs.ts
var CONSTANTS = {
  INNER_CORE_SCALE_INT: 70,
  // %
  INNER_CORE_OPACITY: 1,
  RING_THICKNESS_INT: 4,
  // % of radius
  DEFAULT_ORB_SIZE: 56,
  MIN_ORB_SIZE: 36,
  MAX_ORB_SIZE: 96,
  ICON_SCALE_PCT: 80,
  FADE_DURATION_MS: 220,
  EMA_TAU_SECONDS: 30,
  SAMPLE_RETENTION_MS: 5 * 60 * 1e3,
  LEVEL_TO_XP: {
    1: 0,
    2: 99,
    3: 210,
    4: 333,
    5: 470,
    6: 622,
    7: 791,
    8: 978,
    9: 1185,
    10: 1414,
    11: 1667,
    12: 1947,
    13: 2256,
    14: 2598,
    15: 2976,
    16: 3393,
    17: 3854,
    18: 4363,
    19: 4925,
    20: 5546,
    21: 6232,
    22: 6989,
    23: 7825,
    24: 8749,
    25: 9769,
    26: 10896,
    27: 12141,
    28: 13516,
    29: 15035,
    30: 16713,
    31: 18567,
    32: 20616,
    33: 22880,
    34: 25382,
    35: 28147,
    36: 31202,
    37: 34579,
    38: 38311,
    39: 42436,
    40: 46996,
    41: 52037,
    42: 57609,
    43: 63769,
    44: 70579,
    45: 78108,
    46: 86433,
    47: 95637,
    48: 105814,
    49: 117067,
    50: 129510,
    51: 143269,
    52: 158484,
    53: 175309,
    54: 193915,
    55: 214491,
    56: 237246,
    57: 262410,
    58: 290240,
    59: 321018,
    60: 355057,
    61: 392703,
    62: 434338,
    63: 480386,
    64: 531315,
    65: 587643,
    66: 649943,
    67: 718848,
    68: 795059,
    69: 879351,
    70: 972582,
    71: 1075701,
    72: 1189756,
    73: 1315908,
    74: 1455440,
    75: 1609773,
    76: 1780476,
    77: 1969287,
    78: 2178128,
    79: 2409124,
    80: 2664626,
    81: 2947234,
    82: 3259825,
    83: 3605580,
    84: 3988019,
    85: 4411034,
    86: 4878932,
    87: 5396475,
    88: 5968931,
    89: 6602127,
    90: 7302510,
    91: 8077208,
    92: 8934109,
    93: 9881935,
    94: 10930335,
    95: 12089982,
    96: 13372681,
    97: 14791491,
    98: 16360855,
    99: 18096750,
    100: 20016848
  }
};
var SkillOrbs = class extends Plugin {
  // ===== LIFECYCLE METHODS =====
  constructor() {
    super();
    // ===== PLUGIN METADATA =====
    this.pluginName = "Skill Orbs";
    this.author = "Ellz";
    this.domRoot = null;
    this.orbsRow = null;
    this.orbs = /* @__PURE__ */ new Map();
    this.prevXp = /* @__PURE__ */ new Map();
    this.cssInjected = false;
    this.lastHoverKey = null;
    this.onMouseMoveBound = null;
    this.onMouseLeaveBound = null;
    this.hoverRaf = 0;
    this.iconScalePct = CONSTANTS.ICON_SCALE_PCT;
    this.HS_BASE_CELL_PX = 24;
    this.uiManager = new UIManager();
    this.settings = this.getDefaultSettings();
  }
  // ===== SETTINGS =====
  getDefaultSettings() {
    let options = ["Whole Game Window", "Up To Compass"];
    return {
      enable: {
        type: SettingsTypes.checkbox,
        text: "Skill Orbs",
        value: true,
        callback: () => {
          if (this.hasStarted) this.stop();
          else this.start();
        }
      },
      alignOrbs: {
        type: SettingsTypes.combobox,
        text: "Center Align Orbs",
        value: "Whole Game Window",
        description: "How to position orbs on the x-axis",
        options,
        callback: () => {
          if (this.orbsRow) {
            this.updateOrbsRowAlignment(this.orbsRow);
          }
        }
      },
      showCurrentXp: {
        type: SettingsTypes.checkbox,
        text: "Current XP",
        value: true,
        callback: () => this.updateTooltipVisibility()
      },
      showXpToLevel: {
        type: SettingsTypes.checkbox,
        text: "XP to Level",
        value: true,
        callback: () => this.updateTooltipVisibility()
      },
      showTimeToLevel: {
        type: SettingsTypes.checkbox,
        text: "Time to Level",
        value: true,
        callback: () => this.updateTooltipVisibility()
      },
      showXpHr: {
        type: SettingsTypes.checkbox,
        text: "XP/hr",
        value: true,
        callback: () => this.updateTooltipVisibility()
      },
      fadeSeconds: {
        type: SettingsTypes.range,
        text: "Fade (seconds)",
        description: "Min 1s, Max 600s",
        value: 5,
        min: 1,
        max: 600,
        callback: () => this.resetAllFadeTimers()
      },
      iconScaling: {
        type: SettingsTypes.range,
        text: "Icon Scaling %",
        description: "Min 50%, Max 90%",
        value: CONSTANTS.ICON_SCALE_PCT,
        min: 50,
        max: 90,
        callback: () => {
          this.setIconScale();
          this.updateIconSizes();
        }
      },
      orbSize: {
        type: SettingsTypes.range,
        text: "Orb Size (px)",
        description: "Min " + CONSTANTS.MIN_ORB_SIZE + "px, Max " + CONSTANTS.MAX_ORB_SIZE + "px.",
        value: CONSTANTS.DEFAULT_ORB_SIZE,
        min: CONSTANTS.MIN_ORB_SIZE,
        max: CONSTANTS.MAX_ORB_SIZE,
        callback: () => {
          const v = this.settings.orbSize.value;
          this.updateOrbSizes(this.toNum(v, CONSTANTS.DEFAULT_ORB_SIZE));
        }
      },
      fadeOrbs: {
        type: SettingsTypes.button,
        text: "Clear All Orbs",
        value: "Apply",
        callback: () => this.hideAllOrbs()
      }
    };
  }
  init() {
    this.hasStarted = false;
  }
  start() {
    if (this.hasStarted) {
      return this.log("hasStarted == True, start() aborted");
    }
    this.setupRoot();
    this.injectStyles();
    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onMouseLeaveBound = this.onMouseLeave.bind(this);
    window.addEventListener("mousemove", this.onMouseMoveBound);
    window.addEventListener("mouseleave", this.onMouseLeaveBound);
    this.refreshLayoutFromSettings();
    this.startStatsLoop();
    this.log("Skill Orbs started");
    this.hasStarted = true;
  }
  stop() {
    if (!this.hasStarted) {
      return this.log("hasStarted == false, stop() aborted");
    }
    this.orbs.forEach((o) => o.root.remove());
    this.orbs.clear();
    this.prevXp.clear();
    this.cleanupRoot();
    if (this.onMouseMoveBound) window.removeEventListener("mousemove", this.onMouseMoveBound);
    if (this.onMouseLeaveBound) window.removeEventListener("mouseleave", this.onMouseLeaveBound);
    this.onMouseMoveBound = null;
    this.onMouseLeaveBound = null;
    cancelAnimationFrame(this.hoverRaf);
    this.stopStatsLoop();
    this.log("Skill Orbs stopped");
    this.hasStarted = false;
  }
  // ===== GAME LOOP =====
  GameLoop_update() {
    if (!this.settings.enable.value) return;
    const allSkills = this.getPlayerSkills();
    if (!allSkills || allSkills.length === 0) return;
    if (!this.isXpTrackingInitialized) {
      this.initializeXpTracking();
      return;
    }
    const now = Date.now();
    for (let i = 0; i < allSkills.length; i++) {
      const s = allSkills[i];
      if (!this.isValidSkill(s)) continue;
      const skillNameLookup = this.gameLookups && this.gameLookups["Skills"] && this.gameLookups["Skills"][s._skill] || String(s._skill);
      const skillKey = skillNameLookup;
      const last = this.prevXp.has(skillKey) ? this.prevXp.get(skillKey) : s._xp;
      const delta = s._xp - last;
      this.prevXp.set(skillKey, s._xp);
      if (delta <= 0) continue;
      const orb = this.ensureOrb(skillKey);
      const curFloor = CONSTANTS.LEVEL_TO_XP[s._level] ?? 0;
      const nextFloor = CONSTANTS.LEVEL_TO_XP[s._level + 1] ?? curFloor;
      const span = Math.max(1, nextFloor - curFloor);
      const into = Math.max(0, s._xp - curFloor);
      orb.currentLevel = s._level;
      orb.totalXp = s._xp;
      orb.progress01 = Math.min(1, into / span);
      orb.toNext = Math.max(0, nextFloor - s._xp);
      if (orb.startTs == null) {
        orb.startTs = now;
        orb.startXp = s._xp - Math.max(0, delta);
        orb._lastSampleTs = now;
        orb._lastSampleXp = s._xp;
        orb.emaXpPerHour = void 0;
      } else {
        this.updateOrbEmaFromEvent(orb, now);
      }
      orb.samples.push({ xp: s._xp, t: now });
      this.gcSamples(orb, now);
      this.refreshLayoutFromSettings();
      this.renderOrb(orb);
      this.renderOrbStatsFor(orb);
      this.resetFade(orb, now);
    }
  }
  // ----- FUNCTIONS FOR GAME LOOP ----- //
  getPlayerSkills() {
    if (!this.gameHooks?.EntityManager?.Instance) return null;
    const main = this.gameHooks.EntityManager.Instance.MainPlayer;
    if (!main) return null;
    const resourceSkills = this.normalizeSkillsBag(main.Skills ? main.Skills._skills ?? main.Skills : []);
    const combatSkills = this.normalizeSkillsBag(main.Combat ? main.Combat._skills ?? main.Combat : []);
    return resourceSkills.concat(combatSkills);
  }
  initializeXpTracking() {
    const allSkills = this.getPlayerSkills();
    if (!allSkills || allSkills.length === 0) {
      this.log("Cannot initialize XP tracking - no skills found");
      return;
    }
    for (let i = 0; i < allSkills.length; i++) {
      const s = allSkills[i];
      if (!this.isValidSkill(s)) continue;
      const skillNameLookup = this.gameLookups?.Skills?.[s._skill] || String(s._skill);
      this.prevXp.set(skillNameLookup, s._xp);
    }
    this.isXpTrackingInitialized = true;
    this.log(`XP tracking initialized for ${this.prevXp.size} skills`);
  }
  // ===== UI MANAGEMENT =====
  setupRoot() {
    this.cleanupRoot();
    const row = document.createElement("div");
    this.orbsRow = row;
    row.id = "hl-skill-orbs";
    row.style.position = "absolute";
    row.style.top = "6px";
    this.setupCanvasSizeMonitoring();
    this.updateOrbsRowAlignment(row);
    row.style.display = "inline-flex";
    row.style.width = "max-content";
    row.style.whiteSpace = "nowrap";
    row.style.gap = "8px";
    row.style.pointerEvents = "none";
    const mask = document.getElementById("hs-screen-mask");
    if (mask) mask.appendChild(row);
    else this.log("COULD NOT APPEND TO MASK");
  }
  cleanupRoot() {
    if (this.orbsRow && this.orbsRow.parentElement) this.orbsRow.parentElement.removeChild(this.orbsRow);
    if (this.domRoot && this.domRoot.parentElement) this.domRoot.parentElement.removeChild(this.domRoot);
    this.orbsRow = null;
    this.domRoot = null;
  }
  setupCanvasSizeMonitoring() {
    const canvas = document.getElementById("hs-screen-mask");
    if (!canvas) return;
    let lastWidth = canvas.offsetWidth;
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        if (width !== lastWidth) {
          lastWidth = width;
          this.updateCanvasAlignment(width);
        }
      });
      resizeObserver.observe(canvas);
    }
  }
  updateCanvasAlignment(width) {
    if (this.orbsRow) {
      this.orbsRow.style.setProperty("--canvasWidth", `${width}`);
      this.updateOrbsRowAlignment(this.orbsRow);
    }
    return;
  }
  ensureOrb(skillName) {
    if (this.orbs.has(skillName)) return this.orbs.get(skillName);
    const root = document.createElement("div");
    root.style.setProperty("--size", this.getOrbSizeCss());
    root.style.setProperty("--innerScale", String(this.getInnerCoreScale()));
    root.style.setProperty("--coreOpacity", String(CONSTANTS.INNER_CORE_OPACITY));
    root.className = "hl-skill-orb";
    if (document.highlite?.managers?.UIManager?.bindOnClickBlockHsMask) {
      document.highlite.managers.UIManager.bindOnClickBlockHsMask(root, () => {
      });
    }
    const ring = document.createElement("div");
    ring.className = "hl-skill-orb__ring";
    ring.style.setProperty("--thickness", String(this.getRingThickness()));
    const core = document.createElement("div");
    core.className = "hl-skill-orb__core";
    const iconWrap = document.createElement("div");
    iconWrap.className = "hl-skill-orb__iconwrap";
    const iconCenter = document.createElement("div");
    iconCenter.className = "hl-skill-orb__iconcenter";
    const icon = document.createElement("div");
    icon.classList.add(
      "hs-icon-background",
      "hs-stat-menu-item__icon",
      `hs-stat-menu-item__icon--${skillName.toLowerCase()}`
    );
    icon.style.margin = "0";
    const levelBadge = document.createElement("div");
    levelBadge.className = "hl-skill-orb__level";
    levelBadge.textContent = "1";
    const hoverMask = document.createElement("div");
    hoverMask.className = "hl-skill-orb__mask";
    const tip = document.createElement("div");
    tip.className = "hl-skill-orb__tip";
    tip.innerHTML = `
      <div class="hl-skill-orb__tip-header">
        <span class="tip-skill">${this.titleCase(skillName)}</span>
        <span class="tip-progress">(0.0% to Next)</span>
      </div>
      <div class="hl-skill-orb__tip-row" data-row="cur">
        <span>Current XP</span><span data-k="cur">0</span>
      </div>
      <div class="hl-skill-orb__tip-row" data-row="to">
        <span>XP to Level</span><span data-k="to">0</span>
      </div>
      <div class="hl-skill-orb__tip-row" data-row="ttl">
        <span>Time to Level</span><span data-k="ttl">NaN</span>
      </div>
      <div class="hl-skill-orb__tip-row" data-row="xphr">
        <span>XP/hr</span><span data-k="xphr">NaN</span>
      </div>
    `;
    root.appendChild(ring);
    root.appendChild(core);
    iconCenter.appendChild(icon);
    iconWrap.appendChild(iconCenter);
    root.appendChild(iconWrap);
    root.appendChild(hoverMask);
    root.appendChild(levelBadge);
    root.appendChild(tip);
    const self = this;
    root.addEventListener("mouseenter", function() {
      root.classList.add("is-hover");
      const st = self.orbs.get(skillName);
      if (st) self.pauseFade(st);
    });
    root.addEventListener("mouseleave", function() {
      root.classList.remove("is-hover");
      const st = self.orbs.get(skillName);
      if (st) self.resetFade(st, Date.now());
    });
    if (this.orbsRow) this.orbsRow.appendChild(root);
    const state = {
      root,
      ring,
      core,
      iconWrap,
      iconCenter,
      icon,
      levelBadge,
      tooltip: tip,
      hoverMask,
      totalXp: 0,
      currentLevel: 1,
      toNext: 0,
      progress01: 0,
      samples: [],
      lastActivityMs: Date.now()
    };
    requestAnimationFrame(() => this.applyIconScale(state));
    this.applyTooltipVisibility(state);
    this.orbs.set(skillName, state);
    return state;
  }
  // ===== RENDERING METHODS =====
  renderOrb(orb) {
    const isMaxed = (orb.currentLevel ?? 0) >= 100;
    const prog = isMaxed ? 1 : Math.max(0, Math.min(1, orb.progress01 ?? 0));
    orb.root.style.setProperty("--ringPct", String(prog));
    const hue = Math.round(120 * prog);
    orb.root.style.setProperty("--ringColor", `hsl(${hue} 60% 45%)`);
    orb.levelBadge.textContent = String(orb.currentLevel ?? 0);
    this.renderOrbStatsFor(orb);
    this.applyTooltipVisibility(orb);
  }
  renderOrbStatsFor(orb) {
    if (!orb.tooltip) return;
    const isMaxed = (orb.currentLevel ?? 0) >= 100;
    const prog = isMaxed ? 1 : Math.max(0, Math.min(1, orb.progress01 ?? 0));
    const curNode = orb.tooltip.querySelector('[data-k="cur"]');
    const toNode = orb.tooltip.querySelector('[data-k="to"]');
    const hrNode = orb.tooltip.querySelector('[data-k="xphr"]');
    const ttNode = orb.tooltip.querySelector('[data-k="ttl"]');
    const progHdr = orb.tooltip.querySelector(".tip-progress");
    if (progHdr) progHdr.textContent = isMaxed ? "Maxed" : `(${(prog * 100).toFixed(1)}% to Next)`;
    if (curNode) curNode.textContent = this.formatXp(orb.totalXp);
    if (toNode) {
      const toNext = Math.max(0, Math.floor(orb.toNext ?? 0));
      toNode.textContent = isMaxed ? "" : this.formatXp(toNext);
    }
    const xphr = this.getSkillXpPerHour(orb, Date.now());
    if (hrNode) {
      hrNode.textContent = Number.isFinite(xphr) && xphr > 0 ? abbreviateValue(Math.floor(xphr)) : "NaN";
    }
    if (ttNode) {
      if (isMaxed || !Number.isFinite(xphr) || xphr <= 0) {
        ttNode.textContent = "NaN";
      } else {
        const toNext = Math.max(0, orb.toNext ?? 0);
        const seconds = toNext === 0 ? 0 : toNext * 3600 / xphr;
        ttNode.textContent = this.formatHMS(seconds);
      }
    }
  }
  // ===== FADE & TIMER MANAGEMENT =====
  resetFade(orb, now) {
    const seconds = this.getFadeSeconds();
    orb.lastActivityMs = now;
    if (orb.fadeHandle) {
      clearTimeout(orb.fadeHandle);
      orb.fadeHandle = void 0;
    }
    if (orb.removeHandle) {
      clearTimeout(orb.removeHandle);
      orb.removeHandle = void 0;
    }
    if (orb.isFading) {
      orb.root.classList.remove("is-fading");
      orb.isFading = false;
    }
    orb.fadeHandle = window.setTimeout(() => this.beginFade(orb), seconds * 1e3);
  }
  pauseFade(orb) {
    if (orb.fadeHandle) {
      clearTimeout(orb.fadeHandle);
      orb.fadeHandle = void 0;
    }
    if (orb.removeHandle) {
      clearTimeout(orb.removeHandle);
      orb.removeHandle = void 0;
    }
    if (orb.isFading) {
      orb.root.classList.remove("is-fading");
      orb.isFading = false;
    }
  }
  beginFade(orb) {
    orb.isFading = true;
    orb.root.classList.add("is-fading");
    orb.removeHandle = window.setTimeout(() => {
      if (orb.isFading) {
        if (orb.root.parentElement) orb.root.parentElement.removeChild(orb.root);
        this.orbs.forEach((v, k) => {
          if (v === orb) this.orbs.delete(k);
        });
        orb.isFading = false;
      }
    }, 260);
  }
  removeOrb(orb) {
    if (orb.root.parentElement) orb.root.parentElement.removeChild(orb.root);
    this.orbs.forEach((v, k) => {
      if (v === orb) this.orbs.delete(k);
    });
    orb.isFading = false;
    if (orb.fadeHandle) {
      clearTimeout(orb.fadeHandle);
      orb.fadeHandle = void 0;
    }
    if (orb.removeHandle) {
      clearTimeout(orb.removeHandle);
      orb.removeHandle = void 0;
    }
  }
  resetAllFadeTimers() {
    const now = Date.now();
    this.orbs.forEach((o) => this.resetFade(o, now));
  }
  hideAllOrbs() {
    this.orbs.forEach((o) => {
      this.removeOrb(o);
    });
    this.refreshLayoutFromSettings();
  }
  // ===== SETTINGS-DRIVEN UPDATES =====
  refreshLayoutFromSettings() {
    if (this.orbsRow) this.updateOrbsRowAlignment(this.orbsRow);
    this.updateOrbSizes(this.getOrbSize());
    this.updateTooltipVisibility();
    this.updateIconSizes();
    this.resetAllFadeTimers();
  }
  updateTooltipVisibility() {
    this.orbs.forEach((orb) => this.applyTooltipVisibility(orb));
  }
  applyTooltipVisibility(orb) {
    if (!orb || !orb.tooltip) return;
    const isMaxed = (orb.currentLevel ?? 0) >= 100;
    const curRow = orb.tooltip.querySelector('[data-row="cur"]');
    const toRow = orb.tooltip.querySelector('[data-row="to"]');
    const ttlRow = orb.tooltip.querySelector('[data-row="ttl"]');
    const hrRow = orb.tooltip.querySelector('[data-row="xphr"]');
    if (curRow) curRow.classList.toggle("is-hidden", !this.isSettingOn("showCurrentXp"));
    const showTo = this.isSettingOn("showXpToLevel") && !isMaxed;
    if (toRow) toRow.classList.toggle("is-hidden", !showTo);
    const showTTL = this.isSettingOn("showTimeToLevel") && !isMaxed;
    if (ttlRow) ttlRow.classList.toggle("is-hidden", !showTTL);
    if (hrRow) hrRow.classList.toggle("is-hidden", !this.isSettingOn("showXpHr"));
  }
  applyIconScale(orb) {
    if (!orb.icon) return;
    const innerPx = Math.floor(this.getOrbSize() * this.getInnerCoreScale());
    const target = Math.floor(innerPx * this.getIconScaleInt());
    const scale = target / this.HS_BASE_CELL_PX;
    orb.icon.style.setProperty("--iconScale", scale.toFixed(3));
  }
  applyOrbScale(orb, size) {
    orb.root.style.setProperty("--size", size + "px");
    const scale = size / CONSTANTS.DEFAULT_ORB_SIZE;
    orb.iconWrap.style.setProperty("--orbScale", scale.toFixed(3));
  }
  updateOrbSizes(n) {
    const size = typeof n === "number" ? n : this.getOrbSize();
    this.orbs.forEach((o) => this.applyOrbScale(o, size));
    this.updateIconSizes();
  }
  updateIconSizes() {
    this.orbs.forEach((o) => this.applyIconScale(o));
  }
  updateOrbsRowAlignment(orbsRow) {
    if (this.settings.alignOrbs.value == "Whole Game Window") {
      orbsRow.style.left = "50%";
      orbsRow.style.transform = "translateX(-50%)";
      orbsRow.classList.remove("align-compass");
    } else if (this.settings.alignOrbs.value == "Up To Compass") {
      const canvasWidth = parseFloat(orbsRow.style.getPropertyValue("--canvasWidth"));
      const compassRight = 212;
      const offset = (canvasWidth - compassRight) / 2;
      orbsRow.style.left = `${offset}px`;
      orbsRow.style.transform = "translateX(-50%)";
      orbsRow.classList.add("align-compass");
    }
    return;
  }
  // ===== STATS & CALCULATIONS =====
  startStatsLoop() {
    if (this.statsTimer) return;
    this.statsTimer = window.setInterval(() => {
      const now = Date.now();
      this.orbs.forEach((orb) => this.updateOrbEmaFromEvent(orb, now));
      this.orbs.forEach((orb) => this.renderOrbStatsFor(orb));
    }, 1e3);
    this.refreshLayoutFromSettings();
  }
  stopStatsLoop() {
    if (!this.statsTimer) return;
    clearInterval(this.statsTimer);
    this.statsTimer = void 0;
  }
  gcSamples(orb, now) {
    const cutoff = now - 5 * 6e4;
    while (orb.samples.length > 0 && orb.samples[0].t < cutoff) orb.samples.shift();
  }
  updateOrbEmaFromEvent(orb, nowMs) {
    if (orb._lastSampleTs == null || orb._lastSampleXp == null) {
      orb._lastSampleTs = nowMs;
      orb._lastSampleXp = orb.totalXp ?? 0;
      return;
    }
    const dtMs = nowMs - orb._lastSampleTs;
    if (dtMs < 250) return;
    const dxp = (orb.totalXp ?? 0) - orb._lastSampleXp;
    const hours = dtMs / 36e5;
    const inst = hours > 0 ? dxp / hours : NaN;
    const alpha = Math.max(0, Math.min(1, dtMs / (CONSTANTS.EMA_TAU_SECONDS * 1e3)));
    if (Number.isFinite(inst)) {
      orb.emaXpPerHour = orb.emaXpPerHour == null ? inst : alpha * inst + (1 - alpha) * orb.emaXpPerHour;
    }
    orb._lastSampleTs = nowMs;
    orb._lastSampleXp = orb.totalXp ?? 0;
  }
  getSkillXpPerHour(orb, nowMs) {
    if (Number.isFinite(orb.emaXpPerHour) && orb.emaXpPerHour > 0) {
      return orb.emaXpPerHour;
    }
    if (orb.startTs == null || orb.startXp == null) return NaN;
    const dtHours = (nowMs - orb.startTs) / 36e5;
    if (dtHours <= 0) return NaN;
    const gained = (orb.totalXp ?? 0) - orb.startXp;
    if (gained <= 0) return NaN;
    return gained / dtHours;
  }
  // ===== EVENT HANDLERS =====
  onMouseMove(e) {
    if (this.hoverRaf) cancelAnimationFrame(this.hoverRaf);
    this.hoverRaf = requestAnimationFrame(() => {
      const mx = e.clientX, my = e.clientY;
      let hoveredKey = null;
      this.orbs.forEach((orb, key) => {
        const r = orb.root.getBoundingClientRect();
        if (mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom) hoveredKey = key;
      });
      if (hoveredKey !== this.lastHoverKey) {
        if (this.lastHoverKey && this.orbs.has(this.lastHoverKey)) {
          const prev = this.orbs.get(this.lastHoverKey);
          prev.root.classList.remove("is-hover");
          this.resetFade(prev, Date.now());
        }
        if (hoveredKey && this.orbs.has(hoveredKey)) {
          const cur = this.orbs.get(hoveredKey);
          cur.root.classList.add("is-hover");
          this.pauseFade(cur);
        }
        this.lastHoverKey = hoveredKey;
      }
    });
  }
  onMouseLeave() {
    if (this.lastHoverKey && this.orbs.has(this.lastHoverKey)) {
      const prev = this.orbs.get(this.lastHoverKey);
      prev.root.classList.remove("is-hover");
      this.resetFade(prev, Date.now());
    }
    this.lastHoverKey = null;
  }
  // ===== HELPER METHODS =====
  injectStyles() {
    if (this.cssInjected) return;
    const style = document.createElement("style");
    style.textContent = skill_orbs_default;
    document.head.appendChild(style);
    this.cssInjected = true;
  }
  isValidSkill(x) {
    return !!x && typeof x._skill === "number" && typeof x._level === "number" && typeof x._xp === "number";
  }
  normalizeSkillsBag(bag) {
    if (!bag) return [];
    const maybeArr = Array.isArray(bag) ? bag : Array.isArray(bag._skills) ? bag._skills : bag;
    if (Array.isArray(maybeArr)) {
      return maybeArr.filter((e) => this.isValidSkill(e));
    }
    if (typeof maybeArr === "object") {
      const out = [];
      for (const k in maybeArr) {
        const v = maybeArr[k];
        if (this.isValidSkill(v)) out.push(v);
      }
      return out;
    }
    return [];
  }
  isSettingOn(key) {
    const s = this.settings[key];
    return !!(s && typeof s.value !== "undefined" && s.value);
  }
  // ===== GETTER METHODS =====
  getIconScaleInt() {
    return this.iconScalePct / 100;
  }
  getInnerCoreScale() {
    return CONSTANTS.INNER_CORE_SCALE_INT / 100;
  }
  getRingThickness() {
    return CONSTANTS.RING_THICKNESS_INT / 100;
  }
  getOrbSize() {
    return this.toNum(this.settings.orbSize.value, CONSTANTS.DEFAULT_ORB_SIZE);
  }
  getOrbSizeCss() {
    return this.getOrbSize() + "px";
  }
  getFadeSeconds() {
    return this.toNum(this.settings.fadeSeconds.value, 5);
  }
  setIconScale(percent) {
    if (!percent) {
      const value = this.settings.iconScaling.value;
      percent = this.toNum(value, CONSTANTS.ICON_SCALE_PCT);
    }
    if (percent >= 50 && percent <= 90) {
      this.iconScalePct = percent;
    }
    return;
  }
  // ===== UTILITY METHODS =====
  toNum(v, fallback) {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }
  formatXp(n) {
    const v = Math.max(0, Math.floor(n ?? 0));
    return v.toLocaleString("en-US");
  }
  formatHMS(totalSeconds) {
    if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "NaN";
    const s = Math.floor(totalSeconds % 60);
    const m = Math.floor(totalSeconds / 60 % 60);
    const h = Math.floor(totalSeconds / 3600);
    const mm = m.toString().padStart(2, "0");
    const ss = s.toString().padStart(2, "0");
    return `${h}:${mm}:${ss}`;
  }
  titleCase(s) {
    return s.replace(/\b\w/g, (m) => m.toUpperCase());
  }
  resetSettingsToDefaults() {
    const d = this.getDefaultSettings();
    for (const k in d) {
      if (!Object.prototype.hasOwnProperty.call(d, k)) continue;
      if (!this.settings[k]) this.settings[k] = d[k];
      else this.settings[k].value = d[k].value;
    }
    this.refreshLayoutFromSettings();
  }
};
export {
  SkillOrbs as default
};
