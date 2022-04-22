/**
 * Decodes a string of data which has been encoded using base-64 encoding.
 * @param string - The string to decode.
 * @returns The decoded string.
 * @throws If the input string is not valid base-64 encoded data.
 * @example
 * ```typescript
 * atob('Zm9vYmFy'); // 'foobar'
 * ```
 * @since 0.1.0
 * @category String
 * @public
 */
const atob = (string: string) => Buffer.from(string, "base64").toString("utf8");

export default atob;
