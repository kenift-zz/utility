/**
 * @author Paulo Vernetti - https://github.com/PauloVernetti
 * @example
 * import { Maths } from "@kenift/utility";
 *
 * let numbers = [ 10, 50 ];
 *
 * let diff = Maths.getDifferenceBetweenNumbers(numbers[0], numbers[1]);
 *
 * console.log(diff); // 40
 *
 * @public
 * @function getDifferenceBetweenNumbers
 * @description Function to get difference between to numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export function getDifferenceBetweenNumbers(num1: number, num2: number): number {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
