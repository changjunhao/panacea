/**
 * Finds the closest matching node starting at the given `node`.
 * @param node - Starting node
 * @param selector - Selector to match
 * @returns Closest node or null
 * @example
 * ```typescript
 * findClosestMatchingNode(document.querySelector('span'), 'body'); // body
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 *
 */
const findClosestMatchingNode = (node: Element, selector: string) => {
  // @ts-ignore
  for (let n = node; n.parentNode; n = n.parentNode)
    if (n.matches && n.matches(selector)) return n;
  return null;
};

export default findClosestMatchingNode;
