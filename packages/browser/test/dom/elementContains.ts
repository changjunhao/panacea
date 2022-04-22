import { elementContains } from "../../src";

export default () => {
  it("should return true if the element contains the other element", () => {
    const el = document.createElement("div");
    const child = document.createElement("div");
    el.appendChild(child);
    expect(elementContains(el, child)).toBe(true);
  });
  it("should return false if the element does not contain the other element", () => {
    const el = document.createElement("div");
    const child = document.createElement("div");
    expect(elementContains(el, child)).toBe(false);
  });
};
