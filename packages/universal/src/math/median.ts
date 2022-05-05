/**
 * Calculates the median of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The median of the array.
 * @example
 * ```typescript
 * median([5, 6, 50, 1, -5]); // 5
 * ```
 * @public
 * @category Math
 * @since 0.1.7
 */
const median = (arr: number[]) => {
  const mid = Math.floor(arr.length / 2);
  const nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

export default median;
