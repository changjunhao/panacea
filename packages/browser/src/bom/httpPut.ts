/**
 * Makes a `PUT` request to the passed URL.
 * @param url - The URL to make the request to.
 * @param data - The data to send as the request body.
 * @param callback - The callback to invoke when the request completes.
 * @param err - The callback to invoke when an error occurs.
 * @example
 * ```typescript
 * const password = 'fooBaz';
 * const data = JSON.stringify({
 *   id: 1,
 *   title: 'foo',
 *   body: 'bar',
 *   userId: 1
 * });
 * httpPut('https://jsonplaceholder.typicode.com/posts/1', data, request => {
 *   console.log(request.responseText);
 * });
 * ```
 * @since 0.1.3
 * @public
 * @category BOM
 */
const httpPut = (
  url: string | URL,
  data: string,
  callback: (request: XMLHttpRequest) => void,
  err: (request: XMLHttpRequest, event: ProgressEvent) => void = console.error
) => {
  const request = new XMLHttpRequest();
  request.open("PUT", url, true);
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.onload = () => callback(request);
  request.onerror = (event) => err(request, event);
  request.send(data);
};

export default httpPut;
