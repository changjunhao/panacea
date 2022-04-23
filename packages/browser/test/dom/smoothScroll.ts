import { smoothScroll } from "../../src";

export default () => {
  it("should scroll", () => {
    let scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "1000px";
    div.style.height = "100px";
    div.style.width = "100px";
    document.body.appendChild(div);
    const scrollTop = window.scrollY;
    smoothScroll("div");
    expect(window.scrollY).toBe(scrollTop);
    expect(scrollIntoViewMock).toHaveBeenCalled();
    document.body.removeChild(div);
  });
  it("should scroll with offset", () => {
    let scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    smoothScroll(".test");
    expect(scrollIntoViewMock).not.toBeCalled();
  });
};
