/**
 * Gets the current URL without any parameters or fragment identifiers.
 * @param url - The URL to parse.
 * @returns The current URL without any parameters or fragment identifiers.
 * @public
 * @example
 * ```typescript
 * getBaseURL('http://url.com/page?name=Adam&surname=Smith');
 * // 'http://url.com/page'
 * ```
 * @since 0.1.5
 * @category String
 */
const getBaseURL = (url: string): string => url.replace(/[?#].*$/, "");

export default getBaseURL;
