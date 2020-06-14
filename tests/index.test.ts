import * as utilities from '../src'

describe("Entry file test suite", () => {
  test("Checking library first level keys", () => {
    expect(Object.keys(utilities)).toContain("Interpolation");
    expect(Object.keys(utilities)).toContain("Testing");
    expect(Object.keys(utilities)).toContain("Maths");
  })
})
