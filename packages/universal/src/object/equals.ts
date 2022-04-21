/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are equivalent, otherwise `false`.
 * @example
 * ```typescript
 * equals(
 *   { a: [2, { e: 3 }], b: [4], c: 'foo' },
 *   { a: [2, { e: 3 }], b: [4], c: 'foo' }
 * ); // true
 * equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
 * ```
 * @category Object
 * @since 0.1.0
 * @public
 */
const equals = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => equals(a[k], b[k]));
};

export default equals;
