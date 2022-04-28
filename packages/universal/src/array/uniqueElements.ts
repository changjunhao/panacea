/**
 * Finds all unique values in an array.
 * @param arr - The array to find unique values in.
 * @returns An array of unique values.
 * @example
 * ```typescript
 * uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
function uniqueElements<T extends number | string>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export default uniqueElements;
