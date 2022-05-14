/**
 * Converts a date to extended ISO format (ISO 8601), including timezone offset.
 * @param date - Date to convert.
 * @returns Extended ISO format string.
 * @public
 * @example
 * ```typescript
 * toISOStringWithTimezone(new Date()); // '2022-05-14T21:47:13+08:00'
 * ```
 * @since 0.1.14
 * @category Date
 */
const toISOStringWithTimezone = (date: Date) => {
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? "+" : "-";
  const pad = (n: number) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}${diff}${pad(tzOffset / 60)}:${pad(tzOffset % 60)}`;
};

export default toISOStringWithTimezone;
