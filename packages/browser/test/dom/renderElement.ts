import { renderElement } from "../../src";

export default () => {
  test("render button element", () => {
    const clickHandler = jest.fn();
    const myElement = {
      type: "button",
      props: {
        type: "button",
        className: "btn",
        onClick: clickHandler,
        children: [{ props: { nodeValue: "Click me" } }],
      },
    };

    renderElement(myElement, document.body);
    expect(document.body.innerHTML).toBe(
      `<button type="button" class="btn">Click me</button>`
    );
    document.querySelector("button").click();
    expect(clickHandler).toBeCalled();
    document.body.removeChild(document.querySelector("button"));
  });
  test("render test element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const myElement = {
      props: {
        nodeValue: "Hello",
      },
    };

    renderElement(myElement, div);
    expect(div.innerHTML).toBe("Hello");
    document.body.removeChild(div);
  });
  test("render div element with no props", () => {
    const myElement = {
      type: "div",
    };

    renderElement(myElement, document.body);
    expect(document.body.innerHTML).toBe(`<div></div>`);
    document.body.innerHTML = "";
  });
};
