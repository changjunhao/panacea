import { minDate } from "../../src";

export default () => {
  it("should return the minimum date", () => {
    expect(minDate(new Date(2000, 0, 1), new Date(2001, 0, 1))).toEqual(
      new Date(2000, 0, 1)
    );
    expect(minDate(new Date(2001, 0, 1), new Date(2000, 0, 1))).toEqual(
      new Date(2000, 0, 1)
    );
  });
};
