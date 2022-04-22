import elementIsFocused from "./dom/elementIsFocused";
import isBrowserTabFocused from "./dom/isBrowserTabFocused";
import bottomVisible from "./dom/bottomVisible";
import elementContains from "./dom/elementContains";
import removeElement from "./dom/removeElement";

describe("string:", () => {
  describe("isBrowserTabFocused:", isBrowserTabFocused);

  describe("elementIsFocused:", elementIsFocused);

  describe("bottomVisible:", bottomVisible);

  describe("elementContains:", elementContains);

  describe("removeElement:", removeElement);
});
