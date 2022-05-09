/**
 * Checks if the given number is odd.
 * @param num - The number to check.
 * @returns True if the number is odd, false otherwise.
 * @example
 * ```typescript
 * isOdd(3); // true
 * isOdd(2); // false
 * ```
 * @category Math
 * @public
 * @since 0.1.12
 */
const isOdd = (num: number) => num % 2 === 1;

export default isOdd;
