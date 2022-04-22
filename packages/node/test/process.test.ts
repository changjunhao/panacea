import { hasFlags } from "../src";

describe("process:", function () {
  describe("hasFlags:", function () {
    it("should return false if the process does not have the given flags", function () {
      expect(hasFlags("--bar")).toBe(false);
    });
  });
});
