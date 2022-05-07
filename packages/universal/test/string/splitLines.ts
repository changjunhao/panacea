import { splitLines } from "../../src";

export default () => {
  test("splitLines('a\nb\nc')", () => {
    expect(splitLines("a\nb\nc")).toEqual(["a", "b", "c"]);
  });
};
