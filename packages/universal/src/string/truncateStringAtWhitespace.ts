/**
 * Truncates a string up to specified length, respecting whitespace when possible.
 * @param str - The string to truncate.
 * @param lim - The maximum length of the string.
 * @param ending - The string to append to the end of the truncated string.
 * @returns The truncated string.
 * @public
 * @example
 * ```typescript
 * truncateStringAtWhitespace('short', 10); // 'short'
 * truncateStringAtWhitespace('not so short', 10); // 'not so...'
 * truncateStringAtWhitespace('trying a thing', 10); // 'trying...'
 * truncateStringAtWhitespace('javascripting', 10); // 'javascr...'
 * ```
 * @since 0.1.1
 * @category String
 */
const truncateStringAtWhitespace = (
  str: string,
  lim: number,
  ending: string = "..."
): string => {
  if (str.length <= lim) return str;
  const lastSpace = str.slice(0, lim - ending.length + 1).lastIndexOf(" ");
  return str.slice(0, lastSpace > 0 ? lastSpace : lim - ending.length) + ending;
};

export default truncateStringAtWhitespace;
