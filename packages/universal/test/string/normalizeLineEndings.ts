import { normalizeLineEndings } from "../../src";

export default () => {
  test("normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n')", () => {
    expect(normalizeLineEndings("This\r\nis a\nmultiline\nstring.\r\n")).toBe(
      "This\r\nis a\r\nmultiline\r\nstring.\r\n"
    );
  });
  test("normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n', '\n')", () => {
    expect(
      normalizeLineEndings("This\r\nis a\nmultiline\nstring.\r\n", "\n")
    ).toBe("This\nis a\nmultiline\nstring.\n");
  });
};
