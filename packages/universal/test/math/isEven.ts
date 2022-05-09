import { isEven } from "../../src";

export default () => {
  it("should return true if the number is even", () => {
    expect(isEven(2)).toBe(true);
  });
  it("should return false if the number is odd", () => {
    expect(isEven(1)).toBe(false);
  });
};
