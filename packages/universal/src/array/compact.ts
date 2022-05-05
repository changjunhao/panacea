/**
 * Removes falsy values from an array.
 * @param arr - The array to compact.
 * @returns The compacted array.
 * @example
 * ```typescript
 * compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
 * // [ 1, 2, 3, 'a', 's', 34 ]
 * ```
 * @category Array
 * @public
 * @since 0.1.7
 */
const compact = (arr: any[]) => arr.filter(Boolean);

export default compact;
