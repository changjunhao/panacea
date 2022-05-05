import { intersection } from "../../src";

export default () => {
  test("intersection([1, 2, 3], [4, 3, 2])", () => {
    expect(intersection([1, 2, 2, 3], [4, 4, 3, 2])).toEqual([2, 3]);
  });
};
