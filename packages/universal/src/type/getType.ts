/**
 * Returns the native type of a value.
 * @param value - The value to get the type of.
 * @returns The native type of the value.
 * @example
 * ```typescript
 * getType(1) // Number
 * getType(true) // Boolean
 * getType(null) // null
 * getType(undefined) // undefined
 * getType(Symbol()) // Symbol
 * getType(new Map()) // Map
 * getType(new Set()) // Set
 * ```
 * @since 0.1.0
 * @category Type
 * @public
 */
const getType: (value: any) => string = (value) =>
  value === undefined
    ? "undefined"
    : value === null
    ? "null"
    : value.constructor.name;

export default getType;
