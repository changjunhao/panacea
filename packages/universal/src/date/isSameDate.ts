/**
 * Checks if a date is the same as another date.
 * @param dateA - The first date to check.
 * @param dateB - The second date to check.
 * @returns True if the dates are the same, false otherwise.
 * @public
 * @example
 * ```typescript
 * isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
 * isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // false
 * ```
 * @category Date
 * @since 0.1.7
 */
const isSameDate = (dateA: Date, dateB: Date) =>
  dateA.toISOString() === dateB.toISOString();

export default isSameDate;
