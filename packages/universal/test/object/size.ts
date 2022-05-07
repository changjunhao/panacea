import { size } from "../../src";

export default () => {
  test("size('foo')", () => {
    expect(size("foo")).toBe(3);
  });
  test("size([1, 2, 3])", () => {
    expect(size([1, 2, 3])).toBe(3);
  });
  test("size({ foo: 'bar' })", () => {
    expect(size({ foo: "bar" })).toBe(1);
  });
  test("size(null)", () => {
    expect(size(null)).toBe(0);
  });
};
