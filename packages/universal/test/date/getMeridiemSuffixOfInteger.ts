import { getMeridiemSuffixOfInteger } from "../../src";

export default () => {
  it("should return '12am' for 0", () => {
    expect(getMeridiemSuffixOfInteger(0)).toBe("12am");
  });
  it("should return '12am' for 12", () => {
    expect(getMeridiemSuffixOfInteger(12)).toBe("12pm");
  });
  it("should return '12am' for 24", () => {
    expect(getMeridiemSuffixOfInteger(24)).toBe("12am");
  });
  it("should return '11am' for 11", () => {
    expect(getMeridiemSuffixOfInteger(11)).toBe("11am");
  });
  it("should return '1pm' for 13", () => {
    expect(getMeridiemSuffixOfInteger(13)).toBe("1pm");
  });
  it("should return '1pm' for 25", () => {
    expect(getMeridiemSuffixOfInteger(25)).toBe("1pm");
  });
};
