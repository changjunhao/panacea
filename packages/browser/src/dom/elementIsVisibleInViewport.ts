/**
 * Checks if the element specified is visible in the viewport.
 * @param el - Element to check.
 * @param partiallyVisible - Omit the second argument to determine if the element is entirely visible, or specify true to determine if it is partially visible.
 * @returns True if the element is visible in the viewport.
 * @example
 * ```typescript
 * // e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
 * elementIsVisibleInViewport(el); // false - (not fully visible)
 * elementIsVisibleInViewport(el, true); // true - (partially visible)
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const elementIsVisibleInViewport = (
  el: Element,
  partiallyVisible: boolean = false
): boolean => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

export default elementIsVisibleInViewport;
