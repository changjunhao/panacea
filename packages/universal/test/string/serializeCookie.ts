import { serializeCookie } from "../../src";

export default () => {
  test("serializeCookie('foo', 'bar')", () => {
    expect(serializeCookie("foo", "bar")).toBe("foo=bar");
  });
};
