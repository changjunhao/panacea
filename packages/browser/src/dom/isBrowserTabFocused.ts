/**
 * Checks if the browser tab of the page is focused.
 * @returns True if the browser tab is focused, false otherwise.
 * @example
 * ```typescript
 * isBrowserTabFocused(); // true or false
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const isBrowserTabFocused = () => !document.hidden;

export default isBrowserTabFocused;
