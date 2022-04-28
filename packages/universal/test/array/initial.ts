import { initial } from "../../src";

export default () => {
  it("should return all but the last element of an array", () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
    expect(initial([1])).toEqual([]);
    expect(initial([])).toEqual([]);
  });
};
