/**
 * Finds the distance from a given element to the top of the document.
 * @param el - Element to find the distance from.
 * @returns The distance from the top of the document to the element.
 * @example
 * ```typescript
 * getVerticalOffset('.my-element'); // 120
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const getVerticalOffset = (el: HTMLElement): number => {
  let offset = el.offsetTop;
  let elDuplicate = el;
  while (elDuplicate.offsetParent) {
    elDuplicate = elDuplicate.offsetParent as HTMLElement;
    offset += elDuplicate.offsetTop;
  }
  return offset;
};

export default getVerticalOffset;
