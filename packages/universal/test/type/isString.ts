import { isString } from "../../src";

export default () => {
  test(" '1' => true", () => {
    expect(isString("1")).toBe(true);
  });
  test(" 1 => false", () => {
    expect(isString(1)).toBe(false);
  });
};
