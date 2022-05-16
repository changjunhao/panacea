import { queryStringToObject } from "../../src";

export default () => {
  test("queryStringToObject('?a=1&b=2&c=3')", () => {
    expect(queryStringToObject("?a=1&b=2&c=3")).toEqual({
      a: "1",
      b: "2",
      c: "3",
    });
  });
  test("queryStringToObject('https://google.com?page=1&count=10')", () => {
    expect(queryStringToObject("https://google.com?page=1&count=10")).toEqual({
      page: "1",
      count: "10",
    });
  });
};
