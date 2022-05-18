/**
 * Finds all the indexes of a substring in a given string.
 * @param str - The string to search in.
 * @param searchValue - The substring to search for.
 * @returns An array of indexes of the substring in the string.
 * @example
 * ```ts
 * [...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')]; // [0, 15, 23]
 * [...indexOfSubstrings('tutut tut tut', 'tut')]; // [0, 2, 6, 10]
 * [...indexOfSubstrings('hello', 'hi')]; // []
 * ```
 * @public
 * @since 0.1.16
 * @category String
 */
function* indexOfSubstrings(str: string, searchValue: string) {
  let i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) {
      yield r;
      i = r + 1;
    } else return;
  }
}

export default indexOfSubstrings;
