/**
 * Removes non-printable ASCII characters.
 * @param str - String to remove non-printable ASCII characters from.
 * @returns String with non-printable ASCII characters removed.
 * @example
 * ```typescript
 * removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const removeNonASCII = (str: string) => str.replace(/[^\x20-\x7E]/g, "");

export default removeNonASCII;
