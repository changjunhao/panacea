/**
 * 将波浪号路径转换为绝对路径
 *
 * @category String
 *
 * @remarks
 * 波浪号路径是指以 `~` 开头的路径，例如 `~/foo/bar`。
 *
 * @param path - 波浪号路径
 * @returns 转换后的绝对路径
 *
 * @example
 * ```typescript
 * const path = untildify('~/foo/bar');
 * console.log(path); // /home/username/foo/bar
 * ```
 *
 * @public
 */
const untildify: (path: string) => string = (path) =>
  // eslint-disable-next-line global-require
  path.replace(/^~($|\/|\\)/, `${require("os").homedir()}$1`);

export default untildify;
