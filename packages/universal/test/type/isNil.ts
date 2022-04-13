import { isNil } from "../../src";

export default () => {
  test(" undefined => true ", () => {
    expect(isNil(undefined)).toBe(true);
  });
  test(" null => true ", () => {
    expect(isNil(null)).toBe(true);
  });
  test(" 0 => false ", () => {
    expect(isNil(0)).toBe(false);
  });
  test(' "" => false ', () => {
    expect(isNil("")).toBe(false);
  });
  test(" {} => false ", () => {
    expect(isNil({})).toBe(false);
  });
  test(" [] => false ", () => {
    expect(isNil([])).toBe(false);
  });
  test(" () => false ", () => {
    expect(isNil(() => {})).toBe(false);
  });
};
