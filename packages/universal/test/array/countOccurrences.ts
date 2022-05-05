import { countOccurrences } from "../../src";

export default () => {
  test("countOccurrences([1, 1, 2, 1, 2, 3], 1)", () => {
    expect(countOccurrences([1, 1, 2, 1, 2, 3], 1)).toBe(3);
  });
};
