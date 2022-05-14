/**
 * Creates a generator, that generates all dates in the given range using the given step.
 * @param start - The start date of the range.
 * @param end - The end date of the range.
 * @param step - The step.
 * @returns The generator.
 * @example
 * ```typescript
 * [...dateRangeGenerator(new Date('2021-06-01'), new Date('2021-06-04'))];
 * // [ 2021-06-01, 2021-06-02, 2021-06-03 ]
 * ```
 * @since 0.1.14
 * @public
 * @category Date
 */
function* dateRangeGenerator(
  start: Date,
  end: Date,
  step = 1
): Generator<Date> {
  const d = start;
  while (d < end) {
    yield new Date(d);
    d.setDate(d.getDate() + step);
  }
}

export default dateRangeGenerator;
