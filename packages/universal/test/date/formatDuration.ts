import { formatDuration } from "../../src";

export default () => {
  test("formatDuration(-2000)", () => {
    expect(formatDuration(-2000)).toBe("2 seconds");
  });
  test("formatDuration(1001)", () => {
    expect(formatDuration(1001)).toBe("1 second, 1 millisecond");
  });
  test("formatDuration(34325055574)", () => {
    expect(formatDuration(34325055574)).toBe(
      "397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds"
    );
  });
};
