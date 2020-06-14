import {Timer} from "../../src/testing/timer";

describe("Testing timer test suite", () => {
  let timer = new Timer();

  test("Timer instance of", () => {
    expect(timer).toBeInstanceOf(Timer);
  })

  test("Timer instance of", () => {
    expect(
      Object.keys(timer.stop({ module: "Test", message: "Test timer message check" })).some(el => el === "message") &&
      Object.keys(timer.stop({ module: "Test", message: "Test timer message check" })).some(el => el === "module") &&
      Object.keys(timer.stop({ module: "Test", message: "Test timer message check" })).some(el => el === "timestamp")
    ).toBeTruthy();
  })
})
