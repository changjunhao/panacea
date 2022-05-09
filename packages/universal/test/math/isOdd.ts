import { isOdd } from "../../src";

export default () => {
  it("should return true if the number is odd", () => {
    expect(isOdd(11)).toBe(true);
  });
  it("should return false if the number is even", () => {
    expect(isOdd(22)).toBe(false);
  });
};
