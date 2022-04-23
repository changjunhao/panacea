/**
 * Sets the value of a CSS rule for the specified HTML element.
 * @param el - The element to set the style for.
 * @param rule - The name of the CSS rule.
 * @param val - The value to set the rule to.
 * @example
 * ```typescript
 * setStyle(document.querySelector('p'), 'fontSize', '20px');
 * // The first <p> element on the page will have a font-size of 20px
 * ```
 * @since 0.1.1
 * @category DOM
 * @public
 */
const setStyle = (
  el: HTMLElement,
  rule: Exclude<keyof CSSStyleDeclaration, "length" | "parentRule">,
  val: string | null
) => {
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  el.style[rule] = val;
};

export default setStyle;
