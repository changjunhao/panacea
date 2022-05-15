import { inRange } from "../../src";

export default () => {
  it("should return true if the number is in the range", () => {
    expect(inRange(1, 1, 2)).toBe(true);
    expect(inRange(2, 3, 1)).toBe(true);
    expect(inRange(2, 2, 3)).toBe(true);
    expect(inRange(3, 4)).toBe(true);
  });
  it("should return false if the number is not in the range", () => {
    expect(inRange(0, 1, 2)).toBe(false);
    expect(inRange(2, 3, 5)).toBe(false);
    expect(inRange(3, 2)).toBe(false);
  });
};
