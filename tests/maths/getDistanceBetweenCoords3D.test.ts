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

  test("Testing error with only one coordinate 380, -1450", () => {
    expect(() => {
      getDistanceBetweenCoords3D({
        coordinates: [
          new Coordinate3D({
            x: 380,
            y: -1450,
            z: 100
          })
        ]
      })
    }).toThrow('To get distance between coordinates you should specify at least 2 3D coordinates');
  })
})
