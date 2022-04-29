/**
 * Hides all the elements specified.
 * @param el - The elements to hide.
 * @example
 * ```typescript
 * hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page
 * ```
 * @since 0.1.5
 * @category DOM
 * @public
 */
const hide = (...el: HTMLElement[]) =>
  [...el].forEach((e) => {
    e.style.display = "none";
  });

export default hide;
