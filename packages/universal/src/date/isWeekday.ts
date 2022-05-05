/**
 * Checks if the given date is a weekday.
 * @param d - The date to check.
 * @returns True if the given date is a weekday, false otherwise.
 * @public
 * @example
 * ```typescript
 * isWeekday(); // true (if current date is 2019-07-19)
 * isWeekday(new Date(2019, 6, 19)); // true
 * ```
 * @category Date
 * @since 0.1.7
 */
const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

export default isWeekday;
