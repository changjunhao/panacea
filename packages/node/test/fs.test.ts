import { createDirIfNotExists, readFileLines, JSONToFile } from "../src";
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

  describe("readFileLines:", function () {
    it("should read a file and return an array of lines", function () {
      const file = "./test/test-file.txt";
      fs.writeFileSync(file, "line 1\nline 2\nline 3");
      const lines = readFileLines(file);
      expect(lines).toEqual(["line 1", "line 2", "line 3"]);
      fs.rmSync(file);
    });
  });

  describe("JSONToFile:", function () {
    it("should write a JSON object to a file", function () {
      const file = "./test/test-file";
      JSONToFile(
        {
          test: "test",
        },
        file
      );
      expect(fs.existsSync(`${file}.json`)).toBe(true);
      fs.rmSync(`${file}.json`);
    });
  });
});
