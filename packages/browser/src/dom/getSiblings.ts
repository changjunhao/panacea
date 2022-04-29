/**
 * Returns an array containing all the siblings of the given element.
 * @param el - The element to get all the siblings from.
 * @returns An array of all the element's siblings.
 * @public
 * @example
 * ```typescript
 * getSiblings(document.querySelector('head')); // ['body']
 * ```
 * @since 0.1.5
 * @category DOM
 */
const getSiblings = (el: Node) => {
  const parent = el.parentNode;
  if (parent) {
    return [...(parent.childNodes as NodeList)].filter((node) => node !== el);
  }
  return [];
};

export default getSiblings;
