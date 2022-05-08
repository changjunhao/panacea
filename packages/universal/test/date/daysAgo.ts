import { daysAgo } from "../../src";

export default () => {
  test("daysAgo(1)", () => {
    expect(daysAgo(1)).toBe(
      new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .split("T")[0]
    );
  });

  test("daysAgo(-2)", () => {
    expect(daysAgo(-2)).toBe(
      new Date(new Date().setDate(new Date().getDate() - 2))
        .toISOString()
        .split("T")[0]
    );
  });
};
