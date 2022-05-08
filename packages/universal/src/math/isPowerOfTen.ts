/**
 * Checks if the given number is a power of 10.
 * @param n - The number to check.
 * @returns True if the number is a power of 10, false otherwise.
 * @example
 * ```typescript
 * isPowerOfTen(1); // true
 * isPowerOfTen(10); // true
 * isPowerOfTen(20); // false
 * ```
 * @category Math
 * @since 0.1.11
 * @public
 */
const isPowerOfTen = (n: number) => Math.log10(n) % 1 === 0;

export default isPowerOfTen;
