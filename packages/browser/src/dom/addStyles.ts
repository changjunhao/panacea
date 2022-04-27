/**
 * Adds the provided styles to the given HTML element.
 * @param el - The element to add styles to.
 * @param styles - The styles to add.
 * @example
 * ```typescript
 * addStyles(document.getElementById('my-element'), {
 *   background: 'red',
 *   color: '#ffff00',
 *   fontSize: '3rem'
 * });
 * ```
 * @public
 * @since 0.1.3
 * @category DOM
 */
const addStyles = (
  el: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
): Partial<CSSStyleDeclaration> => Object.assign(el.style, styles);

export default addStyles;
