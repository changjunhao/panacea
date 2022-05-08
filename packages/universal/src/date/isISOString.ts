/**
 * Checks if the given string is valid in the simplified extended ISO format (ISO 8601).
 * @param val - The string to check.
 * @returns True if the string is valid, false otherwise.
 * @example
 * ```typescript
 * isISOString('2020-10-12T10:10:10.000Z'); // true
 * isISOString('2020-10-12'); // false
 * ```
 * @category Date
 * @public
 * @since 0.1.11
 */
const isISOString = (val: string) => {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
};

export default isISOString;
