import { changeLightness } from "../../src";

export default () => {
  test("changeLightness('10, hsl(50, 10%, 10%)')", () => {
    expect(changeLightness(10, "hsl(50, 10%, 10%)")).toEqual(
      `hsl(50, 10%, 20%)`
    );
  });
  test("changeLightness(10, '#ffffff')", () => {
    expect(changeLightness(10, "#ffffff")).toEqual(null);
  });
};
