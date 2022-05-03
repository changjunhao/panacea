/**
 * Finds the highest index at which a value should be inserted into an array in order to maintain its sort order.
 * @param arr - The array to inspect.
 * @param n - The value to evaluate.
 * @returns Returns the index at which value should be inserted into array in order to maintain its sort order.
 * @example
 * ```typescript
 * sortedLastIndex([10, 20, 30, 30, 40], 30); // 4
 * ```
 * @public
 * @category Array
 * @since 0.1.8
 */
const sortedLastIndex = (arr: number[], n: number) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr
    .reverse()
    .findIndex((el) => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};

export default sortedLastIndex;
