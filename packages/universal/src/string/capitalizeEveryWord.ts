/**
 * Capitalizes the first letter of every word in a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 * @example
 * ```typescript
 * capitalizeEveryWord('hello world') // 'Hello World'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const capitalizeEveryWord = (str: string): string =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

export default capitalizeEveryWord;
