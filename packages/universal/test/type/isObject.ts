import { isObject } from "../../src";

export default () => {
  test(" {} => true", () => {
    expect(isObject({})).toBe(true);
  });
  test(" [] => true", () => {
    expect(isObject([])).toBe(true);
  });
  test(" null => false", () => {
    expect(isObject(null)).toBe(false);
  });
  test(" undefined => false", () => {
    expect(isObject(undefined)).toBe(false);
  });
  test(" () => {} => true", () => {
    expect(isObject(() => {})).toBe(true);
  });
  test(" new Date() => true", () => {
    expect(isObject(new Date())).toBe(true);
  });
  test(" new Error() => true", () => {
    expect(isObject(new Error())).toBe(true);
  });
  test(" new Map() => true", () => {
    expect(isObject(new Map())).toBe(true);
  });
  test(" new Set() => true", () => {
    expect(isObject(new Set())).toBe(true);
  });
};
