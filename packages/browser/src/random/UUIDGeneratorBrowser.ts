/**
 * Generates a UUID in a browser.
 * @example
 * ```typescript
 * UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
 * ```
 * @category Random
 * @since 0.1.0
 * @public
 */
const UUIDGeneratorBrowser = (): string =>
  // @ts-ignore
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

export default UUIDGeneratorBrowser;
