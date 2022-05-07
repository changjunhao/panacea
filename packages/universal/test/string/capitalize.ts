import { capitalize } from "../../src";

export default () => {
  test("capitalize", () => {
    expect(capitalize("fooBar")).toBe("FooBar");
    expect(capitalize("fooBar", true)).toBe("Foobar");
  });
};
