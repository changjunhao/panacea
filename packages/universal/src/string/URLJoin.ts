/**
 * Joins all given URL segments together, then normalizes the resulting URL.
 * @param args - The URL segments to join.
 * @returns The joined URL.
 * @public
 * @example
 * ```typescript
 * URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo');
 * // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
 * ```
 * @since 0.1.10
 * @public
 * @category String
 */
const URLJoin = (...args: string[]) =>
  args
    .join("/")
    .replace(/[/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");

export default URLJoin;
