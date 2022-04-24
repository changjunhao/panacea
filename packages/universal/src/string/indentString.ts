/**
 * Indents each line in the provided string.
 * @param str - The string to indent.
 * @param count - The number of spaces to indent each line.
 * @param indent - The indentation character.
 * @returns The indented string.
 * @public
 * @example
 * ```typescript
 * indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
 * indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
 * ```
 * @category String
 * @since 0.1.1
 */
const indentString = (
  str: string,
  count: number,
  indent: string = " "
): string => str.replace(/^/gm, indent.repeat(count));

export default indentString;
