/**
 * Creates a new string with the results of calling a provided function on every character in the given string.
 * @param str - The string to map.
 * @param fn - The function to call for each character.
 * @returns The new string.
 * @example
 * ```ts
 * mapString('abc', (c) => c.toUpperCase()); // 'ABC'
 * ```
 * @category String
 * @public
 * @since 0.1.16
 */
const mapString = (
  str: string,
  fn: (c: string, i: number, str: string) => string
) =>
  str
    .split("")
    .map((c, i) => fn(c, i, str))
    .join("");

export default mapString;
