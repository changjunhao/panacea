import { countWeekDaysBetween } from "../../src";

export default () => {
  test("countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020'))", () => {
    expect(
      countWeekDaysBetween(new Date("Oct 05, 2020"), new Date("Oct 06, 2020"))
    ).toBe(1);
  });
  test("countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020'))", () => {
    expect(
      countWeekDaysBetween(new Date("Oct 05, 2020"), new Date("Oct 14, 2020"))
    ).toBe(7);
  });
};
