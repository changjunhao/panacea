import { isSorted } from "../../src";

export default () => {
  it("should return 1 if the array is ascending order", () => {
    expect(isSorted([1, 2, 3])).toBe(1);
  });
  it("should return -1 if the array is descending order", () => {
    expect(isSorted([3, 2, 1])).toBe(-1);
  });
  it("should return 0 if the array is not sorted", () => {
    expect(isSorted([1, 3, 2])).toBe(0);
  });
  it("should return 0 if the array only one element", () => {
    expect(isSorted([1])).toBe(0);
  });
};
