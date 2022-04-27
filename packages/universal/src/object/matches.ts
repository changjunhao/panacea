/**
 * Compares two objects to determine if the first one contains equivalent property values to the second one.
 * @param obj - The object to compare.
 * @param source - The source object to compare against.
 * @returns `true` if the objects are equivalent, otherwise `false`.
 * @example
 * ```typescript
 * matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
 * // true
 * matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true });
 * // false
 * ```
 * @category Object
 * @public
 * @since 0.1.4
 */
const matches = (obj: Record<string, any>, source: Record<string, any>) =>
  Object.keys(source).every(
    (key) =>
      Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === source[key]
  );

export default matches;
