import { RGBToHex } from "../../src";

export default function () {
  it("should return a hex string", () => {
    expect(RGBToHex(0, 0, 0)).toBe("000000");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(255, 255, 255)).toBe("ffffff");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(255, 0, 0)).toBe("ff0000");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(0, 255, 0)).toBe("00ff00");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(0, 0, 255)).toBe("0000ff");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(255, 255, 0)).toBe("ffff00");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(255, 0, 255)).toBe("ff00ff");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(0, 255, 255)).toBe("00ffff");
  });
  it("should return a hex string", () => {
    expect(RGBToHex(255, 127, 0)).toBe("ff7f00");
  });
}
