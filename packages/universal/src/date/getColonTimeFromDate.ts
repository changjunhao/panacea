/**
 * Returns a string of the form `HH:MM:SS` from a `Date` object.
 * @param date - The `Date` object to get the time from.
 * @returns The time as a string.
 * @public
 * @example
 * ```typescript
 * getColonTimeFromDate(new Date()); // '08:38:00'
 * ```
 * @category Date
 * @since 0.1.10
 */
const getColonTimeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

export default getColonTimeFromDate;
