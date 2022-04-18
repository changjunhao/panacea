import { isSymbol } from "../../src";

export default () => {
  test(" Symbol() => true ", () => {
    expect(isSymbol(Symbol())).toBe(true);
  });
  test(" undefined => false ", () => {
    expect(isSymbol(undefined)).toBe(false);
  });
  test(" null => false ", () => {
    expect(isSymbol(null)).toBe(false);
  });
  test(" true => false ", () => {
    expect(isSymbol(true)).toBe(false);
  });
  test(" false => false ", () => {
    expect(isSymbol(false)).toBe(false);
  });
  test(" ' ' => false ", () => {
    expect(isSymbol(" ")).toBe(false);
  });
  test(" 'foo' => false ", () => {
    expect(isSymbol("foo")).toBe(false);
  });
  test(" {} => false ", () => {
    expect(isSymbol({})).toBe(false);
  });
  test(" [] => false ", () => {
    expect(isSymbol([])).toBe(false);
  });
};
