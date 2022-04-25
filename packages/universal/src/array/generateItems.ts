/**
 * Generates an array with the given amount of items, using the given function.
 * @param n - The amount of items to generate.
 * @param fn - The function to use to generate the items.
 * @returns The generated array.
 * @example
 * ```typescript
 * generateItems(10, Math.random);
 * // [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
 * ```
 * @category Array
 * @public
 * @since 0.1.3
 */
function generateItems<T>(n: number, fn: (i: number) => T): T[] {
  return Array.from({ length: n }, (_, i) => fn(i));
}

export default generateItems;
