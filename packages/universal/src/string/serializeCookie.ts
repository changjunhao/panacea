/**
 * Serializes a cookie name-value pair into a Set-Cookie header string.
 * @param name - The cookie name.
 * @param val - The cookie value.
 * @returns The Set-Cookie header string.
 * @example
 * ```typescript
 * serializeCookie('foo', 'bar'); // "foo=bar"
 * ```
 * @category String
 * @since 0.1.1
 * @public
 */
const serializeCookie = (
  name: string | number,
  val: string | number | boolean
): string => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

export default serializeCookie;
