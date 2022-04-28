/**
 * Finds all the ancestors of an element up until the element matched by the specified selector.
 * @param el - Element to start from
 * @param selector - Stop at this element
 * @returns The matched elements
 * @example
 * getParentsUntil(document.querySelector('#home-link'), 'header');
 * // [header, nav, ul, li]
 * @since 0.1.4
 * @public
 * @category DOM
 */
const getParentsUntil = (el: Node, selector: string) => {
  const parents: Element[] = [];
  let elParentNode: Element = el.parentNode as Element;
  while (elParentNode && typeof elParentNode.matches === "function") {
    parents.unshift(elParentNode);
    if (elParentNode.matches(selector)) return parents;
    elParentNode = elParentNode.parentNode as Element;
  }
  return [];
};

export default getParentsUntil;
