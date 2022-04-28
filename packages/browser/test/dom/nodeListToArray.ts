import { nodeListToArray } from "../../src";

export default () => {
  test("nodeListToArray", () => {
    const div = document.createElement("div");
    div.innerHTML = "<div></div><div></div>";
    const divs = div.querySelectorAll("div");
    expect(nodeListToArray(divs)).toEqual([divs[0], divs[1]]);
  });
};
