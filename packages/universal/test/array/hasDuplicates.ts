import { hasDuplicates } from "../../src";

export default () => {
  it("should return true if the array has duplicates", () => {
    expect(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toBe(true);
  });
  it("should return false if the array has no duplicates", () => {
    expect(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(false);
  });
};
