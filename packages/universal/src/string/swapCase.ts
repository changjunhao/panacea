/**
 * Creates a string with uppercase characters converted to lowercase and vice versa.
 * @param str - The string to convert.
 * @returns The converted string.
 * @example
 * ```ts
 * swapCase('Hello World') // 'hELLO wORLD'
 * ```
 * @since 0.1.16
 * @category String
 * @public
 */
const swapCase = (str: string) =>
  [...str]
    .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join("");

export default swapCase;
