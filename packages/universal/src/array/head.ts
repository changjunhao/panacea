/**
 * Returns the head of an array.
 * @param arr - The array to get the head of.
 * @returns The head of the array.
 * @example
 * ```typescript
 * head([1, 2, 3]); // 1
 * head([]); // undefined
 * head(null); // undefined
 * head(undefined); // undefined
 * ```
 * @category array
 * @since 0.1.4
 * @public
 */
const head = (arr: any[]): any => (arr && arr.length ? arr[0] : undefined);

export default head;
