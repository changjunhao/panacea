import { getScrollPosition } from "../../src";

export default () => {
  it("should return the scroll position of the window", () => {
    const scrollPosition = getScrollPosition();
    expect(scrollPosition).toEqual({
      x: 0,
      y: 0,
    });
  });
  it("should return the scroll position of the element", () => {
    const element = document.createElement("div");
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.overflow = "scroll";
    element.style.position = "absolute";
    element.style.top = "0";
    element.style.left = "0";
    document.body.appendChild(element);
    const scrollPosition = getScrollPosition(element);
    expect(scrollPosition).toEqual({
      x: 0,
      y: 0,
    });
    document.body.removeChild(element);
  });
};
