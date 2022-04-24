import { isAlphaNumeric } from "../../src";

export default () => {
  test("isAlphaNumeric('abc123')", () => {
    expect(isAlphaNumeric("abc123")).toBe(true);
  });
  test("isAlphaNumeric('abc123!@#$%^&*()_+')", () => {
    expect(isAlphaNumeric("abc123!@#$%^&*()_+")).toBe(false);
  });
};
