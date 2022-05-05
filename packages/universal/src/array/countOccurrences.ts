/**
 * Counts the occurrences of a value in an array.
 * @param arr - The array to search.
 * @param val - The value to search for.
 * @returns The number of occurrences of the value in the array.
 * @example
 * ```ts
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 * ```
 * @public
 * @category Array
 * @since 0.1.8
 */
function countOccurrences<T>(arr: T[], val: T): number {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}

export default countOccurrences;
