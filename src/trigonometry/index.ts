import {degreesToRadians} from './degreesToRadians';
import {getPointCoordsAtDegree} from './getPointCoordsAtDegree';

export const Trigonometry = new class Trigonometry {
  getPointCoordsAtDegree(options: Kenift.Utility.GetPointCoordsAtDegreeOptions): Kenift.Utility.GetPointCoordsAtDegreeResult {
    return getPointCoordsAtDegree(options);
  }
  degreesToRadians(degrees: number): number {
    return degreesToRadians(degrees);
  }
}
