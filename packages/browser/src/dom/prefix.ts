/**
 * Prefixes a CSS property based on the current browser.
 * @param prop - The unprefixed property name.
 * @returns The prefixed property name.
 * @example
 * ```typescript
 * prefix('appearance');
 * // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
 * ```
 * @alpha
 * @category DOM
 * @since 0.1.5
 */
const prefix = (
  prop: Exclude<
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
) => {
  const capitalizedProp: string = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ["", "webkit", "moz", "ms", "o"];
  const i = prefixes.findIndex(
    (item: string) =>
      // @ts-ignore
      typeof document.body.style[item ? item + capitalizedProp : prop] !==
      "undefined"
  );
  if (i !== -1) {
    return i === 0 ? prop : prefixes[i] + capitalizedProp;
  }
  return null;
};

export default prefix;
