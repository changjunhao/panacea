import { formToObject } from "../../src";

export default () => {
  test("formToObject", () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <input type="text" name="name" value="John" />
      <input type="text" name="age" value="42" />
      <input type="text" name="email" value="ifable@ifalbe.cn" />
      <input type="text" name="phone" value="+86-13888888888" />
      `;
    const obj = formToObject(form);

    expect(obj).toEqual({
      name: "John",
      age: "42",
      email: "ifable@ifalbe.cn",
      phone: "+86-13888888888",
    });
  });
};
