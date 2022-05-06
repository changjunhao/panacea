/**
 * Negates a predicate function.
 * @param func - The predicate function to negate.
 * @returns A negated predicate function.
 * @example
 * ```ts
 * [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
 * ```
 * @public
 * @category Function
 * @since 0.1.9
 */
const negate =
  (func: (...args: any) => boolean) =>
  (...args: any) =>
    !func(...args);

export default negate;
