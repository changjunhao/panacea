/**
 * Determines if the current runtime environment is Node.js.
 * @example
 * ```typescript
 * isNode(); // true (Node)
 * isNode(); // false (browser)
 * ```
 * @category Environment
 * @since 0.1.0
 * @public
 */
const isNode = (): boolean =>
  typeof process !== "undefined" &&
  !!process.versions &&
  !!process.versions.node;

export default isNode;
