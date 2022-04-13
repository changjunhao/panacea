/**
 * 返回字符串的长度（以字节为单位）
 *
 * @category String
 *
 * @remarks
 * 将给定的字符串转换为 Blob 对象。
 *
 * 使用 Blob.size 获取字符串的长度（以字节为单位）
 *
 * @param str - 要计算的字符串
 * @returns 字符串的长度（以字节为单位）
 *
 * @example
 * ```typescript
 *  byteSize('你好') // 6
 * ```
 *
 * @public
 */
const byteSize: (str: string) => number = (str) => new Blob([str]).size;

export default byteSize;
