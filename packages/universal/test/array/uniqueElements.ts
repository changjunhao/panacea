import { uniqueElements } from "../../src";

export default () => {
  test("uniqueElements", () => {
    expect(
      uniqueElements([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
};
