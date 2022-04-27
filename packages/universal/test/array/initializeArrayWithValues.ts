import { initializeArrayWithValues } from "../../src";

export default () => {
  test(" 5, 2 => [2, 2, 2, 2, 2]", () => {
    expect(initializeArrayWithValues(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });
  test(" 5, 'a' => ['a', 'a', 'a', 'a', 'a']", () => {
    expect(initializeArrayWithValues(5, "a")).toEqual([
      "a",
      "a",
      "a",
      "a",
      "a",
    ]);
  });
};
