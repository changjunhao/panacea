/**
 * Calculates the distance between two points.
 * @param x0 - The x coordinate of the first point.
 * @param y0 - The y coordinate of the first point.
 * @param x1 - The x coordinate of the second point.
 * @param y1 - The y coordinate of the second point.
 * @returns The distance between the two points.
 * @public
 * @example
 * ```typescript
 * distance(1, 1, 2, 3); // ~2.2361
 * ```
 * @since 0.1.15
 * @public
 * @category Math
 */
const distance = (x0: number, y0: number, x1: number, y1: number) =>
  Math.hypot(x1 - x0, y1 - y0);

export default distance;
