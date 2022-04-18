/**
 * Checks if the provided string is a valid JSON.
 * @category Type
 * @param json - The value to check.
 * @returns `true` if the string is a valid JSON, `false` otherwise.
 * @example
 * ```typescript
 * isValidJSON('{"foo": "bar"}'); // true
 * isValidJSON('{"foo": "bar"'); // false
 * ```
 * @since 0.1.0
 * @public
 */
const isValidJSON = (json: any): boolean => {
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }
};

export default isValidJSON;
