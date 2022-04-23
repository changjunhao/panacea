import supportsTouchEvents from "./bom/supportsTouchEvents";
import isSessionStorageEnabled from "./bom/isSessionStorageEnabled";
import isLocalStorageEnabled from "./bom/isLocalStorageEnabled";
import getProtocol from "./bom/getProtocol";
import prefersLightColorScheme from "./bom/prefersLightColorScheme";
import prefersDarkColorScheme from "./bom/prefersDarkColorScheme";
import detectDeviceType from "./bom/detectDeviceType";
import getSelectedText from "./bom/getSelectedText";
import currentURL from "./bom/currentURL";

describe("BOM:", function () {
  describe("supportsTouchEvents:", supportsTouchEvents);

  describe("isSessionStorageEnabled:", isSessionStorageEnabled);

  describe("isLocalStorageEnabled:", isLocalStorageEnabled);

  describe("getProtocol:", getProtocol);

  describe("prefersLightColorScheme:", prefersLightColorScheme);

  describe("prefersDarkColorScheme:", prefersDarkColorScheme);

  describe("detectDeviceType:", detectDeviceType);

  describe("getSelectedText:", getSelectedText);

  describe("currentURL:", currentURL);
});
