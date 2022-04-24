/**
 * Pads a string on both sides with the specified character, if it's shorter than the specified `length`.
 * @param str - The string to pad.
 * @param length - The length of the resulting string.
 * @param char - The character to pad with.
 * @returns The padded string.
 * @example
 * ```typescript
 * pad('cat', 8); // '  cat   '
 * pad(String(42), 6, '0'); // '004200'
 * pad('foobar', 3); // 'foobar'
 * ```
 * @category String
 * @public
 * @since 0.1.1
 */
const pad = (str: string, length: number, char: string = " "): string =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

export default pad;
