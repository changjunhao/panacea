import { formatSeconds } from "../../src";

export default () => {
  test("formatSeconds(200)", () => {
    expect(formatSeconds(200)).toBe("00:03:20");
  });
  test("formatSeconds(-200)", () => {
    expect(formatSeconds(-200)).toBe("-00:03:20");
  });
  test("formatSeconds(99999)", () => {
    expect(formatSeconds(99999)).toBe("27:46:39");
  });
};
