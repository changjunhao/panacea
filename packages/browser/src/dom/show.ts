/**
 * Shows all the elements specified.
 * @param el - The elements to show.
 * @example
 * ```typescript
 * show(...document.querySelectorAll('img'));
 * // Shows all <img> elements on the page
 * ```
 * @since 0.1.5
 * @category DOM
 * @public
 */
const show = (...el: HTMLElement[]) =>
  [...el].forEach((e) => {
    e.style.display = "";
  });

export default show;
