/**
 * Makes a `POST` request to the passed URL.
 * @param url - URL to send the request to.
 * @param data - Data to send.
 * @param callback - Callback to invoke when the request completes.
 * @param err - Callback to invoke when an error occurs.
 * @example
 * ```typescript
 * const newPost = {
 *   userId: 1,
 *   id: 1337,
 *   title: 'Foo',
 *   body: 'bar bar bar'
 * };
 * const data = JSON.stringify(newPost);
 * httpPost(
 *   'https://jsonplaceholder.typicode.com/posts',
 *   data,
 *   console.log
 * );
 * ```
 * @public
 * @since 0.1.3
 * @category BOM
 */
const httpPost = (
  url: string | URL,
  data: string,
  callback: (responseText: string) => void,
  err: (request: XMLHttpRequest, event: ProgressEvent) => void = console.error
) => {
  const request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.onload = () => callback(request.responseText);
  request.onerror = (event) => err(request, event);
  request.send(data);
};

export default httpPost;
