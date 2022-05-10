/**
 * Deeply merges two objects, using a function to handle keys present in both.
 * @param a - The first object.
 * @param b - The second object.
 * @param fn - The function to use to handle keys present in both objects.
 * @returns The merged object.
 * @public
 * @example
 * ```typescript
 * deepMerge(
 *   { a: true, b: { c: [1, 2, 3] } },
 *   { a: false, b: { d: [1, 2, 3] } },
 *   (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))
 * );
 * // { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }
 * ```
 * @since 0.1.13
 * @category Object
 */
const deepMerge = (
  a: Record<string, any>,
  b: Record<string, any>,
  fn: (key: string, a: any, b: any) => Record<string, any>
) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {}
  );

export default deepMerge;
