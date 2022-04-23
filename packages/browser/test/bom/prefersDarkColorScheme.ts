import { prefersDarkColorScheme } from "../../src";

export default () => {
  it("should return true if prefers-color-scheme is dark", () => {
    expect(prefersDarkColorScheme()).toBe(false);
  });
};
