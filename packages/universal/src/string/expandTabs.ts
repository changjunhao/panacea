/**
 * Convert tabs to spaces, where each tab corresponds to `count` spaces.
 * @param str - The string to convert.
 * @param count - The number of spaces to expand each tab to.
 * @returns The converted string.
 * @public
 * @example
 * ```typescript
 * expandTabs('\t\tlorem', 3); // '      lorem'
 * ```
 * @since 0.1.1
 * @category String
 */
const expandTabs = (str: string, count: number): string =>
  str.replace(/\t/g, " ".repeat(count));

export default expandTabs;
