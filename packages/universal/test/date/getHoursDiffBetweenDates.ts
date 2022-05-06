import { getHoursDiffBetweenDates } from "../../src";

export default function () {
  it("should return the number of hours between two dates", () => {
    const date1 = new Date("2020-01-01T00:00:00.000Z");
    const date2 = new Date("2020-01-01T01:00:00.000Z");
    const hours = getHoursDiffBetweenDates(date1, date2);
    expect(hours).toBe(1);
  });
}
