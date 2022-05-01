import { serializeForm } from "../../src";

export default () => {
  test("serializeForm('form')", () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <input type="text" name="name" value="John">
      <input type="text" name="age" value="42">
      <input type="text" name="email" value="ifable@ifable.cn">
      `;
    expect(serializeForm(form)).toBe(
      "name=John&age=42&email=ifable%40ifable.cn"
    );
  });
};
