// src/TtsChat.ts
import { Plugin, SettingsTypes } from "@ryelite/core";
var TtsChat = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "TTS Chat";
    this.author = "0rangeYouGlad";
    this.isInitialized = false;
    this.messageWatchersSetup = false;
    this.processedMessages = /* @__PURE__ */ new Set();
    this.synth = window.speechSynthesis;
    this.voices = this.synth.getVoices();
    this.observers = [];
    this.settings.infoBox = {
      type: SettingsTypes.info,
      value: "System Voices",
      text: "TTS Chat uses your system's available text-to-speech voices.\nIf you cannot hear anything, please check your settings. In Windows, this is under 'Speech'.\nChecking 'Recognise non-native accents' will allow you to use accents from other voice packs during Random Voices mode. You may need to restart Highlite and/or your computer for newly installed voice packs to take effect.",
      callback: () => {
      }
    };
    this.settings.sayPlayerNames = {
      text: "Prefix Player Names",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.randVoices = {
      text: "Use Random Voices",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.basePitch = {
      text: "Base Pitch",
      type: SettingsTypes.text,
      value: "1.0",
      callback: () => {
      }
    };
    this.settings.pitchVariance = {
      text: "Pitch Variance",
      type: SettingsTypes.text,
      value: "2.0",
      callback: () => {
      }
    };
    this.settings.baseRate = {
      text: "Base Rate",
      type: SettingsTypes.text,
      value: "1.5",
      callback: () => {
      }
    };
    this.settings.interruptableVoices = {
      text: "Interruptable Voices",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.globalChat = {
      text: "Global Chat",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.sayGameMessages = {
      text: "Status Messages",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.localChat = {
      text: "Local Chat",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.privateChat = {
      text: "Private Chat",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.volume = {
      text: "Volume",
      type: SettingsTypes.text,
      value: "1.0",
      callback: () => {
      }
    };
    this.settings.ignoreSelf = {
      text: "Ignore Own Messages",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.blacklist = {
      text: "Blacklist (word1,username1,etc)",
      type: SettingsTypes.textarea,
      value: "IgnoredWord,IgnoredUsername",
      callback: () => {
      }
    };
  }
  trackObserver(fn, target, opts) {
    const observer = new MutationObserver(fn);
    observer.observe(target, opts);
    this.observers.push(observer);
    return observer;
  }
  init() {
    this.log("Initialized TtsChat");
  }
  start() {
    this.log("Started TtsChat");
    if (this.settings.enable.value) {
      this.synth = window.speechSynthesis;
      this.voices = this.synth.getVoices();
      this.isInitialized = true;
      this.setupMessageWatching();
    }
  }
  stop() {
    this.log("Stopped TtsChat");
    this.cleanup();
    this.isInitialized = false;
  }
  cleanup() {
    this.log("Cleaning up TtsChat...");
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    if (this.messageCheckInterval) {
      window.clearInterval(this.messageCheckInterval);
      this.messageCheckInterval = null;
    }
    this.processedMessages.clear();
    this.isInitialized = false;
    this.messageWatchersSetup = false;
    this.synth.cancel();
    this.log("TtsChat cleanup complete");
  }
  setupMessageWatching() {
    if (this.messageWatchersSetup) return;
    this.messageWatchersSetup = true;
    this.scanAllMessages();
    const watchPairs = [
      ["#hs-public-message-list", "#hs-public-message-list__container"],
      ["#hs-private-message-list", "#hs-private-message-list"]
    ];
    watchPairs.forEach(([listSel, wrapSel]) => {
      const list = document.querySelector(listSel);
      const wrap = document.querySelector(wrapSel);
      if (list && wrap) {
        this.trackObserver(
          (records) => {
            records.forEach((record) => {
              if (record.addedNodes.length) {
                setTimeout(() => this.scanAllMessages(), 10);
              }
            });
          },
          list,
          { childList: true, subtree: true }
        );
      }
    });
    this.messageCheckInterval = window.setInterval(() => {
      this.scanAllMessages();
    }, 2e3);
  }
  scanAllMessages() {
    if (!this.settings.enable?.value || !this.isInitialized) return;
    const containers = [
      document.querySelector("#hs-public-message-list__container"),
      document.querySelector("#hs-private-message-list")
    ];
    containers.forEach((container) => {
      if (container) {
        this.processNewMessages(container);
      }
    });
  }
  getPitchForPlayerNameHash(playerName) {
    if (!playerName) {
      return 0;
    }
    return Number(this.settings.pitchVariance.value) * (Number(playerName.charCodeAt(0)) % 25) / 25;
  }
  getVoiceForPlayerNameHash(playerName) {
    if (!playerName) {
      return this.voices[0];
    }
    return this.voices[playerName.length % this.voices.length];
  }
  speak(textToSpeak, playerName) {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);
    utterThis.voice = this.voices[0];
    if (this.settings.randVoices.value) {
      utterThis.voice = this.getVoiceForPlayerNameHash(playerName);
    }
    utterThis.pitch = Number(this.settings.basePitch.value) + this.getPitchForPlayerNameHash(playerName);
    utterThis.rate = Number(this.settings.baseRate.value);
    utterThis.volume = Number(this.settings.volume.value);
    if (this.settings.interruptableVoices.value) {
      this.synth.cancel();
    }
    this.synth.speak(utterThis);
    utterThis.onpause = (event) => {
      const char = event.utterance.text.charAt(event.charIndex);
      this.log(
        `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`
      );
    };
  }
  processNewMessages(container) {
    if (!container) return;
    if (!this.settings.enable?.value || !this.isInitialized) return;
    const messages = container.querySelectorAll(
      ".hs-chat-message-container"
    );
    messages.forEach(
      (msg) => {
        const msgEl = msg;
        if (this.processedMessages.has(msgEl)) return;
        this.processedMessages.add(msgEl);
        let playerNameContainer = msgEl.querySelector(
          ".hs-chat-menu__player-name"
        );
        if (!playerNameContainer) {
          playerNameContainer = msgEl.querySelector(".hs-chat-menu__pre-text");
          if (playerNameContainer?.textContent === "From") {
            playerNameContainer = msgEl.querySelectorAll(".hs-chat-menu__pre-text")[1];
          }
        }
        const playerName = `${playerNameContainer?.textContent}`.replace("From ", "").replace(":", "").trim();
        const mainPlayerName = document.querySelector("#hs-chat-input-player-name-and-input-container")?.textContent?.split(":")[0].trim();
        let textContent = msgEl.querySelector(".hs-chat-menu__message-text-container")?.textContent?.replace("[-]", "");
        let isFromMainPlayer = playerName === mainPlayerName || playerName === "To";
        if (!msgEl.dataset.ttsInjected) {
          msgEl.dataset.ttsInjected = "true";
          if (this.settings.ignoreSelf.value && isFromMainPlayer) {
          } else if (!this.settings.globalChat.value && msgEl.querySelector(".hs-text--orange")) {
          } else if (!this.settings.privateChat.value && msgEl.querySelector(".hs-text--cyan")) {
          } else if (!this.settings.localChat.value && msgEl.querySelector(".hs-text--yellow")) {
          } else if (this.settings.blacklist.value.split(",").some((bannedWord) => bannedWord.trim() && msg.textContent?.toLowerCase().includes(bannedWord.toLowerCase().trim()))) {
          } else if (playerName && playerNameContainer?.textContent) {
            if (this.settings.sayPlayerNames.value) {
              this.speak(`${playerName} says ${textContent}`, playerName);
            } else {
              this.speak(`${textContent}`, playerName);
            }
          } else if (this.settings.sayGameMessages.value) {
            this.speak(`${textContent}`, playerName);
          }
        }
      }
    );
  }
};
export {
  TtsChat as default
};
