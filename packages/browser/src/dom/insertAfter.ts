/**
 * Inserts an HTML string after the end of the specified element.
 * @param el - The element to insert the string after.
 * @param text - The HTML string to insert.
 * @returns The element.
 * @example
 * ```typescript
 * insertAfter(document.getElementById('myId'), '<p>after</p>');
 * // <div id="myId">...</div><p>after</p>
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const insertAfter = (el: Element, text: string) =>
  el.insertAdjacentHTML("afterend", text);

export default insertAfter;
