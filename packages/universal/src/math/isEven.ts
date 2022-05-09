/**
 * Checks if the given number is even.
 * @param num - The number to check.
 * @returns True if the number is even, false otherwise.
 * @example
 * ```typescript
 * isEven(2); // true
 * isEven(3); // false
 * ```
 * @category Math
 * @since 0.1.12
 * @public
 */
const isEven = (num: number) => num % 2 === 0;

export default isEven;
