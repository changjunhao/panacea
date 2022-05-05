/**
 * Changes a function that accepts an array into a variadic function.
 * @param fn - The function to convert.
 * @returns A variadic function.
 * @example
 * ```ts
 * const Pall = collectInto(Promise.all.bind(Promise));
 * let p1 = Promise.resolve(1);
 * let p2 = Promise.resolve(2);
 * let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
 * Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
 * ```
 * @public
 * @category Function
 * @since 0.1.8
 */
const collectInto =
  (fn: (args: any[]) => any) =>
  (...args: any[]) =>
    fn(args);

export default collectInto;
