import { sortedIndex } from "../../src";

export default () => {
  test("sortedIndex([10, 20, 30, 40, 50], 35)", () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });
  test("sortedIndex([5, 3, 2, 1], 4)", () => {
    expect(sortedIndex([5, 3, 2, 1], 4)).toBe(1);
  });
  test("sortedIndex([5, 3, 2, 1], 0)", () => {
    expect(sortedIndex([5, 3, 2, 1], 0)).toBe(4);
  });
};
