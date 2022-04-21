import crypto from "crypto";

/**
 * Generates a random UUID.
 * @example
 * ```typescript
 * UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
 * ```
 * @category Random
 * @since 0.1.0
 * @public
 */
const UUIDGeneratorNode = (): string =>
  // @ts-ignore
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    // eslint-disable-next-line no-bitwise
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );

export default UUIDGeneratorNode;
