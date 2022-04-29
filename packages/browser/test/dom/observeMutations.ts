import { observeMutations } from "../../src";

export default () => {
  test("observeMutations", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const callback = jest.fn();
    const observer = observeMutations(div, callback);
    div.appendChild(document.createElement("div"));
    div.style.color = "red";
    expect(callback).toHaveBeenCalled();
    observer.disconnect();
  });
};
