import { mapString } from "../../src";

export default () => {
  test("mapString('Hello World', (c) => c.toUpperCase())", () => {
    expect(mapString("Hello World", (c) => c.toUpperCase())).toBe(
      "HELLO WORLD"
    );
  });
};
