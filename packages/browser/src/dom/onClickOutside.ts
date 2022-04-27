/**
 * Runs the callback whenever the user clicks outside of the specified element.
 * @param element - The element to listen to for clicks.
 * @param callback - The callback to call when the user clicks.
 * @example
 * ```typescript
 * onClickOutside('#my-element', () => console.log('Hello'));
 * // Will log 'Hello' whenever the user clicks outside of #my-element
 * ```
 * @public
 * @since 0.1.3
 * @category DOM
 */
const onClickOutside = (element: Node, callback: () => void) => {
  document.addEventListener("click", (e: Event) => {
    if (!element.contains(e.target as Node)) callback();
  });
};

export default onClickOutside;
