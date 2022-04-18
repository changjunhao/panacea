/**
 * 用零向左填充指定长度的数字
 *
 * @category String
 *
 * @param n - number to pad
 * @param l - length of the resulting string
 * @returns padded number
 *
 * @example
 * ```typescript
 * padNumber(1, 3) // returns '001'
 * padNumber(1234, 6) // '001234'
 * ```
 * @since 0.1.0
 * @public
 */
const padNumber: (n: number, l: number) => string = (n, l) =>
  `${n}`.padStart(l, "0");

export default padNumber;
