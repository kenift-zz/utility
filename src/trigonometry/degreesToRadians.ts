/**
 * @author Paulo Vernetti - https://github.com/PauloVernetti
 * @example
 * import { Trigonometry } from "@kenift/utility";
 *
 * let radian = Trigonometry.degreesToRadians(70);
 *
 * console.log(radian); // 1.2217304763960306
 *
 * @public
 * @function degreesToRadians
 * @description Function to convert degrees to radians
 * @param {number} degrees
 * @returns {number}
 */
export function degreesToRadians(degrees: number) {
  let pp = Math.PI / 180;
  return degrees * pp;
}
