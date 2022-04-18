import { isArrayLike } from "../../src";

export default () => {
  test("isArrayLike([])", () => {
    expect(isArrayLike([])).toBe(true);
  });
  test("isArrayLike({})", () => {
    expect(isArrayLike({})).toBe(false);
  });
  test("isArrayLike(null)", () => {
    expect(isArrayLike(null)).toBe(false);
  });
  test("isArrayLike('abc')", () => {
    expect(isArrayLike("abc")).toBe(true);
  });
  test("isArrayLike(document.querySelectorAll('.test'))", () => {
    document.body.innerHTML =
      "<div>" +
      '  <span class="test" />' +
      '  <span class="test" />' +
      '  <span class="test" />' +
      "</div>";
    expect(isArrayLike(document.querySelectorAll(".test"))).toBe(true);
  });
};
