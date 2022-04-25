/**
 * Returns the scroll position of the current page.
 * @param el - Optional element to measure.
 * @returns The scroll position of the current page.
 * @example
 * ```typescript
 * getScrollPosition(); // {x: 0, y: 200}
 * ```
 * @since 0.1.2
 * @category DOM
 * @public
 */
const getScrollPosition = (
  el: Window | Element = window
): { x: number; y: number } => ({
  x: "scrollLeft" in el ? el.scrollLeft : el.scrollX,
  y: "scrollTop" in el ? el.scrollTop : el.scrollY,
});

export default getScrollPosition;
