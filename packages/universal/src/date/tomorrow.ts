/**
 * Results in a string representation of tomorrow's date.
 * @example
 * ```typescript
 * tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
 * ```
 * @returns Tomorrow's date.
 * @public
 * @since 0.1.9
 * @category Date
 */
const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

export default tomorrow;
