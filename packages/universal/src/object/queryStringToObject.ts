/**
 * Generates an object from the given query string or URL.
 * @param url - The URL to parse.
 * @returns The object.
 * @example
 * ```ts
 * queryStringToObject('https://google.com?page=1&count=10');
 * // {page: '1', count: '10'}
 * ```
 * @since 0.1.16
 * @category Object
 * @public
 */
const queryStringToObject = (url: string): { [key: string]: string } =>
  [...new URLSearchParams(url.split("?")[1])].reduce((a, [k, v]) => {
    // eslint-disable-next-line no-param-reassign
    a[k] = v;
    return a;
  }, {} as { [key: string]: string });

export default queryStringToObject;
