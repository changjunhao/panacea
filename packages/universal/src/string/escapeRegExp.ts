/**
 * Escapes a string to use in a regular expression.
 * @param str - The string to escape.
 * @returns The escaped string.
 * @public
 * @example
 * ```typescript
 * escapeRegExp('(test)'); // \\(test\\)
 * ```
 * @since 0.1.1
 * @category String
 */
const escapeRegExp = (str: string): string =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default escapeRegExp;
