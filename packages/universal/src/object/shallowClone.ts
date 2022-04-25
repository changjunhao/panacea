/**
 * Creates a shallow clone of an object.
 * @param obj - The object to clone.
 * @returns A shallow clone of the object.
 * @example
 * ```typescript
 * const a = { x: true, y: 1 };
 * const b = shallowClone(a); // a !== b
 * ```
 * @since 0.1.3
 * @category Object
 * @public
 */
const shallowClone = (obj: Record<any, any>) => ({ ...obj });

export default shallowClone;
