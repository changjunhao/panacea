import { swapCase } from "../../src";

export default () => {
  it("should swap the case of a string", () => {
    expect(swapCase("Hello World")).toBe("hELLO wORLD");
    expect(swapCase("")).toBe("");
    expect(swapCase("123")).toBe("123");
    expect(swapCase("123abc")).toBe("123ABC");
    expect(swapCase("abc123")).toBe("ABC123");
  });
};
