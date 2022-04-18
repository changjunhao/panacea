/**
 * 检查指定的值是否为undefined
 *
 * @category Type
 *
 * @param value - 要检查的值
 * @returns 如果值为undefined，则返回true
 *
 * @example
 * ```typescript
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * ```
 * @since 0.1.0
 * @public
 */
const isUndefined: (value: any) => boolean = (value) => value === undefined;

export default isUndefined;
