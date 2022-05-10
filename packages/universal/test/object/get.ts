import { get } from "../../src";

export default () => {
  it("should get a value from an object", () => {
    const obj = {
      selector: { to: { val: "val to select" } },
      target: [1, 2, { a: "test" }],
    };
    expect(get(obj, "selector.to.val")).toStrictEqual(["val to select"]);
    expect(get(obj, "target[2].a")).toStrictEqual(["test"]);
    expect(get(obj, "target[2].b")).toStrictEqual([undefined]);
    expect(
      get(obj, "selector.to.val", "target[0]", "target[2].a")
    ).toStrictEqual(["val to select", 1, "test"]);
  });
};
