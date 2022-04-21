import { equals } from "../../src";

export default () => {
  it("should return true if two objects are equal", () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 2 };
    expect(equals(a, b)).toBe(true);
    const c = 2;
    const d = 2;
    expect(equals(c, d)).toBe(true);
    const e = new Date();
    const f = new Date();
    expect(equals(e, f)).toBe(true);
    const g = [1, 2, 3];
    const h = { 0: 1, 1: 2, 2: 3 };
    expect(equals(g, h)).toBe(true);
    // const foo = jest.fn()
    // const bar = jest.fn()
    // foo.prototype.say = "test"
    // bar.prototype.say = "test"
    // expect(equals(foo, bar)).toBe(true)
  });
  it("should return false if two objects are not equal", () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 3 };
    expect(equals(a, b)).toBe(false);
    const c = 2;
    const d = "2";
    expect(equals(c, d)).toBe(false);
    const e = new Date();
    const f = new Date(new Date().setTime(e.getTime() + 1));
    expect(equals(e, f)).toBe(false);
    const foo = {};
    const bar = jest.fn();
    expect(equals(foo, bar)).toBe(false);

    const g = { a: 1, b: 3, d: 4 };
    expect(equals(b, g)).toBe(false);
  });
};
