import { mask } from "../../src";

export default () => {
  test(" 1234567890 => ******7890 ", () => {
    expect(mask(1234567890)).toBe("******7890");
  });
  test(" 1234567890, 3 => *******890 ", () => {
    expect(mask(1234567890, 3)).toBe("*******890");
  });
  test(" 1234567890, -4, $ => $$$$567890 ", () => {
    expect(mask(1234567890, -4, "$")).toBe("$$$$567890");
  });
};
