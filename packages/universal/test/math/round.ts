import { round } from "../../src";

export default () => {
  test("round(1.005, 1)", () => {
    expect(round(1.005, 1)).toBe(1.0);
  });
  test("round(1.005, 2)", () => {
    expect(round(1.005, 2)).toBe(1.01);
  });
  test("round(1.005, 3)", () => {
    expect(round(1.005, 3)).toBe(1.005);
  });
  test("round(1.005)", () => {
    expect(round(1.005)).toBe(1);
  });
};
