import { matches } from "../../src";

export default () => {
  it("should return true if the object matches the given pattern", () => {
    expect(matches({ a: 1 }, { a: 1 })).toBe(true);
    expect(matches({ a: 1, b: 2 }, { a: 1 })).toBe(true);
    expect(matches({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });
  it("should return false if the object does not match the given pattern", () => {
    expect(matches({ a: 1 }, { a: 2 })).toBe(false);
    expect(matches({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(matches({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
  });
};
