import { getURLParameters } from "../../src";

export default () => {
  test("getURLParameters('http://example.com/?a=1&b=2&c=3')", () => {
    expect(getURLParameters("http://example.com/?a=1&b=2&c=3")).toEqual({
      a: "1",
      b: "2",
      c: "3",
    });
  });
  test("getURLParameters('http://example.com')", () => {
    expect(getURLParameters("http://example.com")).toEqual({});
  });
};
