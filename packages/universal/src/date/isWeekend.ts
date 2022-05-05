/**
 * Checks if the given date is a weekend.
 * @param d - The date to check.
 * @returns True if the given date is a weekend, false otherwise.
 * @public
 * @example
 * ```typescript
 * isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
 * ```
 * @since 0.1.7
 * @category Date
 */
const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;

export default isWeekend;
