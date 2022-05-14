import { isDateValid } from "../../src";

export default () => {
  it("should return true if the date is valid", () => {
    expect(isDateValid("December 17, 1995 03:24:00")).toBe(true);
    expect(isDateValid("1995-12-17T03:24:00")).toBe(true);
    expect(isDateValid(1995, 11, 17)).toBe(true);
  });
  it("should return false if the date is invalid", () => {
    expect(isDateValid("1995-12-17 T03:24:00")).toBe(false);
    expect(isDateValid(1995, 11, 17, "Duck")).toBe(false);
  });
};
