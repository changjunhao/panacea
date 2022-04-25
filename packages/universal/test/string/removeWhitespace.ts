import { removeWhitespace } from "../../src";

export default () => {
  it("should remove whitespace from the beginning", () => {
    expect(removeWhitespace("  foo")).toBe("foo");
  });
  it("should remove whitespace from the end", () => {
    expect(removeWhitespace("foo  ")).toBe("foo");
  });
  it("should remove whitespace", () => {
    expect(removeWhitespace("Lorem ipsum.\n Dolor sit amet.")).toBe(
      "Loremipsum.Dolorsitamet."
    );
  });
};
