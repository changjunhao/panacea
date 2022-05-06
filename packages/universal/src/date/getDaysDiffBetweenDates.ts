/**
 * Calculates the difference (in days) between two dates.
 * @param dateInitial - The first date.
 * @param dateFinal - The second date.
 * @returns The difference (in days) between the two dates.
 * @example
 * ```typescript
 * getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22'));
 * // 9
 * ```
 * @public
 * @since 0.1.9
 * @category Date
 */
const getDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  // @ts-ignore
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

export default getDaysDiffBetweenDates;
