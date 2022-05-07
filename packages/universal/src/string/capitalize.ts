/**
 * Capitalizes the first letter of a string.
 * @param first - The string to capitalize.
 * @param rest - The rest of the string.
 * @param lowerRest - Whether to lowercase the rest of the string.
 * @returns The capitalized string.
 * @example
 * ```ts
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'Foobar'
 * ```
 * @public
 * @category String
 * @since 0.1.10
 */
const capitalize = ([first, ...rest]: string, lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

export default capitalize;
