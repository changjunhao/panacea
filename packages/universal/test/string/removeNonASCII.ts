import { removeNonASCII } from "../../src";

export default () => {
  test("removeNonASCII('Hello World!')", () => {
    expect(removeNonASCII("Hello World!")).toBe("Hello World!");
  });
  test("removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ')", () => {
    expect(removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ")).toBe("lorem-ipsum");
  });
  test("removeNonASCII('中国')", () => {
    expect(removeNonASCII("中国")).toBe("");
  });
};
