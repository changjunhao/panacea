import { daysFromNow } from "../../src";

export default function () {
  test("daysFromNow(1)", () => {
    expect(daysFromNow(1)).toBe(
      new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0]
    );
  });
  test("daysFromNow(-2)", () => {
    expect(daysFromNow(-2)).toBe(
      new Date(new Date().setDate(new Date().getDate() + 2))
        .toISOString()
        .split("T")[0]
    );
  });
}
