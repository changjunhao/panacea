import { isUndefined } from "../../src";

export default () => {
  test(" undefined => true ", () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test(" null => false ", () => {
    expect(isUndefined(null)).toBe(false);
  });
  test(" 0 => false ", () => {
    expect(isUndefined(0)).toBe(false);
  });
  test(' "" => false ', () => {
    expect(isUndefined("")).toBe(false);
  });
  test(" {} => false ", () => {
    expect(isUndefined({})).toBe(false);
  });
  test(" [] => false ", () => {
    expect(isUndefined([])).toBe(false);
  });
  test(" () => false ", () => {
    expect(isUndefined(() => {})).toBe(false);
  });
};
