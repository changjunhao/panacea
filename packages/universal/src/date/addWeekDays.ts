/**
 * Calculates the date after adding the given number of business days.
 * @param startDate - The date to start with.
 * @param count - The number of business days to add.
 * @returns The new date.
 * @example
 * ```ts
 * addWeekDays(new Date('Oct 09, 2020'), 5); // 'Oct 16, 2020'
 * addWeekDays(new Date('Oct 12, 2020'), 5); // 'Oct 19, 2020'
 * ```
 * @public
 * @since 0.1.13
 */
const addWeekDays = (startDate: Date, count: number): Date =>
  Array.from({ length: count }).reduce((date: Date) => {
    // eslint-disable-next-line no-param-reassign
    date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0)
      // eslint-disable-next-line no-param-reassign
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    return date;
  }, startDate);

export default addWeekDays;
