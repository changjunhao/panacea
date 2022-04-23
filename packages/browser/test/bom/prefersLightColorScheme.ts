import { prefersLightColorScheme } from "../../src";

export default () => {
  it("should return true if prefers light color scheme", () => {
    expect(prefersLightColorScheme()).toBe(true);
  });
};
