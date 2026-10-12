// src/FPSLimiter.ts
import { Plugin } from "@ryelite/core";
import { SettingsTypes } from "@ryelite/core";
var FPSLimiter = class extends Plugin {
  constructor() {
    super();
    this.pluginName = "FPS Limiter";
    this.author = "Highlite";
    this.rafPatched = false;
    this.lastFrameTime = 0;
    this.frameTimeThreshold = 0;
    this.settings.targetFPS = {
      text: "Target FPS",
      type: SettingsTypes.range,
      min: 1,
      max: 300,
      value: 60,
      callback: () => {
        if (this.settings.enable.value) {
          this.stop();
          this.start();
        }
      }
    };
  }
  init() {
    this.log("Initializing FPS Limiter");
  }
  start() {
    if (this.rafPatched) return;
    if (!this.settings.enable.value) return;
    const targetFPS = Number(this.settings.targetFPS.value);
    this.rafPatched = true;
    this.frameTimeThreshold = 1e3 / targetFPS;
    this.lastFrameTime = performance.now();
    this.originalRAF = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = (callback) => {
      return this.originalRAF((currentTime) => {
        const deltaTime = currentTime - this.lastFrameTime;
        if (deltaTime >= this.frameTimeThreshold) {
          this.lastFrameTime = currentTime;
          callback(currentTime);
        } else {
          const delay = Math.max(
            0,
            this.frameTimeThreshold - deltaTime
          );
          setTimeout(() => {
            const now = performance.now();
            this.lastFrameTime = now;
            callback(now);
          }, delay);
        }
      });
    };
    this.log(
      `[FPSLimiter] Frame rate limited to ${targetFPS} FPS (${this.frameTimeThreshold.toFixed(2)}ms per frame)`
    );
  }
  stop() {
    if (this.rafPatched && this.originalRAF) {
      window.requestAnimationFrame = this.originalRAF;
      this.rafPatched = false;
      this.lastFrameTime = 0;
      this.frameTimeThreshold = 0;
      this.log(
        "[FPSLimiter] Frame rate limiting disabled - restored to native refresh rate"
      );
    }
  }
};
export {
  FPSLimiter as default
};
