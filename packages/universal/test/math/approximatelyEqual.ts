import { approximatelyEqual } from "../../src";

export default function () {
  it("should return true if the numbers are approximately equal", () => {
    expect(approximatelyEqual(Math.PI / 2.0, 1.5708)).toBe(true);
  });
  it("should return false if the numbers are not approximately equal", () => {
    expect(approximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001)).toBe(false);
  });
}
