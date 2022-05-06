/**
 * Calculates the difference (in minutes) between two dates.
 * @param dateInitial - The first date.
 * @param dateFinal - The second date.
 * @returns The difference (in minutes) between the two dates.
 * @example
 * ```typescript
 * getMinutesDiffBetweenDates(
 *   new Date('2021-04-24 01:00:15'),
 *   new Date('2021-04-24 02:00:15')
 * ); // 60
 * ```
 * @since 0.1.9
 * @public
 * @category Date
 */
const getMinutesDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  // @ts-ignore
  (dateFinal - dateInitial) / (1000 * 60);

export default getMinutesDiffBetweenDates;
