import { includesAll } from "../../src";

export default () => {
  it("should return true if all items are included", () => {
    expect(includesAll([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  it("should return false if any item is not included", () => {
    expect(includesAll([1, 2, 3], [1, 2, 4])).toBe(false);
  });
};
