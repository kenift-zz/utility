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
  }
}
