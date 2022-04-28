/**
 * Retrieves the value of a CSS rule for the specified element.
 * @param el - The element to get the style for.
 * @param ruleName - The name of the CSS rule.
 * @returns The value of the CSS rule.
 * @example
 * ```typescript
 * getStyle(document.querySelector('p'), 'fontSize'); // '16px'
 * ```
 * @public
 * @since 0.1.2
 * @category DOM
 */
const getStyle = (
  el: HTMLElement,
  ruleName: Exclude<
    keyof CSSStyleDeclaration,
    | "length"
    | "parentRule"
    | "getPropertyPriority"
    | "getPropertyValue"
    | "item"
    | "removeProperty"
    | "setProperty"
    | number
    | typeof Symbol.iterator
  >
): string => getComputedStyle(el)[ruleName];

export default getStyle;
