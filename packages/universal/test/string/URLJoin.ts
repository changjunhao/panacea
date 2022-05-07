import { URLJoin } from "../../src";

export default function () {
  test("URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo')", () => {
    expect(
      URLJoin("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo")
    ).toBe("http://www.google.com/a/b/cd?foo=123&bar=foo");
  });
}
