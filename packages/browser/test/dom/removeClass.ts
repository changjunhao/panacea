import { removeClass } from "../../src";

export default () => {
  test("removeClass('foo')", () => {
    const el = document.createElement("div");
    el.className = "foo bar";
    removeClass(el, "foo");
    expect(el.className).toBe("bar");
  });
};
