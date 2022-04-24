/**
 * Checks if a string contains only alpha characters.
 * @param str - String to check
 * @returns True if str is alphanumeric, false otherwise
 * @example
 * ```typescript
 * sAlpha('sampleInput'); // true
 * isAlpha('this Will fail'); // false
 * isAlpha('123'); // false
 * ```
 * @public
 * @category String
 * @since 0.1.1
 */
const isAlpha = (str: string): boolean => /^[a-zA-Z]*$/.test(str);

export default isAlpha;
