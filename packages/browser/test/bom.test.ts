import supportsTouchEvents from "./bom/supportsTouchEvents";
import isSessionStorageEnabled from "./bom/isSessionStorageEnabled";
import isLocalStorageEnabled from "./bom/isLocalStorageEnabled";

describe("BOM:", function () {
  describe("supportsTouchEvents:", supportsTouchEvents);

  describe("isSessionStorageEnabled:", isSessionStorageEnabled);

  describe("isLocalStorageEnabled:", isLocalStorageEnabled);
});
