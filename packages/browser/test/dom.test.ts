import { isBrowserTabFocused } from "../src";

describe("string:", () => {
  describe("isBrowserTabFocused:", () => {
    it("should return true if the browser tab is focused", () => {
      expect(isBrowserTabFocused()).toBe(true);
    });
  });
});
