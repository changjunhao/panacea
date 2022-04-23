import supportsTouchEvents from "./bom/supportsTouchEvents";
import isSessionStorageEnabled from "./bom/isSessionStorageEnabled";
import isLocalStorageEnabled from "./bom/isLocalStorageEnabled";
import getProtocol from "./bom/getProtocol";
import prefersLightColorScheme from "./bom/prefersLightColorScheme";

describe("BOM:", function () {
  describe("supportsTouchEvents:", supportsTouchEvents);

  describe("isSessionStorageEnabled:", isSessionStorageEnabled);

  describe("isLocalStorageEnabled:", isLocalStorageEnabled);

  describe("getProtocol:", getProtocol);

  describe("prefersLightColorScheme:", prefersLightColorScheme);
});
