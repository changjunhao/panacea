/**
 * Truncates a string up to a specified length.
 * @param string - The string to truncate.
 * @param num - The maximum length of the string.
 * @returns The truncated string.
 * @example
 * ```typescript
 * truncateString("Hello World", 5); // "Hello..."
 * ```
 * @category String
 * @public
 */
const truncateString = (string: string, num: number): string => {
  if (num <= 0) {
    return "";
  }
  return string.length > num
    ? `${string.slice(0, num > 3 ? num - 3 : num)}...`
    : string;
};

export default truncateString;
