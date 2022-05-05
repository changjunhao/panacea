/**
 * Calculates the product of two or more numbers/arrays.
 * @param arr - The array of numbers to multiply.
 * @returns The product of all the numbers in the array.
 * @example
 * ```typescript
 * prod(1, 2, 3, 4); // 24
 * prod(...[1, 2, 3, 4]); // 24
 * ```
 * @public
 * @category Math
 * @since 0.1.7
 */
const prod = (...arr: number[]) => [...arr].reduce((acc, val) => acc * val, 1);

export default prod;
