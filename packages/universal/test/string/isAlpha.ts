import { isAlpha } from "../../src";

export default () => {
  test("isAlpha('abc')", () => {
    expect(isAlpha("abc")).toBe(true);
  });
  test("isAlpha('123')", () => {
    expect(isAlpha("123")).toBe(false);
  });
};
