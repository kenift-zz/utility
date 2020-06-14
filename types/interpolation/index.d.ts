/**
 *
 * @class Interpolation
 * @description Class Interpolation contains cubic, quad, quart, quint, sinusoidal, exponential, circular easing utility functions
 * @author Paulo Vernetti - https://github.com/PauloVernetti
 */
export declare const Interpolation: {
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInCubic({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInCubic
     * @description Interpolation function of cubic easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInCubic(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutCubic({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutCubic
     * @description Interpolation function of cubic easing with acceleration until halfway, then deceleration
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutCubic(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutCubic({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutCubic
     * @description Interpolation function of cubic easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutCubic(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.linear({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function linear
     * @description Interpolation function with no easing and no acceleration effect
     * @param {Kenift.Utility.InterpolationOptions} options
     */
    linear(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutQuad({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easyInOutQuad
     * @description Interpolation function of quad easing with acceleration until halfway, then deceleration
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutQuad(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInQuad({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInQuad
     * @description Interpolation function of quad easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInQuad(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutQuad({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutQuad
     * @description Interpolation function of quad easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutQuad(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInQuart({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInQuart
     * @description Interpolation function of quart easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInQuart(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutQuart({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutQuart
     * @description Interpolation function of quart easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutQuart(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutQuart({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutQuart
     * @description Interpolation function of quart easing with acceleration until halfway, then deceleration
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutQuart(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInQuint({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInQuint
     * @description Interpolation function of quint easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInQuint(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutQuint({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutQuint
     * @description Interpolation function of quint easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutQuint(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutQuint({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutQuint
     * @description Interpolation function of quint easing with acceleration until halfway, then deceleration
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutQuint(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInSine({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInSine
     * @description Interpolation function of sinusoidal easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInSine(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutSine({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutSine
     * @description Interpolation function of sinusoidal easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutSine(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutSine({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutSine
     * @description Interpolation function of sinusoidal easing with accelerating until halfway, then decelerating
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutSine(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInExpo({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInExpo
     * @description Interpolation function of exponential easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInExpo(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutExpo({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutExpo
     * @description Interpolation function of exponential easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutExpo(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutExpo({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutExpo
     * @description Interpolation function of exponential easing with accelerating until halfway, then decelerating
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutExpo(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInCirc({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInCirc
     * @description Interpolation function of circular easing with accelerating from zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInCirc(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeOutCirc({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeOutCirc
     * @description Interpolation function of circular easing with decelerating to zero velocity
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeOutCirc(options: Kenift.Utility.InterpolationOptions): number;
    /**
     * @author Paulo Vernetti - https://github.com/PauloVernetti
     * @example
     * import { interpolation } from "@kenift/utility";
     *
     * let current = 0;
     * let duration = 10000;
     * let start = 0;
     * let finish = 1000;
     *
     * let step = duration / 100;
     *
     * let interval = setInterval(() => {
     *    if (current <= duration) {
     *      let value = interpolation.easeInOutCirc({
     *        currentTime: current,
     *        startAt: start,
     *        finishAt: finish,
     *        durationTime: duration
     *      });
     *
     *      current += step;
     *    } else {
     *      clearInterval(interval);
     *    }
     * }, step);
     * @public
     * @function easeInOutCirc
     * @description Interpolation function of circular easing with acceleration until halfway, then deceleration
     * @param {Kenift.Utility.InterpolationOptions} options
     * @returns {number}
     */
    easeInOutCirc(options: Kenift.Utility.InterpolationOptions): number;
};
