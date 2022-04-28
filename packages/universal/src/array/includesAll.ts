/**
 * Checks if all the elements in `values` are included in `arr`.
 * @param arr - The array to check.
 * @param values - The values to check for.
 * @returns `true` if all the elements in `values` are included in `arr`.
 * @example
 * ```typescript
 * includesAll([1, 2, 3, 4], [1, 4]); // true
 * includesAll([1, 2, 3, 4], [1, 5]); // false
 * ```
 * @category Array
 * @since 0.1.5
 * @public
 */
const includesAll = (arr: any[], values: any[]) =>
  values.every((v) => arr.includes(v));

export default includesAll;
