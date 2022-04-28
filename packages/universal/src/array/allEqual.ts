/**
 * Checks if all elements in an array are equal.
 * @param arr - The array to check.
 * @returns True if all elements are equal, false otherwise.
 * @example
 * ```typescript
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
function allEqual<T extends number | string>(arr: T[]): boolean {
  return arr.every((val) => val === arr[0]);
}

export default allEqual;
