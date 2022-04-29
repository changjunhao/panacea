import { toRGBArray } from "../../src";

export default () => {
  test("toRGBArray('rgb(255, 255, 255)')", () => {
    expect(toRGBArray("rgb(255, 255, 255)")).toEqual([255, 255, 255]);
  });
  test("toRGBArray('#ffffff')", () => {
    expect(toRGBArray("#ffffff")).toEqual(undefined);
  });
};
