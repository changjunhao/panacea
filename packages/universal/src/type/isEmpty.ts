/**
 * Checks if the a value is an empty object/collection, has no enumerable properties or is any type that is not considered a collection.
 * @param value - The value to check.
 * @returns True if the value is an empty object/collection, false otherwise.
 * @example
 * ```typescript
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty(''); // true
 * isEmpty([1, 2]); // false
 * isEmpty({ a: 1, b: 2 }); // false
 * isEmpty('text'); // false
 * isEmpty(123); // true - type is not considered a collection
 * isEmpty(true); // true - type is not considered a collection
 * ```
 * @category Type
 * @since 0.1.0
 * @public
 */
const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  const keys = Object.keys(value);
  if (keys.length) return false;
  return !value.length;
};

export default isEmpty;
