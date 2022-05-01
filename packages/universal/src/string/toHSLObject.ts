import toHSLArray from "./toHSLArray";

/**
 * Converts an `hsl()` color string to an object with the values of each color.
 * @param hslStr - The `hsl()` color string to convert.
 * @returns An object with the values of each color.
 * @example
 * ```typescript
 * toHSLObject('hsl(0, 100%, 50%)');
 * // { hue: 0, saturation: 100, lightness: 50 }
 * ```
 * @since 0.1.7
 * @category String
 * @public
 */
const toHSLObject = (hslStr: string) => {
  const hslArray = toHSLArray(hslStr);
  if (hslArray && hslArray.length === 3) {
    const [hue, saturation, lightness] = hslArray;
    return { hue, saturation, lightness };
  }
  return null;
};

export default toHSLObject;
