import { UUIDGeneratorBrowser } from "../src";

describe("random:", function () {
  describe("UUIDGeneratorNode:", function () {
    it("should generate a random UUID", function () {
      const uuid = UUIDGeneratorBrowser();
      expect(uuid).toEqual(
        expect.stringMatching(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        )
      );
    });
  });
});
