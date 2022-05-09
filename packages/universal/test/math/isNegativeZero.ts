import { isNegativeZero } from "../../src";

export default () => {
  it("should return true if the value is -0", () => {
    expect(isNegativeZero(-0)).toBe(true);
  });
  it("should return false if the value is not -0", () => {
    expect(isNegativeZero(0)).toBe(false);
  });
};
