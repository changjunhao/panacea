import { untildify } from "../src";

describe("string:", () => {
  describe("untildify:", () => {
    test(" ~/foo/bar => /home/username/foo/bar", () => {
      expect(untildify("~/foo/bar")).toBe("/Users/ifable/foo/bar");
    });
  });
});
