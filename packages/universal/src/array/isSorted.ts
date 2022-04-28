/**
 * Checks if a numeric array is sorted.
 * @param arr - The array to check.
 * @returns `1` if the array is ascending order, `-1` if the array is descending order, `0` otherwise.
 * @example
 * ```typescript
 * isSorted([0, 1, 2, 2]); // 1
 * isSorted([4, 3, 2]); // -1
 * isSorted([4, 3, 5]); // 0
 * isSorted([4]); // 0
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
const isSorted = (arr: number[]) => {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};

export default isSorted;
