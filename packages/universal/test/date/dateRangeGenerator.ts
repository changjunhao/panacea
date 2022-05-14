import { dateRangeGenerator } from "../../src";

export default () => {
  it("should return an array of dates", () => {
    const startDate = new Date(2019, 0, 1);
    const endDate = new Date(2019, 0, 5);
    const result = [...dateRangeGenerator(startDate, endDate)];
    expect(result).toEqual([
      new Date(2019, 0, 1),
      new Date(2019, 0, 2),
      new Date(2019, 0, 3),
      new Date(2019, 0, 4),
    ]);
  });
  it("should return an array of dates with step", () => {
    const startDate = new Date(2019, 0, 1);
    const endDate = new Date(2019, 0, 5);
    const result = [...dateRangeGenerator(startDate, endDate, 2)];
    expect(result).toEqual([new Date(2019, 0, 1), new Date(2019, 0, 3)]);
  });
};
