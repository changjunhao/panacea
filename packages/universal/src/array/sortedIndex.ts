/**
 * Finds the lowest index at which a value should be inserted into an array in order to maintain its sorting order.
 * @param arr - The sorted array to inspect.
 * @param n - The value to evaluate.
 * @returns The lowest index at which `n` should be inserted into `arr` in order to maintain the sort order.
 * @example
 * ```ts
 * sortedIndex([5, 3, 2, 1], 4); // 1
 * sortedIndex([30, 50], 40); // 1
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
const sortedIndex = (arr: number[], n: number) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

export default sortedIndex;
