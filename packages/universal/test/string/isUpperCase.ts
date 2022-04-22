import { isUpperCase } from "../../src";

export default () => {
  it("should return true if the string is uppercase", () => {
    expect(isUpperCase("HELLO")).toBe(true);
  });
  it("should return false if the string is not uppercase", () => {
    expect(isUpperCase("hello")).toBe(false);
    expect(isUpperCase("Hello")).toBe(false);
  });
};
