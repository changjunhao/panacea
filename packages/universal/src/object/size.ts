/**
 * Gets the size of an array, object or string.
 * @param val - The value to get the size of.
 * @returns The size of the value.
 * @example
 * ```ts
 * size([1, 2, 3, 4, 5]); // 5
 * size('size'); // 4
 * size({ one: 1, two: 2, three: 3 }); // 3
 * ```
 * @public
 * @category Object
 * @since 0.1.10
 */
const size = (val: any) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;

export default size;
