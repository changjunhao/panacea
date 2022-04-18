/**
 * Checks if the given argument is a string. Only works for string primitives.
 * @category Type
 * @param value - The value to check.
 * @returns True if the value is a string, false otherwise.
 * @example
 * ```typescript
 * isString('10'); // true
 * ```
 * @since 0.1.0
 * @public
 */
const isString: (value: any) => boolean = (value) => typeof value === "string";

export default isString;
