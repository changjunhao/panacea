import { isFunction } from "../../src";

export default () => {
  test(" {} => false", () => {
    expect(isFunction({})).toBe(false);
  });
  test(" [] => false", () => {
    expect(isFunction([])).toBe(false);
  });
  test(" null => false", () => {
    expect(isFunction(null)).toBe(false);
  });
  test(" undefined => false", () => {
    expect(isFunction(undefined)).toBe(false);
  });
  test(" () => {} => true", () => {
    expect(isFunction(() => {})).toBe(true);
  });
  test(" () => {} => true", () => {
    expect(isFunction(function () {})).toBe(true);
  });
};
