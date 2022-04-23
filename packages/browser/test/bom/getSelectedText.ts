import { getSelectedText } from "../../src";

export default () => {
  test("getSelectedText", () => {
    const $p = document.createElement("p");
    $p.innerHTML = "Hello World";
    document.body.appendChild($p);
    const range = document.createRange();
    range.selectNodeContents($p);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    expect(getSelectedText()).toBe("Hello World");
  });
  test("getSelectedText", () => {
    const $p = document.createElement("p");
    $p.innerHTML = "Hello World";
    document.body.appendChild($p);
    Object.defineProperty(window, "getSelection", {
      value: () => null,
    });
    expect(getSelectedText()).toBe(undefined);
  });
};
