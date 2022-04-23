/**
 * Toggles a class for an HTML element.
 * @param el - The target element.
 * @param className - The class to toggle.
 * @returns The element.
 * @example
 * ```typescript
 * toggleClass(document.body, 'active');
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const toggleClass = (el: Element, className: string): boolean =>
  el.classList.toggle(className);

export default toggleClass;
