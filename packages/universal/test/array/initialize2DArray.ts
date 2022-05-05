import { initialize2DArray } from "../../src";

export default () => {
  test("initialize2DArray(2, 2, 'a')", () => {
    expect(initialize2DArray(2, 2, "a")).toEqual([
      ["a", "a"],
      ["a", "a"],
    ]);
  });

  test("initialize2DArray(2, 2, 'a')", () => {
    expect(initialize2DArray(2, 2)).toEqual([
      [null, null],
      [null, null],
    ]);
  });
};
