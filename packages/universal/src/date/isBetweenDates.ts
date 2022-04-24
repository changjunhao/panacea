/**
 * Checks if a date is between two other dates.
 * @param dateStart - The start date.
 * @param dateEnd - The end date.
 * @param date - The date to check.
 * @returns True if the date is between the start and end dates.
 * @example
 * ```typescript
 * isBetweenDates(
 *   new Date(2010, 11, 20),
 *   new Date(2010, 11, 30),
 *   new Date(2010, 11, 19)
 * ); // false
 * isBetweenDates(
 *   new Date(2010, 11, 20),
 *   new Date(2010, 11, 30),
 *   new Date(2010, 11, 25)
 * ); // true
 * ```
 * @category Date
 * @public
 * @since 0.1.1
 */
const isBetweenDates = (dateStart: Date, dateEnd: Date, date: Date): boolean =>
  date > dateStart && date < dateEnd;

export default isBetweenDates;
