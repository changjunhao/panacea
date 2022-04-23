import elementIsFocused from "./dom/elementIsFocused";
import isBrowserTabFocused from "./dom/isBrowserTabFocused";
import bottomVisible from "./dom/bottomVisible";
import elementContains from "./dom/elementContains";
import removeElement from "./dom/removeElement";
import insertBefore from "./dom/insertBefore";
import insertAfter from "./dom/insertAfter";
import createElement from "./dom/createElement";
import setStyle from "./dom/setStyle";

describe("string:", () => {
  describe("isBrowserTabFocused:", isBrowserTabFocused);

  describe("elementIsFocused:", elementIsFocused);

  describe("bottomVisible:", bottomVisible);

  describe("elementContains:", elementContains);

  describe("removeElement:", removeElement);

  describe("insertBefore", insertBefore);

  describe("insertAfter:", insertAfter);

  describe("createElement:", createElement);

  describe("setStyle:", setStyle);
});
