import { clampNumber } from "../../src";

export default () => {
  it("should clamp a number between a min and max", () => {
    expect(clampNumber(2, 3, 5)).toBe(3);
    expect(clampNumber(0, 1, 2)).toBe(1);
    expect(clampNumber(2, -1, 1)).toBe(1);
    expect(clampNumber(0, -1, 0)).toBe(0);
    expect(clampNumber(1, -1, -5)).toBe(-1);
  });
};
