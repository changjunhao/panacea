import { isPowerOfTen } from "../../src";

export default () => {
  it("should return true if the number is a power of ten", () => {
    expect(isPowerOfTen(1)).toBe(true);
    expect(isPowerOfTen(10)).toBe(true);
  });
  it("should return false if the number is not a power of ten", () => {
    expect(isPowerOfTen(20)).toBe(false);
  });
};
