/**
 * Results in a string representation of yesterday's date.
 * @example
 * ```typescript
 * yesterday(); // 2018-10-17 (if current date is 2018-10-18)
 * ```
 * @public
 * @since 0.1.9
 * @category Date
 */
const yesterday = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
};

export default yesterday;
