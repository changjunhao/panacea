/**
 * Checks if at least one element of `values` is included in `arr`.
 * @param arr - The array to check.
 * @param values - The values to check for.
 * @returns `true` if at least one value is included in `arr`, otherwise `false`.
 * @example
 * ```typescript
 * includesAny([1, 2, 3, 4], [2, 9]); // true
 * includesAny([1, 2, 3, 4], [8, 9]); // false
 * ```
 * @since 0.1.5
 * @category Array
 * @public
 */
const includesAny = (arr: any[], values: any[]) =>
  values.some((v: any) => arr.includes(v));

export default includesAny;
