import { detectDeviceType } from "../../src";

export default () => {
  it("should return the device type", () => {
    expect(detectDeviceType()).toBe("Desktop");
  });
  it("should return the device type", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      get() {
        return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
      },
    });
    expect(detectDeviceType()).toBe("Mobile");
  });
};
