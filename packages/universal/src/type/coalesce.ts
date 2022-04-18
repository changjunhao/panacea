/**
 * Returns the first defined, non-null argument.
 * @category Type
 * @param args - The arguments to check.
 * @returns The first defined, non-null argument.
 * @throws If no arguments are defined.
 * @example
 * ```typescript
 * coalesce(null, undefined, '', NaN, 'Waldo'); // ''
 * ```
 * @public
 */
const coalesce: (...args: any[]) => any = (...args) =>
  args.find((v) => ![undefined, null].includes(v));

export default coalesce;
