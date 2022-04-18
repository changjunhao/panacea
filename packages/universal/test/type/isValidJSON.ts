import { isValidJSON } from "../../src";

export default () => {
  test("isValidJSON('{}')", () => {
    expect(isValidJSON("{}")).toBe(true);
  });
  test("isValidJSON('{\"a\":1}')", () => {
    expect(isValidJSON('{"a":1}')).toBe(true);
  });
  test("isValidJSON(null)", () => {
    expect(isValidJSON(null)).toBe(true);
  });
  test("isValidJSON(undefined)", () => {
    expect(isValidJSON(undefined)).toBe(false);
  });
  test("isValidJSON('')", () => {
    expect(isValidJSON("")).toBe(false);
  });
  test("isValidJSON('{')", () => {
    expect(isValidJSON("{")).toBe(false);
  });
};
