/**
 * Smooth-scrolls to the top of the page.
 * @example
 * ```typescript
 * scrollToTop(); // Smooth-scrolls to the top of the page
 * ```
 * @public
 * @since 0.1.2
 * @category DOM
 */
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

export default scrollToTop;
