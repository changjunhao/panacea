/**
 * Converts an `rgb()` color string to an array of values.
 * @param rgbStr - The `rgb()` color string to convert.
 * @returns The RGB values.
 * @public
 * @example
 * ```typescript
 * toRGBArray('rgb(255, 12, 0)'); // [255, 12, 0]
 * ```
 * @since 0.1.6
 * @category String
 */
const toRGBArray = (rgbStr: string): number[] | undefined =>
  rgbStr.match(/\d+/g)?.map(Number);

export default toRGBArray;
