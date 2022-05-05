/**
 * Checks if the given `year` is a leap year.
 * @param year - The year to check.
 * @returns `true` if the given `year` is a leap year, otherwise `false`.
 * @example
 * ```ts
 * isLeapYear(2019); // false
 * isLeapYear(2020); // true
 * ```
 * @public
 * @since 0.1.8
 * @category Date
 */
const isLeapYear = (year: number) => new Date(year, 1, 29).getMonth() === 1;

export default isLeapYear;
