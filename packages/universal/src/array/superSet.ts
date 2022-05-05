/**
 * Checks if the first iterable is a superset of the second one, excluding duplicate values.
 * @param a - The first iterable.
 * @param b - The second iterable.
 * @returns `true` if the first iterable is a superset of the second one, excluding duplicate values.
 * @example
 * ```typescript
 * superSet(new Set([1, 2, 3, 4]), new Set([1, 2])); // true
 * superSet(new Set([1, 2, 3, 4]), new Set([1, 5])); // false
 * ```
 * @public
 * @category Array
 * @since 0.1.8
 */
const superSet = (
  a: Iterable<number | string>,
  b: Iterable<number | string>
) => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...sB].every((v) => sA.has(v));
};

export default superSet;
