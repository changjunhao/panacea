import { replaceLast } from "../../src";

export default () => {
  test("replaceLast('abcabdef', 'ab', 'gg')", () => {
    expect(replaceLast("abcabdef", "ab", "gg")).toBe("abcggdef");
  });
  test("replaceLast('abcabdef', /ab/, 'gg')", () => {
    expect(replaceLast("abcabdef", /ab/, "gg")).toBe("abcggdef");
  });
  test("replaceLast('abcabdef', 'ad', 'gg')", () => {
    expect(replaceLast("abcabdef", "ad", "gg")).toBe("abcabdef");
  });
  test("replaceLast('abcabdef', '/ad/, 'gg')", () => {
    expect(replaceLast("abcabdef", /ad/, "gg")).toBe("abcabdef");
  });
};
