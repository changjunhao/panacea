/**
 * Checks if `sessionStorage` is enabled.
 * @example
 * ```typescript
 * isSessionStorageEnabled(); // true, if sessionStorage is accessible
 * ```
 * @category BOM
 * @since 0.1.0
 * @public
 */
const isSessionStorageEnabled = (): boolean => {
  try {
    const key = `__storage__test`;
    window.sessionStorage.setItem(key, "");
    window.sessionStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export default isSessionStorageEnabled;
