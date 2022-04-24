import { truncateStringAtWhitespace } from "../../src";

export default () => {
  test("truncateStringAtWhitespace('short', 10)", () => {
    expect(truncateStringAtWhitespace("short", 10)).toBe("short");
  });
  test("truncateStringAtWhitespace('not so short', 10)", () => {
    expect(truncateStringAtWhitespace("not so short", 10)).toBe("not so...");
  });
  test("truncateStringAtWhitespace('trying a thing', 10)", () => {
    expect(truncateStringAtWhitespace("trying a thing", 10)).toBe("trying...");
  });
  test("truncateStringAtWhitespace('javascripting', 10)", () => {
    expect(truncateStringAtWhitespace("javascripting", 10)).toBe("javascr...");
  });
};
