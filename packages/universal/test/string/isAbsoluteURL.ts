import { isAbsoluteURL } from "../../src";

export default () => {
  test("isAbsoluteURL('https://example.com')", () => {
    expect(isAbsoluteURL("https://example.com")).toBeTruthy();
  });
  test("isAbsoluteURL('//example.com')", () => {
    expect(isAbsoluteURL("//example.com")).toBeFalsy();
  });
  test("isAbsoluteURL('/')", () => {
    expect(isAbsoluteURL("/")).toBeFalsy();
  });
  test("isAbsoluteURL('/foo')", () => {
    expect(isAbsoluteURL("/foo")).toBeFalsy();
  });
};
