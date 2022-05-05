import { median } from "../../src";

export default () => {
  test("median([1, 2, 3, 4, 5])", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });
  test("median([1, 2, 3, 4, 5, 6])", () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });
};
