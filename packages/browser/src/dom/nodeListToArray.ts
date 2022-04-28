/**
 * Converts a `NodeList` to an array.
 * @param nodeList - the `NodeList` to convert
 * @returns an array of `Node`s
 * @public
 * @example
 * ```typescript
 * nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
 * ```
 * @since 0.1.4
 * category DOM
 */
// @ts-ignore
const nodeListToArray = (nodeList: NodeList) => [...nodeList];

export default nodeListToArray;
