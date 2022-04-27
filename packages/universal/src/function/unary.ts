/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 * @param fn - The function to wrap.
 * @returns A function that will only accept one argument.
 * @example
 * ```typescript
 * ['1', '2', '3'].map(unary(parseInt)); // [1, 2, 3]
 * ```
 * @public
 * @category Function
 * @since 0.1.4
 */
const unary =
  (fn: (arg: any) => any): any =>
  (val: any) =>
    fn(val);

export default unary;
