/**
 * Splits a multiline string into an array of lines.
 * @param str - The string to split.
 * @returns The array of lines.
 * @public
 * @example
 * ```typescript
 * splitLines('This\nis a\nmultiline\nstring.\n');
 * // ['This', 'is a', 'multiline', 'string.' , '']
 * ```
 * @category String
 * @since 0.1.10
 */
const splitLines = (str: string) => str.split(/\r?\n/);

export default splitLines;
