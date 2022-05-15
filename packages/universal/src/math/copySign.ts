/**
 * Copy sign to number
 * Returns the absolute value of the first number, but the sign of the second.
 * @param x - The number to take the absolute value of.
 * @param y - The sign of the number.
 * @returns The absolute value of the first number, but the sign of the second.
 * @example
 * ```typescript
 * copySign(2, 3); // 2
 * copySign(2, -3); // -2
 * copySign(-2, 3); // 2
 * copySign(-2, -3); // -2
 * ```
 * @public
 * @category Math
 * @since 0.1.15
 */
const copySign = (x: number, y: number) =>
  Math.sign(x) === Math.sign(y) ? x : -x;

export default copySign;
