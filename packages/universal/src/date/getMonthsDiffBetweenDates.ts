/**
 * Calculates the difference (in months) between two dates.
 * @param dateInitial - The initial date.
 * @param dateFinal - The final date.
 * @returns The difference (in months) between the two dates.
 * @example
 * ```ts
 * getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29')); // 4
 * ```
 * @since 0.1.9
 * @public
 * @category Date
 */
const getMonthsDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );

export default getMonthsDiffBetweenDates;
