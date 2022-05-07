/**
 * Converts the values of RGB components to a hexadecimal color code.
 * @param r - The red component.
 * @param g - The green component.
 * @param b - The blue component.
 * @returns The hexadecimal color code.
 * @example
 * ```typescript
 * RGBToHex(255, 165, 1); // 'ffa501'
 * ```
 * @category String
 * @since 0.1.10
 * @public
 */
const RGBToHex = (r: number, g: number, b: number) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

export default RGBToHex;
