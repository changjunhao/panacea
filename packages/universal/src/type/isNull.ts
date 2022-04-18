/**
 * 检查指定的值是否为null
 *
 * @category Type
 *
 * @param value - 要检查的值
 * @returns 如果值为null，则返回true
 *
 * @example
 * ```typescript
 * isNull(null) // true
 * isNull(undefined) // false
 * ```
 * @since 0.1.0
 * @public
 */

const isNull: (value: any) => boolean = (value) => value === null;

export default isNull;
