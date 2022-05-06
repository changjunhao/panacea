/**
 * Checks if an object is deeply frozen.
 * @param obj - The object to check.
 * @returns Whether the object is deeply frozen.
 * @public
 * @example
 * ```ts
 * const x = Object.freeze({ a: 1 });
 * const y = Object.freeze({ b: { c: 2 } });
 * isDeepFrozen(x); // true
 * isDeepFrozen(y); // false
 * ```
 * @public
 * @category Object
 * @since 0.1.9
 */
const isDeepFrozen = (obj: Record<string, any>): boolean =>
  Object.isFrozen(obj) &&
  Object.keys(obj).every(
    (prop) => typeof obj[prop] !== "object" || isDeepFrozen(obj[prop])
  );

export default isDeepFrozen;
