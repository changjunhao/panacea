import { isObjectLike } from "../../src";

export default () => {
  test(" {} => true", () => {
    expect(isObjectLike({})).toBe(true);
  });
  test(" [] => true", () => {
    expect(isObjectLike([])).toBe(true);
  });
  test(" null => false", () => {
    expect(isObjectLike(null)).toBe(false);
  });
  test(" undefined => false", () => {
    expect(isObjectLike(undefined)).toBe(false);
  });
  test(" () => {} => false", () => {
    expect(isObjectLike(() => {})).toBe(false);
  });
  test(" new Date() => true", () => {
    expect(isObjectLike(new Date())).toBe(true);
  });
  test(" new Error() => true", () => {
    expect(isObjectLike(new Error())).toBe(true);
  });
  test(" new Map() => true", () => {
    expect(isObjectLike(new Map())).toBe(true);
  });
  test(" new Set() => true", () => {
    expect(isObjectLike(new Set())).toBe(true);
  });
};
