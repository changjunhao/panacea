/**
 * Converts an angle from radians to degrees.
 * @param rad - The angle in radians.
 * @returns The angle in degrees.
 * @example
 * ```ts
 * radsToDegrees(Math.PI / 2); // 90
 * ```
 * @public
 * @category Math
 * @since 0.1.9
 */
const radsToDegrees = (rad: number) => (rad * 180.0) / Math.PI;

export default radsToDegrees;
