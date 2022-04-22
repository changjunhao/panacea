import { isLocalStorageEnabled } from "../../src";

export default () => {
  it("should return true if localStorage is enabled", () => {
    expect(isLocalStorageEnabled()).toBe(true);
  });
  it("should return false if localStorage is disabled", () => {
    const oldLocalStorageStorage = window.localStorage;
    Object.defineProperty(window, "localStorage", {
      value: {},
      writable: true,
    });
    expect(isLocalStorageEnabled()).toBe(false);
    Object.defineProperty(window, "localStorage", {
      value: oldLocalStorageStorage,
      writable: true,
    });
  });
};
