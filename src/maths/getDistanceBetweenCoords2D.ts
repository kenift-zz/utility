import {Exception} from "@kenift/exception";
import type {Coordinate2D} from "./coordinate2D";

export function getDistanceBetweenCoords2D(options: {
  coordinates: Array<Coordinate2D>,
  unitSize?: number
}): number {
  if (options.coordinates.length < 2) {
    throw Exception.error("Utility", "To get distance between coordinates you should specify at least 2 2D coordinates");
  }
  if (!options.unitSize || options.unitSize <= 0) {
    options.unitSize = 1;
  }

  let distance: number = 0;

  for (let index = 0; index < options.coordinates.length; index++) {
    let coordinate = options.coordinates[index];
    let previous_coordinate = options.coordinates[index - 1];

    if (previous_coordinate) {
      let dist = coordinate.distanceTo(previous_coordinate);
      distance += dist * options.unitSize;
    }
  }

  return distance;
}
