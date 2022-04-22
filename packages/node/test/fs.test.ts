import { createDirIfNotExists } from "../src";
import * as fs from "fs";

describe("fs:", function () {
  describe("createDirIfNotExists:", function () {
    it("should create a directory if it does not exist", function () {
      const dir = "./test/test-dir";
      createDirIfNotExists(dir);
      expect(fs.existsSync(dir)).toBe(true);
    });
    it("should not create a directory if it already exists", function () {
      const dir = "./test/test-dir";
      createDirIfNotExists(dir);
      expect(fs.existsSync(dir)).toBe(true);
      fs.rmdirSync(dir);
    });
  });
});
