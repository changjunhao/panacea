import toRGBArray from "./toRGBArray";

/**
 * Converts an `rgb()` color string to an object with the values of each color.
 * @param rgbStr - The `rgb()` color string to convert.
 * @returns An object with the values of each color.
 * @example
 * ```typescript
 * toRGBObject('rgb(255, 0, 0)'); // { red: 255, green: 0, blue: 0 }
 * ```
 * @public
 * @category String
 * @since 0.1.7
 */
const toRGBObject = (rgbStr: string) => {
  const rgbArr = toRGBArray(rgbStr);
  if (rgbArr && rgbArr.length === 3) {
    return {
      red: rgbArr[0],
      green: rgbArr[1],
      blue: rgbArr[2],
    };
  }
  return null;
};

export default toRGBObject;
