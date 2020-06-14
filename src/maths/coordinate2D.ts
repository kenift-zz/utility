import {getDifferenceBetweenNumbers} from "./getDifferenceBetweenNumbers";
import verifyCoordinate2DOptions from "./verifyCoordinate2DOptions";

/**
 * @author Paulo Vernetti - https://github.com/PauloVernetti
 * @example
 * import { Trigonometry } from "@kenift/utility"
 *
 * let coordinate = new Trigonometry.Coordinate2D({
 *   x: 0,
 *   y: 0
 * });
 *
 * @public
 * @function getDifferenceBetweenNumbers
 * @description Function to get difference between to numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export class Coordinate2D {
  public x: number;
  public y: number;
  constructor(options: {
    x: number,
    y: number
  }) {
    verifyCoordinate2DOptions(options);

    this.x = options.x;
    this.y = options.y;
  }
  distanceTo(coordinate: Coordinate2D) {
    let diffX = getDifferenceBetweenNumbers(this.x, coordinate.x);
    let diffY = getDifferenceBetweenNumbers(this.y, coordinate.y);

    let diffXSqr = diffX * diffX;
    let diffYSqr = diffY * diffY;

    let distSqr = diffXSqr + diffYSqr;

    return Math.sqrt(distSqr);
  }
}
