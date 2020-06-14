import verifyCoordinate3DOptions from "../../src/maths/verifyCoordinate3DOptions";

describe("Trigonometry Coordinate3D options verification", () => {
  test("Test with no options", () => {
    expect(() => verifyCoordinate3DOptions()).toThrow("Coordinate3D needs options parameter");
  })

  test("Test options with string type", () => {
    expect(() => verifyCoordinate3DOptions("hello")).toThrow("Coordinate3D options should be a object");
  })

  test("Test options with no x field", () => {
    expect(() => verifyCoordinate3DOptions({})).toThrow("Coordinate3D options field x is required");
  })

  test("Test options x field with string type", () => {
    expect(() => verifyCoordinate3DOptions({ x: "i'm x" })).toThrow("Coordinate3D options field x should be a number");
  })

  test("Test options with no y field", () => {
    expect(() => verifyCoordinate3DOptions({ x: 100 })).toThrow("Coordinate3D options field y is required");
  })

  test("Test options y field with string type", () => {
    expect(() => verifyCoordinate3DOptions({ x: 100, y: "i'm y"})).toThrow("Coordinate3D options field y should be a number");
  })

  test("Test options with no z field", () => {
    expect(() => verifyCoordinate3DOptions({ x: 100, y: 100 })).toThrow("Coordinate3D options field z is required");
  })

  test("Test options z field with string type", () => {
    expect(() => verifyCoordinate3DOptions({ x: 100, y: 100, z: "i'm z"})).toThrow("Coordinate3D options field z should be a number");
  })
})
