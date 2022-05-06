import { getMonthsDiffBetweenDates } from "../../src";

export default () => {
  test("getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29'))", () => {
    expect(
      getMonthsDiffBetweenDates(new Date("2017-12-13"), new Date("2018-04-29"))
    ).toBe(4);
  });
};
