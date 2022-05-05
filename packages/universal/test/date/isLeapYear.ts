import { isLeapYear } from "../../src";

export default () => {
  it("should return true for a leap year", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  it("should return false for a non-leap year", () => {
    expect(isLeapYear(2001)).toBe(false);
  });
};
