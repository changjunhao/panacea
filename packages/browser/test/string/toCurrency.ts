import { toCurrency } from "../../src";

export default () => {
  test("toCurrency(123456.789)", () => {
    expect(toCurrency(123456.789, "EUR")).toBe("€123,456.79");
  });
  test("toCurrency(123456.789, 'USD', 'en-us')", () => {
    expect(toCurrency(123456.789, "USD", "en-us")).toBe("$123,456.79");
  });
  test("toCurrency(123456.789, 'CNY')", () => {
    expect(toCurrency(123456.789, "CNY")).toBe("CN¥123,456.79");
  });
};
