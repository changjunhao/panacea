import fs, { PathLike } from "fs";

/**
 * Creates a directory if it does not exist.
 * @param dir - The directory to create.
 * @example
 * ```typescript
 * createDirIfNotExists('test');
 * // creates the directory 'test', if it doesn't exist
 * ```
 * @category FS
 * @since 0.1.0
 * @public
 */
const createDirIfNotExists = (dir: PathLike): void =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

export default createDirIfNotExists;
