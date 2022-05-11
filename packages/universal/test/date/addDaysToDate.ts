import { addDaysToDate } from "../../src";

export default () => {
  test("should add days to date", () => {
    expect(addDaysToDate("2022-05-11", 10)).toEqual("2022-05-21");
    expect(addDaysToDate("2022-05-11", -10)).toEqual("2022-05-01");
  });
};
