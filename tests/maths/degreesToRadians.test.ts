import {degreesToRadians} from '../../src/maths/degreesToRadians'

describe("Trigonometry degreesToRadians Test Suite", () => {
  test("Test converting 70 degrees to radians", () => {
    expect(degreesToRadians(70)).toBe(1.2217304763960306);
  })

  test("Test converting 13.5 degrees to radians", () => {
    expect(degreesToRadians(13.5)).toBe(0.23561944901923448);
  })

  test("Test converting 177 degrees to radians", () => {
    expect(degreesToRadians(177)).toBe(3.0892327760299634);
  })

  test("Test converting 177 degrees to radians", () => {
    expect(degreesToRadians(177)).toBe(3.0892327760299634);
  })

  test("Test converting 340 degrees to radians", () => {
    expect(degreesToRadians(340)).toBe(5.934119456780721);
  })
})
