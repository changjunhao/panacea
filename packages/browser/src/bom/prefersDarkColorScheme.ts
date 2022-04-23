/**
 * Checks if the user color scheme preference is `dark`.
 * @returns `true` if the user color scheme preference is `dark`.
 * @example
 * ```typescript
 * prefersDarkColorScheme(); // true
 * ```
 * @since 0.1.1
 * @category BOM
 * @public
 */
const prefersDarkColorScheme = (): boolean =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default prefersDarkColorScheme;
