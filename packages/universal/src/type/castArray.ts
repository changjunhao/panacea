/**
 * Casts the provided value as an array if it's not one.
 * @category Type
 * @param value - The value to cast as an array.
 * @returns The value as an array.
 * @example
 * ```typescript
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(null); // [null]
 * castArray(undefined); // [undefined]
 * ```
 * @public
 */
const castArray: (value: any) => any[] = (value) =>
  Array.isArray(value) ? value : [value];

export default castArray;
