import { dayName } from "../../src";

export default () => {
  test("should return the day name in the specified locale", () => {
    expect(dayName(new Date(2022, 4, 8), "zh-CN")).toBe("星期日");
  });
  test("should return the day name for a date", () => {
    expect(dayName(new Date(2022, 4, 8))).toBe("Sunday");
  });
};
