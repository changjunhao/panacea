import { escapeHTML } from "../../src";

export default () => {
  test("escapeHTML('<div>') === '&lt;div&gt;'", () => {
    expect(escapeHTML("<div>")).toBe("&lt;div&gt;");
  });
};
