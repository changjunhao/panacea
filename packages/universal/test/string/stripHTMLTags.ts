import { stripHTMLTags } from "../../src";

export default () => {
  test("stripHTMLTags('<p>Hello <b>World</b></p>')", () => {
    expect(stripHTMLTags("<p>Hello <b>World</b></p>")).toBe("Hello World");
  });
};
