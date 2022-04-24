/**
 * Checks if a string contains only alphanumeric characters.
 * @param str - The string to check.
 * @returns True if the string contains only alphanumeric characters, false otherwise.
 * @example
 * ```typescript
 * isAlphaNumeric('hello123'); // true
 * isAlphaNumeric('123'); // true
 * isAlphaNumeric('hello 123'); // false (space character is not alphanumeric)
 * isAlphaNumeric('#$hello'); // false
 * ```
 * @category String
 * @public
 * @since 0.1.1
 */
const isAlphaNumeric = (str: string): boolean => /^[a-z0-9]+$/gi.test(str);

export default isAlphaNumeric;
