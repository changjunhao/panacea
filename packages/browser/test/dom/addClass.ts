import { addClass } from "../../src";

export default () => {
  test("addClass", () => {
    const el = document.createElement("div");
    addClass(el, "foo");
    expect(el.className).toBe("foo");
    addClass(el, "bar");
    expect(el.className).toBe("foo bar");
    addClass(el, "foo");
    expect(el.className).toBe("foo bar");
  });
};
