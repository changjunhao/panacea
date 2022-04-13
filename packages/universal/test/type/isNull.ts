import { isNull } from "../../src";

export default () => {
  test(" undefined => false ", () => {
    expect(isNull(undefined)).toBe(false);
  });
  test(" null => true ", () => {
    expect(isNull(null)).toBe(true);
  });
  test(" 0 => false ", () => {
    expect(isNull(0)).toBe(false);
  });
  test(' "" => false ', () => {
    expect(isNull("")).toBe(false);
  });
  test(" {} => false ", () => {
    expect(isNull({})).toBe(false);
  });
  test(" [] => false ", () => {
    expect(isNull([])).toBe(false);
  });
  test(" () => false ", () => {
    expect(isNull(() => {})).toBe(false);
  });
};
