/**
 * 用指定的掩码字符替换除最后 num 个字符之外的所有字符
 *
 * @category String
 *
 * @param cc - 待替换的数字
 * @param mask - 掩码字符
 * @param num - 最后保留的字符数
 * @returns 替换后的字符串
 *
 * @example
 * ```typescript
 * mask('123456789', '*', 3) // '******789'
 * ```
 * @since 0.1.0
 * @public
 */
const mask: (cc: number, num?: number, mask?: string) => string = (
  cc,
  num = 4,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  mask = "*"
) => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);

export default mask;
