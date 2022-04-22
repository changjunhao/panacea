import { isLowerCase } from "../../src";

export default () => {
  it("should return true if the string is uppercase", () => {
    expect(isLowerCase("hello")).toBe(true);
  });
  it("should return false if the string is not uppercase", () => {
    expect(isLowerCase("HELLO")).toBe(false);
    expect(isLowerCase("Hello")).toBe(false);
  });
};
