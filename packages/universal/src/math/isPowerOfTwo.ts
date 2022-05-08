/**
 * Checks if the given number is a power of 2.
 * @param n - The number to check.
 * @returns True if the number is a power of 2, false otherwise.
 * @example
 * ```typescript
 * isPowerOfTwo(0); // false
 * isPowerOfTwo(1); // true
 * isPowerOfTwo(8); // true
 * ```
 * @category Math
 * @since 0.1.11
 * @public
 */
const isPowerOfTwo = (n: number) => !!n && (n & (n - 1)) === 0;

export default isPowerOfTwo;
