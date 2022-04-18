/**
 * Checks if the provided value is an object created by the Object constructor.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is an object created by the Object constructor, else false.
 * @example
 * ```typescript
 * isPlainObject({ a: 1 }); // true
 * isPlainObject(new Map()); // false
 * ```
 * @since 0.1.0
 * @public
 */
const isPlainObject: (value: any) => boolean = (value) =>
  !!value && typeof value === "object" && value.constructor === Object;

export default isPlainObject;
