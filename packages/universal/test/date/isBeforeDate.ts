import { isBeforeDate } from "../../src";

export default () => {
  it("should return true if the first date is before the second date", () => {
    expect(isBeforeDate(new Date("2000-01-01"), new Date("2000-01-02"))).toBe(
      true
    );
  });
  it("should return false if the first date is after the second date", () => {
    expect(isBeforeDate(new Date("2000-01-02"), new Date("2000-01-01"))).toBe(
      false
    );
  });
};
