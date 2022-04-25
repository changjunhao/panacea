/**
 * Returns a string with whitespaces removed.
 * @param str - The string to remove whitespaces from.
 * @returns The string with whitespaces removed.
 * @example
 * ```typescript
 * removeWhitespace('  foo  '); // 'foo'
 * removeWhitespace('Lorem ipsum.\n Dolor sit amet. ');
 * // 'Loremipsum.Dolorsitamet.'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const removeWhitespace = (str: string) => str.replace(/\s+/g, "");

export default removeWhitespace;
