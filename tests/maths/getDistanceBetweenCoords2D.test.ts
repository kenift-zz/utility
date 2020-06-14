import {getDistanceBetweenCoords2D} from '../../src/maths/getDistanceBetweenCoords2D'
import {Coordinate2D} from "../../src/maths/coordinate2D";

describe("Trigonometry getDistanceBetweenCoords2D Test Suite", () => {
  test("Testing distance between coordinates 10, 3 and 10, 10 with no unit size specified", () => {
    expect(getDistanceBetweenCoords2D({
      coordinates: [
        new Coordinate2D({
          x: 10,
          y: 3
        }),
        new Coordinate2D({
          x: 10,
          y: 10
        })
      ]
    })).toBe(7);
  })

  test("Testing distance between coordinates 10, 3 and 10, 10 with with unit size is 3", () => {
    expect(getDistanceBetweenCoords2D({
      coordinates: [
        new Coordinate2D({
          x: 10,
          y: 3
        }),
        new Coordinate2D({
          x: 10,
          y: 10
        })
      ],
      unitSize: 3
    })).toBe(21);
  })

  test("Testing distance between coordinates 380, -1450 and 10, 10 with with unit size is 3", () => {
    expect(getDistanceBetweenCoords2D({
      coordinates: [
        new Coordinate2D({
          x: 380,
          y: -1450
        }),
        new Coordinate2D({
          x: 10,
          y: 10
        })
      ],
      unitSize: 3
    })).toBe(4518.462127759842);
  })

  test("Testing error with only one coordinate 380, -1450", () => {
    expect(() => {
      getDistanceBetweenCoords2D({
        coordinates: [
          new Coordinate2D({
            x: 380,
            y: -1450
          })
        ]
      })
    }).toThrow('To get distance between coordinates you should specify at least 2 2D coordinates');
  })

  test("Testing distance of the way to point and back", () => {
    expect(getDistanceBetweenCoords2D({
      coordinates: [
        new Coordinate2D({
          x: 10,
          y: 0
        }),
        new Coordinate2D({
          x: 10,
          y: 100
        }),
        new Coordinate2D({
          x: 10,
          y: 0
        })],
      unitSize: 1
    })).toBe(200);
  })
})
