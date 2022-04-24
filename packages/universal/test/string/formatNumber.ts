import { formatNumber } from "../../src";

export default () => {
  test("formatNumber(123456789)", () => {
    expect(formatNumber(123456789)).toBe("123,456,789");
  });
  test("formatNumber(12345678)", () => {
    expect(formatNumber(12345678)).toBe("12,345,678");
  });
};
