/**
 * Checks if the `parent` element contains the `child` element.
 * @param parent - The parent element.
 * @param child - The child element.
 * @returns `true` if the `parent` element contains the `child` element, otherwise `false`.
 * @example
 * ```typescript
 * elementContains(
 *   document.querySelector('head'),
 *   document.querySelector('title')
 * );
 * // true
 * elementContains(document.querySelector('body'), document.querySelector('body'));
 * // false
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const elementContains = (parent: Element, child: Element): boolean =>
  parent !== child && parent.contains(child);

export default elementContains;
