export default function verifyCoordinate2DOptions(options?: any): void {
  if (!options) throw new Error("Coordinate2D needs options parameter");
  if (typeof options !== 'object') throw new Error("Coordinate2D options should be a object");
  if (!options.x && options.x !== 0) throw new Error("Coordinate2D options field x is required");
  if (typeof options.x !== 'number') throw new Error("Coordinate2D options field x should be a number");
  if (!options.y && options.y !== 0) throw new Error("Coordinate2D options field y is required");
  if (typeof options.y !== 'number') throw new Error("Coordinate2D options field y should be a number");
}
