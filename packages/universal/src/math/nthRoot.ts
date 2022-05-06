/**
 * Calculates the nth root of a given number.
 * @param x - The number for which to calculate the nth root.
 * @param n - The root.
 * @returns The nth root of x.
 * @example
 * ```typescript
 * nthRoot(32, 5); // 2
 * ```
 * @public
 * @category Math
 * @since 0.1.8
 */
const nthRoot = (x: number, n: number) => x ** (1 / n); // Math.pow(x, 1 / n)

export default nthRoot;
