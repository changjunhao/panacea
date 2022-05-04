import { superSet } from "../../src";

export default () => {
  it("should return true if the first array is a super set of the second", () => {
    expect(superSet([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(superSet([1, 2, 3], [1, 2])).toBe(true);
  });
  it("should return false if the first array is not a super set of the second", () => {
    expect(superSet([1, 2, 3], [1, 2, 3, 4])).toBe(false);
    expect(superSet([1, 2, 3], [1, 2, 4])).toBe(false);
  });
  it("should return true if the first set is a super set of the second", () => {
    expect(superSet(new Set([1, 2, 3, 4]), new Set([1, 2]))).toBe(true);
  });
  it("should return false if the first set is not a super set of the second", () => {
    expect(superSet(new Set([1, 2, 3, 4]), new Set([1, 5]))).toBe(false);
  });
};
