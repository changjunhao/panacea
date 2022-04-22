/**
 * Checks if the bottom of the page is visible.
 * @example
 * ```typescript
 * bottomVisible(); // true
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const bottomVisible = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

export default bottomVisible;
