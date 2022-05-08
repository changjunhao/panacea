import { allUnique } from "../../src";

export default () => {
  it("should return true if all elements are unique", () => {
    expect(allUnique([1, 2, 3, 4, 5])).toBe(true);
  });
  it("should return false if not all elements are unique", () => {
    expect(allUnique([1, 2, 3, 4, 5, 1])).toBe(false);
  });
};
