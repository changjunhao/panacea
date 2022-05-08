import { maxDate } from "../../src";

export default () => {
  it("should return the max date", () => {
    expect(maxDate(new Date(2000, 0, 1), new Date(2001, 0, 1))).toEqual(
      new Date(2001, 0, 1)
    );
    expect(maxDate(new Date(2001, 0, 1), new Date(2000, 0, 1))).toEqual(
      new Date(2001, 0, 1)
    );
  });
};
