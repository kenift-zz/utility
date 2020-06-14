import { degreesToRadians } from './degreesToRadians'

/**
 * @author Paulo Vernetti
 *
 * @param {{ center: { x: number, y: number, z: number }, radius: number, degree: number }} options
 */
export function getPointCoordsAtDegree(options: Kenift.Utility.GetPointCoordsAtDegreeOptions): Kenift.Utility.GetPointCoordsAtDegreeResult {
  return {
    x: options.radius * Math.cos(degreesToRadians(options.degree)) + options.center.x,
    y: options.radius * Math.sin(degreesToRadians(options.degree)) + options.center.y,
    z: options.center.z
  }
}
