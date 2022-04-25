import { compactWhitespace } from "../../src";

export default () => {
  test("compactWhitespace('  a  b  c  ') === 'a b c'", () => {
    expect(compactWhitespace("  a  b  c  ")).toBe(" a b c ");
  });
  test("compactWhitespace('Lorem \n Ipsum') === 'Lorem Ipsum'", () => {
    expect(compactWhitespace("Lorem \n Ipsum")).toBe("Lorem Ipsum");
  });
};
