import { getSiblings } from "../../src";

export default () => {
  test("getSiblings(element)", () => {
    const div = document.createElement("div");
    div.innerHTML = `<div id="parent"><div id="child"></div><div id="sibling"></div></div>`;
    document.body.appendChild(div);

    const parent = document.getElementById("parent");
    const child = document.getElementById("child");
    const sibling = document.getElementById("sibling");

    expect(getSiblings(child)).toEqual([sibling]);
    expect(getSiblings(sibling)).toEqual([child]);
    expect(getSiblings(parent)).toEqual([]);
    expect(getSiblings(document)).toEqual([]);

    document.body.removeChild(div);
  });
};
