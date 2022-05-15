/**
 * Creates an object containing the parameters of the current URL.
 * @param url - The URL to parse.
 * @returns An object containing the parameters of the current URL.
 * @public
 * @example
 * ```typescript
 * getURLParameters('google.com'); // {}
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * // {name: 'Adam', surname: 'Smith'}
 * ```
 * @since 0.1.15
 * @category String
 */
const getURLParameters = (url: string) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split("=");
    // key = v.slice(0, v.indexOf('='))
    // value = v.slice(v.indexOf('=') + 1)
    return {
      ...a,
      [key]: value,
    };
  }, {} as { [key: string]: string });

export default getURLParameters;
