import { degreesToRads } from "../../src";

export default () => {
  test("degreesToRads(0) should return 0", () => {
    expect(degreesToRads(0)).toBe(0);
  });
  test("degreesToRads(90) should return Math.PI / 2", () => {
    expect(degreesToRads(90)).toBe(Math.PI / 2);
  });
  test("degreesToRads(180) should return Math.PI", () => {
    expect(degreesToRads(180)).toBe(Math.PI);
  });
  test("degreesToRads(270) should return Math.PI * 3 / 2", () => {
    expect(degreesToRads(270)).toBe((Math.PI * 3) / 2);
  });
  test("degreesToRads(360) should return Math.PI * 2", () => {
    expect(degreesToRads(360)).toBe(Math.PI * 2);
  });
};
