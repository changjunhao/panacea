import { untildify, atob, btoa } from "../src";

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
    test('"5Lit5Zu9" => "中国"', function () {
      expect(atob("5Lit5Zu9")).toBe("中国");
    });
  });

  describe("btoa:", function () {
    test('"Hello World!" => "SGVsbG8gV29ybGQh"', function () {
      expect(btoa("Hello World!")).toBe("SGVsbG8gV29ybGQh");
    });
    test('"中国" => "5Lit5Zu9"', function () {
      expect(btoa("中国")).toBe("5Lit5Zu9");
    });
  });
});
