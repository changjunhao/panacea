import { quarterOfYear } from "../../src";

export default () => {
  it("should return the quarter of the year", () => {
    const date = new Date("07/10/2018");
    expect(quarterOfYear(date)).toStrictEqual([3, 2018]);
    expect(quarterOfYear()).toStrictEqual([2, 2022]);
  });
};
