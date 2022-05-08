/**
 * Returns the minimum of the given dates.
 * @param dates - The dates to compare.
 * @returns The minimum date.
 * @example
 * ```ts
 * const dates = [
 *   new Date(2017, 4, 13),
 *   new Date(2018, 2, 12),
 *   new Date(2016, 0, 10),
 *   new Date(2016, 0, 9)
 * ];
 * minDate(...dates); // 2016-01-08T22:00:00.000Z
 * ```
 * @public
 * @category Date
 * @since 0.1.11
 */
// @ts-ignore
const minDate = (...dates: Date[]) => new Date(Math.min(...dates));

export default minDate;
