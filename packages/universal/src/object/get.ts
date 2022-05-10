/**
 * Retrieves a set of properties indicated by the given selectors from an object.
 * @param from - The object to retrieve the properties from.
 * @param selectors - The selectors to retrieve the properties from.
 * @returns The retrieved properties.
 * @example
 * ```ts
 * const obj = {
 *   selector: { to: { val: 'val to select' } },
 *   target: [1, 2, { a: 'test' }],
 * };
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // ['val to select', 1, 'test']
 * ```
 * @public
 * @since 0.1.13
 * @category Object
 */
const get = (from: Record<string, any>, ...selectors: string[]) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from)
  );

export default get;
