/**
 * Creates an array of key-value pair arrays from an object.
 * @param obj - The object to convert to pairs.
 * @returns An array of key-value pair arrays.
 * @example
 * ```typescript
 * objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
 * ```
 * @category Object
 * @public
 * @since 0.1.3
 */
const objectToPairs = (obj: Record<string, any>) => Object.entries(obj);

export default objectToPairs;
