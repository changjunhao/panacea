import { distance } from "../../src";

export default () => {
  test("distance(0, 0, 0, 0)", () => {
    expect(distance(0, 0, 0, 0)).toBe(0);
  });
  test("distance(1, 1, 2, 3)", () => {
    expect(distance(1, 1, 2, 3)).toBe(2.23606797749979);
  });
};
