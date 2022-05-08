/**
 * Gets the name of the weekday from a Date object.
 * @param date - The Date object.
 * @param locale - The locale to use.
 * @returns The name of the weekday.
 * @public
 * @example
 * ```ts
 * dayName(new Date()); // 'Saturday'
 * dayName(new Date('09/23/2020'), 'de-DE'); // 'Samstag'
 * ```
 * @category Date
 * @since 0.1.11
 */
const dayName = (date: Date, locale?: string) =>
  date.toLocaleDateString(locale, { weekday: "long" });

export default dayName;
