const crypto = require("crypto");

/**
 * Creates a hash for a value using the SHA-256 algorithm. Returns a promise.
 * @param value - The value to hash.
 * @returns A promise that resolves to the hash.
 * @example
 * ```typescript
 * hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(
 *   console.log
 * );
 * // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
 * ```
 * @since 0.1.0
 * @category Crypto
 * @public
 */
const hashNode = (value: string) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(crypto.createHash("sha256").update(value).digest("hex")),
      0
    );
  });

export default hashNode;
