import { isBoolean } from "../../src";

export default () => {
  test(" null => false ", () => {
    expect(isBoolean(null)).toBe(false);
  });
  test(" undefined => false ", () => {
    expect(isBoolean(undefined)).toBe(false);
  });
  test(" true => true ", () => {
    expect(isBoolean(true)).toBe(true);
  });
  test(" false => true ", () => {
    expect(isBoolean(false)).toBe(true);
  });
  test(" 'true' => false ", () => {
    expect(isBoolean("true")).toBe(false);
  });
  test(" 'false' => false ", () => {
    expect(isBoolean("false")).toBe(false);
  });
  test(" '0' => false ", () => {
    expect(isBoolean("0")).toBe(false);
  });
  test(" '1' => false ", () => {
    expect(isBoolean("1")).toBe(false);
  });
  test(" 'string' => false ", () => {
    expect(isBoolean("string")).toBe(false);
  });
  test(" [1,2,3] => false ", () => {
    expect(isBoolean([1, 2, 3])).toBe(false);
  });
  test(" {a:1,b:2} => false ", () => {
    expect(isBoolean({ a: 1, b: 2 })).toBe(false);
  });
  test(" (() => {}) => false ", () => {
    expect(isBoolean(() => {})).toBe(false);
  });
  test(" new Boolean(true) => false ", () => {
    expect(isBoolean(new Boolean(true))).toBe(false);
  });
};
