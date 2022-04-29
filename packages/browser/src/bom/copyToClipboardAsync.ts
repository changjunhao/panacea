/**
 * Copies a string to the clipboard, returning a promise that resolves when the clipboard's contents have been updated.
 * @param str - The string to copy.
 * @returns A promise that resolves when the clipboard has been updated.
 * @public
 * @example
 * ```typescript
 * copyToClipboardAsync('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
 * ```
 * @public
 * @category BOM
 * @since 0.1.5
 */
const copyToClipboardAsync = (str: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject(new Error("The Clipboard API is not available."));
};

export default copyToClipboardAsync;
