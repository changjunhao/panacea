/**
 * Extends a 3-digit color code to a 6-digit color code.
 * @param shortHex - The 3-digit color code.
 * @returns The 6-digit color code.
 * @example
 * ```ts
 * extendHex('#f0') // '#ff00f0'
 * extendHex('05a'); // '#0055aa'
 * ```
 * @since 0.1.16
 * @category String
 * @public
 */
const extendHex = (shortHex: string) =>
  `#${shortHex
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map((x) => x + x)
    .join("")}`;

export default extendHex;
