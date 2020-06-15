import {Timer} from "../../src/testing/timer";

describe("Testing timer test suite", () => {
  let timer = new Timer();

  test("Timer instance of", () => {
    expect(timer).toBeInstanceOf(Timer);
  })
})
