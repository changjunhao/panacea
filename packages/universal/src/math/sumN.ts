/**
 * Sums all the numbers between `1` and `n`.
 * @param n - The number to sum up to.
 * @returns The sum of all the numbers between `1` and `n`.
 * @example
 * ```ts
 * sumN(100); // 5050
 * ```
 * @public
 * @category Math
 * @since 0.1.12
 */
const sumN = (n: number) => (n * (n + 1)) / 2;

export default sumN;
