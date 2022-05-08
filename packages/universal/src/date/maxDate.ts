/**
 * Returns the maximum of the given dates.
 * @param dates - The dates to compare.
 * @returns The maximum date.
 * @example
 * ```ts
 * const dates = [
 *   new Date(2017, 4, 13),
 *   new Date(2018, 2, 12),
 *   new Date(2016, 0, 10),
 *   new Date(2016, 0, 9)
 * ];
 * maxDate(...dates); // 2018-03-11T22:00:00.000Z
 * ```
 * @public
 * @category Date
 * @since 0.1.11
 */
// @ts-ignore
const maxDate = (...dates: Date[]) => new Date(Math.max(...dates));

export default maxDate;
