import { getProtocol } from "../../src";

export default () => {
  it("should return the protocol", () => {
    expect(getProtocol()).toBe("http:");
  });
};
