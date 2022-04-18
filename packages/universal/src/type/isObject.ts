/**
 * Checks if the passed value is an object or not.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true when the passed value is an object, false otherwise.
 * @example
 * ```typescript
 * isObject([1, 2, 3, 4]); // true
 * isObject([]); // true
 * isObject(['Hello!']); // true
 * isObject({ a: 1 }); // true
 * isObject({}); // true
 * isObject(true); // false
 * ```
 * @public
 */
const isObject: (value: any) => boolean = (value) => value === Object(value);

export default isObject;
