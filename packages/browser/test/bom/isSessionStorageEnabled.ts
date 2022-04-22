import { isSessionStorageEnabled } from "../../src";

export default () => {
  it("should return true if sessionStorage is enabled", () => {
    expect(isSessionStorageEnabled()).toBe(true);
  });
  it("should return false if sessionStorage is disabled", () => {
    const oldSessionStorage = window.sessionStorage;
    Object.defineProperty(window, "sessionStorage", {
      value: {},
      writable: true,
    });
    expect(isSessionStorageEnabled()).toBe(false);
    Object.defineProperty(window, "sessionStorage", {
      value: oldSessionStorage,
      writable: true,
    });
  });
};
