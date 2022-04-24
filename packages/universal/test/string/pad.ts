import { pad } from "../../src";

export default () => {
  test("pad('foobar', 3)", () => {
    expect(pad("foobar", 3, "-")).toBe("foobar");
  });
  test("pad(String(42), 6, '0')", () => {
    expect(pad(String(42), 6, "0")).toBe("004200");
  });
  test("pad('cat', 8)", () => {
    expect(pad("cat", 8)).toBe("  cat   ");
  });
};
