import { without } from "../../src";

export default () => {
  test("doesn't remove elements from the array", () => {
    const array = [1, 2, 3];
    const result = without(array, 1);
    expect(result).toEqual([2, 3]);
  });
};
