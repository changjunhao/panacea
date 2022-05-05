/**
 * Returns an array of elements that appear in both arrays.
 * @param arr - The first array.
 * @param values - The second array.
 * @returns An array of elements that appear in both arrays.
 * @example
 * ```ts
 * similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
function similarity<T>(arr: T[], values: T[]): T[] {
  return arr.filter((v) => values.includes(v));
}

export default similarity;
