import { isDivisible } from "../../src";

export default () => {
  it("should return true if the number is divisible", () => {
    expect(isDivisible(10, 2)).toBe(true);
  });
  it("should return false if the number is not divisible", () => {
    expect(isDivisible(10, 3)).toBe(false);
  });
};
