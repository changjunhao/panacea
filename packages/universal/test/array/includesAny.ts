import { includesAny } from "../../src";

export default () => {
  it("should return true if the array includes any of the given values", () => {
    expect(includesAny([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(includesAny([1, 2, 3], [1, 2, 4])).toBe(true);
    expect(includesAny([1, 2, 3], [1, 2, 4, 5])).toBe(true);
  });
  it("should return false if the array does not include any of the given values", () => {
    expect(includesAny([1, 2, 3], [4, 5, 6])).toBe(false);
    expect(includesAny([1, 2, 3], [4, 5, 6, 7])).toBe(false);
  });
};
