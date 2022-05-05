import { prod } from "../../src";

export default () => {
  test("prod(...[1, 2, 3])", () => {
    expect(prod(...[1, 2, 3])).toBe(6);
  });
  test("sum(1, 2, 3, 4)", () => {
    expect(prod(1, 2, 3, 4)).toBe(24);
  });
};
