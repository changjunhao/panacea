/**
 * Checks if `localStorage` is enabled.
 * @example
 * ```typescript
 * isLocalStorageEnabled(); // true, if localStorage is accessible
 * ```
 * @category BOM
 * @since 0.1.0
 * @public
 */
const isLocalStorageEnabled = (): boolean => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, "");
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export default isLocalStorageEnabled;
