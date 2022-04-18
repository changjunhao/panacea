/**
 * Checks if the given argument is a function.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if the value is an object, false otherwise.
 * @example
 * ```typescript
 * isFunction('x') // false
 * isFunction(x => x) // true
 * ```
 * @since 0.1.0
 * @public
 */
const isFunction: (value: any) => boolean = (value) =>
  typeof value === "function";

export default isFunction;
