import { tail } from "../../src";

export default () => {
  it("returns the tail of an array", () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
  it("returns an empty array if the array is empty", () => {
    expect(tail([])).toEqual([]);
  });
  it("return the whole array if the array has one element", () => {
    expect(tail([1])).toEqual([1]);
  });
};
