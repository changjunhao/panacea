import { insertBefore } from "../../src";

export default () => {
  test("Insert HTML string before element", () => {
    document.body.innerHTML = `
      <div id="myId"></div>
    `;
    insertBefore(document.getElementById("myId"), "<p>before</p>");
    expect(document.body.innerHTML).toBe(`
      <p>before</p><div id="myId"></div>
    `);
  });
};
