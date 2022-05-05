import { isSameDate } from "../../src";

export default () => {
  it("should return true if the dates are the same", () => {
    expect(isSameDate(new Date(2019, 0, 1), new Date(2019, 0, 1))).toBe(true);
  });
  it("should return false if the dates are not the same", () => {
    expect(isSameDate(new Date(2019, 0, 1), new Date(2019, 0, 2))).toBe(false);
  });
};
