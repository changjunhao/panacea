/**
 * Returns all the ancestors of an element from the document root to the given element.
 * @param el - The element to get the ancestors of.
 * @returns The ancestors of the element.
 * @public
 * @example
 * ```typescript
 * getAncestors(document.querySelector('nav'));
 * // [document, html, body, header, nav]
 * ```
 * @since 0.1.3
 * @category DOM
 */
const getAncestors = (el: HTMLElement): HTMLElement[] => {
  const ancestors: HTMLElement[] = [];
  while (el) {
    ancestors.unshift(el);
    // eslint-disable-next-line no-param-reassign
    el = el.parentNode as HTMLElement;
  }
  return ancestors;
};

export default getAncestors;
