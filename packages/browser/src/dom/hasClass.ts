/**
 * Checks if the given element has the specified class.
 * @param el - The element to check.
 * @param className - The class to check for.
 * @returns `true` if the element has the class, `false` otherwise.
 * @public
 * @example
 * ```typescript
 * hasClass(document.querySelector('p.special'), 'special'); // true
 * ```
 * @since 0.1.3
 * @category DOM
 */
const hasClass = (el: HTMLElement, className: string): boolean =>
  el.classList.contains(className);

export default hasClass;
