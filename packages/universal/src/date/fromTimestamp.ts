/**
 * Creates a `Date` object from a Unix timestamp.
 * @param timestamp - The Unix timestamp.
 * @returns The `Date` object.
 * @public
 * @example
 * ```typescript
 * fromTimestamp(1602162242); // 2020-10-08T13:04:02.000Z
 * ```
 * @category Date
 * @since 0.1.8
 */
const fromTimestamp = (timestamp: number) => new Date(timestamp * 1000);

export default fromTimestamp;
