import { last } from "../../src";

export default () => {
  it("should return the last element of an array", () => {
    expect(last([1, 2, 3])).toBe(3);
  });
  it("should return undefined if the array is empty", () => {
    expect(last([])).toBe(undefined);
  });
  it("should return undefined if the array is undefined", () => {
    expect(last(undefined)).toBe(undefined);
  });
  it("should return undefined if the array is null", () => {
    expect(last(null)).toBe(undefined);
  });
};
