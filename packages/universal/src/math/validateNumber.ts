/**
 * Checks if the given value is a number.
 * @param n - The value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 * @example
 * ```ts
 * validateNumber('10'); // true
 * validateNumber('a'); // false
 * ```
 * @public
 * @category Math
 * @since 0.1.15
 */
const validateNumber = (n: any) => {
  const num = parseFloat(n);
  // eslint-disable-next-line eqeqeq
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
};

export default validateNumber;
