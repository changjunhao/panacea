/**
 * Gets the Unix timestamp from a `Date` object.
 * @param date - The `Date` object to get the timestamp from.
 * @example
 * ```typescript
 * getTimestamp(); // 1602162242
 * ```
 * @returns The Unix timestamp.
 * @since 0.1.9
 * @public
 * @category Date
 */
const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

export default getTimestamp;
