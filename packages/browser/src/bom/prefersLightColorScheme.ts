/**
 * Checks if the user color scheme preference is `light`.
 * @returns `true` if the user color scheme preference is `light`.
 * @example
 * ```typescript
 * prefersLightColorScheme(); // true
 * ```
 * @since 0.1.1
 * @category BOM
 * @public
 */
const prefersLightColorScheme = (): boolean =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

export default prefersLightColorScheme;
