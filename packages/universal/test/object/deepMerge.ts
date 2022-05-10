import { deepMerge } from "../../src";

export default () => {
  it("should merge two objects", () => {
    expect(
      deepMerge(
        { a: true, b: { c: [1, 2, 3] } },
        { a: false, b: { d: [1, 2, 3] } },
        (key, a, b) => (key === "a" ? a && b : Object.assign({}, a, b))
      )
    ).toEqual({
      a: false,
      b: { c: [1, 2, 3], d: [1, 2, 3] },
    });
  });
};
