import { castArray } from "../../src";

export default () => {
  test("castArray('foo')", () => {
    expect(castArray("foo")).toEqual(["foo"]);
  });
  test("castArray(['foo'])", () => {
    expect(castArray(["foo"])).toEqual(["foo"]);
  });
  test("castArray(null)", () => {
    expect(castArray(null)).toEqual([null]);
  });
  test("castArray(undefined)", () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });
};
