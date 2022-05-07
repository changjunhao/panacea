/**
 * Gets a random element from an array.
 * @param arr - The array to sample from.
 * @returns A random element from the array.
 * @example
 * ```ts
 * sample([3, 7, 9, 11]); // 9
 * ```
 * @public
 * @category Array
 * @since 0.1.10
 */
const sample = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default sample;
