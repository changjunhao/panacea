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
 * @since 0.1.6
 * @deprecated since 0.1.8 - Use `import { getURLParameters } from panacea-core`.
 * @category BOM
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
