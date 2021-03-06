import { isNode, isBrowser } from "../src";

describe("environment:", function () {
  describe("isNode:", function () {
    it("should return true if the environment is node", function () {
      expect(isNode()).toBe(true);
    });
  });

  describe("isBrowser:", function () {
    it("should return true if the environment is browser", function () {
      expect(isBrowser()).toBe(true);
    });
  });
});
