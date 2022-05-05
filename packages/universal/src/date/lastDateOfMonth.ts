/**
 * Returns the string representation of the last date in the given date's month.
 * @param date - The date to get the last date of.
 * @returns The last date in the given date's month.
 * @example
 * ```typescript
 * lastDateOfMonth(new Date('2015-08-11')); // '2015-08-30'
 * ```
 * @category Date
 * @since 0.1.7
 * @public
 */
const lastDateOfMonth = (date = new Date()) => {
  const d = new Date(date.getFullYear(), date.getMonth() + 1);
  return d.toISOString().split("T")[0];
};

export default lastDateOfMonth;
