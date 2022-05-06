/**
 * Calculates the difference (in hours) between two dates.
 * @param dateInitial - The first date.
 * @param dateFinal - The second date.
 * @returns The difference (in hours) between the two dates.
 * @example
 * ```typescript
 * getHoursDiffBetweenDates(
 *   new Date('2021-04-24 10:25:00'),
 *   new Date('2021-04-25 10:25:00')
 * ); // 24
 * ```
 * @since 0.1.9
 * @public
 * @category Date
 */
const getHoursDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  // @ts-ignore
  (dateFinal - dateInitial) / (1000 * 3600);

export default getHoursDiffBetweenDates;
