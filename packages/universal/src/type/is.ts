/**
 * Checks if the provided value is of the specified type.
 * @category Type
 * @param type - The type to check against.
 * @param val - The value to check.
 * @returns True if the value is of the specified type, false otherwise.
 * @example
 * ```typescript
 * is<Array<number>>(Array, [1]); // true
 * is<ArrayBuffer>(ArrayBuffer, new ArrayBuffer(10)); // true
 * is<Map>(Map, new Map()); // true
 * is<RegExp>(RegExp, /./g); // true
 * is<Set>(Set, new Set()); // true
 * is<WeakMap>(WeakMap, new WeakMap()); // true
 * is<WeakSet>(WeakSet, new WeakSet()); // true
 * is<String>(String, ''); // true
 * is<String>(String, new String('')); // true
 * is<Number>(Number, 1); // true
 * is<Number>(Number, new Number(1)); // true
 * is<Boolean>(Boolean, true); // true
 * is<Boolean>(Boolean, new Boolean(true)); // true
 * is<Object>(Object, {}); // true
 * is<Object>(Object, new Object()); // true
 * is<Function>(Function, () => {}); // true
 * is<Function>(Function, new Function()); // true
 * ```
 * @public
 */
function is<T>(type: new (...args: any[]) => T, val: any): boolean {
  return ![undefined, null].includes(val) && val.constructor === type;
}

export default is;
