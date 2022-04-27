import { onClickOutside } from "../../src";

export default () => {
  it("should not work", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const handler = jest.fn();
    onClickOutside(div, handler);
    div.click();
    expect(handler).not.toBeCalled();
  });
  it("should work", () => {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    document.body.appendChild(div);
    document.body.appendChild(div1);
    const handler = jest.fn();
    onClickOutside(div, handler);
    div1.click();
    expect(handler).toBeCalled();
  });
};
