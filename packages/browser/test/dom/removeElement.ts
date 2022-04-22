import { removeElement } from "../../src";

export default () => {
  it("should remove element", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    removeElement(el);
    expect(document.body.contains(el)).toBe(false);
  });
};
