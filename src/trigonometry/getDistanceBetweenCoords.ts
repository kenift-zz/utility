import {Exception} from "@kenift/exception";
import {getDifferenceBetweenNumbers} from '../maths/getDifferenceBetweenNumbers'

export function getDistanceBetweenCoords2D(options: Kenift.Utility.getDistanceBetweenCoords2DOptions): number {
  if (options.coordinates.length < 2) {
    throw Exception.error("Utility", "To get distance between coordinates you should specify at least 2 2D coordinates");
  }
  if (!options.unitSize) {
    options.unitSize = 1;
  }

  let distance: number = 0;

  for (let index = 0; index < options.coordinates.length; index++) {
    let coordinate = options.coordinates[index];
    let previous_coordinate = options.coordinates[index - 1];

    if (previous_coordinate) {
      try {
        let diffX = getDifferenceBetweenNumbers(coordinate.x, previous_coordinate.x);
        let diffY = getDifferenceBetweenNumbers(coordinate.y, previous_coordinate.y);

        let diffXSqr = diffX * diffX;
        let diffYSqr = diffY * diffY;

        let distSqr = diffXSqr + diffYSqr;

        let dist = Math.sqrt(distSqr);

        distance += dist * options.unitSize;
      } catch (e) {
        throw e
      }
    }
  }

  return Math.floor(distance);
}
