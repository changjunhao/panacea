/**
 * Counts the occurrences of a substring in a given string.
 * @param str - The string to search.
 * @param searchValue - The substring to search for.
 * @returns The number of occurrences of the substring in the string.
 * @example
 * ```ts
 * countSubstrings('tiktok tok tok tik tok tik', 'tik'); // 3
 * countSubstrings('tutut tut tut', 'tut'); // 4
 * ```
 * @public
 * @since 0.1.16
 * @category String
 */
const countSubstrings = (str: string, searchValue: string) => {
  let count = 0;
  let i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};

export default countSubstrings;
