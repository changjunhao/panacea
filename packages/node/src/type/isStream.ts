/**
 * Checks if the given argument is a stream.
 * @category Type
 * @param value - The value to check.
 * @returns `true` if the given argument is a stream, `false` otherwise.
 * @example
 * ```javascript
 * const fs = require('fs');
 *
 * isStream(fs.createReadStream('test.txt')); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isStream: (value: any) => boolean = (value) =>
  value !== null &&
  typeof value === "object" &&
  typeof value.pipe === "function";

export default isStream;
