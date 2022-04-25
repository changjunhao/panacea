/**
 * Creates a function that will invoke a predicate function for the specified property on a given object.
 * @param predicate - The predicate function that will be invoked.
 * @param prop - The property to check.
 * @returns A function that will invoke the predicate function for the specified property on a given object.
 * @example
 * ```typescript
 * const lengthIs4 = checkProp(l => l === 4, 'length');
 * lengthIs4([]); // false
 * lengthIs4([1, 2, 3, 4]); // true
 * lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)
 *
 * const session = { user: {} };
 * const validUserSession = checkProp(u => u.active && !u.disabled, 'user');
 *
 * validUserSession(session); // false
 *
 * session.user.active = true;
 * validUserSession(session); // true
 *
 * const noLength = checkProp(l => l === undefined, 'length');
 * noLength([]); // false
 * noLength({}); // true
 * noLength(new Set()); // true
 * ```
 * @public
 * @category Object
 * @since 0.1.3
 */
const checkProp: (
  predicate: (value: any) => any,
  prop: string
) => (obj: any) => boolean = (predicate, prop) => (obj) =>
  !!predicate(obj[prop]);

export default checkProp;
