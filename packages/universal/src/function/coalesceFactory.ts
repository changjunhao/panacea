/**
 * Customizes a coalesce function that returns the first argument which is true based on the given validator.
 * @param valid - A validator function that returns true if the argument is valid.
 * @returns A coalesce function that returns the first argument which is true based on the given validator.
 * @example
 * ```typescript
 * const customCoalesce = coalesceFactory(
 *   v => ![null, undefined, '', NaN].includes(v)
 * );
 * customCoalesce(undefined, null, NaN, '', 'Waldo'); // 'Waldo'
 * ```
 * @category Function
 * @since 0.1.0
 * @public
 */
const coalesceFactory: (
  valid: (v: any) => boolean
) => (...args: any[]) => any =
  (valid) =>
  (...args) =>
    args.find(valid);

export default coalesceFactory;
