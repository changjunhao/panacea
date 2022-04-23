import { prefersLightColorScheme } from "../../src";

export default () => {
  it("should return true if prefers light color scheme", () => {
    console.log(window.matchMedia("(prefers-color-scheme: light)"));
    expect(prefersLightColorScheme()).toBe(true);
  });
};
