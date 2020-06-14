import verifyCoordinate2DOptions from "../../src/maths/verifyCoordinate2DOptions";

describe("Trigonometry Coordinate2D options verification", () => {
  test("Test with no options", () => {
    expect(() => verifyCoordinate2DOptions()).toThrow("Coordinate2D needs options parameter");
  })

  test("Test options with string type", () => {
    expect(() => verifyCoordinate2DOptions("hello")).toThrow("Coordinate2D options should be a object");
  })

  test("Test options with no x field", () => {
    expect(() => verifyCoordinate2DOptions({})).toThrow("Coordinate2D options field x is required");
  })

  test("Test options x field with string type", () => {
    expect(() => verifyCoordinate2DOptions({ x: "i'm x" })).toThrow("Coordinate2D options field x should be a number");
  })

  test("Test options with no y field", () => {
    expect(() => verifyCoordinate2DOptions({ x: 100 })).toThrow("Coordinate2D options field y is required");
  })

  test("Test options y field with string type", () => {
    expect(() => verifyCoordinate2DOptions({ x: 100, y: "i'm y"})).toThrow("Coordinate2D options field y should be a number");
  })
})
