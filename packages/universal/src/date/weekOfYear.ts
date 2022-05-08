/**
 * Returns the zero-indexed week of the year that a date corresponds to.
 * @param date - The date to get the week of.
 * @returns The week of the year.
 * @public
 * @example
 * ```ts
 * weekOfYear(new Date('2022-05-08')); // 17
 * ```
 * @category Date
 * @since 0.1.11
 */
const weekOfYear = (date: Date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
  return Math.round(
    ((date as unknown as number) - (startOfYear as unknown as number)) /
      (7 * 24 * 3600 * 1000)
  );
};

export default weekOfYear;
