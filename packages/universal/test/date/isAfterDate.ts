import { isAfterDate } from "../../src";

export default () => {
  it("should return true if the first date is after the second date", () => {
    expect(isAfterDate(new Date(2020, 0, 2), new Date(2020, 0, 1))).toBe(true);
  });
  it("should return false if the first date is not after the second date", () => {
    expect(isAfterDate(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(false);
  });
};
