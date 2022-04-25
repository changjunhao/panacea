/**
 * Checks if two URLs are on the same origin.
 * @param origin - The origin to compare to.
 * @param destination - The destination to compare to.
 * @returns `true` if the origins are the same, `false` otherwise.
 * @example
 * ```typescript
 * const origin = new URL('https://blog.ifable.cn/tags');
 * const destination = new URL('https://blog.ifable.cn/categories');
 * isSameOrigin(origin, destination); // true
 * const other = new URL('https://developer.mozilla.org);
 * isSameOrigin(origin, other); // false
 * ```
 * @since 0.1.3
 * @category Object
 * @public
 */
const isSameOrigin = (origin: URL, destination: URL): boolean =>
  origin.protocol === destination.protocol && origin.host === destination.host;

export default isSameOrigin;
