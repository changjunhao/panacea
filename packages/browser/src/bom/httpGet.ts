/**
 * Makes a `GET` request to the passed URL.
 * @param url - The URL to make the request to.
 * @param callback - The callback to invoke when the request completes
 * @param err - The callback to invoke if the request fails
 * @example
 * ```typescript
 * httpGet(
 *   'https://jsonplaceholder.typicode.com/posts/1',
 *   console.log
 * );
 * ```
 * @public
 * @since 0.1.3
 * @category BOM
 */
const httpGet = (
  url: string | URL,
  callback: (responseText: string) => void,
  err: (request: XMLHttpRequest, event: ProgressEvent) => void = console.error
) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = (event) => err(request, event);
  request.send();
};

export default httpGet;
