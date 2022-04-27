/**
 * Converts a string to an array of characters.
 * @param s - The string to convert.
 * @returns An array of characters.
 * @example
 * ```typescript
 * toCharArray("Hello") // ["H", "e", "l", "l", "o"]
 * ```
 * @category String
 * @public
 * @since 0.1.4
 */
const toCharArray = (s: string): string[] => [...s];

export default toCharArray;
