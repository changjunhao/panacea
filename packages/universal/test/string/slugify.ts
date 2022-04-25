import { slugify } from "../../src";

export default () => {
  test("slugify('Hello World')", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
};
