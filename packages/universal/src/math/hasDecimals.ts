/**
 * Checks if a number has any decimals digits
 * @param num - number to check
 * @returns true if the number has decimals
 * @example
 * ```typescript
 * hasDecimals(1); // false
 * hasDecimals(1.001); // true
 * ```
 * @public
 * @category Math
 * @since 0.1.14
 */
const hasDecimals = (num: number) => num % 1 !== 0;

export default hasDecimals;
