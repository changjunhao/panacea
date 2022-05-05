import { lastDateOfMonth } from "../../src";

export default () => {
  it("should return the last date of the month", () => {
    expect(lastDateOfMonth(new Date("2019-01-11"))).toBe("2019-01-31");
  });
};
