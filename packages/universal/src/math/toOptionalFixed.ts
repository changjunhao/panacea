/**
 * Number to fixed-point notation without trailing zeros
 * @param num - number to convert
 * @param digits - number of digits to show
 * @returns fixed-point notation
 * @example
 * ```typescript
 * toOptionalFixed(1, 2); // '1'
 * toOptionalFixed(1.001, 2); // '1'
 * toOptionalFixed(1.500, 2); // '1.5'
 * ```
 * @public
 * @category Math
 * @since 0.1.14
 */
const toOptionalFixed = (num: number, digits: number) =>
  `${Number.parseFloat(num.toFixed(digits))}`;

export default toOptionalFixed;
