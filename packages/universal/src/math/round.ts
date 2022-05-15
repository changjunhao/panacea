/**
 * Rounds a number to a specified amount of digits.
 * @param n - The number to round.
 * @param decimals - The amount of decimals to round to.
 * @returns The rounded number.
 * @example
 * ```ts
 * round(1.005, 2); // 1.01
 * round(1.005, 3); // 1.005
 * round(1.005); // 1
 * ```
 * @public
 * @category Math
 * @since 0.1.15
 */
const round = (n: number, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);

export default round;
