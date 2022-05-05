import { nthElement } from "../../src";

export default () => {
  test("nthElement([1, 2, 3, 4, 5], 3)", () => {
    expect(nthElement([1, 2, 3, 4, 5], 3)).toBe(4);
  });

  test("nthElement([1, 2, 3, 4, 5], -1)", () => {
    expect(nthElement([1, 2, 3, 4, 5], -1)).toBe(5);
  });

  test("nthElement([1, 2, 3, 4, 5], 6)", () => {
    expect(nthElement([1, 2, 3, 4, 5], 6)).toBe(undefined);
  });
};
