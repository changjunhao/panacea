import { sample } from "../../src";

export default () => {
  test("sample", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.includes(sample(arr))).toBe(true);
  });
};
