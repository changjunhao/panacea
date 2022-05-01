import { toRGBObject } from "../../src";

export default () => {
  test("toRGBObject('rgb(255, 255, 255)')", () => {
    expect(toRGBObject("rgb(255, 255, 255)")).toEqual({
      red: 255,
      green: 255,
      blue: 255,
    });
  });
  test("toRGBObject('#ffffff')", () => {
    expect(toRGBObject("#ffffff")).toEqual(null);
  });
};
