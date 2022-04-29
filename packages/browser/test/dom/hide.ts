import { hide } from "../../src";

export default () => {
  test("hide", () => {
    const div = document.createElement("div");
    hide(div);
    expect(div.style.display).toBe("none");
  });
};
