/**
 * Calculates the difference (in seconds) between two dates.
 * @param dateInitial - The first date.
 * @param dateFinal - The second date.
 * @returns The difference (in seconds) between the two dates.
 * @example
 * ```typescript
 * getSecondsDiffBetweenDates(
 *   new Date('2020-12-24 00:00:15'),
 *   new Date('2020-12-24 00:00:17')
 * ); // 2
 * ```
 * @public
 * @since 0.1.9
 * @category Date
 */
const getSecondsDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  // @ts-ignore
  (dateFinal - dateInitial) / 1000;

export default getSecondsDiffBetweenDates;
