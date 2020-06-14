import {degreesToRadians} from './degreesToRadians';
import {getPointCoordsAtDegree} from './getPointCoordsAtDegree';
import {getDistanceBetweenCoords2D} from "./getDistanceBetweenCoords2D";

export const Trigonometry = new class Trigonometry {
  getPointCoordsAtDegree(options: Kenift.Utility.GetPointCoordsAtDegreeOptions): Kenift.Utility.GetPointCoordsAtDegreeResult {
    return getPointCoordsAtDegree(options);
  }
  degreesToRadians(degrees: number): number {
    return degreesToRadians(degrees);
  }
  getDistanceBetweenCoords2D(options: Kenift.Utility.getDistanceBetweenCoords2DOptions): number {
    return getDistanceBetweenCoords2D(options);
  }
}
