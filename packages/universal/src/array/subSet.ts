/**
 * Checks if the first iterable is a subset of the second one, excluding duplicate values.
 * @param a - The first iterable.
 * @param b - The second iterable.
 * @returns `true` if the first iterable is a subset of the second one, excluding duplicate values.
 * @example
 * ```typescript
 * subSet(new Set([1, 2]), new Set([1, 2, 3, 4])); // true
 * subSet(new Set([1, 5]), new Set([1, 2, 3, 4])); // false
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
const subSet = (a: Iterable<number | string>, b: Iterable<number | string>) => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...sA].every((v) => sB.has(v));
};

export default subSet;
