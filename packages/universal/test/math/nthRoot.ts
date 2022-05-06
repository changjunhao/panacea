import { nthRoot } from "../../src";

export default () => {
  test("nthRoot(0, 0) = 0", () => {
    expect(nthRoot(0, 0)).toBe(0);
  });
  test("nthRoot(32, 5) = 2", () => {
    expect(nthRoot(32, 5)).toBe(2);
  });
};
