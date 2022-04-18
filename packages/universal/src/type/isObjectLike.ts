/**
 * Checks if a value is object-like.
 * @category Type
 * @param value - The value to check.
 * @returns Returns `true` if `value` is object-like, else `false`.
 * @example
 * ```typescript
 * isObjectLike({}); // true
 * isObjectLike([1, 2, 3]); // true
 * isObjectLike(x => x); // false
 * isObjectLike(null); // false
 * ```
 * @public
 */
const isObjectLike: (value: any) => boolean = (value) =>
  value !== null && typeof value === "object";

export default isObjectLike;
