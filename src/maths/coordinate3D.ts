import verifyCoordinate3DOptions from "./verifyCoordinate3DOptions";
import {getDifferenceBetweenNumbers} from "./getDifferenceBetweenNumbers";

export class Coordinate3D {
  public x: number;
  public y: number;
  public z: number;
  constructor(options: {
    x: number,
    y: number,
    z: number
  }) {
    verifyCoordinate3DOptions(options);

    this.x = options.x;
    this.y = options.y;
    this.z = options.z;
  }
  distanceTo(coordinate: Coordinate3D) {
    let diffX = getDifferenceBetweenNumbers(this.x, coordinate.x);
    let diffY = getDifferenceBetweenNumbers(this.y, coordinate.y);
    let diffZ = getDifferenceBetweenNumbers(this.z, coordinate.z);

    let diffXSqr = diffX * diffX;
    let diffYSqr = diffY * diffY;
    let diffZSqr = diffZ * diffZ;

    let distSqr = diffXSqr + diffYSqr + diffZSqr;

    return Math.sqrt(distSqr);
  }
}
