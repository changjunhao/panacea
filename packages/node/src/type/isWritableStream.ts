/**
 * Checks if the given argument is a writable stream.
 * @category Type
 * @param value - The value to check.
 * @returns If the given argument is a writable stream.
 * @example
 * ```javascript
 * const fs = require('fs');
 *
 * isWritableStream(fs.createWriteStream('test.txt')); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isWritableStream: (value: any) => boolean = (value) =>
  value !== null &&
  typeof value === "object" &&
  typeof value.pipe === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._write === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._writableState === "object";

export default isWritableStream;
