import { coalesceFactory } from "../../src";

export default () => {
  test("coalesceFactory", () => {
    const fn = coalesceFactory((v) => ![null, undefined, "", NaN].includes(v));
    expect(fn(undefined, null, NaN, "", "Waldo")).toBe("Waldo");
  });
};
