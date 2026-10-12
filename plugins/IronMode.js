// src/IronMode.ts
import { Plugin, SettingsTypes } from "@highlite/core";
import { PanelManager } from "@highlite/core";

// resources/css/ironmode.css
var ironmode_default = "@scope{.iron-mode-helm-icon{width:16px!important;height:16px!important;margin-right:4px!important;vertical-align:middle!important;display:inline-block!important;image-rendering:pixelated!important;image-rendering:-moz-crisp-edges!important;image-rendering:crisp-edges!important}.hs-chat-message-container[data-iron-mode-processed=true] .hs-chat-menu__pre-text{display:inline-flex!important;align-items:center!important}}\n";

// resources/images/IMHelm.png
var IMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAA/wAAzAAAU1NTeHh4qgAAODg4HR0dCgoKQg9Q5gAAAAl0Uk5TAP//////////NwKb1AAAAPpJREFUeJyN0UGKwjAUBuA/RhDEsdYLqHOBaYm4cKPgBXoAwUXv4DncuphjuBRmXSYQmP2oB6hWt7VqmqaJXQgG8hI+Ql7yHkExXJyKDSmWmgNnX4HeuV2FPm4V+JTz/wloT4a2MFCf7GTstn5KGDpdDrZzthqo3xnEf/7xHgsLCYgFRjoq7T3hBlSu1xAK/UMaFbDcBsAGSIfrtyHuK7j5GhpzDeNVCSKQkFIDC45gk4I1S/jyMgHqZR8awJh6F+dlPWYJ9ZAJ8msqNs2b4l5NxRAeTnAvkS1yKGTnqAUa5texSFhQ5yxg5MmQfT81ism03DZKSv4OtXsAZY9gIQuyhgUAAAAASUVORK5CYII=";

// resources/images/HCIMHelm.png
var HCIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAA/wAAzAAAXHGnfpK8qgAAQFV9NUhrIyMjSe44YAAAAAl0Uk5TAP//////////NwKb1AAAAPpJREFUeJyN0UGKwjAUBuA/RhDEsdYLqHOBaYm4cKPgBXoAwUXv4DncuphjuBRmXSYQmP2oB6hWt7VqmqaJXQgG8hI+Ql7yHkExXJyKDSmWmgNnX4HeuV2FPm4V+JTz/wloT4a2MFCf7GTstn5KGDpdDrZzthqo3xnEf/7xHgsLCYgFRjoq7T3hBlSu1xAK/UMaFbDcBsAGSIfrtyHuK7j5GhpzDeNVCSKQkFIDC45gk4I1S/jyMgHqZR8awJh6F+dlPWYJ9ZAJ8msqNs2b4l5NxRAeTnAvkS1yKGTnqAUa5texSFhQ5yxg5MmQfT81ism03DZKSv4OtXsAZY9gIQuyhgUAAAAASUVORK5CYII=";

// resources/images/UIMHelm.png
var UIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAA/wAAzAAAdXV13t7excXFqgAApaWlZ2dnIyMjDEul5gAAAAp0Uk5TAP///////////36JFFYAAAECSURBVHicY2SAAEGG9xAGI4Ri4mfgf4AiIP+RD1VAgeEfioASEN9DEmCWBxJ8F+ACLPb3gaQQzwGYQMh75T0MLucEd0MFWP0/GL054niXkXsDQuADAyNCIPT/B2YDhr8XGAVWwwUgNuIUKH0A9SHTSohA+zkHBoYjDAx/lDuIFninABb4pwgV4MiFCmg2wAQeOAAF/jDBBfLvMTgc+cOgxAkT8FcABheTwj9uqABDqBLYXfdWw8LDVQAcpv/XwEPMQRBIvv8DDzGG0vPAiBJeiQjk0gfvGQSZEAKsRaAoULq5ASEAVocQYAgHup3hTy/CDNYgoLW3NyBFJWsAw28wnwEA1F5eIUEW0M4AAAAASUVORK5CYII=";

// resources/images/HCUIMHelm.png
var HCUIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAA/wAAzAAAAIyFALKpqgAAAHdxAGNeIyMjlXG2jQAAAAl0Uk5TAP//////////NwKb1AAAAPpJREFUeJyN0UGKwjAUBuA/RhDEsdYLqHOBaYm4cKPgBXoAwUXv4DncuphjuBRmXSYQmP2oB6hWt7VqmqaJXQgG8hI+Ql7yHkExXJyKDSmWmgNnX4HeuV2FPm4V+JTz/wloT4a2MFCf7GTstn5KGDpdDrZzthqo3xnEf/7xHgsLCYgFRjoq7T3hBlSu1xAK/UMaFbDcBsAGSIfrtyHuK7j5GhpzDeNVCSKQkFIDC45gk4I1S/jyMgHqZR8awJh6F+dlPWYJ9ZAJ8msqNs2b4l5NxRAeTnAvkS1yKGTnqAUa5texSFhQ5yxg5MmQfT81ism03DZKSv4OtXsAZY9gIQuyhgUAAAAASUVORK5CYII=";

// resources/images/GIMHelm.png
var GIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAAODg4U1NTeHh4HR0dCAgIeHn1tAAAAAZ0Uk5TAP//////enng/gAAAMdJREFUeJyN0c0NwiAYBuAXU45GcALj3RlqYu966ZQaXaCmEzR2AuMAKvReRH4bYmxSEg48fLz8Efw0MhW46SIBDsKAz2MUCOPOrTjgdt62ewqECbylA5/AMcBaeNNSCAvZnOuOuSURMFtpacO6VwCfYva9/QWaN37Ihc+gORpkW1TL2eacAq47FUG1Vvqsv4yBWYPCxOqTg4MIJaifEUJJBHNuU5KAfV/VDoAS9mpNcSwD+BRVgy4CgO5NSQUwOQZuz2riZ38BYuldIZlUsHQAAAAASUVORK5CYII=";

// resources/images/HCGIMHelm.png
var HCGIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAAQFV9XHGnfpK8NUhrKDhVYTslkAAAAAZ0Uk5TAP//////enng/gAAANBJREFUeJyV0TEKwjAUBuA/Ukdtc4OKF/AAQjt0FNTBW4pOboqCc7GDs3gAJdG5NeYlaSwKog869Ot7f+gLw1uxX4HrRzSAg0XAyQM3HVYIWETfdT3OX4GFUglpwEZy5aEnbaxQUhAE3UjdIjPioINWrKRuVferA5uijzkQtIeFeWWhsCOfkCBHkGIT96tFE8rjwENVIAN2abl0oFtIoOYGxpJaaGh/qcG21DDRyzMpHmid+RfADPRrebIaOdBCKVtMa7AHrWkl/uYygr/u9lVP1b9lITloirsAAAAASUVORK5CYII=";

// resources/images/UGIMHelm.png
var UGIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFAAAApaWlxcXF3t7eZ2dngoKCISEhVlZWIvDcBAAAAAh0Uk5TAP/////////VylQyAAAAyklEQVR4nI3RMQrCMBQG4P+pddMmN9B7OCi4igr2Ct5JBHFXKO4degNvIO6iTecWY/OSliItNCTLx3svPwnhb1FXkMVJaiB5f58lkJDsRhqBBAk76lEH8hU+ikHCgNQVTJU1rZLEwGAsdCq4xcEIvYmNlb7bwCYtgtwZVjHnIJG4GVtEQICr7M9Odchuu7yEPIa3QebRwYEtAfSxGRbC9SB8leBKHMyJpQYmZh5XgCW/R7Q+7x0UNaYkxNBvA3vRBRCq+sqAodNn/wAoV1IhMJNacgAAAABJRU5ErkJggg==";

// resources/images/HCUGIMHelm.png
var HCUGIMHelm_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAAAHdxAIyFALKpAGNeAE9LUHM5ggAAAAZ0Uk5TAP//////enng/gAAAMZJREFUeJyN0cENgjAYBeBXAkel3UAHcAMTTOSuF7Y06gAa4gBGJiAOoLbcwUr/FtIYSGjay5fX9iU/w99iU0G0R3ogaH+fHTAuyI0MAuOM26dKH1is8FEEAgaE7mGprGklpYFwznXF6YqDGYKFrVW9x8A2bYs8DETrgnowLu0bUYI7kOIqgtXRh/q2bTpoCoQb1GF9cmAjgD4Mw065O8hfHbiIg70m8cD0booekIEiyTlz0GZMJEcUj4H96AJw1Y8yJZg07B/SCl0ht281gAAAAABJRU5ErkJggg==";

// src/IronMode.ts
var IronMode = class extends Plugin {
  constructor() {
    super();
    this.panelManager = new PanelManager();
    this.pluginName = "Iron Mode";
    this.author = "Zora";
    this.chatObserver = null;
    this.contextMenuObserver = null;
    this.playerStatusCache = /* @__PURE__ */ new Map();
    // Cache for username -> {status, timestamp}
    this.updateInterval = null;
    this.CACHE_TTL = 10 * 60 * 1e3;
    // 10 minutes in milliseconds
    this.updateButtonCooldownTimeout = null;
    this.settings.disclaimerMessage = {
      text: "Disclaimer!",
      type: SettingsTypes.info,
      value: "This plugin relies on player trust! It's entirely possible to get around restrictions even when using this plugin.",
      disabled: false,
      hidden: false,
      callback: () => {
      }
    };
    this.settings.isIron = {
      text: "I am an Iron",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
        this.handleViewIronSettings(this.settings.isIron.value);
        if (!this.settings.isIron.value && this.settings.shareHelmStatus.value) {
          this.clearPlayerStatusData();
        }
      },
      onLoaded: () => {
        this.handleViewIronSettings(this.settings.isIron.value);
      }
    };
    this.settings.alertMessage = {
      text: "Notice!",
      type: SettingsTypes.warning,
      value: 'If you enable "Share Helm Status", your username and iron settings are stored in a remote database for chat functionality.',
      disabled: false,
      hidden: true,
      // Initially hidden until isIron is true
      callback: () => {
      }
    };
    this.settings.shareHelmStatus = {
      text: "Share Helm Status",
      type: SettingsTypes.checkbox,
      value: false,
      hidden: true,
      // Initially hidden until isIron is true
      callback: () => {
        if (this.settings.shareHelmStatus.value) {
          this.startPeriodicUpdates();
        } else {
          this.clearPlayerStatusData();
          this.stopPeriodicUpdates();
        }
      },
      onLoaded: () => {
        if (this.settings.shareHelmStatus.value) {
          this.startPeriodicUpdates();
        }
      }
    };
    this.settings.isUltimate = {
      text: "I am Ultimate",
      type: SettingsTypes.checkbox,
      value: false,
      hidden: true,
      // Initially hidden until isIron is true
      callback: () => {
      }
    };
    this.settings.isHardcore = {
      text: "I am Hardcore",
      type: SettingsTypes.checkbox,
      value: false,
      hidden: true,
      // Initially hidden until isIron is true
      disabled: false,
      // Will be set dynamically based on if death is stored
      callback: () => {
      }
    };
    this.settings.groupNames = {
      text: "Group Mates",
      type: SettingsTypes.textarea,
      value: "",
      hidden: true,
      // Initially hidden until isIron is true
      callback: () => {
      }
    };
    this.settings.updateButton = {
      text: "Update Status",
      type: SettingsTypes.button,
      value: "Update",
      hidden: true,
      // Initially hidden until isIron is true
      callback: () => {
        this.log("Manual update triggered");
        if (this.settings.shareHelmStatus.value) {
          this.updatePlayerStatusData();
        }
        this.playerStatusCache.clear();
        this.settings.updateButton.disabled = true;
        this.updateButtonCooldownTimeout = setTimeout(() => {
          this.settings.updateButton.disabled = false;
          this.updateButtonCooldownTimeout = null;
        }, 60 * 1e3);
      }
    };
    this.settings.uuid = {
      text: "UUID",
      // Hidden setting
      type: SettingsTypes.text,
      value: "",
      callback: () => {
      },
      hidden: true,
      // Always hidden from UI
      onLoaded: () => {
        this.ensureUUID();
      }
    };
    this.settings.hasDied = {
      text: "Hardcore Death Status",
      // Hidden setting
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      },
      hidden: true
      // Always hidden from UI
    };
  }
  handleViewIronSettings(isIron) {
    if (isIron) {
      this.settings.alertMessage.hidden = false;
      this.settings.shareHelmStatus.hidden = false;
      this.settings.isUltimate.hidden = false;
      this.settings.isHardcore.hidden = false;
      this.settings.groupNames.hidden = false;
      this.settings.updateButton.hidden = false;
    } else {
      this.settings.alertMessage.hidden = true;
      this.settings.shareHelmStatus.hidden = true;
      this.settings.isUltimate.hidden = true;
      this.settings.isHardcore.hidden = true;
      this.settings.groupNames.hidden = true;
      this.settings.updateButton.hidden = true;
    }
  }
  // Generate a simple UUID v4
  generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  // Ensure the user has a UUID, generate one if they don't
  ensureUUID() {
    if (!this.settings.uuid.value || this.settings.uuid.value === "") {
      const newUUID = this.generateUUID();
      this.settings.uuid.value = newUUID;
    }
  }
  init() {
  }
  start() {
    this.log("IronMode started");
    this.injectStyles();
    this.initializeChatObserver();
    this.initializeContextMenuObserver();
    if (this.settings.shareHelmStatus.value) {
      this.startPeriodicUpdates();
    }
  }
  stop() {
    this.log("IronMode stopped");
    this.disconnectChatObserver();
    this.disconnectContextMenuObserver();
    this.removeStyles();
    this.stopPeriodicUpdates();
    if (this.updateButtonCooldownTimeout) {
      clearTimeout(this.updateButtonCooldownTimeout);
      this.updateButtonCooldownTimeout = null;
      this.settings.updateButton.disabled = false;
      this.settings.updateButton.value = "Update";
    }
  }
  // Start periodic updates for player status data
  startPeriodicUpdates() {
    this.updatePlayerStatusData();
    if (!this.updateInterval) {
      this.updateInterval = setInterval(() => {
        if (this.settings.shareHelmStatus.value) {
          this.updatePlayerStatusData();
        }
      }, 5 * 60 * 1e3);
    }
  }
  // Stop periodic updates
  stopPeriodicUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }
  // Remove injected styles
  removeStyles() {
    const existingStyles = document.querySelectorAll("style[data-iron-mode-plugin]");
    existingStyles.forEach((style) => style.remove());
  }
  // Inject CSS styles for helm icons
  injectStyles() {
    this.removeStyles();
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-iron-mode-plugin", "true");
    styleElement.textContent = ironmode_default;
    document.head.appendChild(styleElement);
  }
  // Initialize the chat message observer
  initializeChatObserver() {
    const chatContainer = document.querySelector("#hs-public-message-list");
    if (!chatContainer) {
      this.log("Chat container (#hs-public-message-list) not found, retrying in 2 seconds...");
      setTimeout(() => this.initializeChatObserver(), 2e3);
      return;
    }
    this.log("Chat container found, setting up observer");
    this.chatObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node;
            if (element.classList.contains("hs-chat-message-container")) {
              this.processChatMessage(element);
            }
            const chatMessages = element.querySelectorAll(".hs-chat-message-container");
            chatMessages.forEach((msg) => this.processChatMessage(msg));
          }
        });
      });
    });
    this.chatObserver.observe(chatContainer, {
      childList: true,
      subtree: true
    });
    const existingMessages = chatContainer.querySelectorAll(".hs-chat-message-container");
    this.log(`Found ${existingMessages.length} existing chat messages to process`);
    existingMessages.forEach((msg) => this.processChatMessage(msg));
  }
  // Disconnect the chat observer
  disconnectChatObserver() {
    if (this.chatObserver) {
      this.chatObserver.disconnect();
      this.chatObserver = null;
    }
  }
  // Initialize the context menu observer
  initializeContextMenuObserver() {
    const screenMask = document.querySelector("#hs-screen-mask");
    if (!screenMask) {
      this.log("Screen mask (#hs-screen-mask) not found, retrying in 2 seconds...");
      setTimeout(() => this.initializeContextMenuObserver(), 2e3);
      return;
    }
    this.log("Screen mask found, setting up context menu observer");
    this.contextMenuObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (this.settings.isIron.value) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node;
              if (element.id === "hs-context-menu-wrapper") {
                this.settings.isIron ?? this.log(`Removing "Trade With" options from non-group members in context menu`);
                this.processContextMenu(element);
              }
              const contextMenus = element.querySelectorAll("#hs-context-menu-wrapper");
              contextMenus.forEach((menu) => this.processContextMenu(menu));
            }
          });
        }
      });
    });
    this.contextMenuObserver.observe(screenMask, {
      childList: true,
      subtree: true
    });
  }
  // Disconnect the context menu observer
  disconnectContextMenuObserver() {
    if (this.contextMenuObserver) {
      this.contextMenuObserver.disconnect();
      this.contextMenuObserver = null;
    }
  }
  // Process context menu and remove trade options for iron players
  processContextMenu(contextMenuElement) {
    try {
      const menuItems = contextMenuElement.querySelectorAll(".hs-context-menu__item");
      menuItems.forEach((item) => {
        const actionNameSpan = item.querySelector(".hs-context-menu__item__action-name");
        if (actionNameSpan && actionNameSpan.textContent?.trim() === "Trade With") {
          const usernameSpan = item.querySelector(".hs-context-menu__item__entity-name");
          const username = usernameSpan?.textContent?.trim() || "Unknown";
          if (this.settings.groupNames.value && this.settings.groupNames.value.toString().toLowerCase().includes(username.toLowerCase())) {
            this.log(`Trade option for ${username} is a group member, keeping.`);
            return;
          }
          this.log(`Hiding "Trade With" option for ${username} from context menu`);
          item.style.display = "none";
          item.style.pointerEvents = "none";
          item.setAttribute("data-iron-mode-hidden", "true");
        }
      });
    } catch (error) {
      this.log(`Error processing context menu: ${error}`);
    }
  }
  // Process a new chat message and inject helm icon if needed
  processChatMessage(messageElement) {
    try {
      if (messageElement.hasAttribute("data-iron-mode-processed")) {
        return;
      }
      messageElement.setAttribute("data-iron-mode-processed", "true");
      const tradeMessageSpan = messageElement.querySelector(".hs-text--magenta");
      if (tradeMessageSpan && this.settings.isIron.value) {
        const messageText = tradeMessageSpan.textContent?.trim();
        if (messageText && messageText.includes("wants to trade with you")) {
          const username = messageText.replace(" wants to trade with you", "").trim();
          this.handleTradeMessage(messageElement, username);
          return;
        }
      }
      const usernameSpan = messageElement.querySelector(".hs-chat-menu__pre-text");
      if (!usernameSpan) {
        return;
      }
      const usernameText = usernameSpan.textContent?.replace(":", "").trim();
      if (!usernameText) {
        return;
      }
      this.getIronStatusForUser(usernameText).then((ironStatus) => {
        if (ironStatus) {
          this.log(`Adding ${ironStatus} helmet icon to ${usernameText}'s message.`);
          this.injectHelmIcon(usernameSpan, ironStatus);
        }
      });
    } catch (error) {
      this.log(`Error processing chat message: ${error}`);
    }
  }
  // Handle trade messages for iron players
  handleTradeMessage(messageElement, username) {
    try {
      if (this.settings.groupNames.value && this.settings.groupNames.value.toString().toLowerCase().includes(username.toLowerCase())) {
        this.log(`Trade request from ${username} is a group member, allowing.`);
        return;
      }
      this.log(`Trade request intercepted from ${username}, blocking for iron player`);
      const chatContainer = document.querySelector("#hs-public-message-list");
      if (!chatContainer) {
        this.log("Chat container not found when trying to inject blocked trade message");
        return;
      }
      messageElement.remove();
      const newMessageElement = document.createElement("li");
      const messageContainer = document.createElement("div");
      messageContainer.className = "hs-chat-message-container";
      const messageSpan = document.createElement("span");
      messageSpan.className = "hs-text--red hs-chat-menu__message-text-container";
      messageSpan.textContent = `${username} attempted to trade you, but you stand alone.`;
      messageContainer.appendChild(messageSpan);
      newMessageElement.appendChild(messageContainer);
      chatContainer.appendChild(newMessageElement);
    } catch (error) {
      this.log(`Error handling trade message: ${error}`);
    }
  }
  // Get iron status for a user from stored player data
  async getIronStatusForUser(username) {
    const normalizedUsername = username.toLowerCase();
    const now = Date.now();
    const cachedEntry = this.playerStatusCache.get(normalizedUsername);
    if (cachedEntry) {
      if (now - cachedEntry.timestamp < this.CACHE_TTL) {
        return cachedEntry.status;
      } else {
        this.playerStatusCache.delete(normalizedUsername);
      }
    }
    try {
      const url = `https://highl1te-hardcore-api.bgscrew.com/IronStatus?username=${encodeURIComponent(normalizedUsername)}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.text();
      const status = data || null;
      if (status) {
        this.playerStatusCache.set(normalizedUsername, { status, timestamp: now });
      }
      return status;
    } catch (error) {
      return null;
    }
  }
  async updatePlayerStatusData() {
    this.log(`Updating iron status for user ${String(this.settings.uuid.value).split("-")[0]}, sending player settings to database...`);
    try {
      const normalizedUsername = this.gameHooks.EntityManager.Instance.MainPlayer._name.toLowerCase();
      const playerSettings = {
        username: normalizedUsername,
        uuid: this.settings.uuid.value,
        isIron: this.settings.isIron.value,
        isHardcore: this.settings.isHardcore.value,
        isUltimate: this.settings.isUltimate.value,
        groupMates: this.settings.groupNames.value ? [this.settings.groupNames.value] : []
      };
      const playerSettingsJson = JSON.stringify(playerSettings);
      await fetch("http://highl1te-hardcore-api.bgscrew.com/IronStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: playerSettingsJson
      });
    } catch (error) {
      this.log(`Error updating player status data: ${error}`);
    }
  }
  async clearPlayerStatusData() {
    this.log(`Clearing player status data from database for user ${String(this.settings.uuid.value).split("-")[0]}...`);
    try {
      const normalizedUsername = this.gameHooks.EntityManager.Instance.MainPlayer._name.toLowerCase();
      const playerSettings = {
        username: normalizedUsername,
        uuid: this.settings.uuid.value,
        isIron: false,
        isHardcore: false,
        isUltimate: false,
        groupMates: []
      };
      const playerSettingsJson = JSON.stringify(playerSettings);
      await fetch("http://highl1te-hardcore-api.bgscrew.com/IronStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: playerSettingsJson
      });
      this.playerStatusCache.clear();
    } catch (error) {
      this.log(`Error clearing player status data: ${error}`);
    }
  }
  // Inject the appropriate helm icon before the username
  injectHelmIcon(usernameSpan, ironStatus) {
    if (usernameSpan.querySelector(".iron-mode-helm-icon")) {
      return;
    }
    const helmIcon = document.createElement("img");
    helmIcon.className = "iron-mode-helm-icon";
    helmIcon.style.width = "16px";
    helmIcon.style.height = "16px";
    helmIcon.style.verticalAlign = "middle";
    helmIcon.style.display = "inline-block";
    const iconInfo = this.getHelmIconInfo(ironStatus);
    helmIcon.src = iconInfo.src;
    helmIcon.alt = `${ironStatus} helm`;
    helmIcon.title = `${iconInfo.description}`;
    usernameSpan.insertBefore(helmIcon, usernameSpan.firstChild);
  }
  // Get helm icon information based on iron status
  getHelmIconInfo(ironStatus) {
    switch (ironStatus) {
      case "IM":
        return {
          src: IMHelm_default,
          description: "Ironman"
        };
      case "HCIM":
        return {
          src: HCIMHelm_default,
          description: "Hardcore Ironman"
        };
      case "UIM":
        return {
          src: UIMHelm_default,
          description: "Ultimate Ironman"
        };
      case "HCUIM":
        return {
          src: HCUIMHelm_default,
          description: "Hardcore Ultimate Ironman"
        };
      case "GIM":
        return {
          src: GIMHelm_default,
          description: "Group Ironman"
        };
      case "HCGIM":
        return {
          src: HCGIMHelm_default,
          description: "Hardcore Group Ironman"
        };
      case "UGIM":
        return {
          src: UGIMHelm_default,
          description: "Ultimate Group Ironman"
        };
      case "HCUGIM":
        return {
          src: HCUGIMHelm_default,
          description: "Hardcore Ultimate Group Ironman"
        };
      default:
        return {
          src: IMHelm_default,
          // Default to regular iron helm
          description: "Unknown Iron Status"
        };
    }
  }
};
export {
  IronMode as default
};
