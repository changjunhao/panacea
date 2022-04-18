/**
 * Checks if the given argument is a native boolean element.
 * @category Type
 * @param value - The value to check.
 * @returns If the given argument is a native boolean element.
 * @example
 * ```typescript
 * isBoolean(null); // false
 * isBoolean(false); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isBoolean: (value: any) => boolean = (value) =>
  typeof value === "boolean";

export default isBoolean;
