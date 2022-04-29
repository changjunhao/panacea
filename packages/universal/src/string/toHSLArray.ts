/**
 * Converts an `hsl()` color string to an array of values.
 * @param hslStr - The `hsl()` color string to convert.
 * @returns The HSL values.
 * @public
 * @example
 * ```typescript
 * toHSLArray('hsl(50, 10%, 10%)'); // [50, 10, 10]
 * ```
 * @since 0.1.6
 * @category String
 */
const toHSLArray = (hslStr: string): number[] | undefined =>
  hslStr.match(/\d+/g)?.map(Number);

export default toHSLArray;
