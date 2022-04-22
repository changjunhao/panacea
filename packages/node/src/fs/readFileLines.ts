import fs, { PathOrFileDescriptor } from "fs";

/**
 * Reads the contents of a file and splits it into lines, returns an array of lines from the specified file.
 * @param filename - The path to the file to read.
 * @returns An array of lines from the specified file.
 * @throws If the file cannot be read.
 * @example
 * ```typescript
 * /**
 * * contents of test.txt :
 * * line1
 * * line2
 * * line3
 * * ___________________________
 * * /
 * let arr = readFileLines('test.txt');
 * console.log(arr); // ['line1', 'line2', 'line3']
 * ```
 * @since 0.1.0
 * @category fs
 * @public
 */
const readFileLines = (filename: PathOrFileDescriptor): string[] =>
  fs.readFileSync(filename).toString("utf8").split("\n");

export default readFileLines;
