import { toggleClass } from "../../src";

export default () => {
  test("toggleClass('foo')", () => {
    const el = document.createElement("div");
    toggleClass(el, "foo");
    expect(el.className).toBe("foo");
    toggleClass(el, "foo");
    expect(el.className).toBe("");
  });
};
