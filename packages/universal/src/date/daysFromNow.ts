/**
 * Calculates the date of n days from today as a string representation.
 * @param n - The number of days from today.
 * @returns The date of n days from today as a string representation.
 * @example
 * ```typescript
 * daysFromNow(5); // 2020-10-13 (if current date is 2020-10-08)
 * ```
 * @category Date
 * @public
 * @since 0.1.11
 */
const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split("T")[0];
};

export default daysFromNow;
