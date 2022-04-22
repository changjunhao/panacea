/**
 * Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.
 * @param string - An optional string to encode. If not specified, an empty string is used.
 * @returns The base-64 encoded string.
 * @example
 * ```typescript
 * btoa('foobar'); // 'Zm9vYmFy'
 * btoa(''); // ''
 * ```
 * @since 0.1.0
 * @category String
 * @public
 */
const btoa = (string: string) => Buffer.from(string, "utf8").toString("base64");

export default btoa;
