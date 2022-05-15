import { copySign } from "../../src";

export default () => {
  it("copySign(2, 3) should return 2", () => {
    expect(copySign(2, 3)).toBe(2);
  });
  it("copySign(2, -3) should return -2", () => {
    expect(copySign(2, -3)).toBe(-2);
  });
  it("copySign(-2, 3) should return 2", () => {
    expect(copySign(-2, 3)).toBe(2);
  });
  it("copySign(-2, -3) should return -2", () => {
    expect(copySign(-2, -3)).toBe(-2);
  });
};
