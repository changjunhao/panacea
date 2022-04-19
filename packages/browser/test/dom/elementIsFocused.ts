import { elementIsFocused } from "../../src";

export default () => {
  it("should return true if the element is focused", () => {
    const element = document.createElement("input");
    document.body.appendChild(element);
    element.focus();
    expect(elementIsFocused(element)).toBe(true);
  });
  it("should return false if the element is not focused", () => {
    const element = document.createElement("input");
    document.body.appendChild(element);
    expect(elementIsFocused(element)).toBe(false);
  });
};
