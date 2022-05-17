import { extendHex } from "../../src";

export default () => {
  test("extendHex('#03f')", () => {
    expect(extendHex("#03f")).toBe("#0033ff");
  });

  test("extendHex('05a')", () => {
    expect(extendHex("05a")).toBe("#0055aa");
  });
};
