import { getParentsUntil } from "../../src";

export default () => {
  test("getParentsUntil(el, 'body')", () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.appendChild(span);
    div.appendChild(p);
    document.body.appendChild(div);
    expect(getParentsUntil(span, "body")).toEqual([document.body, div, p]);
    document.body.removeChild(div);
    expect(getParentsUntil(document.body, "body")).toEqual([]);
  });
};
