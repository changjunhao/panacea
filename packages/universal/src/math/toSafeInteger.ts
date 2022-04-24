/**
 * Converts a value to a safe integer.
 * @param num - The value to convert.
 * @returns A safe integer if the value is a number, otherwise `NaN`.
 * @example
 * ```typescript
 * toSafeInteger(3.2); // 3
 * toSafeInteger(Number.MIN_VALUE); // 0
 * toSafeInteger(Infinity); // 9007199254740991
 * ```
 * @category Math
 * @public
 * @since 0.1.1
 */
const toSafeInteger = (num: number) =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

export default toSafeInteger;
