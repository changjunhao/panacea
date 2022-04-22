import { untildify, atob } from "../src";

describe("string:", () => {
  describe("untildify:", () => {
    test(" ~/foo/bar => /home/username/foo/bar", () => {
      expect(untildify("~/foo/bar")).toBe("/Users/ifable/foo/bar");
    });
  });

  describe("atob:", function () {
    test('"SGVsbG8gV29ybGQh" => "Hello World!"', function () {
      expect(atob("SGVsbG8gV29ybGQh")).toBe("Hello World!");
    });
  });
});
