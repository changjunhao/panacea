/**
 * Returns the current URL.
 * @returns The current URL.
 * @example
 * ```typescript
 * currentURL(); // http://localhost:8080/
 * ```
 * @category BOM
 * @since 0.1.1
 * @public
 */
const currentURL = () => window.location.href;

export default currentURL;
