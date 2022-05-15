import { toDecimalMark } from "../../src";

export default () => {
  test("toDecimalMark(12305030388.9087)", () => {
    expect(toDecimalMark(12305030388.9087)).toBe("12,305,030,388.909");
  });
};
