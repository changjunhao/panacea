/**
 * Gets the number of days in the given `month` of the specified `year`.
 * @param year - The year.
 * @param month - The month.
 * @returns The number of days in the month.
 * @example
 * ```ts
 * daysInMonth(2020, 12)); // 31
 * daysInMonth(2024, 2)); // 29
 * ```
 * @public
 * @since 0.1.7
 * @category Date
 */
const daysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

export default daysInMonth;
