/**
 * Unescapes escaped HTML characters.
 * @param str - The string to unescape.
 * @returns The unescaped string.
 * @public
 * @example
 * ```typescript
 * unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;');
 * // '<a href="#">Me & you</a>'
 * ```
 * @since 0.1.6
 * @category String
 */
const unescapeHTML = (str: string) =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (tag) =>
      ({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&#39;": "'",
        "&quot;": '"',
      }[tag]!)
  );

export default unescapeHTML;
