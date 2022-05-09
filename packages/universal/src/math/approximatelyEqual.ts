/**
 * Checks if two numbers are approximately equal to each other.
 * @param v1 - First number.
 * @param v2 - Second number.
 * @param epsilon - Tolerance.
 * @returns True if the numbers are approximately equal, false otherwise.
 * @example
 * ```typescript
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 * approximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001); // false
 * ```
 * @since 0.1.12
 * @public
 * @category Math
 */
const approximatelyEqual = (v1: number, v2: number, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

export default approximatelyEqual;
