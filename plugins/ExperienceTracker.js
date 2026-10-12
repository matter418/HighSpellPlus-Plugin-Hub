// src/ExperienceTracker.ts
import { Plugin } from "@ryelite/core";
import { abbreviateValue } from "@ryelite/core";
import { PanelManager } from "@ryelite/core";
var ExperienceTracker = class extends Plugin {
  constructor() {
    super(...arguments);
    this.pluginName = "Experience Tracker";
    this.author = "Highlite";
    this.panelManager = new PanelManager();
    this.panelContent = void 0;
    this.hasStarted = false;
    this.levelToXP = {
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
    };
    this.skillToIcon = {
      hitpoints: "\u{1F496}",
      accuracy: "\u{1F3AF}",
      strength: "\u{1F4AA}",
      defense: "\u{1F6E1}\uFE0F",
      magic: "\u{1F52E}",
      range: "\u{1F3F9}",
      fishing: "\u{1F3A3}",
      mining: "\u26CF\uFE0F",
      smithing: "\u{1F528}",
      cooking: "\u{1F373}",
      forestry: "\u{1F333}",
      crafting: "\u{1F9F5}",
      harvesting: "\u{1F33E}",
      crime: "\u{1F977}",
      enchanting: "\u2728",
      potionmaking: "\u{1F9EA}"
    };
    this.skillTrackers = {};
  }
  start() {
    if (!this.settings.enable.value) {
      return;
    }
    this.panelContent = this.panelManager.requestMenuItem(
      "\u{1F4CA}",
      "Experience Tracker"
    )[1];
    if (!this.panelContent) {
      this.log(`Failed to create Experience Tracker panel`);
      return;
    }
    this.panelContent.style.display = "block";
    this.panelContent.style.flexDirection = "column";
    this.panelContent.style.width = "100%";
    this.panelContent.style.height = "-webkit-fill-available";
    this.log(`Started`);
    this.hasStarted = true;
  }
  createSkillListing(skill) {
    const skillName = this.gameLookups["Skills"][skill._skill];
    if (this.skillTrackers[skillName]) {
      return;
    }
    const skillIcon = this.skillToIcon[skillName];
    const skillTracker = document.createElement("div");
    skillTracker.style.display = "flex";
    skillTracker.style.flexDirection = "column";
    skillTracker.style.margin = "5px";
    skillTracker.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    skillTracker.style.padding = "5px";
    skillTracker.style.borderRadius = "10px";
    const skillHeader = document.createElement("div");
    skillHeader.style.display = "flex";
    skillHeader.style.flexDirection = "row";
    skillHeader.style.padding = "5px 0px";
    skillHeader.style.alignItems = "center";
    skillTracker.appendChild(skillHeader);
    const skillIconElement = document.createElement("div");
    skillIconElement.textContent = skillIcon;
    skillIconElement.style.fontSize = "30px";
    skillIconElement.style.backgroundColor = "#80808069";
    skillIconElement.style.borderRadius = "360px";
    skillIconElement.style.padding = "5px";
    skillIconElement.style.textShadow = "0.0625rem 0.0625rem 0 black";
    skillIconElement.style.marginRight = "5px";
    skillIconElement.style.textWrapMode = "nowrap";
    skillHeader.appendChild(skillIconElement);
    const xpDetails = document.createElement("div");
    xpDetails.style.display = "flex";
    xpDetails.style.flexDirection = "row";
    xpDetails.style.width = "100%";
    xpDetails.style.textWrapMode = "nowrap";
    xpDetails.style.justifyContent = "space-around";
    skillHeader.appendChild(xpDetails);
    const xpDetailsLeft = document.createElement("div");
    xpDetailsLeft.style.display = "flex";
    xpDetailsLeft.style.flexDirection = "column";
    const skillXPGained = document.createElement("div");
    skillXPGained.id = `skillXPGained`;
    skillXPGained.style.fontSize = "12px";
    const skillXPGainedLabel = document.createElement("div");
    const skillXPGainedValue = document.createElement("div");
    skillXPGainedValue.id = `skillXPGainedValue`;
    skillXPGainedLabel.textContent = `XP Gained:`;
    skillXPGainedLabel.style.color = "#ccc";
    skillXPGained.appendChild(skillXPGainedLabel);
    skillXPGained.appendChild(skillXPGainedValue);
    const skillXPLeft = document.createElement("div");
    skillXPLeft.id = `skillXPLeft`;
    skillXPLeft.style.fontSize = "12px";
    const skillXPLeftLabel = document.createElement("div");
    const skillXPLeftValue = document.createElement("div");
    skillXPLeftValue.id = `skillXPLeftValue`;
    skillXPLeftLabel.textContent = `XP Left:`;
    skillXPLeftLabel.style.color = "#ccc";
    skillXPLeft.appendChild(skillXPLeftLabel);
    skillXPLeft.appendChild(skillXPLeftValue);
    xpDetailsLeft.appendChild(skillXPGained);
    xpDetailsLeft.appendChild(skillXPLeft);
    const xpDetailsRight = document.createElement("div");
    xpDetailsRight.style.display = "flex";
    xpDetailsRight.style.flexDirection = "column";
    const skillXPPerHour = document.createElement("div");
    skillXPPerHour.id = `skillXPPerHour`;
    skillXPPerHour.style.fontSize = "12px";
    const skillXPPerHourLabel = document.createElement("div");
    const skillXPPerHourValue = document.createElement("div");
    skillXPPerHourValue.id = `skillXPPerHourValue`;
    skillXPPerHourLabel.textContent = `XP/Action:`;
    skillXPPerHourLabel.style.color = "#ccc";
    skillXPPerHour.appendChild(skillXPPerHourLabel);
    skillXPPerHour.appendChild(skillXPPerHourValue);
    const skillActionsLeft = document.createElement("div");
    skillActionsLeft.id = `skillActionsLeft`;
    skillActionsLeft.style.fontSize = "12px";
    const skillActionsLeftLabel = document.createElement("div");
    const skillActionsLeftValue = document.createElement("div");
    skillActionsLeftLabel.id = `skillActionsLeftLabel`;
    skillActionsLeftValue.id = `skillActionsLeftValue`;
    skillActionsLeftLabel.textContent = `Actions Left:`;
    skillActionsLeftLabel.style.color = "#ccc";
    skillActionsLeft.appendChild(skillActionsLeftLabel);
    skillActionsLeft.appendChild(skillActionsLeftValue);
    xpDetailsRight.appendChild(skillXPPerHour);
    xpDetailsRight.appendChild(skillActionsLeft);
    xpDetails.appendChild(xpDetailsLeft);
    xpDetails.appendChild(xpDetailsRight);
    const xpProgressBar = document.createElement("div");
    xpProgressBar.style.width = "100%";
    xpProgressBar.style.height = "15px";
    xpProgressBar.style.backgroundColor = "#80808069";
    xpProgressBar.style.borderRadius = "5px";
    xpProgressBar.style.marginTop = "5px";
    xpProgressBar.style.overflow = "hidden";
    xpProgressBar.style.position = "relative";
    const xpProgress = document.createElement("div");
    const currentLevelXP = this.levelToXP[skill._level];
    const nextLevelXP = this.levelToXP[skill._level + 1];
    const xpPercentage = (skill._xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
    xpProgress.style.width = `${xpPercentage * 100}%`;
    xpProgress.id = `xpProgress`;
    xpProgress.style.height = "100%";
    xpProgress.style.backgroundColor = "rgb(82 209 82)";
    xpProgress.style.transition = "width 0.5s ease-in-out";
    xpProgress.style.position = "absolute";
    xpProgressBar.appendChild(xpProgress);
    const xpProgressDetails = document.createElement("div");
    xpProgressDetails.style.margin = "0 5px";
    xpProgressDetails.style.fontSize = "12px";
    xpProgressDetails.style.position = "absolute";
    xpProgressDetails.style.width = "-webkit-fill-available";
    xpProgressDetails.style.color = "black";
    const currentLevelSpan = document.createElement("span");
    currentLevelSpan.id = `currentLevelSpan`;
    currentLevelSpan.textContent = `Lvl. ${skill._level}`;
    const nextLevelSpan = document.createElement("span");
    nextLevelSpan.id = `nextLevelSpan`;
    nextLevelSpan.textContent = `Lvl. ${skill._level + 1}`;
    nextLevelSpan.style.position = "absolute";
    nextLevelSpan.style.right = "0";
    const xpProgressSpan = document.createElement("span");
    xpProgressSpan.id = `xpProgressSpan`;
    xpProgressSpan.textContent = `${(xpPercentage * 100).toFixed(1)}%`;
    xpProgressSpan.style.position = "absolute";
    xpProgressSpan.style.left = "50%";
    xpProgressSpan.style.transform = "translateX(-50%)";
    xpProgressDetails.appendChild(currentLevelSpan);
    xpProgressDetails.appendChild(xpProgressSpan);
    xpProgressDetails.appendChild(nextLevelSpan);
    xpProgressBar.appendChild(xpProgressDetails);
    skillTracker.appendChild(xpProgressBar);
    this.skillTrackers[skillName] = {
      trackerElement: skillTracker,
      trackedActions: 0,
      trackedXPGained: 0,
      trackerStartTime: Date.now(),
      previousXP: skill._xp,
      inXPPerHourMode: false,
      domElements: {
        skillXPGainedValue,
        skillXPLeftValue,
        skillXPPerHourValue,
        skillActionsLeftValue,
        skillActionsLeftLabel,
        xpProgress,
        currentLevelSpan,
        nextLevelSpan,
        xpProgressSpan
      }
    };
    skillTracker.addEventListener("mouseenter", () => {
      const actionsDiv = document.createElement("div");
      actionsDiv.id = "skillTrackerActions";
      actionsDiv.style.position = "absolute";
      actionsDiv.style.left = "50%";
      actionsDiv.style.transform = "translate(-25%, 10%)";
      actionsDiv.style.display = "flex";
      actionsDiv.style.flexDirection = "column";
      skillTracker.appendChild(actionsDiv);
      const resetButton = document.createElement("div");
      resetButton.textContent = "Reset";
      resetButton.id = "resetSkillTrackerButton";
      resetButton.style.backgroundColor = "rgb(65 65 65)";
      resetButton.style.padding = "5px 10px";
      resetButton.style.borderRadius = "5px";
      resetButton.style.cursor = "pointer";
      resetButton.addEventListener("click", () => {
        const currentSkillTracker = this.skillTrackers[skillName];
        currentSkillTracker.trackedXPGained = 0;
        currentSkillTracker.trackerStartTime = Date.now();
        currentSkillTracker.trackedActions = 0;
        skillTracker.style.display = "none";
      });
      actionsDiv.appendChild(resetButton);
      const xpPerHourButton = document.createElement("div");
      xpPerHourButton.textContent = "XP/Hour";
      if (this.skillTrackers[skillName].inXPPerHourMode) {
        xpPerHourButton.textContent = "Actions Left";
      }
      xpPerHourButton.id = "xpPerHourButton";
      xpPerHourButton.style.backgroundColor = "rgb(65 65 65)";
      xpPerHourButton.style.padding = "5px 10px";
      xpPerHourButton.style.borderRadius = "5px";
      xpPerHourButton.style.marginTop = "5px";
      xpPerHourButton.style.cursor = "pointer";
      xpPerHourButton.addEventListener("click", () => {
        const skillTracker2 = this.skillTrackers[skillName];
        if (skillTracker2 && !skillTracker2.inXPPerHourMode) {
          skillTracker2.inXPPerHourMode = true;
          xpPerHourButton.textContent = "Actions Left";
          if (skillTracker2.domElements) {
            skillTracker2.domElements.skillActionsLeftLabel.textContent = "XP/Hour:";
            const XPPerHour = this.calculateXPPerHour(skillTracker2);
            skillTracker2.domElements.skillActionsLeftValue.textContent = `${abbreviateValue(XPPerHour)}`;
          }
        } else if (skillTracker2 && skillTracker2.inXPPerHourMode) {
          skillTracker2.inXPPerHourMode = false;
          xpPerHourButton.textContent = "XP/Hour";
          if (skillTracker2.domElements) {
            skillTracker2.domElements.skillActionsLeftLabel.textContent = "Actions Left:";
            const avgXPPerAction = skillTracker2.trackedActions > 0 ? skillTracker2.trackedXPGained / skillTracker2.trackedActions : 0;
            const actionsLeft = avgXPPerAction > 0 ? Math.ceil(
              (this.levelToXP[skill._level + 1] - skill._xp) / avgXPPerAction
            ) : 0;
            skillTracker2.domElements.skillActionsLeftValue.textContent = `${abbreviateValue(actionsLeft)}`;
          }
        }
      });
      actionsDiv.appendChild(xpPerHourButton);
    });
    skillTracker.addEventListener("mouseleave", () => {
      const actionsDiv = skillTracker.querySelector(
        "#skillTrackerActions"
      );
      if (!actionsDiv) {
        return;
      }
      const resetButton = skillTracker.querySelector(
        "#resetSkillTrackerButton"
      );
      if (resetButton) {
        actionsDiv.removeChild(resetButton);
      }
      const xpPerHourButton = skillTracker.querySelector("#xpPerHourButton");
      if (xpPerHourButton) {
        actionsDiv.removeChild(xpPerHourButton);
      }
      skillTracker.removeChild(actionsDiv);
    });
    skillTracker.style.display = "none";
    this.panelContent?.appendChild(skillTracker);
  }
  updateSkillListing(skill) {
    if (!this.hasStarted) {
      return;
    }
    const skillName = this.gameLookups["Skills"][skill._skill];
    let skillTracker = this.skillTrackers[skillName];
    if (!skillTracker) {
      this.createSkillListing(skill);
      skillTracker = this.skillTrackers[skillName];
    }
    if (!skillTracker || skill._xp === skillTracker.previousXP) {
      return;
    }
    skillTracker.trackerElement.style.display = "flex";
    const xpGained = skill._xp - skillTracker.previousXP;
    skillTracker.trackedXPGained += xpGained;
    skillTracker.trackedActions += 1;
    skillTracker.previousXP = skill._xp;
    const domElements = skillTracker.domElements;
    if (!domElements) {
      console.warn("DOM elements not cached for skill:", skillName);
      return;
    }
    domElements.skillXPGainedValue.textContent = `${abbreviateValue(skillTracker.trackedXPGained)}`;
    domElements.skillXPLeftValue.textContent = `${abbreviateValue(this.levelToXP[skill._level + 1] - skill._xp)}`;
    const avgXPPerAction = skillTracker.trackedActions > 0 ? Math.floor(
      skillTracker.trackedXPGained / skillTracker.trackedActions
    ) : 0;
    domElements.skillXPPerHourValue.textContent = `${abbreviateValue(avgXPPerAction)}`;
    if (!skillTracker.inXPPerHourMode) {
      const actionsLeft = avgXPPerAction > 0 ? Math.ceil(
        (this.levelToXP[skill._level + 1] - skill._xp) / avgXPPerAction
      ) : 0;
      domElements.skillActionsLeftValue.textContent = `${abbreviateValue(actionsLeft)}`;
    } else {
      const XPPerHour = this.calculateXPPerHour(skillTracker);
      domElements.skillActionsLeftValue.textContent = `${abbreviateValue(XPPerHour)}`;
    }
    const currentLevelXP = this.levelToXP[skill._level];
    const nextLevelXP = this.levelToXP[skill._level + 1];
    const xpPercentage = (skill._xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
    domElements.xpProgress.style.width = `${xpPercentage * 100}%`;
    domElements.currentLevelSpan.textContent = `Lvl. ${skill._level}`;
    domElements.nextLevelSpan.textContent = `Lvl. ${skill._level + 1}`;
    domElements.xpProgressSpan.textContent = `${(xpPercentage * 100).toFixed(1)}%`;
  }
  GameLoop_update() {
    if (!this.settings.enable.value) {
      return;
    }
    const resourceSkills = this.gameHooks.EntityManager.Instance.MainPlayer.Skills._skills;
    resourceSkills.forEach((skill) => {
      this.updateSkillListing(skill);
    });
    const combatSkills = this.gameHooks.EntityManager.Instance.MainPlayer.Combat._skills;
    combatSkills.forEach((skill) => {
      this.updateSkillListing(skill);
    });
  }
  stop() {
    this.panelManager.removeMenuItem("\u{1F4CA}");
    this.panelContent = void 0;
    this.hasStarted = false;
    this.skillTrackers = {};
    this.log(`Stopped`);
  }
  init() {
    this.log(`Initialized`);
  }
  calculateXPPerHour(skillTracker) {
    const totalXPGained = skillTracker.trackedXPGained;
    const timePassedMillis = Date.now() - skillTracker.trackerStartTime;
    const timePassedSeconds = Math.max(20, timePassedMillis / 1e3);
    const timeMultiplier = 1 / (timePassedSeconds / 3600);
    return timeMultiplier * totalXPGained;
  }
};
export {
  ExperienceTracker as default
};
