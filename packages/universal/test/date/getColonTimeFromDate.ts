import { getColonTimeFromDate } from "../../src";

export default function () {
  it("should return a string", () => {
    const date = new Date();
    const result = getColonTimeFromDate(date);
    expect(typeof result).toBe("string");
  });
  it("should return a string with the correct format", () => {
    const date = new Date(1651891064025);
    const result = getColonTimeFromDate(date);
    expect(result).toBe("10:37:44");
  });
}
