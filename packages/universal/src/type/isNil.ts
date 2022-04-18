/**
 * 检查指定的值是否为 null 或 undefined
 *
 * @category Type
 *
 * @param value - 要检查的值
 * @returns 如果值为null或undefined，则返回true，否则返回false
 *
 * @example
 * ```typescript
 * isNil(null); // => true
 * isNil(undefined); // => true
 * isNil(0); // => false
 * ```
 * @since 0.1.0
 * @public
 */
const isNil: (value: any) => boolean = (value) =>
  value === undefined || value === null;

export default isNil;
