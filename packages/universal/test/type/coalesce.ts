import { coalesce } from "../../src";

export default () => {
  test("coalesce(null, 'foo')", () => {
    const result = coalesce(null, "foo");
    expect(result).toBe("foo");
  });
};
