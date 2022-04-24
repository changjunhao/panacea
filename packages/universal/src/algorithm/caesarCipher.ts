/**
 * Encrypts or decrypts a given string using the Caesar cipher.
 * @param str - The string to encrypt or decrypt.
 * @param shift - The amount of characters to shift.
 * @param decrypt - Whether to decrypt or encrypt.
 * @returns The encrypted or decrypted string.
 * @example
 * ```typescript
 * caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
 * caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'
 * ```
 * @category Algorithm
 * @since 0.1.1
 * @public
 */
const caesarCipher = (
  str: string,
  shift: number,
  decrypt: boolean = false
): string => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join("");
};

export default caesarCipher;
