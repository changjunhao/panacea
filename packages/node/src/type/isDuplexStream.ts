/**
 * Checks if the given argument is a duplex (readable and writable) stream.
 * @category Type
 * @param value - The value to check.
 * @returns If `value` is a duplex stream.
 * @example
 * ```typescript
 * const fs = require('fs');
 *
 * isDuplexStream(new Stream.Duplex()); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isDuplexStream: (value: any) => boolean = (value) =>
  value !== null &&
  typeof value === "object" &&
  typeof value.pipe === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._read === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._readableState === "object" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._write === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._writableState === "object";

export default isDuplexStream;
