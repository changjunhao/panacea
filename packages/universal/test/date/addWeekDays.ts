import { addWeekDays } from "../../src";

export default () => {
  test("addWeekDays(new Date('2020-01-01'), 1)", () => {
    expect(addWeekDays(new Date("2020-01-01"), 1)).toStrictEqual(
      new Date("2020-01-02")
    );
  });
  test("addWeekDays(new Date('Oct 09, 2020'), 5)", () => {
    expect(addWeekDays(new Date("Oct 09, 2020"), 5)).toStrictEqual(
      new Date("Oct 16, 2020")
    );
  });
  test("addWeekDays(new Date('Oct 12, 2020'), 5)", () => {
    expect(addWeekDays(new Date("Oct 12, 2020"), 5)).toStrictEqual(
      new Date("Oct 19, 2020")
    );
  });
};
