import { isPromiseLike } from "../../src";

export default () => {
  test("isPromiseLike('foo')", () => {
    expect(isPromiseLike("foo")).toBe(false);
  });
  test("isPromiseLike(Promise.resolve('foo'))", () => {
    expect(isPromiseLike(Promise.resolve("foo"))).toBe(true);
  });
  test("isPromiseLike(new Promise(() => {}))", () => {
    expect(isPromiseLike(new Promise(() => {}))).toBe(true);
  });
  test("isPromiseLike(new Promise(() => {}).then(() => {}))", () => {
    expect(isPromiseLike(new Promise(() => {}).then(() => {}))).toBe(true);
  });
  test("isPromiseLike(new Promise(() => {}).catch(() => {}))", () => {
    expect(isPromiseLike(new Promise(() => {}).catch(() => {}))).toBe(true);
  });
  test("isPromiseLike(Promise.all([Promise.resolve('foo')]))", () => {
    expect(isPromiseLike(Promise.all([Promise.resolve("foo")]))).toBe(true);
  });
};
