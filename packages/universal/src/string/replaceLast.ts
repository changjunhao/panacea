/**
 * Replaces the last occurence of a pattern in a string.
 * @param str - The string to search.
 * @param pattern - The pattern to search for.
 * @param replacement - The string to replace the pattern with.
 * @returns The resulting string.
 * @example
 * ```typescript
 * replaceLast('abcabdef', 'ab', 'gg'); // 'abcggdef'
 * replaceLast('abcabdef', /ab/, 'gg'); // 'abcggdef'
 * replaceLast('abcabdef', 'ad', 'gg'); // 'abcabdef'
 * replaceLast('abcabdef', /ad/, 'gg'); // 'abcabdef'
 * ```
 * @since 0.1.16
 * @category String
 * @public
 */
const replaceLast = (
  str: string,
  pattern: string | RegExp,
  replacement: string
) => {
  const match =
    typeof pattern === "string"
      ? pattern
      : (str.match(new RegExp(pattern.source, "g")) || []).slice(-1)[0];
  if (!match) return str;
  const last = str.lastIndexOf(match);
  return last !== -1
    ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
    : str;
};

export default replaceLast;
