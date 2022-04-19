/**
 * Checks if the given element is focused.
 * @param el - Element to check.
 * @returns True if the element is focused.
 * @example
 * ```typescript
 * elementIsFocused(el); // true if the element is focused
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const elementIsFocused = (el: Element): boolean =>
  el === document.activeElement;

export default elementIsFocused;
