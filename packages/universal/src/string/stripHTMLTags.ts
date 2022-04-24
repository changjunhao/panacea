/**
 * Removes HTML/XML tags from string.
 * @param str - string to remove tags from
 * @returns string without tags
 * @example
 * ```typescript
 * stripHTMLTags('<p>Hello</p>'); // 'Hello'
 * ```
 * @public
 * @category String
 * @since 0.1.1
 */
const stripHTMLTags = (str: string): string => str.replace(/<[^>]*>/g, "");

export default stripHTMLTags;
