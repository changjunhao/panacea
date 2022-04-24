import { isBetweenDates } from "../../src";

export default () => {
  it("should return true if the date is between the two dates", () => {
    expect(
      isBetweenDates(
        new Date("2019-01-01"),
        new Date("2019-01-03"),
        new Date("2019-01-02")
      )
    ).toBe(true);
  });

  it("should return false if the date is not between the two dates", () => {
    expect(
      isBetweenDates(
        new Date("2019-01-01"),
        new Date("2019-01-03"),
        new Date("2019-01-04")
      )
    ).toBe(false);
  });
};
