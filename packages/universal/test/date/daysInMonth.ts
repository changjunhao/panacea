import { daysInMonth } from "../../src";

export default () => {
  it("should return the number of days in a month", () => {
    expect(daysInMonth(2020, 1)).toBe(31);
  });
  it("should return the number of days in a month", () => {
    expect(daysInMonth(2020, 2)).toBe(29);
  });
};
