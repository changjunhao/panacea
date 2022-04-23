import { findClosestMatchingNode } from "../../src";

export default () => {
  it("should find the closest matching node", () => {
    const root = document.createElement("div");
    const child = document.createElement("p");
    const grandchild = document.createElement("span");
    root.appendChild(child);
    child.appendChild(grandchild);
    document.body.appendChild(root);

    const result = findClosestMatchingNode(grandchild, "p");
    expect(result).toBe(child);
  });
  it("should return null if no matching node is found", () => {
    const root = document.createElement("div");
    const child = document.createElement("div");
    const grandchild = document.createElement("span");
    root.appendChild(child);
    child.appendChild(grandchild);
    document.body.appendChild(root);

    const result = findClosestMatchingNode(grandchild, "p");
    expect(result).toBe(null);
  });
};
