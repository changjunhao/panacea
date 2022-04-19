/**
 * Checks if the given argument is a generator function.
 * @param value - The value to check.
 * @returns `true` if the given argument is a generator function; otherwise, `false`.
 * @example
 * ```typescript
 * isGeneratorFunction(function() {}); // false
 * isGeneratorFunction(function*() {}); // true
 * ```
 * @category Type
 * @since 0.1.0
 * @public
 */
const isGeneratorFunction: (value: any) => boolean = (value) =>
  Object.prototype.toString.call(value) === "[object GeneratorFunction]";

export default isGeneratorFunction;
