import { colorize } from "../../src";

export default () => {
  test("colorize:", function () {
    expect(colorize("red", "hello").red).toBe(`\x1b[31mred hello`);
  });
};
