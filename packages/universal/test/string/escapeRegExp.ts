import { escapeRegExp } from "../../src";

export default () => {
  test("escapeRegExp('foo')", () => {
    expect(escapeRegExp("foo")).toBe("foo");
  });
  test("escapeRegExp('(test)')", () => {
    expect(escapeRegExp("(test)")).toBe("\\(test\\)");
  });
};
