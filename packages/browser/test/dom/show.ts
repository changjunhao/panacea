import { show } from "../../src";

export default () => {
  test("show", () => {
    const div = document.createElement("div");
    div.style.display = "none";
    show(div);
    expect(div.style.display).toBe("");
  });
};
