import { allEqual } from "../../src";

export default () => {
  it("returns true if all elements are equal", () => {
    expect(allEqual([1, 1, 1])).toBe(true);
  });
  it("returns false if any element is not equal", () => {
    expect(allEqual([1, 2, 1])).toBe(false);
  });
};
