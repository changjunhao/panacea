import { off } from "../../src";

export default () => {
  it("should remove all listeners", () => {
    const spy = jest.fn();
    const el = document.createElement("div");
    el.addEventListener("click", spy);
    off(el, "click", spy);
    el.click();
    expect(spy).not.toHaveBeenCalled();
  });
};
