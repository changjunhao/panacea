import { unary } from "../../src";

export default () => {
  test("unary(fn) returns a function that takes a single argument and calls fn with it", () => {
    const fn = jest.fn();
    const unaryFn = unary(fn);
    unaryFn(1);
    expect(fn).toHaveBeenCalledWith(1);
  });
  test("unary(parseInt)", () => {
    expect(["1", "2", "3"].map(parseInt)).toStrictEqual([1, NaN, NaN]);
    expect(["1", "2", "3"].map(unary(parseInt))).toStrictEqual([1, 2, 3]);
  });
};
