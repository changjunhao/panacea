import { isPrimitive } from "../../src";

export default () => {
  test(" Symbol() => true ", () => {
    expect(isPrimitive(Symbol())).toBe(true);
  });
  test(" undefined => true ", () => {
    expect(isPrimitive(undefined)).toBe(true);
  });
  test(" null => true ", () => {
    expect(isPrimitive(null)).toBe(true);
  });
  test(" true => true ", () => {
    expect(isPrimitive(true)).toBe(true);
  });
  test(" false => true ", () => {
    expect(isPrimitive(false)).toBe(true);
  });
  test(" 0 => true ", () => {
    expect(isPrimitive(0)).toBe(true);
  });
  test(" 1 => true ", () => {
    expect(isPrimitive(1)).toBe(true);
  });
  test(" '' => true ", () => {
    expect(isPrimitive("")).toBe(true);
  });
  test(" 'a' => true ", () => {
    expect(isPrimitive("a")).toBe(true);
  });
  test(" '0' => true ", () => {
    expect(isPrimitive("0")).toBe(true);
  });
  test(" 'false' => true ", () => {
    expect(isPrimitive("false")).toBe(true);
  });
  test(" 'true' => true ", () => {
    expect(isPrimitive("true")).toBe(true);
  });
  test(" NaN => true ", () => {
    expect(isPrimitive(NaN)).toBe(true);
  });
  test(" {} => false ", () => {
    expect(isPrimitive({})).toBe(false);
  });
  test(" [] => false ", () => {
    expect(isPrimitive([])).toBe(false);
  });
  test(" () => {} => false ", () => {
    expect(isPrimitive(() => {})).toBe(false);
  });
  test(" () => [] => false ", () => {
    expect(isPrimitive(() => [])).toBe(false);
  });
};
