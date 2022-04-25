/**
 * Adds a class to an HTML element.
 * @param el - The element to add the class to.
 * @param className - The class to add.
 * @returns The element with the class added.
 * @example
 * ```typescript
 * addClass(document.querySelector('p'), 'special');
 * // The paragraph will now have the 'special' class
 * ```
 * @category DOM
 * @since 0.1.2
 * @public
 */
const addClass = (el: HTMLElement, className: string) =>
  el.classList.add(className);

export default addClass;
