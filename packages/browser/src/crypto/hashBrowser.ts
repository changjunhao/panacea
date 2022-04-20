/**
 * Creates a hash for a value using the SHA-256 algorithm. Returns a promise.
 * @param value - The value to hash.
 * @returns A promise that resolves to the hash of the value.
 * @example
 * ```typescript
 * hashBrowser(
 *   JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
 * ).then(console.log);
 * // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
 * ```
 * @since 0.1.0
 * @category Crypto
 * @public
 */
const hashBrowser = (value: string) =>
  crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)).then((h) => {
    const hexes = [];
    const view = new DataView(h);
    for (let i = 0; i < view.byteLength; i += 4)
      hexes.push(`00000000${view.getUint32(i).toString(16)}`.slice(-8));
    return hexes.join("");
  });

export default hashBrowser;
