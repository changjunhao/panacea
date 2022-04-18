import { isNumber } from "../../src";

export default () => {
  test(" 1  => true ", () => {
    expect(isNumber(1)).toBe(true);
  });
  test(" '1'  => false ", () => {
    expect(isNumber("1")).toBe(false);
  });
  test(" NaN => false ", () => {
    expect(isNumber(NaN)).toBe(false);
  });
  test(" Infinity => true ", () => {
    expect(isNumber(Infinity)).toBe(true);
  });
  test(" -Infinity => true ", () => {
    expect(isNumber(-Infinity)).toBe(true);
  });
  test(" null => false ", () => {
    expect(isNumber(null)).toBe(false);
  });
  test(" undefined => false ", () => {
    expect(isNumber(undefined)).toBe(false);
  });
};
