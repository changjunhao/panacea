import { dayOfYear } from "../../src";

export default () => {
  test("dayOfYear(new Date(2022, 0, 1))", () => {
    expect(dayOfYear(new Date(2022, 0, 1))).toBe(1);
  });
  test("dayOfYear(new Date(2022, 11, 31))", () => {
    expect(dayOfYear(new Date(2022, 11, 31))).toBe(365);
  });
};
