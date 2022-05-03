import { sortedLastIndex } from "../../src";

export default () => {
  test("sortedLastIndex([4, 5, 5, 5, 6], 5)", () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
  });
  test("sortedLastIndex([4, 5, 5, 5, 6], 4)", () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 4)).toBe(1);
  });
  test("sortedLastIndex([4, 5, 5, 5, 6], 6)", () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 6)).toBe(5);
  });
  test("sortedLastIndex([4, 5, 5, 5, 6], 7)", () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 7)).toBe(5);
  });
  test("sortedLastIndex([4, 5, 5, 5, 6], 3)", () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 3)).toBe(0);
  });
  test("sortedLastIndex([6, 5, 5, 5, 4], 2)", () => {
    expect(sortedLastIndex([6, 5, 5, 5, 4], 2)).toBe(5);
  });
};
