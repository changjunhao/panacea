import { bottomVisible } from "../../src";

export default () => {
  it("should return true if the element is visible", function () {
    const element = document.createElement("div");
    element.style.display = "block";
    element.style.visibility = "visible";
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.position = "absolute";
    element.style.top = "0px";
    element.style.left = "0px";
    element.style.bottom = "0px";
    element.style.right = "0px";
    document.body.appendChild(element);
    expect(bottomVisible()).toBe(true);
    document.body.removeChild(element);
  });
};
