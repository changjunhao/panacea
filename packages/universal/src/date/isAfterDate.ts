/**
 * Checks if a date is after another date.
 * @param dateA - The first date to compare.
 * @param dateB - The second date to compare.
 * @returns `true` if `dateA` is after `dateB`, `false` otherwise.
 * @public
 * @example
 * ```typescript
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
 * ```
 * @since 0.1.4
 * @category Date
 */
const isAfterDate = (dateA: Date, dateB: Date): boolean => dateA > dateB;

export default isAfterDate;
