import { capitalizeEveryWord } from "../../src";

export default () => {
  test("capitalizeEveryWord('hello world')", () => {
    expect(capitalizeEveryWord("hello world")).toBe("Hello World");
  });
};
