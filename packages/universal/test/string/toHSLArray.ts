import { toHSLArray } from "../../src";

export default () => {
  test("toHSLArray('hsl(50, 10%, 10%)')", () => {
    expect(toHSLArray("hsl(50, 10%, 10%)")).toEqual([50, 10, 10]);
  });
  test("toHSLArray('#ffffff')", () => {
    expect(toHSLArray("#ffffff")).toEqual(undefined);
  });
};
