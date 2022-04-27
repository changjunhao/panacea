/**
 * Initializes and fills an array with the specified values.
 * @param n - The length of the array.
 * @param val - The value to fill the array with.
 * @returns The array.
 * @example
 * ```typescript
 * initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
 * ```
 * @category Array
 * @public
 * @since 0.1.4
 */
const initializeArrayWithValues = (n: number, val: any = 0): any[] =>
  Array.from({ length: n }).fill(val);

export default initializeArrayWithValues;
