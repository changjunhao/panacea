import { getElementsBiggerThanViewport } from "../../src";

export default () => {
  test("getElementsBiggerThanViewport", () => {
    const div = document.createElement("div");
    div.style.width = "1000px";
    div.style.height = "100px";
    Object.defineProperty(div, "offsetWidth", {
      get: () => 1000,
    });
    document.body.appendChild(div);
    const elements = getElementsBiggerThanViewport();
    expect(elements.length).toBe(1);
    expect(elements[0].tagName).toBe("DIV");
  });
};
