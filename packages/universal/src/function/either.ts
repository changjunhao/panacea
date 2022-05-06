/**
 * Checks if at least one function returns `true` for a given set of arguments.
 * @param f - The functions to check.
 * @param g - The arguments to check.
 * @returns `true` if at least one function returns `true` for the given arguments.
 * @example
 * ```ts
 * const isEven = num => num % 2 === 0;
 * const isPositive = num => num > 0;
 * const isPositiveOrEven = either(isPositive, isEven);
 * isPositiveOrEven(4); // true
 * isPositiveOrEven(3); // true
 * ```
 * @category Function
 * @since 0.1.9
 * @public
 */
const either =
  (f: (...args: any) => boolean, g: (...args: any) => boolean) =>
  (...args: any) =>
    f(...args) || g(...args);

export default either;
