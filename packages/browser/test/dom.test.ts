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
import injectCSS from "./dom/injectCSS";
import findClosestAnchor from "./dom/findClosestAnchor";
import off from "./dom/off";
import on from "./dom/on";
import listenOnce from "./dom/listenOnce";
import removeEventListenerAll from "./dom/removeEventListenerAll";
import addEventListenerAll from "./dom/addEventListenerAll";
import hasClass from "./dom/hasClass";
import onClickOutside from "./dom/onClickOutside";
import getAncestors from "./dom/getAncestors";
import addStyles from "./dom/addStyles";
import nodeListToArray from "./dom/nodeListToArray";
import getElementsBiggerThanViewport from "./dom/getElementsBiggerThanViewport";
import getImages from "./dom/getImages";
import getParentsUntil from "./dom/getParentsUntil";
import formToObject from "./dom/formToObject";
import show from "./dom/show";
import hide from "./dom/hide";
import arrayToHTMLList from "./dom/arrayToHTMLList";

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

  describe("injectCSS:", injectCSS);

  describe("findClosestAnchor:", findClosestAnchor);

  describe("off:", off);

  describe("listenOnce:", listenOnce);

  describe("on", on);

  describe("removeEventListenerAll:", removeEventListenerAll);

  describe("addEventListenerAll:", addEventListenerAll);

  describe("hasClass", hasClass);

  describe("onClickOutside", onClickOutside);

  describe("getAncestors", getAncestors);

  describe("addStyles", addStyles);

  describe("nodeListToArray", nodeListToArray);

  describe("getElementsBiggerThanViewport", getElementsBiggerThanViewport);

  describe("getImages", getImages);

  describe("getParentsUntil", getParentsUntil);

  describe("formToObject", formToObject);

  describe("show", show);

  describe("hide", hide);

  describe("arrayToHTMLList", arrayToHTMLList);
});
