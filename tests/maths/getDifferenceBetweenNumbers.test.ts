import {getDifferenceBetweenNumbers} from "../../src/maths/getDifferenceBetweenNumbers";

describe("Maths Test Suite", () => {
  test("getDifferenceBetweenNumbers between numbers 10 and 0", () => {
    expect(getDifferenceBetweenNumbers(10, 0)).toBe(10);
  })

  test("getDifferenceBetweenNumbers between numbers 145 and 50", () => {
    expect(getDifferenceBetweenNumbers(145, 50)).toBe(95);
  })

  test("getDifferenceBetweenNumbers between numbers 200 and 100", () => {
    expect(getDifferenceBetweenNumbers(200, 100)).toBe(100);
  })

  test("getDifferenceBetweenNumbers between numbers -300 and 100", () => {
    expect(getDifferenceBetweenNumbers(-300, 100)).toBe(400);
  })
})
