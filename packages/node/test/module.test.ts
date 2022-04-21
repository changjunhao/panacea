import { requireUncached } from "../src";

describe("module:", function () {
  it("requireUncached", function () {
    const module = requireUncached("fs");
    expect(module).toBeDefined();
  });
});
