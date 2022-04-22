/**
 * Removes an element from the DOM.
 * @param el - The element to remove.
 * @returns The element that was removed.
 * @example
 * ```typescript
 * removeElement(document.querySelector('#my-element'));
 * // Removes #my-element from the DOM
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const removeElement = (el: Element): Element => el.parentNode!.removeChild(el);

export default removeElement;
