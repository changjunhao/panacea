/**
 * Clamps num within the inclusive range specified by the boundary values a and b.
 * @param num - The number to clamp.
 * @param a - The first boundary value.
 * @param b - The second boundary value.
 * @returns The clamped number.
 * @example
 * ```typescript
 * clampNumber(2, 3, 5); // 3
 * clampNumber(1, -1, -5); // -1
 * ```
 * @category Math
 * @public
 * @since 0.1.15
 */
const clampNumber = (num: number, a: number, b: number) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

export default clampNumber;
