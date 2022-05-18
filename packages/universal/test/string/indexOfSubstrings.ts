import { indexOfSubstrings } from "../../src";

export default () => {
  test("indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')", () => {
    // @ts-ignore
    expect([...indexOfSubstrings("tiktok tok tok tik tok tik", "tik")]).toEqual(
      [0, 15, 23]
    );
  });
  test("indexOfSubstrings('tutut tut tut', 'tut')", () => {
    // @ts-ignore
    expect([...indexOfSubstrings("tutut tut tut", "tut")]).toEqual([
      0, 2, 6, 10,
    ]);
  });
  test("indexOfSubstrings('hello', 'hi')", () => {
    // @ts-ignore
    expect([...indexOfSubstrings("hello", "hi")]).toEqual([]);
  });
};
