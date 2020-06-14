declare namespace Kenift {
  namespace Utility {
    type InterpolationOptions = {
      currentTime: number,
      startAt: number,
      finishAt: number,
      durationTime: number
    }

    type GetPointCoordsAtDegreeOptions = {
      center: { x: number, y: number, z: number };
      radius: number;
      degree: number;
    }

    type GetPointCoordsAtDegreeResult = {
      x: number;
      y: number;
      z: number
    }

    type TestingTimerStopOptions = {
      module?: string;
      message?: string;
    }

    type Coordinate2D = {
      x: number;
      y: number;
    }

    type getDistanceBetweenCoords2DOptions = {
      coordinates: Array<Coordinate2D>,
      unitSize?: number;
    }
  }
}
