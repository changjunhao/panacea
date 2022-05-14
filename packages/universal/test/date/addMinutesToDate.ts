import { addMinutesToDate } from "../../src";

export default () => {
  test("addMinutesToDate('2020-10-19 12:00:00', 10)", () => {
    expect(addMinutesToDate("2020-10-19 12:00:00", 10)).toStrictEqual(
      new Date("2020-10-19 12:10:00")
    );
  });
  test("addMinutesToDate('2020-10-19', -10)", () => {
    expect(addMinutesToDate("2020-10-19", -10).toUTCString()).toBe(
      "Sun, 18 Oct 2020 23:50:00 GMT"
    );
  });
};
