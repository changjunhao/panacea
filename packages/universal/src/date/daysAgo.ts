/**
 * Calculates the date of `n` days ago from today as a string representation.
 * @param n - The number of days ago.
 * @returns The date of `n` days ago as a string representation.
 * @example
 * ```ts
 * daysAgo(20); // 2020-09-16 (if current date is 2020-10-06)
 * ```
 * @public
 * @category Date
 * @since 0.1.11
 */
const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - Math.abs(n));
  return d.toISOString().split("T")[0];
};

export default daysAgo;
