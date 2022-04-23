/**
 * Inserts an HTML string before the start of the specified element.
 * @param el - The element to insert the string before.
 * @param htmlString - The HTML string to insert.
 * @returns The element.
 * @example
 * ```typescript
 * insertBefore(document.getElementById('myId'), '<p>before</p>');
 * // <p>before</p> <div id="myId">...</div>
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const insertBefore = (el: Element, htmlString: string) =>
  el.insertAdjacentHTML("beforebegin", htmlString);

export default insertBefore;
