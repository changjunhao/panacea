import { getDaysDiffBetweenDates } from "../../src";

export default () => {
  test("getDaysDiffBetweenDates", () => {
    expect(
      getDaysDiffBetweenDates(new Date("2020-01-01"), new Date("2020-01-02"))
    ).toBe(1);
  });
};
