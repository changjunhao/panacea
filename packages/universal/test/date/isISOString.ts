import { isISOString } from "../../src";

export default () => {
  it("should return true for a valid ISO string", () => {
    expect(isISOString("2020-01-01T00:00:00.000Z")).toBe(true);
  });
  it("should return false for an invalid ISO string", () => {
    expect(isISOString("2020-01-01")).toBe(false);
  });
};
