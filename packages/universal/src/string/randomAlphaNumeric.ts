/**
 * Generates a random string with the specified length.
 * @param length - The length of the string to generate.
 * @returns The random string.
 * @example
 * ```ts
 * randomAlphaNumeric(5); // '0afad'
 * ```
 * @public
 * @category String
 * @since 0.1.10
 */
const randomAlphaNumeric = (length: number) => {
  let s = "";
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};

export default randomAlphaNumeric;
