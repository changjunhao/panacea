/**
 * Checks if a string is lower case.
 * @param string - String to check.
 * @returns Returns true if the string is lower case, false otherwise.
 * @example
 * ```typescript
 * isLowerCase('abc'); // true
 * isLowerCase('a3@$'); // true
 * isLowerCase('Ab4'); // false
 * ```
 * @category String
 * @since 0.1.0
 * @public
 */
const isLowerCase = (string: string) => string === string.toLowerCase();

export default isLowerCase;
