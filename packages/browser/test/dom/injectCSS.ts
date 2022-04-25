import { injectCSS } from "../../src";

export default () => {
  test("injectCSS", () => {
    const style = document.createElement("style");
    style.textContent = "body { color: blue; }";
    expect(injectCSS("body { color: blue; }")).toStrictEqual(style);
  });
};
