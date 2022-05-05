/**
 * Returns every `nth` element in an array.
 * @param arr - The array to process.
 * @param nth - The `nth` element to return.
 * @returns The `nth` element in the array.
 * @example
 * ```ts
 * everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
const everyNth = (arr: any[], nth: number) =>
  arr.filter((e, i) => i % nth === nth - 1);

export default everyNth;
