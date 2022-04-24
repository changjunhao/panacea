/**
 * Checks if the given string is an absolute URL.
 * @param str - The string to check.
 * @returns `true` if the string is an absolute URL, `false` otherwise.
 * @example
 * ```typescript
 * isAbsoluteURL('https://google.com'); // true
 * isAbsoluteURL('ftp://www.myserver.net'); // true
 * isAbsoluteURL('/foo/bar'); // false
 * ```
 * @public
 * @category String
 * @since 0.1.1
 */
const isAbsoluteURL = (str: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(str);

export default isAbsoluteURL;
