/**
 * Calculates the date of `n` minutes from the given date, returning its string representation.
 * @param date - The date to add minutes to.
 * @param n - The number of minutes to add.
 * @returns The date of `n` minutes from the given date, as a string.
 * @example
 * ```ts
 * addMinutesToDate('2020-10-19 12:00:00', 10); // new Date('2020-10-19 12:10:00')
 * addMinutesToDate('2020-10-19', -10).toUTCString() === 'Sun, 18 Oct 2020 23:50:00 GMT'
 * ```
 * @public
 * @since 0.0.14
 * @category Date
 */
const addMinutesToDate = (date: number | string | Date, n: number) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 60000);
  return d;
};

export default addMinutesToDate;
