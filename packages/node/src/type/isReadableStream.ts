/**
 * Checks if the given argument is a readable stream.
 * @category Type
 * @param value - The value to check.
 * @returns If the given argument is a readable stream.
 * @example
 * ```javascript
 * const fs = require('fs');
 *
 * isReadableStream(fs.createReadStream('test.txt')); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isReadableStream: (value: any) => boolean = (value) =>
  value !== null &&
  typeof value === "object" &&
  typeof value.pipe === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._read === "function" &&
  // eslint-disable-next-line no-underscore-dangle
  typeof value._readableState === "object";

export default isReadableStream;
