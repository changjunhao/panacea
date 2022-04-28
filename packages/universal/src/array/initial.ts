/**
 * Returns all the elements of an array except the last one.
 * @param arr - The array to process.
 * @returns The array with the last element removed.
 * @example
 * ```typescript
 * initial([1, 2, 3]); // [1, 2]
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
const initial = (arr: any[]) => arr.slice(0, -1);

export default initial;
