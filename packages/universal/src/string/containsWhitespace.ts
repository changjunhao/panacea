/**
 * Checks if the given string contains any whitespace characters.
 * @param str - The string to check.
 * @returns `true` if the string contains any whitespace characters, otherwise `false`.
 * @public
 * @example
 * ```typescript
 * containsWhitespace('lorem'); // false
 * containsWhitespace('lorem ipsum'); // true
 * ```
 * @category String
 * @since 0.1.1
 */
const containsWhitespace = (str: string): boolean => /\s/.test(str);

export default containsWhitespace;
