/**
 * Compacts whitespaces in a string.
 * @param str - The string to compact.
 * @returns The compacted string.
 * @example
 * ```typescript
 * compactWhitespace('  a  b  ') // 'a b'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const compactWhitespace = (str: string): string => str.replace(/\s{2,}/g, " ");

export default compactWhitespace;
