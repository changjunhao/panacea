const fs = require("fs");

/**
 * Writes a JSON object to a file.
 * @param obj - The object to write.
 * @param filename - The file to write to.
 * @example
 * ```typescript
 * JSONToFile({ test: 'is passed' }, 'testJsonFile');
 * ```
 * @category FS
 * @since 0.1.0
 * @public
 */
const JSONToFile = (obj: Record<string, any>, filename: string): void =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

export default JSONToFile;
