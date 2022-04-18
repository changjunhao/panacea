import { is } from "../../src";

export default () => {
  test("is(String, 'foo')", () => {
    expect(is<String>(String, "foo")).toBe(true);
  });
  test("is(Array, [1])", () => {
    expect(is<Array<any>>(Array, [1])).toBe(true);
  });
  test("is(Boolean, true)", () => {
    expect(is<Boolean>(Boolean, true)).toBe(true);
  });
  test("is(RegExp, /./g)", () => {
    expect(is<RegExp>(RegExp, /./g)).toBe(true);
  });
  test("is(ArrayBuffer, new ArrayBuffer())", () => {
    expect(is<ArrayBuffer>(ArrayBuffer, new ArrayBuffer(10))).toBe(true);
  });
};
