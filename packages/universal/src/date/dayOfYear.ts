/**
 * Gets the day of the year (number in the range 1-366) from a `Date` object.
 * @param date - The `Date` object to get the day of the year from.
 * @returns The day of the year.
 * @public
 * @example
 * ```ts
 * dayOfYear(new Date(2022, 0, 1)); // 1
 * dayOfYear(new Date(2022, 11, 31)); // 365
 * ```
 * @category Date
 * @since 0.1.13
 */
const dayOfYear = (date: Date) => {
  const start = new Date(date.getFullYear(), 0, 0) as unknown as number;
  return Math.floor(
    ((date as unknown as number) - start) / 1000 / 60 / 60 / 24
  );
};
export default dayOfYear;
