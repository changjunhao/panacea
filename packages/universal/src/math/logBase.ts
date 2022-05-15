/**
 * Calculates the logarithm of the given number in the given base.
 * @param n - The number.
 * @param base - The base.
 * @returns The logarithm of the given number in the given base.
 * @example
 * ```ts
 * logBase(10, 10); // 1
 * logBase(100, 10); // 2
 * ```
 * @public
 * @category Math
 * @since 0.1.15
 */
const logBase = (n: number, base: number) => Math.log(n) / Math.log(base);

export default logBase;
