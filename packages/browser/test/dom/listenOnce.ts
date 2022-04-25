import { listenOnce } from "../../src";

export default () => {
  it("should call the callback once", () => {
    const el = document.createElement("div");
    const callback = jest.fn();
    listenOnce<"click">(el, "click", callback);
    el.click();
    expect(callback).toHaveBeenCalledTimes(1);
    el.click();
    expect(callback).toHaveBeenCalledTimes(1);
  });
};
