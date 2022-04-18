import { byteSize } from "../../src";

export default () => {
  test(" 你好 => 6 ", () => {
    expect(byteSize("你好")).toBe(6);
  });
  test(" 😀 => 4 ", () => {
    expect(byteSize("😀")).toBe(4);
  });
  test(" 😀 Hi!我在！ => 17 ", () => {
    expect(byteSize("😀 Hi!我在！")).toBe(17);
  });
};
