/**
 * Converts a string to a URL-friendly slug.
 * @param str - The string to convert.
 * @returns The slugified string.
 * @example
 * ```typescript
 * slugify('Hello World!'); // 'hello-world'
 * ```
 * @since 0.1.3
 * @category String
 * @public
 */
const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default slugify;
