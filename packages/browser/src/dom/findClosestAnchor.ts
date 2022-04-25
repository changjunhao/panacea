/**
 * Finds the anchor node closest to the given `node`, if any.
 * @param node - The node to search from.
 * @returns The anchor node if found, or `null` if not.
 * @example
 * ```typescript
 * findClosestAnchor(document.querySelector('a > span')); // a
 * ```
 * @since 0.1.2
 * @category DOM
 * @public
 */
const findClosestAnchor = (node: Node) => {
  for (let n = node; n.parentNode; n = n.parentNode)
    if (n.nodeName.toLowerCase() === "a") return n;
  return null;
};

export default findClosestAnchor;
