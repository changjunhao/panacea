/**
 * Creates an element from a string (without appending it to the document). If the given string contains multiple elements, only the first one will be returned.
 * @param str - The string to create the element from.
 * @returns The created element, only the first one will be returned.
 * @example
 * ```typescript
 * const el = createElement(
 *   `<div class="container">
 *     <p>Hello!</p>
 *   </div>`
 * );
 * console.log(el.className); // 'container'
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const createElement = (str: string): Element | null => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

export default createElement;
