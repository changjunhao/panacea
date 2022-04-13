import { padNumber } from "../../src";

export default () => {
  test(" 1 => 00001 ", () => {
    expect(padNumber(1, 5)).toBe("00001");
  });
  test(" 1234567890, 3 => 1234567890 ", () => {
    expect(padNumber(1234567890, 3)).toBe("1234567890");
  });
  test(" 890, -4 => 890 ", () => {
    expect(padNumber(890, -4)).toBe("890");
  });
};
