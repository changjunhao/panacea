/**
 * Returns the nth element of an array.
 * @param arr - The array to get the element from.
 * @param n - The index of the element to get.
 * @returns The nth element of the array.
 * @example
 * ```ts
 * nthElement(['a', 'b', 'c'], 1); // 'b'
 * nthElement(['a', 'b', 'b'], -3); // 'a'
 * ```
 * @public
 * @category Array
 * @since 0.1.7
 */
const nthElement = (arr: any[], n = 0) =>
  (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];

export default nthElement;
