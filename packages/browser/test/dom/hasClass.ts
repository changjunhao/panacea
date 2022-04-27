import { hasClass } from "../../src";

export default () => {
  it("should return true if the element has the class", () => {
    const el = document.createElement("div");
    el.className = "foo";
    expect(hasClass(el, "foo")).toBe(true);
  });
  it("should return false if the element does not have the class", () => {
    const el = document.createElement("div");
    el.className = "foo";
    expect(hasClass(el, "bar")).toBe(false);
  });
};
