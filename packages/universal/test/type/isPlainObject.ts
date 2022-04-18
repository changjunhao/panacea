import { isPlainObject } from "../../src";

export default () => {
  test(" {a: 1} => true", () => {
    expect(isPlainObject({ a: 1 })).toBe(true);
  });
  test(" [1, 2, 3] => false", () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });
  test(" 'abc' => false", () => {
    expect(isPlainObject("abc")).toBe(false);
  });
  test(" 1 => false", () => {
    expect(isPlainObject(1)).toBe(false);
  });
  test(" undefined => false", () => {
    expect(isPlainObject(undefined)).toBe(false);
  });
  test(" null => false", () => {
    expect(isPlainObject(null)).toBe(false);
  });
  test(" () => false", () => {
    expect(isPlainObject(() => {})).toBe(false);
  });
  test(" /abc/ => false", () => {
    expect(isPlainObject(/abc/)).toBe(false);
  });
  test(" new Object() => true", () => {
    expect(isPlainObject(new Object())).toBe(true);
  });
  test(" new Map() => false", () => {
    expect(isPlainObject(new Map())).toBe(false);
  });
  test(" new Set() => false", () => {
    expect(isPlainObject(new Set())).toBe(false);
  });
  test(" new Date() => false", () => {
    expect(isPlainObject(new Date())).toBe(false);
  });
  test(" new Error() => false", () => {
    expect(isPlainObject(new Error())).toBe(false);
  });
  test(" new Array() => false", () => {
    expect(isPlainObject(new Array())).toBe(false);
  });
  test(" new String() => false", () => {
    expect(isPlainObject(new String())).toBe(false);
  });
  test(" new Number() => false", () => {
    expect(isPlainObject(new Number())).toBe(false);
  });
  test(" new Boolean() => false", () => {
    expect(isPlainObject(new Boolean())).toBe(false);
  });
  test(" new Function() => false", () => {
    expect(isPlainObject(new Function())).toBe(false);
  });
};
