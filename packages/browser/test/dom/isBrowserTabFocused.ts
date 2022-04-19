import { isBrowserTabFocused } from "../../src";

export default () => {
  it("should return true if the browser tab is focused", () => {
    expect(isBrowserTabFocused()).toBe(true);
  });
};
