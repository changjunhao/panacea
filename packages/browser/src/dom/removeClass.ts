/**
 * Removes a class from an HTML element.
 * @param el - The HTML element.
 * @param className - The name of the class to remove.
 * @example
 * ```typescript
 * removeClass(document.querySelector('p.special'), 'special');
 * // The paragraph will not have the 'special' class anymore
 * ```
 * @public
 * @since 0.1.2
 * @category DOM
 */
const removeClass = (el: HTMLElement, className: string) =>
  el.classList.remove(className);

export default removeClass;
