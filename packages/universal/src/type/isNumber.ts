/**
 * Checks if the given argument is a number.
 * @category Type
 * @param value - The value to check.
 * @returns True if the given argument is a number, false otherwise.
 * @example
 * ```typescript
 * isNumber(1); // true
 * isNumber('1'); // false
 * isNumber(NaN); // false
 * isNumber(Infinity); // false
 * ```
 * @public
 */
const isNumber: (value: any) => boolean = (value) =>
  typeof value === "number" && value === value;

export default isNumber;
