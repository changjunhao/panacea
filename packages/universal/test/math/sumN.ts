import { sumN } from "../../src";

export default () => {
  test("sumN(100)", () => {
    expect(sumN(100)).toBe(5050);
  });
};
