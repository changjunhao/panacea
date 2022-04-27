import { head } from "../../src";

export default () => {
  test("head([1, 2, 3])", () => {
    expect(head([1, 2, 3])).toBe(1);
  });
  test("head([])", () => {
    expect(head([])).toBe(undefined);
  });
  test("head(null)", () => {
    expect(head(null)).toBe(undefined);
  });
  test("head(undefined)", () => {
    expect(head(undefined)).toBe(undefined);
  });
};
