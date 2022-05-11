/**
 * Calculates the date of n days from the given date, returning its string representation.
 * @param date - The date to add days to.
 * @param n - The number of days to add.
 * @returns The date of n days from the given date, as a string.
 * @public
 * @example
 * ```typescript
 * addDaysToDate('2020-10-15', 10); // '2020-10-25'
 * addDaysToDate('2020-10-15', -10); // '2020-10-05'
 * ```
 * @category Date
 * @since 0.1.13
 */
const addDaysToDate = (date: string, n: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

export default addDaysToDate;
