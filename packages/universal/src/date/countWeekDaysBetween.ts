/**
 * Counts the weekdays between two dates.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns The number of weekdays between the two dates.
 * @example
 * ```ts
 * countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')); // 1
 * countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020')); // 7
 * ```
 * @public
 * @since 0.1.14
 * @category Date
 */
const countWeekDaysBetween = (startDate: Date, endDate: Date): number =>
  Array.from({
    length:
      ((endDate as unknown as number) - (startDate as unknown as number)) /
      (1000 * 3600 * 24),
  }).reduce((count: number) => {
    // eslint-disable-next-line no-param-reassign
    if (startDate.getDay() % 6 !== 0) count++;
    // eslint-disable-next-line no-param-reassign
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    return count;
  }, 0);

export default countWeekDaysBetween;
