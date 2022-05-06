import { getSecondsDiffBetweenDates } from "../../src";

export default () => {
  test("getSecondsDiffBetweenDates", () => {
    expect(
      getSecondsDiffBetweenDates(new Date("2020-01-01"), new Date("2020-01-02"))
    ).toBe(86400);
  });
};
