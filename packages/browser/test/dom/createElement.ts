import { createElement } from "../../src";

export default () => {
  test("create element", () => {
    const el = createElement(
      `<div class="container"><p>Hello!</p></div><div class="container"><p>World!</p></div>`
    );
    const el1 = document.createElement("div");
    el1.className = "container";
    el1.innerHTML = "<p>Hello!</p>";
    expect(el).toStrictEqual(el1);
  });
};
