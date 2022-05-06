/**
 * Converts an integer to a suffixed string, adding `am` or `pm` based on its value.
 * @param num - The number to convert.
 * @returns The suffixed string.
 * @example
 * ```typescript
 * getMeridiemSuffixOfInteger(0); // '12am'
 * getMeridiemSuffixOfInteger(11); // '11am'
 * getMeridiemSuffixOfInteger(13); // '1pm'
 * getMeridiemSuffixOfInteger(25); // '1pm'
 * ```
 * @category Date
 * @public
 * @since 0.1.9
 */
const getMeridiemSuffixOfInteger = (num: number) =>
  num === 0 || num === 24
    ? `${12}am`
    : num === 12
    ? `${12}pm`
    : num < 12
    ? `${num % 12}am`
    : `${num % 12}pm`;

export default getMeridiemSuffixOfInteger;
