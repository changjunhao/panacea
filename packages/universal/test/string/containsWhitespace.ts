import { containsWhitespace } from "../../src";

export default () => {
  test("containsWhitespace('abc')", () => {
    expect(containsWhitespace("abc")).toBe(false);
  });
  test("containsWhitespace('abc def')", () => {
    expect(containsWhitespace("abc def")).toBe(true);
  });
};
