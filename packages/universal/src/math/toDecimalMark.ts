/**
 * Converts a number to a decimal mark formatted string.
 * @param num - number to convert
 * @returns decimal mark formatted string
 * @example
 * ```typescript
 * toDecimalMark(12305030388.9087); // '12,305,030,388.909'
 * ```
 * @since 0.1.15
 * @category Math
 * @public
 */
const toDecimalMark = (num: number) => num.toLocaleString("en-US");

export default toDecimalMark;
