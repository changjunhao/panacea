/**
 * Checks if the passed value is primitive or not.
 * @category Type
 * @param value - The value to check.
 * @returns `true` if the value is primitive, `false` otherwise.
 * @example
 * ```typescript
 * isPrimitive(null); // => true
 * isPrimitive(undefined); // => true
 * isPrimitive(true); // => true
 * isPrimitive(1); // => true
 * isPrimitive([]); // => false
 * isPrimitive({}); // => false
 * ```
 * @public
 */
const isPrimitive: (value: any) => boolean = (value) => Object(value) !== value;

export default isPrimitive;
