import {Exception} from "@kenift/exception";

export default function verifyCoordinate3DOptions(options?: any): void {
  if (!options) Exception.error("Utility", "Coordinate3D needs options parameter");
  if (typeof options !== 'object') Exception.error("Utility", "Coordinate3D options should be a object");
  if (!options.x && options.x !== 0) Exception.error("Utility", "Coordinate3D options field x is required");
  if (typeof options.x !== 'number') Exception.error("Utility", "Coordinate3D options field x should be a number");
  if (!options.y && options.y !== 0) Exception.error("Utility", "Coordinate3D options field y is required");
  if (typeof options.y !== 'number') Exception.error("Utility", "Coordinate3D options field y should be a number");
  if (!options.z && options.z !== 0) Exception.error("Utility", "Coordinate3D options field z is required");
  if (typeof options.z !== 'number') Exception.error("Utility", "Coordinate3D options field z should be a number");
}
