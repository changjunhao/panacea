import { radsToDegrees } from "../../src";

export default () => {
  test("radsToDegrees(0) should return 0", () => {
    expect(radsToDegrees(0)).toBe(0);
  });
  test("radsToDegrees(Math.PI) should return 180", () => {
    expect(radsToDegrees(Math.PI)).toBe(180);
  });
  test("radsToDegrees(Math.PI * 2) should return 360", () => {
    expect(radsToDegrees(Math.PI * 2)).toBe(360);
  });
  test("radsToDegrees(Math.PI / 2) should return 90", () => {
    expect(radsToDegrees(Math.PI / 2)).toBe(90);
  });
};
