import { hasFlags, getCmdArgs } from "../src";

describe("process:", function () {
  describe("hasFlags:", function () {
    it("should return false if the process does not have the given flags", function () {
      expect(hasFlags("--bar")).toBe(false);
    });
  });

  describe("getCmdArgs:", function () {
    it("should return the command line arguments", function () {
      expect(getCmdArgs().includes("--verbose")).toBe(false);
    });
  });
});
