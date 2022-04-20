import { isEmpty } from "../../src";

export default () => {
  test(" null => true ", () => {
    expect(isEmpty(null)).toBe(true);
  });
  test(" undefined => true ", () => {
    expect(isEmpty(undefined)).toBe(true);
  });
  test(" 0 => true ", () => {
    expect(isEmpty(0)).toBe(true);
  });
  test(" false => true ", () => {
    expect(isEmpty(false)).toBe(true);
  });
  test(" '' => true ", () => {
    expect(isEmpty("")).toBe(true);
  });
  test(" ' ' => false ", () => {
    expect(isEmpty(" ")).toBe(false);
  });
  test(" '123' => false ", () => {
    expect(isEmpty("123")).toBe(false);
  });
  test(" 123 => true ", () => {
    expect(isEmpty(123)).toBe(true);
  });
  test(" '0' => false ", () => {
    expect(isEmpty("0")).toBe(false);
  });
  test(" [] => true ", () => {
    expect(isEmpty([])).toBe(true);
  });
  test(" [1] => false ", () => {
    expect(isEmpty([1])).toBe(false);
  });
  test(" {} => true ", () => {
    expect(isEmpty({})).toBe(true);
  });
  test(" {a:1} => false ", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
};
