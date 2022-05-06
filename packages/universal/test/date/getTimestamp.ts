import { getTimestamp } from "../../src";

export default function () {
  it("should return a timestamp", () => {
    expect(getTimestamp()).toBeGreaterThan(0);
  });
  it("should return a timestamp for a date", () => {
    expect(getTimestamp(new Date())).toBeGreaterThan(0);
  });
}
