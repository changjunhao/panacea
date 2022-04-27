import { toCharArray } from "../../src";

export default () => {
  test("toCharArray('abc')", () => {
    expect(toCharArray("abc")).toEqual(["a", "b", "c"]);
  });
};
