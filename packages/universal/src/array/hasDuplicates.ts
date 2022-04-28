/**
 * Checks if there are duplicate values in a flat array.
 * @param arr - The array to check.
 * @returns True if there are duplicate values, false otherwise.
 * @example
 * ```typescript
 * hasDuplicates([0, 1, 1, 2]); // true
 * hasDuplicates([0, 1, 2, 3]); // false
 * ```
 * @category Array
 * @public
 * @since 0.1.5
 */
function hasDuplicates<T extends number | string>(arr: T[]) {
  return new Set(arr).size !== arr.length;
}

export default hasDuplicates;
