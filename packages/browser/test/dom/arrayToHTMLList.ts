import { arrayToHTMLList } from "../../src";

export default () => {
  test("arrayToHTMLList(['a', 'b', 'c'], 'myListID')", () => {
    const ul = document.createElement("ul");
    ul.id = "myListID";
    document.body.appendChild(ul);
    arrayToHTMLList(["a", "b", "c"], "myListID");
    expect(document.getElementById("myListID").innerHTML).toBe(
      "<li>a</li><li>b</li><li>c</li>"
    );
    document.body.removeChild(ul);
    expect(() => arrayToHTMLList(["a", "b", "c"], "myListID")).toThrow();
  });
};
