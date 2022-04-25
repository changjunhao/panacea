import { shallowClone } from "../../src";

export default () => {
  it("should shallow clone an object", () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    };

    const clone = shallowClone(obj);

    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.b).toBe(obj.b);
  });
};
