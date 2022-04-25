/**
 * Wraps a string to a given number of characters using a string break character.
 * @param str - The string to wrap.
 * @param max - The maximum number of characters per line.
 * @param br - The string break character.
 * @returns The wrapped string.
 * @example
 * ```typescript
 * wordWrap(
 *   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.',
 *   32
 * );
 * // 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nFusce tempus.'
 * wordWrap(
 *   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.',
 *   32,
 *   '\r\n'
 * );
 * // 'Lorem ipsum dolor sit amet,\r\nconsectetur adipiscing elit.\r\nFusce tempus.'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const wordWrap = (str: string, max: number, br: string = "\n"): string =>
  str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, "g"),
    `$1${br}`
  );

export default wordWrap;
