/**
 * Makes a DELETE request to the passed URL.
 * @param url - URL to send the DELETE request to.
 * @param callback - Callback to handle the response.
 * @param err - Callback to handle an error.
 * @example
 * ```typescript
 * httpDelete('https://jsonplaceholder.typicode.com/posts/1', request => {
 *   console.log(request.responseText);
 * }); // Logs: {}
 * ```
 * @since 0.1.2
 * @public
 * @category BOM
 */
const httpDelete = (
  url: string | URL,
  callback: (request: XMLHttpRequest) => void,
  err: (request: XMLHttpRequest, event: ProgressEvent) => void = console.error
) => {
  const request = new XMLHttpRequest();
  request.open("DELETE", url, true);
  request.onload = () => callback(request);
  request.onerror = (event) => err(request, event);
  request.send();
};

export default httpDelete;
