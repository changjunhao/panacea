import { isDeepFrozen } from "../../src";

export default function () {
  test("isDeepFrozen", () => {
    expect(isDeepFrozen({})).toBe(false);
    expect(isDeepFrozen(Object.freeze({ a: 1 }))).toBe(true);
    expect(isDeepFrozen(Object.freeze({ b: { c: 2 } }))).toBe(false);
  });
}
