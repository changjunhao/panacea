/**
 * Gets the currently selected text.
 * @returns The currently selected text.
 * @example
 * ```typescript
 * getSelectedText(); // 'Lorem ipsum'
 * ```
 * @since 0.1.1
 * @category BOM
 * @public
 */
const getSelectedText = (): string | undefined =>
  window.getSelection()?.toString();

export default getSelectedText;
