import {getDistanceBetweenCoords3D} from "../../src/maths/getDistanceBetweenCoords3D";
import {Coordinate3D} from "../../src/maths/coordinate3D";

describe("Trigonometry getDistanceBetweenCoords3D Test Suite", () => {
  test("Testing distance between coordinates 10, 3, 0 and 10, 10, 5 with no unit size specified", () => {
    expect(getDistanceBetweenCoords3D({
      coordinates: [
        new Coordinate3D({
          x: 10,
          y: 3,
          z: 0
        }),
        new Coordinate3D({
          x: 10,
          y: 10,
          z: 5
        })
      ]
    })).toBe(8.602325267042627);
  })
})
