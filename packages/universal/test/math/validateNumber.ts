import { validateNumber } from "../../src";

export default () => {
  it("should return true for a valid number", () => {
    expect(validateNumber(1)).toBe(true);
    expect(validateNumber("10")).toBe(true);
    expect(validateNumber("1.0")).toBe(true);
  });
  it("should return false for an invalid number", () => {
    expect(validateNumber("a")).toBe(false);
  });
};
