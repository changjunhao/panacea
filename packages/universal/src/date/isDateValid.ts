/**
 * Checks if a valid date object can be created from the given values.
 * @param val - the value to check
 * @returns true if the date is valid, false otherwise
 * @example
 * ```typescript
 * isDateValid('December 17, 1995 03:24:00'); // true
 * isDateValid('1995-12-17T03:24:00'); // true
 * isDateValid('1995-12-17 T03:24:00'); // false
 * isDateValid('Duck'); // false
 * isDateValid(1995, 11, 17); // true
 * isDateValid(1995, 11, 17, 'Duck'); // false
 * isDateValid({}); // false
 * ```
 * @category Date
 * @public
 * @since 0.1.14
 */
const isDateValid = (...val: any[]) =>
  // @ts-ignore
  !Number.isNaN(new Date(...val).valueOf());

export default isDateValid;
