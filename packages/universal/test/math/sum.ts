import { sum } from "../../src";

export default () => {
  test("sum(...[1, 2, 3])", () => {
    expect(sum(...[1, 2, 3])).toBe(6);
  });
  test("sum(1, 2, 3, 4)", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
};
