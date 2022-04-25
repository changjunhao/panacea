import elementIsFocused from "./dom/elementIsFocused";
import isBrowserTabFocused from "./dom/isBrowserTabFocused";
import bottomVisible from "./dom/bottomVisible";
import elementContains from "./dom/elementContains";
import removeElement from "./dom/removeElement";
import insertBefore from "./dom/insertBefore";
import insertAfter from "./dom/insertAfter";
import createElement from "./dom/createElement";
import setStyle from "./dom/setStyle";
import findClosestMatchingNode from "./dom/findClosestMatchingNode";
import toggleClass from "./dom/toggleClass";
import smoothScroll from "./dom/smoothScroll";
import addClass from "./dom/addClass";
import removeClass from "./dom/removeClass";
import getStyle from "./dom/getStyle";
import getScrollPosition from "./dom/getScrollPosition";
import triggerEvent from "./dom/triggerEvent";

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

  describe("findClosestMatchingNode:", findClosestMatchingNode);

  describe("toggleClass:", toggleClass);

  describe("smoothScroll:", smoothScroll);

  describe("addClass:", addClass);

  describe("removeClass:", removeClass);

  describe("getStyle:", getStyle);

  describe("getScrollPosition:", getScrollPosition);

  describe("triggerEvent:", triggerEvent);
});
