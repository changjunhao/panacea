import { getStyle } from "../../src";

export default () => {
  test("getStyle", () => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.top = "10px";
    div.style.left = "10px";
    document.body.appendChild(div);
    expect(getStyle(div, "width")).toBe("100px");
    expect(getStyle(div, "height")).toBe("100px");
    expect(getStyle(div, "backgroundColor")).toBe("red");
    expect(getStyle(div, "position")).toBe("absolute");
    expect(getStyle(div, "top")).toBe("10px");
    expect(getStyle(div, "left")).toBe("10px");
    document.body.removeChild(div);
  });
};
