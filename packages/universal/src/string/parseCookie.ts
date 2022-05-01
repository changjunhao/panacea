/**
 * Parses an HTTP Cookie header string, returning an object of all cookie name-value pairs.
 * @param str - The cookie header string to parse.
 * @returns An object of cookie name-value pairs.
 * @public
 * @example
 * ```typescript
 * parseCookie('foo=bar; equation=E%3Dmc%5E2');
 * // { foo: 'bar', equation: 'E=mc^2' }
 * ```
 * @since 0.1.7
 * @category String
 */
const parseCookie = (str: string) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {} as Record<string, string>);

export default parseCookie;
