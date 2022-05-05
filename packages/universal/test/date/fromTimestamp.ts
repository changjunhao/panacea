import { fromTimestamp } from "../../src";

export default () => {
  it("should return a date object", () => {
    const date = fromTimestamp(0);
    expect(date).toBeInstanceOf(Date);
  });
  it("should return a date object with the correct time", () => {
    const date = fromTimestamp(1602162242);
    expect(date.getTime()).toBe(1602162242000);
  });
};
