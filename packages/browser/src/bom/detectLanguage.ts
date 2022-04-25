/**
 * Detects the preferred language of the current user.
 * @param defaultLang - The default language to use if none is found.
 * @returns The language preferred by the user or the default language if none is found.
 * @example
 * ```typescript
 * detectLanguage(); // 'nl-NL'
 * ```
 * @category BOM
 * @public
 * @since 0.1.2
 */
const detectLanguage = (defaultLang: string = "US"): string =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLang;

export default detectLanguage;
