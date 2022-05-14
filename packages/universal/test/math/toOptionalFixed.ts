import { toOptionalFixed } from "../../src";

export default () => {
  it("should return '1.23'", () => {
    expect(toOptionalFixed(1.23, 2)).toBe("1.23");
  });

  it("should return '1'", () => {
    expect(toOptionalFixed(1.001, 2)).toBe("1");
  });

  it("should return '1.5'", () => {
    expect(toOptionalFixed(1.5, 2)).toBe("1.5");
  });
};
