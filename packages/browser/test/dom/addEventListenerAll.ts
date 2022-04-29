import { addEventListenerAll } from "../../src";

export default () => {
  test("removeEventListenerAll", () => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const handler = jest.fn();
    addEventListenerAll([div1, div2], "click", handler);
    div1.click();
    div2.click();
    expect(handler).toHaveBeenCalledTimes(2);
  });
};
