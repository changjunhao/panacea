/**
 * Returns every element that exists in any of the two arrays at least once.
 * @param a - The first array.
 * @param b - The second array.
 * @returns The union of the two arrays.
 * @example
 * ```typescript
 * union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]
 * ```
 * @category Array
 * @public
 * @since 0.1.1
 */
const union = (a: any[], b: any[]) => Array.from(new Set([...a, ...b]));

export default union;
