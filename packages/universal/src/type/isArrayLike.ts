/**
 * Checks if the provided argument is array-like (i.e. is iterable).
 * @param obj - The object to check.
 * @returns True if the object is array-like, false otherwise.
 * @example
 * ```typescript
 * isArrayLike([1, 2, 3]); // true
 * isArrayLike(document.querySelectorAll('.className')); // true
 * isArrayLike('abc'); // true
 * isArrayLike(null); // false
 * ```
 * @since 0.1.0
 * @category Type
 * @public
 */
const isArrayLike: (obj: any) => boolean = (obj) =>
  obj !== null && typeof obj[Symbol.iterator] === "function";

export default isArrayLike;
