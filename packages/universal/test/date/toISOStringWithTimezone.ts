import { toISOStringWithTimezone } from "../../src";

export default () => {
  test("toISOStringWithTimezone(new Date())", () => {
    expect(toISOStringWithTimezone(new Date(2022, 4, 14, 21, 47, 13))).toBe(
      "2022-05-14T21:47:13+08:00"
    );
  });
};
