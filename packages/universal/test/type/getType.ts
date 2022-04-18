import { getType } from "../../src";

export default () => {
  test("getType('string')", () => {
    expect(getType("string")).toBe("String");
  });
  test("getType('')", () => {
    expect(getType("")).toBe("String");
  });
  test("getType(0)", () => {
    expect(getType(0)).toBe("Number");
  });
  test("getType(null)", () => {
    expect(getType(null)).toBe("null");
  });
  test("getType(undefined)", () => {
    expect(getType(undefined)).toBe("undefined");
  });
  test("getType(true)", () => {
    expect(getType(true)).toBe("Boolean");
  });
  test("getType(false)", () => {
    expect(getType(false)).toBe("Boolean");
  });
  test("getType(Symbol('foo'))", () => {
    expect(getType(Symbol("foo"))).toBe("Symbol");
  });
  test("getType(new Set([1, 2, 3]))", () => {
    expect(getType(new Set([1, 2, 3]))).toBe("Set");
  });
};
