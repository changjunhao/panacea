import { logBase } from "../../src";

export default () => {
  it("should return the log base 10 of a number", () => {
    expect(logBase(10, 10)).toBe(1);
    expect(logBase(100, 10)).toBe(2);
  });
  it("should return the log base 2 of a number", () => {
    expect(logBase(8, 2)).toBe(3);
    expect(logBase(256, 2)).toBe(8);
  });
};
