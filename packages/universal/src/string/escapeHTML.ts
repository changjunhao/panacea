/**
 * Escapes a string for use in HTML.
 * @param str - The string to escape.
 * @returns The escaped string.
 * @public
 * @example
 * ```typescript
 * escapeHTML('<a href="#">Me & you</a>');
 * // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 * ```
 * @since 0.1.6
 * @category String
 */
const escapeHTML = (str: string) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag]!)
  );

export default escapeHTML;
