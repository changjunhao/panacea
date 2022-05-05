/**
 * Filters out the elements of an array that have one of the specified values.
 * @param arr - The array to filter.
 * @param args - The values to exclude.
 * @returns The filtered array.
 * @example
 * ```ts
 * without([2, 1, 2, 3], 1, 2); // [3]
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
const without = (
  arr: (number | string | boolean)[],
  ...args: (number | string | boolean)[]
) => arr.filter((v) => !args.includes(v));

export default without;
