/**
 * Takes a number and returns it in the specified currency formatting.
 * @param n - the number to format
 * @param currency - the currency to use
 * @param LanguageFormat - the language format to use
 * @returns the formatted currency string
 * @example
 * ```typescript
 * toCurrency(123456.789, 'EUR');
 * // €123,456.79  | currency: Euro | currencyLangFormat: Local
 * toCurrency(123456.789, 'USD', 'en-us');
 * // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
 * toCurrency(123456.789, 'USD', 'fa');
 * // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
 * toCurrency(322342436423.2435, 'JPY');
 * // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
 * toCurrency(322342436423.2435, 'JPY', 'fi');
 * // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
 * ```
 * @since 0.1.0
 * @category String
 * @public
 */
const toCurrency = (n: number, currency: string, LanguageFormat?: string) =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency,
  }).format(n);

export default toCurrency;
