import { addStyles } from "../../src";

export default () => {
  test("addStyles", () => {
    const div = document.createElement("div");
    addStyles(div, {
      color: "red",
      fontSize: "12px",
    });
    document.body.appendChild(div);
    expect(div.style.color).toBe("red");
  });
};
