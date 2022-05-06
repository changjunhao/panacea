import { getMinutesDiffBetweenDates } from "../../src";

export default () => {
  test("getMinutesDiffBetweenDates", () => {
    expect(
      getMinutesDiffBetweenDates(new Date("2020-01-01"), new Date("2020-01-02"))
    ).toBe(1440);
  });
};
