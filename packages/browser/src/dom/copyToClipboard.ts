/**
 * Copies a string to the clipboard. Only works as a result of user action (i.e. inside a click event listener).
 * @param str - The string to copy.
 * @example
 * ```typescript
 * copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
 * ```
 * @alpha
 * @since 0.1.5
 * @category DOM
 */
const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  let selected: boolean | Range;
  const selection = document.getSelection();
  if (!selection) {
    selected = false;
  } else {
    selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
  }
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    selection!.removeAllRanges();
    selection!.addRange(selected);
  }
};

export default copyToClipboard;
