import { weekOfYear } from "../../src";

export default () => {
  it("should return the week of the year", () => {
    const date1 = new Date(2022, 0, 1);
    expect(weekOfYear(date1)).toBe(-1);

    const date2 = new Date(2022, 0, 5);
    expect(weekOfYear(date2)).toBe(-0);

    const date3 = new Date(2022, 4, 8);
    expect(weekOfYear(date3)).toBe(17);

    const date4 = new Date(2022, 11, 30);
    expect(weekOfYear(date4)).toBe(51);
  });
};
