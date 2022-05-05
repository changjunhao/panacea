import { everyNth } from "../../src";

export default () => {
  it("should return an array with every nth element", () => {
    expect(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([3, 6, 9]);
  });
  it("should return an empty array if n is greater than the length of the array", () => {
    expect(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toEqual([]);
  });
};
