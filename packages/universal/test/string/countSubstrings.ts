import { countSubstrings } from "../../src";

export default () => {
  test("countSubstrings('tiktok tok tok tik tok tik', 'tik')", () => {
    expect(countSubstrings("tiktok tok tok tik tok tik", "tik")).toBe(3);
  });
  test("countSubstrings('tutut tut tut', 'tut')", () => {
    expect(countSubstrings("tutut tut tut", "tut")).toBe(4);
  });
  test("countSubstrings('hello', 'hi')", () => {
    expect(countSubstrings("hello", "hi")).toBe(0);
  });
};
