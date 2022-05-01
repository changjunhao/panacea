import { addMultipleListeners } from "../../src";

export default () => {
  test("addMultipleListeners", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    const handler = jest.fn();
    addMultipleListeners(el, ["click", "mouseover"], handler);
    el.click();

    expect(handler).toBeCalledTimes(1);
    document.body.removeChild(el);
  });
};
