/**
 * Checks if all elements in an array are unique.
 * @param arr - The array to check.
 * @returns True if all elements are unique, false otherwise.
 * @example
 * ```ts
 * allUnique([1, 2, 3, 4]); // true
 * allUnique([1, 1, 2, 3]); // false
 * ```
 * @public
 * @category Array
 * @since 0.1.11
 */
const allUnique = (arr: any[]) => arr.length === new Set(arr).size;

export default allUnique;
