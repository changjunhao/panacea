/**
 * Returns a function that takes one argument and runs a callback if it's truthy or returns it if falsy.
 * @param pred - A predicate function.
 * @param whenTrue - A callback function to run if the predicate is truthy.
 * @returns A function that takes one argument and runs a callback if it's truthy or returns it if falsy.
 * @example
 * ```typescript
 * const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
 * doubleEvenNumbers(2); // 4
 * doubleEvenNumbers(1); // 1
 * ```
 * @category Function
 * @since 0.1.3
 * @public
 */
const when: (
  pred: (x: any) => boolean,
  whenTrue: (x: any) => any
) => (x: any) => any = (pred, whenTrue) => (x) => pred(x) ? whenTrue(x) : x;

export default when;
