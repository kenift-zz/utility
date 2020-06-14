import {degreesToRadians} from './degreesToRadians';
import {getPointCoordsAtDegree} from './getPointCoordsAtDegree';
import {getDistanceBetweenCoords2D} from "./getDistanceBetweenCoords2D";
import {getDistanceBetweenCoords3D} from "./getDistanceBetweenCoords3D";
import {getDifferenceBetweenNumbers} from "./getDifferenceBetweenNumbers";
import {Coordinate2D} from "./coordinate2D";
import {Coordinate3D} from "./coordinate3D";

export const Maths = new class Maths {
  public Coordinate2D: typeof Coordinate2D;
  public Coordinate3D: typeof Coordinate3D;
  constructor() {
    this.Coordinate2D = Coordinate2D;
    this.Coordinate3D = Coordinate3D;
  }
  getPointCoordsAtDegree(options: {center: {x: number, y: number, z: number}, radius: number, degree: number}): {x: number, y: number, z: number} {
    return getPointCoordsAtDegree(options);
  }
  degreesToRadians(degrees: number): number {
    return degreesToRadians(degrees);
  }
  getDistanceBetweenCoords2D(options:  {coordinates: Coordinate2D[], unitSize?: number}): number {
    return getDistanceBetweenCoords2D(options);
  }
  getDistanceBetweenCoords3D(options: {coordinates: Coordinate3D[], unitSize?: number | undefined}): number {
    return getDistanceBetweenCoords3D(options);
  }
  getDifferenceBetweenNumbers(num1: number, num2: number): number {
    return getDifferenceBetweenNumbers(num1, num2);
  }
}
