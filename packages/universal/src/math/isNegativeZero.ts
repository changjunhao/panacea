/**
 * Checks if the given value is equal to negative zero (`-0`).
 * @param val - The value to check.
 * @returns `true` if the value is negative zero, otherwise `false`.
 * @example
 * ```ts
 * isNegativeZero(-0); // true
 * isNegativeZero(0); // false
 * ```
 * @public
 * @category Math
 * @since 0.1.12
 */
const isNegativeZero = (val: number) => val === 0 && 1 / val === -Infinity;

export default isNegativeZero;
