import { cloneRegExp } from "../../src";

export default () => {
  const regexp = /test/;
  const cloned = cloneRegExp(regexp);
  test("cloneRegExp", () => {
    expect(cloned).toStrictEqual(regexp);
  });
  test(" regexp === cloned => false", () => {
    expect(regexp === cloned).toBe(false);
  });
};
