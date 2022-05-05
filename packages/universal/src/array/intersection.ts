/**
 * Returns the elements that exist in both arrays, filtering duplicate values.
 * @param a - First array.
 * @param b - Second array.
 * @returns An array of elements in both `a` and `b`.
 * @example
 * ```ts
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 * ```
 * @public
 * @category Array
 * @since 0.1.8
 */
const intersection = (
  a: (string | number | boolean)[],
  b: (string | number | boolean)[]
) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};

export default intersection;
