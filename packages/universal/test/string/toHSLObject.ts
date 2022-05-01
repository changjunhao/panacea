import { toHSLObject } from "../../src";

export default () => {
  test("toHSLObject('hsl(50, 10%, 10%)')", () => {
    expect(toHSLObject("hsl(50, 10%, 10%)")).toEqual({
      hue: 50,
      saturation: 10,
      lightness: 10,
    });
  });
  test("toHSLObject('#ffffff')", () => {
    expect(toHSLObject("#ffffff")).toEqual(null);
  });
};
