import { subSet } from "../../src";

export default () => {
  it("should return true if the array is a subset of the other array", () => {
    expect(subSet([1, 2, 3], [1, 2, 3, 4])).toBe(true);
    expect(subSet([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  it("should return true if the set is a subset of the other set", () => {
    expect(subSet(new Set([1, 2]), new Set([1, 2, 3, 4]))).toBe(true);
  });
  it("should return false if the array is a subset of the other array", () => {
    expect(subSet([1, 2, 3, 5], [1, 2, 3, 4])).toBe(false);
    expect(subSet([1, 2, 6], [1, 2, 3])).toBe(false);
  });
  it("should return false if the set is a subset of the other set", () => {
    expect(subSet(new Set([1, 5]), new Set([1, 2, 3, 4]))).toBe(false);
  });
};
