/**
 * 检查给定的参数是否是symbol
 *
 * @category Type
 *
 * @param value - 要检查的值
 * @returns 如果是symbol则返回true，否则返回false
 *
 * @example
 * ```typescript
 * isSymbol(Symbol('x')) // => true
 * isSymbol(1) // => false
 * ```
 * @since 0.1.0
 * @public
 */
const isSymbol: (value: any) => boolean = (value) => typeof value === "symbol";

export default isSymbol;
