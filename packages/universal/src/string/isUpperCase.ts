/**
 * Checks if a string is upper case.
 * @param string - String to check.
 * @returns Returns true if the string is upper case, false otherwise.
 * @example
 * ```typescript
 * isUpperCase('ABC'); // true
 * isUpperCase('A3@$'); // true
 * isUpperCase('aB4'); // false
 * ```
 * @category String
 * @since 0.1.0
 * @public
 */
const isUpperCase = (string: string) => string === string.toUpperCase();

export default isUpperCase;
