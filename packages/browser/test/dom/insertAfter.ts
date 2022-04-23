import { insertAfter } from "../../src";

export default () => {
  test("Insert HTML string before element", () => {
    document.body.innerHTML = `
      <div id="myId"></div>
    `;
    insertAfter(document.getElementById("myId"), "<p>after</p>");
    expect(document.body.innerHTML).toBe(`
      <div id="myId"></div><p>after</p>
    `);
  });
};
