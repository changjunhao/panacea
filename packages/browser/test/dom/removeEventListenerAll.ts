import { removeEventListenerAll } from "../../src";

export default () => {
  test("removeEventListenerAll", () => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const handler = jest.fn();
    div1.addEventListener("click", handler);
    div2.addEventListener("click", handler);
    removeEventListenerAll([div1, div2], "click", handler);
    div1.click();
    div2.click();
    expect(handler).not.toBeCalled();
  });
};
