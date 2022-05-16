/**
 * Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.
 * @example
 * ```typescript
 * isBrowser(); // true (browser)
 * isBrowser(); // false (Node)
 * ```
 * @since 0.1.0
 * @category Environment
 * @public
 */
const isBrowser = (): boolean =>
  ![typeof window, typeof document].includes("undefined");

export default isBrowser;
