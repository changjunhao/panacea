import { union } from "../../src";

export default () => {
  test("union with 'number'", () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test("union with 'string'", () => {
    expect(union(["a", "b", "c"], ["c", "d", "e"])).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
  });
};
