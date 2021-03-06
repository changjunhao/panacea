/**
 * Calculates the sum of two or more numbers/arrays.
 * @param arr - The array of numbers to sum.
 * @returns The sum of the numbers in the array.
 * @example
 * ```ts
 * sum(1, 2, 3, 4); // 10
 * sum(...[1, 2, 3, 4]); // 10
 * ```
 * @public
 * @category Math
 * @since 0.1.8
 */
const sum = (...arr: number[]) => [...arr].reduce((acc, val) => acc + val, 0);

export default sum;
