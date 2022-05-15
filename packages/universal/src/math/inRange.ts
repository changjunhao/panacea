/**
 * Checks if the given number falls within the given range.
 * @param n - The number to check.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @returns `true` if the number is within the range, otherwise `false`.
 * @example
 * ```ts
 * inRange(3, 2, 5); // true
 * inRange(3, 4); // true
 * inRange(2, 3, 5); // false
 * inRange(3, 2); // false
 * ```
 * @public
 * @category Math
 * @since 0.1.15
 */
const inRange = (n: number, start: number, end?: number) => {
  // eslint-disable-next-line no-param-reassign
  if (end !== undefined && start > end) [end, start] = [start, end];
  return end === undefined ? n >= 0 && n < start : n >= start && n < end;
};

export default inRange;
