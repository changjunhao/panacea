import { isPowerOfTwo } from "../../src";

export default () => {
  it("should return true if the number is a power of two", () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(8)).toBe(true);
  });
  it("should return false if the number is not a power of two", () => {
    expect(isPowerOfTwo(0)).toBe(false);
  });
};
