/**
 * Converts an angle from degrees to radians.
 * @param deg - The angle in degrees.
 * @returns The angle in radians.
 * @example
 * ```ts
 * degreesToRads(90.0); // ~1.5708
 * ```
 * @public
 * @category Math
 * @since 0.1.9
 */
const degreesToRads = (deg: number) => (deg * Math.PI) / 180.0;

export default degreesToRads;
