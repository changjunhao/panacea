/**
 * Returns the quarter and year to which the supplied date belongs to.
 * @param date - The date to check.
 * @returns The quarter and year to which the supplied date belongs to.
 * @example
 * ```typescript
 * quarterOfYear(new Date('07/10/2018')); // [ 3, 2018 ]
 * quarterOfYear(); // [ 2, 2022 ]
 * ```
 * @category Date
 * @public
 * @since 0.1.13
 */
const quarterOfYear = (date = new Date()) => [
  Math.ceil((date.getMonth() + 1) / 3),
  date.getFullYear(),
];

export default quarterOfYear;
