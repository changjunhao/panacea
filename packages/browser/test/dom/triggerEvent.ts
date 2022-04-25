import { triggerEvent } from "../../src";

export default () => {
  it("should trigger event", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    expect(triggerEvent(el, "click")).toBe(true);
    document.body.removeChild(el);
  });
  it("should trigger event with detail", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    el.addEventListener("click", (event) => {
      expect(event.detail).toStrictEqual({ id: "test" });
    });
    expect(triggerEvent(el, "click", { id: "test" })).toBe(true);
    document.body.removeChild(el);
  });
};
