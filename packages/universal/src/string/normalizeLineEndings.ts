/**
 * Normalizes line endings in a string.
 * @param str - The string to normalize.
 * @param normalized - The normalized string.
 * @returns The normalized string.
 * @example
 * ```typescript
 * normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n');
 * // 'This\r\nis a\r\nmultiline\r\nstring.\r\n'
 * normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n', '\n');
 * // 'This\nis a\nmultiline\nstring.\n'
 * ```
 * @public
 * @category String
 * @since 0.1.1
 */
const normalizeLineEndings = (
  str: string,
  normalized: string = "\r\n"
): string => str.replace(/\r?\n/g, normalized);

export default normalizeLineEndings;
