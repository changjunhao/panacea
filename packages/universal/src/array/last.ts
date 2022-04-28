/**
 * Returns the last element in an array.
 * @param arr - The array to query.
 * @returns The last element in the array.
 * @example
 * ```typescript
 * last([1, 2, 3]); // 3
 * last([]); // undefined
 * last(null); // undefined
 * last(undefined); // undefined
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
const last = (arr: any[]) =>
  arr && arr.length ? arr[arr.length - 1] : undefined;

export default last;
