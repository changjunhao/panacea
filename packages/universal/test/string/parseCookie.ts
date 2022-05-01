import { parseCookie } from "../../src";

export default () => {
  test("parseCookie('foo=bar; equation=E%3Dmc%5E2')", () => {
    expect(parseCookie("foo=bar; equation=E%3Dmc%5E2")).toEqual({
      foo: "bar",
      equation: "E=mc^2",
    });
  });
};
