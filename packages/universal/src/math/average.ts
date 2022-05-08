/**
 * Calculates the average of two or more numbers.
 * @param nums - The numbers to average.
 * @returns The average of the numbers.
 * @example
 * ```typescript
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * ```
 * @public
 * @category Math
 * @since 0.1.11
 */
const average = (...nums: number[]) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

export default average;
