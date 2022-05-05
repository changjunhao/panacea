import { isWeekend } from "../../src";

export default () => {
  test("isWeekend", () => {
    expect(isWeekend(new Date(2019, 0, 1))).toBe(false);
  });
};
