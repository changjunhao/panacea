import { similarity } from "../../src";

export default () => {
  test("similarity([1, 2, 3], [1, 2, 4])", () => {
    expect(similarity([1, 2, 3], [1, 2, 4])).toStrictEqual([1, 2]);
  });
};
