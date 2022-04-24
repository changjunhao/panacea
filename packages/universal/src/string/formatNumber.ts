/**
 * Formats a number using the local number format order.
 * @param num - The number to format.
 * @returns The formatted number.
 * @example
 * ```typescript
 * formatNumber(123456); // '123,456' in `en-US`
 * formatNumber(15675436903); // '15.675.436.903' in `de-DE`
 * ```
 * @category String
 * @public
 * @since 0.1.1
 */
const formatNumber = (num: number): string => num.toLocaleString();

export default formatNumber;
