import { compact } from "../../src";

export default () => {
  test("compact([0, 1, false, 2, '', 3])", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });
};
