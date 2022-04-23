import { setStyle } from "../../src";

export default () => {
  test("setStyle", () => {
    const div = document.createElement("div");
    setStyle(div, "color", "red");
    setStyle(div, "fontSize", "12px");
    expect(div.style.color).toBe("red");
    expect(div.style.fontSize).toBe("12px");
  });
};
