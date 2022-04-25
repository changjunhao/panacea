import { wordWrap } from "../../src";

export default () => {
  test("wordWrap('foo bar baz', 3)", () => {
    expect(wordWrap("foo bar baz", 3)).toBe("foo\nbar\nbaz");
  });
  test("wordWrap('foo bar baz', 3, '\r\n')", () => {
    expect(wordWrap("foo bar baz", 3, "\r\n")).toBe("foo\r\nbar\r\nbaz");
  });
};
