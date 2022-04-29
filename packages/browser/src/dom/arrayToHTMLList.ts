/**
 * Converts the given array elements into `<li>` tags and appends them to the list of the given id.
 * @param arr - The array of elements to be converted.
 * @param listID - The id of the list to which the elements should be appended.
 * @example
 * ```typescript
 * arrayToHTMLList(['item 1', 'item 2'], 'myListID');
 * ```
 * @public
 * @since 0.1.5
 * @category DOM
 */
const arrayToHTMLList = (arr: string[], listID: string) => {
  const listDOM = document.querySelector(`#${listID}`);
  if (!listDOM) {
    throw new Error(`Could not find list with id ${listID}`);
  }
  listDOM.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
};

export default arrayToHTMLList;
