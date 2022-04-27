/**
 * Checks if a date is before another date.
 * @param dateA - The first date to compare.
 * @param dateB - The second date to compare.
 * @returns `true` if `dateA` is before `dateB`, `false` otherwise.
 * @public
 * @example
 * ```typescript
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
 * ```
 * @since 0.1.4
 * @category Date
 */
const isBeforeDate = (dateA: Date, dateB: Date): boolean => dateA < dateB;

export default isBeforeDate;
