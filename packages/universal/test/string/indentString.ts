import { indentString } from "../../src";

export default () => {
  test("indentString('foo', 2)", () => {
    expect(indentString("foo", 2)).toBe("  foo");
  });
  test("indentString('Lorem\nIpsum', 2, '_')", () => {
    expect(indentString("Lorem\nIpsum", 2, "_")).toBe("__Lorem\n__Ipsum");
  });
};
