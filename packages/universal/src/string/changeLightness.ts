import toHSLArray from "./toHSLArray";

/**
 * Changes the lightness value of an `hsl()` color string.
 * @param delta - The amount to change the lightness by.
 * @param hslStr - The `hsl()` color string to change.
 * @returns The changed `hsl()` color string.
 * @example
 * ```typescript
 * changeLightness(10, 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 60%)'
 * changeLightness(-10, 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 40%)'
 * ```
 * @category String
 * @public
 * @since 0.1.7
 */
const changeLightness = (delta: number, hslStr: string) => {
  const hslArray = toHSLArray(hslStr);
  if (hslArray) {
    const [hue, saturation, lightness] = hslArray;

    const newLightness = Math.max(0, Math.min(100, lightness + delta));

    return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
  }
  return null;
};

export default changeLightness;
