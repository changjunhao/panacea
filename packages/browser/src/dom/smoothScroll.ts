/**
 * Smoothly scrolls the element on which it's called into the visible area of the browser window.
 * @param element - The element to scroll into the visible area of the browser window.
 * @example
 * ```typescript
 * smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
 * smoothScroll('.fooBar');
 * // scrolls smoothly to the first element with a class of fooBar
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const smoothScroll = (element: keyof HTMLElementTagNameMap | string) => {
  document.querySelector(element)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default smoothScroll;
