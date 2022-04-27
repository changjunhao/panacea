import { getAncestors } from "../../src";

export default () => {
  it("should return an array of ancestors", () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.appendChild(span);
    div.appendChild(p);
    document.body.appendChild(div);
    expect(getAncestors(span)).toEqual([
      document,
      document.documentElement,
      document.body,
      div,
      p,
      span,
    ]);
    document.body.removeChild(div);
  });
};
