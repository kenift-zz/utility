import { Interpolation } from '../../src/interpolation';

describe("Interpolation Test Suite", () => {
  test("Interpolation linear Test Case", () => {
    expect(Interpolation.linear({
      currentTime: 50,
      startAt: 0,
      finishAt: 100,
      durationTime: 100
    })).toBe(50);
  })
})
