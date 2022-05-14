import { hasDecimals } from "../../src";

export default () => {
  it("should return true if the number has decimals", () => {
    expect(hasDecimals(1.1)).toBe(true);
  });
  it("should return false if the number has no decimals", () => {
    expect(hasDecimals(1)).toBe(false);
  });
};
