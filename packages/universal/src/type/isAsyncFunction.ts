/**
 * Checks if the given argument is an async function.
 * @param value - The value to check.
 * @returns `true` if the given argument is an async function; otherwise, `false`.
 * @example
 * ```typescript
 * isAsyncFunction(function() {}); // false
 * isAsyncFunction(async function() {}); // true
 * ```
 * @category Type
 * @since 0.1.0
 * @public
 */
const isAsyncFunction: (value: any) => boolean = (value) =>
  Object.prototype.toString.call(value) === "[object AsyncFunction]";

export default isAsyncFunction;
