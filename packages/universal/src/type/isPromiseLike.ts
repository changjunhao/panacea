/**
 * Checks if an object looks like a `Promise`.
 * @param value - The object to check.
 * @returns If `value` looks like a Promise.
 * @example
 * ```typescript
 * isPromiseLike({ then: () => {} }) // true
 * isPromiseLike(Promise.resolve()) // true
 * isPromiseLike(new Promise(() => {})) // true
 * isPromiseLike(null) // false
 * ```
 * @category Type
 * @since 0.1.0
 * @public
 */
const isPromiseLike: (value: any) => boolean = (value) =>
  value !== null &&
  (typeof value === "object" || typeof value === "function") &&
  typeof value.then === "function";

export default isPromiseLike;
