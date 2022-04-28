/**
 * Returns all elements in an array except for the first one.
 * @param arr - The array to return the tail of.
 * @returns The tail of the array.
 * @example
 * ```typescript
 * tail([1, 2, 3]); // [2, 3]
 * tail([1]); // [1]
 * tail([]); // []
 * ```
 * @category Array
 * @public
 * @since 0.1.5
 */
const tail = (arr: any[]) => (arr.length > 1 ? arr.slice(1) : arr);

export default tail;
