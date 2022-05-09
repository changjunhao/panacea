/**
 * Checks if the first numeric argument is divisible by the second one.
 * @param dividend - The dividend.
 * @param divisor - The divisor.
 * @returns True if the dividend is divisible by the divisor, false otherwise.
 * @example
 * ```typescript
 * isDivisible(3, 2); // false
 * isDivisible(6, 2); // true
 * ```
 * @category Math
 * @since 0.1.12
 * @public
 */
const isDivisible = (dividend: number, divisor: number) =>
  dividend % divisor === 0;

export default isDivisible;
