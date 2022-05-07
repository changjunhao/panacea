/**
 * Removes accents from strings.
 * @param str - The string to remove accents from.
 * @returns The string without accents.
 * @example
 * ```typescript
 * removeAccents('Antoine de Saint-Exupéry'); // 'Antoine de Saint-Exupery'
 * ```
 * @category String
 * @public
 * @since 0.1.10
 */
const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default removeAccents;
