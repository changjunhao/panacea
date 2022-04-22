import { truncateString } from "../../src";

export default () => {
  test("truncateString('Hello World', 2)", () => {
    expect(truncateString("Hello World", 2)).toBe("He...");
  });
  test("truncateString('Hello World', 5)", () => {
    expect(truncateString("Hello World", 5)).toBe("He...");
  });
  test("truncateString('Hello World', 10)", () => {
    expect(truncateString("Hello World", 10)).toBe("Hello W...");
  });
  test("truncateString('Hello World', 11)", () => {
    expect(truncateString("Hello World", 11)).toBe("Hello World");
  });
  test("truncateString('Hello World', -5)", () => {
    expect(truncateString("Hello World", -5)).toBe("");
  });
};
