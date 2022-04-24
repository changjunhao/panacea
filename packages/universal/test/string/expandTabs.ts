import { expandTabs } from "../../src";

export default () => {
  test("expandTabs('\t\tlorem', 3)", () => {
    expect(expandTabs("\t\tlorem", 3)).toBe("      lorem");
  });
};
