import { on } from "../../src";

export default () => {
  test("one", function () {
    jest.clearAllMocks();
    const el = document.createElement("div");
    document.body.appendChild(el);
    const callback = jest.fn();
    on(document.body, "click", callback);
    document.body.click();
    expect(callback).toHaveBeenCalledTimes(1);
    document.body.removeChild(el);
  });
  test("two", function () {
    jest.clearAllMocks();
    const el = document.createElement("div");
    document.body.appendChild(el);
    const callback = jest.fn();
    on(document.body, "click", callback, { target: "div" });
    el.click();
    expect(callback).toHaveBeenCalledTimes(1);
    document.body.removeChild(el);
  });

  test("three", function () {
    jest.clearAllMocks();
    const el = document.createElement("div");
    document.body.appendChild(el);
    const callback = jest.fn();
    on(document.body, "click", callback, { options: true });
    el.click();
    expect(callback).toHaveBeenCalledTimes(1);
    document.body.removeChild(el);
  });
};
