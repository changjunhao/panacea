import { toSafeInteger } from "../../src";

export default () => {
  test("toSafeInteger(3.2)", () => {
    expect(toSafeInteger(3.2)).toBe(3);
  });
  test("toSafeInteger(3.9)", () => {
    expect(toSafeInteger(3.9)).toBe(4);
  });
  test("toSafeInteger(Infinity)", () => {
    expect(toSafeInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER);
  });
  test("toSafeInteger(9007199254740991.7)", () => {
    expect(toSafeInteger(9007199254740991.7)).toBe(Number.MAX_SAFE_INTEGER);
  });
};
